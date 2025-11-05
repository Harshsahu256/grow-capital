// import React, { useState } from "react";
// import { Container, Card, Nav, Image } from "react-bootstrap";
// import LiveTicker from "../LiveTicker";
// import BottomNavbar from "./BottomNavbar";

// const Portfolio = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [activeTab, setActiveTab] = useState("pending");

//   return (
//      <>
//     <Container className="py-4">
//       {/* 👋 User Greeting */}
//       <div className="d-flex align-items-center mb-3">
//         <Image
//           src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
//           roundedCircle
//           width="45"
//           height="45"
//           className="me-2"
//         />
//         <h5 className="mb-0">Hi {user?.name || "Trader"} 👋</h5>
//       </div>

//       {/* 📊 Market Today */}
//       <Card className="shadow-sm mb-4 border-0">
//         <Card.Body>
//           <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
//           <LiveTicker />
//         </Card.Body>
//       </Card>

//       {/* 📁 Portfolio Section */}
//       <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>

//       {/* Tabs */}
//       <Nav
//         variant="tabs"
//         activeKey={activeTab}
//         onSelect={(key) => setActiveTab(key)}
//         className="mb-3 justify-content-center"
//       >
        
//         <Nav.Item>
//           <Nav.Link eventKey="positions" className="fw-semibold text-dark">
//             Positions
//           </Nav.Link>
//         </Nav.Item>
       
//       </Nav>

//       {/* 📉 Tab Content */}
//       <Card className="shadow-sm border-0 p-4 text-center">
//         {activeTab === "pending" && (
//           <>
//             <img
//               src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//               alt="No Data"
//               className="img-fluid"
//               style={{ maxWidth: "250px" }}
//             />
//             <p className="mt-3 text-muted">No Pending Orders Found</p>
//           </>
//         )}

//         {activeTab === "positions" && (
//           <>
//             <img
//               src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//               alt="No Data"
//               className="img-fluid"
//               style={{ maxWidth: "250px" }}
//             />
//             <p className="mt-3 text-muted">No Active Positions</p>
//           </>
//         )}

//         {activeTab === "fno" && (
//           <>
//             <img
//               src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//               alt="No Data"
//               className="img-fluid"
//               style={{ maxWidth: "250px" }}
//             />
//             <p className="mt-3 text-muted">No F&O Trades Found</p>
//           </>
//         )}
//       </Card>

//       {/* Footer Summary */}
//       <div className="text-center mt-4 py-2 bg-light rounded border fw-semibold">
//         Total Gain/Loss: ₹0.00
//       </div>
//     </Container>
//     <BottomNavbar/>
   
//     ]</>
//   );
// };

// export default Portfolio;

import React, { useState, useEffect } from "react";
import { Container, Card, Nav, Image, Table, Spinner } from "react-bootstrap";
import { getUserPositions } from "../../services/apiService";
import LiveTicker from "../LiveTicker";
import BottomNavbar from "./BottomNavbar";

const Portfolio = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [activeTab, setActiveTab] = useState("positions");
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    const fetchPositions = async () => {
      setLoading(true);
      const data = await getUserPositions();
      if (data && Array.isArray(data)) {
        setPositions(data);
        // ✅ Calculate total profit/loss
        const total = data.reduce((sum, item) => sum + (item.totalProfit || 0), 0);
        setTotalProfit(total);
      }
      setLoading(false);
    };
    fetchPositions();
  }, []);

  return (
    <>
      <Container className="py-4">
        {/* 👋 Greeting */}
        <div className="d-flex align-items-center mb-3">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
            roundedCircle
            width="45"
            height="45"
            className="me-2"
          />
          <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
        </div>

        {/* 📊 Market Today */}
        <Card className="shadow-sm mb-4 border-0">
          <Card.Body>
            <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
            <LiveTicker />
          </Card.Body>
        </Card>

        {/* 📁 Portfolio Section */}
        <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={(key) => setActiveTab(key)}
          className="mb-3 justify-content-center"
        >
          <Nav.Item>
            <Nav.Link eventKey="positions" className="fw-semibold text-dark">
              Positions
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* 📈 Tab Content */}
        <Card className="shadow-sm border-0 p-4 text-center">
          {loading ? (
            <Spinner animation="border" />
          ) : positions.length === 0 ? (
            <>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
                alt="No Data"
                className="img-fluid"
                style={{ maxWidth: "250px" }}
              />
              <p className="mt-3 text-muted">No Active Positions Found</p>
            </>
          ) : (
            <Table striped bordered hover responsive className="align-middle">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Buy</th>
                  <th>Sell</th>
                  <th>Qty</th>
                  <th>Total Price</th>
                  <th>Profit</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((pos) => (
                  <tr key={pos._id}>
                    <td>{pos.companyName}</td>
                    <td>₹{pos.buy}</td>
                    <td>₹{pos.sell}</td>
                    <td>{pos.quantity?.toFixed(2)}</td>
                    <td>₹{pos.totalPrice?.toLocaleString()}</td>
                    <td
                      style={{
                        color: pos.totalProfit >= 0 ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      ₹{pos.totalProfit?.toLocaleString()}
                    </td>
                    <td>{new Date(pos.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card>

        {/* 💰 Footer Summary */}
        <div className="text-center mt-4 py-2 bg-light rounded border fw-semibold">
          Total Gain/Loss:{" "}
          <span style={{ color: totalProfit >= 0 ? "green" : "red" }}>
            ₹{totalProfit.toLocaleString()}
          </span>
        </div>
      </Container>

      <BottomNavbar />
    </>
  );
};

export default Portfolio;
