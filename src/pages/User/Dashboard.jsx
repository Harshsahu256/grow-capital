

// Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Card, Button, Accordion, Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LiveTicker from "../LiveTicker";
import BottomNavbar from "./BottomNavbar";
import { getMyTotalAmount, getUserPositions } from "../../services/apiService"; // Added getUserPositions

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Hiphjoon" };
  const [totalAmount, setTotalAmount] = useState(0);
  const [isAssetClassHovered, setIsAssetClassHovered] = useState(false);

  // New states for positions data and totals
  const [positionsData, setPositionsData] = useState([]);
  const [loadingPositions, setLoadingPositions] = useState(true);
  const [totals, setTotals] = useState({
    profit: 0,
    loss: 0,
    net: 0,
    totalPrice: 0, // This will represent the total invested amount
  });

  // Helper to calculate totals from positions
  const calculateTotals = (data) => {
    let profit = 0;
    let loss = 0;
    let totalPriceSum = 0;

    data.forEach((item) => {
      // Assuming totalProfit is already calculated and present in item
      if (item.totalProfit >= 0) profit += item.totalProfit;
      else loss += item.totalProfit;

      totalPriceSum += item.totalPrice || 0; // totalPrice is the investment for that position
    });

    setTotals({
      profit,
      loss,
      net: profit + loss,
      totalPrice: totalPriceSum,
    });
  };

  // Helper to format currency amounts
  const formatAmount = (num) =>
    num?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  useEffect(() => {
    const fetchData = async () => {
      // Fetch total amount
      try {
        const amountData = await getMyTotalAmount();
        setTotalAmount(amountData.totalAmount || 0);
      } catch (error) {
        console.error("Failed to fetch total amount:", error);
        setTotalAmount(0);
      }

      // Fetch user positions and calculate totals
      try {
        setLoadingPositions(true);
        const positionsResult = await getUserPositions();
        if (positionsResult && Array.isArray(positionsResult)) {
          setPositionsData(positionsResult);
          calculateTotals(positionsResult);
        }
      } catch (error) {
        console.error("Failed to fetch user positions:", error);
        setPositionsData([]);
        calculateTotals([]); // Recalculate with empty array on error
      } finally {
        setLoadingPositions(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container
        fluid
        className="py-3"
        style={{
          backgroundColor: "#f7f8fc",
          minHeight: "100vh",
          paddingBottom: "90px", // Keep this value or adjust it based on BottomNavbar's actual height
        }}
      >
        <h4 className="fw-bold mb-4" style={{ textAlign: 'start' }}>
          Hi {user.name} 👋
        </h4>

        {/* Market Today */}
        <Card className="shadow-sm mb-4 border-0">
          <Card.Body>
            <h6 className="fw-bold mb-2 text-start">Market Today</h6>
            <LiveTicker />
          </Card.Body>
        </Card>

        {/* Asset Class Section */}
        <Card className="shadow-sm mb-4 border-0 p-3" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <div className="d-flex align-items-center mb-3">
            <Button
              variant={isAssetClassHovered ? "primary" : "outline-primary"}
              className="fw-bold px-3 py-1"
              style={{
                borderRadius: '8px',
                borderWidth: '2px',
                fontSize: '0.85rem',
                color: isAssetClassHovered ? 'white' : '#0d6efd',
                backgroundColor: isAssetClassHovered ? '#0d6efd' : 'transparent',
              }}
              onMouseEnter={() => setIsAssetClassHovered(true)}
              onMouseLeave={() => setIsAssetClassHovered(false)}
            >
              ASSET CLASS
            </Button>
          </div>

          <Row className="align-items-center">
            <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
              <div
                className="d-inline-flex flex-column justify-content-center align-items-center"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "conic-gradient(#1a2b4b 0% 50%, #8b9cb9 50% 100%)",
                  color: 'white',
                  position: 'relative',
                  fontSize: '1rem',
                }}
              >
                <strong style={{ fontSize: '1rem', color: '#f8f9fa' }}>Equity: 0%</strong>
                <small style={{ color: '#ced4da', marginTop: '5px' }}>MF: 0%</small>
              </div>
            </Col>

            <Col xs={12} md={7} className="text-start">
              {loadingPositions ? (
                <Spinner animation="border" size="sm" />
              ) : (
                <>
                  <p className="mb-1 fw-semibold text-secondary" style={{ fontSize: '0.85rem' }}>Total Investment</p>
                  <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹{formatAmount(totals.totalPrice)}</h5>

                  <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>Net Portfolio P&L</p>
                  <h5
                    className="fw-bold"
                    style={{
                      fontSize: '1.25rem',
                      color: totals.net >= 0 ? 'green' : 'red'
                    }}
                  >
                    ₹{formatAmount(totals.net)}
                  </h5>

                  <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>Funds Available</p>
                  <h5 className="fw-bold" style={{ fontSize: '1.25rem', color: '#0d6efd' }}>₹{formatAmount(totalAmount)}</h5>
                </>
              )}
            </Col>
          </Row>
        </Card>

        {/* Add / Withdraw Funds button */}
        <div className="text-center mb-4">
          <Button
            variant="primary"
            size="lg"
            className="rounded px-4 py-2 fw-semibold shadow-sm w-100"
            onClick={() => navigate("/userAccount")}
          >
            ADD / WITHDRAW FUNDS
          </Button>
        </div>

        {/* Equity/MF/Positions Accordion */}
        <Accordion defaultActiveKey="2" className="p-3 mb-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <span className="d-flex align-items-center gap-2">
                <div style={verticalBarStyle}></div>
                Equity
              </span>
            </Accordion.Header>
            <Accordion.Body className="py-2 text-start">
              {loadingPositions ? <Spinner animation="border" size="sm" /> : <span>{/* You can display equity-specific data here from positionsData */}00</span>}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <span className="d-flex align-items-center gap-2">
                <div style={verticalBarStyle}></div>
                Mutual Funds
              </span>
            </Accordion.Header>
            <Accordion.Body className="py-2 text-start">
              {loadingPositions ? <Spinner animation="border" size="sm" /> : <span>{/* You can display mutual fund-specific data here from positionsData */}00</span>}
            </Accordion.Body>
          </Accordion.Item>

        <Accordion.Item eventKey="2">
  <Accordion.Header>
    <span className="d-flex align-items-center gap-2">
      <div style={verticalBarStyle}></div>
      Positions
    </span>
  </Accordion.Header>
  <Accordion.Body className="p-3">
    <Card className="border-0">
      <Card.Body className="p-0">
        {/* New Heading */}
        <h6 className="fw-bold mb-3 text-start">Total P&L (Unrealized)</h6>

        {loadingPositions ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted small">Funds Available</span>
              <span className="fw-bold">₹{formatAmount(totalAmount)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted small">Net Profit</span>
              <span className="fw-bold text-success">00</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-muted small">Net Loss</span>
              <span className="fw-bold text-danger">00</span>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  </Accordion.Body>
</Accordion.Item>

        </Accordion>
      </Container>

      <BottomNavbar />
    </>
  );
};

const verticalBarStyle = {
  width: "4px",
  height: "20px",
  backgroundColor: "#0d6efd",
  borderRadius: "2px",
};

export default Dashboard;