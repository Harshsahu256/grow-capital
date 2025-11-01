import React from "react";
import { Card, Button, Accordion, Container, Row, Col } from "react-bootstrap";
import LiveTicker from "../LiveTicker";
import BottomNavbar from "./BottomNavbar";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Investor" };

  return (
    <>
    <Container fluid className="py-4" style={{ backgroundColor: "#f9f9fb", minHeight: "100vh" }}>
      <h4 className="text-center mb-4">Hi {user.name} 👋</h4>

      {/* 🔥 Market Today Section */}
      <Card className="shadow-sm mb-4 border-0">
        <Card.Body>
          <h6 className="fw-bold mb-2">Market Today</h6>
          <LiveTicker />
        </Card.Body>
      </Card>

      {/* 📊 Asset Class Section */}
      <Card className="shadow-sm mb-4 border-0 p-3">
        <h6 className="fw-bold mb-3 text-primary">ASSET CLASS</h6>
        <Row className="align-items-center">
          <Col md={5} className="text-center">
            {/* Circular Chart */}
            <div
              className="d-inline-flex flex-column justify-content-center align-items-center"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "conic-gradient(#0d6efd 0% 0%, #6c757d 0% 100%)",
              }}
            >
              <strong>Equity: 0%</strong>
              <small>MF: 0%</small>
            </div>
          </Col>
          <Col md={7} className="text-start">
            <p className="mb-1 fw-semibold">Current Value</p>
            <h5 className="fw-bold">₹0.00</h5>
            <p className="mb-1 fw-semibold mt-3">Invested Value</p>
            <h5 className="fw-bold">₹0.00</h5>
            <p className="mb-1 fw-semibold mt-3">Profit / Loss</p>
            <h5 className="fw-bold text-danger">₹0.00</h5>
          </Col>
        </Row>
      </Card>

      {/* 💰 Add/Withdraw Funds */}
      <div className="text-center mb-4">
        <Button
          variant="primary"
          size="lg"
          className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
        >
          ADD / WITHDRAW FUNDS
        </Button>
      </div>

      {/* 📁 Equity / MF / Positions */}
      <Accordion defaultActiveKey="1" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Equity</Accordion.Header>
          <Accordion.Body>No active equity holdings</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Mutual Funds</Accordion.Header>
          <Accordion.Body>No Mutual Fund data available</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Positions</Accordion.Header>
          <Accordion.Body>No positions today</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>

<BottomNavbar/>
</>
  );
};

export default Dashboard;
