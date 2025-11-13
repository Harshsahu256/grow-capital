
// // // // import React from "react";
// // // // import { Card, Button, Accordion, Container, Row, Col } from "react-bootstrap";
// // // // import { useNavigate } from "react-router-dom";     // ✅ Add this
// // // // import LiveTicker from "../LiveTicker";
// // // // import BottomNavbar from "./BottomNavbar";
// // // // import UploadFile from "./UploadFile";
// // // // import UserAccount from "./UserAccount";

// // // // const Dashboard = () => {
// // // //   const navigate = useNavigate();        // ✅ Initialize navigation
// // // //   const user = JSON.parse(localStorage.getItem("user")) || { name: "Investor" };

// // // //   return (
// // // //     <>
// // // //       <Container
// // // //         fluid
// // // //         className="py-4"
// // // //         style={{ backgroundColor: "#f9f9fb", minHeight: "100vh" }}
// // // //       >
// // // //         <h4 className=" mb-4">
// // // //           Hi {user.name} 👋
// // // //         </h4>

// // // //         {/* Market Today */}
// // // //         <Card className="shadow-sm mb-4 border-0">
// // // //           <Card.Body>
// // // //             <h6 className="fw-bold mb-2">Market Today</h6>
// // // //             <LiveTicker />
// // // //           </Card.Body>
// // // //         </Card>

// // // //         {/* Asset Class Section */}
// // // //         <Card className="shadow-sm mb-4 border-0 p-3">
// // // //           <h6 className="fw-bold mb-3 text-primary">ASSET CLASS</h6>
// // // //           <Row className="align-items-center">
// // // //             <Col md={5} className="text-center">
// // // //               <div
// // // //                 className="d-inline-flex flex-column justify-content-center align-items-center"
// // // //                 style={{
// // // //                   width: "180px",
// // // //                   height: "180px",
// // // //                   borderRadius: "50%",
// // // //                   background: "conic-gradient(#0d6efd 0% 0%, #6c757d 0% 100%)",
// // // //                 }}
// // // //               >
// // // //                 <strong>Equity: 0%</strong>
// // // //                 <small>MF: 0%</small>
// // // //               </div>
// // // //             </Col>

// // // //             <Col md={7} className="text-start">
// // // //               <p className="mb-1 fw-semibold">Current Value</p>
// // // //               <h5 className="fw-bold">₹0.00</h5>

// // // //               <p className="mb-1 fw-semibold mt-3">Invested Value</p>
// // // //               <h5 className="fw-bold">₹0.00</h5>

// // // //               <p className="mb-1 fw-semibold mt-3">Profit / Loss</p>
// // // //               <h5 className="fw-bold text-danger">₹0.00</h5>
// // // //             </Col>
// // // //           </Row>
// // // //         </Card>

// // // //         {/* ✅ Add / Withdraw Funds (Navigate to UploadFile) */}
// // // //         <div className="text-center mb-4">
// // // //           <Button
// // // //             variant="primary"
// // // //             size="lg"
// // // //             className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
// // // //             onClick={() => navigate("/userAccount")}    // ✅ Navigate on click
// // // //           >
// // // //             ADD / WITHDRAW FUNDS
// // // //           </Button>
// // // //         </div>

// // // //         {/* Equity/MF/Positions */}
// // // //         <Accordion defaultActiveKey="1" alwaysOpen>
// // // //           <Accordion.Item eventKey="0">
// // // //             <Accordion.Header>Equity</Accordion.Header>
// // // //             <Accordion.Body>No active equity holdings</Accordion.Body>
// // // //           </Accordion.Item>

// // // //           <Accordion.Item eventKey="1">
// // // //             <Accordion.Header>Mutual Funds</Accordion.Header>
// // // //             <Accordion.Body>No Mutual Fund data available</Accordion.Body>
// // // //           </Accordion.Item>

// // // //           <Accordion.Item eventKey="2">
// // // //             <Accordion.Header>Positions</Accordion.Header>
// // // //             <Accordion.Body>No positions today</Accordion.Body>
// // // //           </Accordion.Item>
// // // //         </Accordion>
// // // //       </Container>

// // // //       <BottomNavbar />
// // // //     </>
// // // //   );
// // // // };

// // // // export default Dashboard;



// // // // import React from "react";
// // // // import { Card, Button, Accordion, Container, Row, Col } from "react-bootstrap"; // ✅ Accordion re-imported
// // // // import { useNavigate } from "react-router-dom";
// // // // import LiveTicker from "../LiveTicker";
// // // // import BottomNavbar from "./BottomNavbar";

// // // // const Dashboard = () => {
// // // //   const navigate = useNavigate();
// // // //   const user = JSON.parse(localStorage.getItem("user")) || { name: "Hiphjoon" };

// // // //   return (
// // // //     <>
// // // //       <Container
// // // //         fluid
// // // //         className="py-3"
// // // //         style={{ backgroundColor: "#f7f8fc", minHeight: "100vh" }}
// // // //       >
// // // //         {/* ✅ Hi Md Hiphjoon greeting */}
// // // //         <h4 className="fw-bold mb-4" style={{ textAlign: 'start' }}>
// // // //           Hi {user.name} 👋
// // // //         </h4>

// // // //         {/* Market Today */}
// // // //         <Card className="shadow-sm mb-4 border-0">
// // // //           <Card.Body>
// // // //             <h6 className="fw-bold mb-2 text-start">Market Today</h6>
// // // //             <LiveTicker />
// // // //           </Card.Body>
// // // //         </Card>

// // // //         {/* Asset Class Section */}
// // // //         {/* Card ke border aur background ko image se match karne ke liye style adjust kiya */}
// // // //         <Card className="shadow-sm mb-4 border-0 p-3" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
// // // //           {/* ✅ ASSET CLASS button jaisa dikhne ke liye */}
// // // //           <div className="d-flex align-items-center mb-3">
// // // //             <Button
// // // //               variant="outline-primary"
// // // //               className="fw-bold px-3 py-1"
// // // //               style={{
// // // //                 borderRadius: '8px', // Rounded corners
// // // //                 borderWidth: '2px', // Thicker border
// // // //                 fontSize: '0.85rem', // Smaller font size
// // // //                 borderColor: '#0d6efd', // Primary color border
// // // //                 color: '#0d6efd', // Primary color text
// // // //                 backgroundColor: 'transparent', // Transparent background
// // // //               }}
// // // //             >
// // // //               ASSET CLASS
// // // //             </Button>
// // // //           </div>

// // // //           <Row className="align-items-center">
// // // //             <Col xs={12} md={5} className="text-center mb-3 mb-md-0"> {/* Mobile responsive adjustments */}
// // // //               {/* ✅ Donut chart with Equity and MF percentages */}
// // // //               <div
// // // //                 className="d-inline-flex flex-column justify-content-center align-items-center"
// // // //                 style={{
// // // //                   width: "160px", // Size adjusted slightly
// // // //                   height: "160px", // Size adjusted slightly
// // // //                   borderRadius: "50%",
// // // //                   // Conic gradient for 0% Equity, 0% MF. Colors from image.
// // // //                   background: "conic-gradient(#343a40 0% 50%, #6c757d 50% 100%)", 
// // // //                   color: 'white', // Text color for the percentages
// // // //                 }}
// // // //               >
// // // //                 <strong style={{ fontSize: '1rem', color: '#f8f9fa' }}>Equity: 0%</strong> {/* ✅ Text color adjusted */}
// // // //                 <small style={{ color: '#ced4da' }}>MF: 0%</small> {/* ✅ Text color adjusted */}
// // // //               </div>
// // // //             </Col>

// // // //             <Col xs={12} md={7} className="text-start">
// // // //               {/* ✅ CURRENT VALUE */}
// // // //               <p className="mb-1 fw-semibold text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// // // //               {/* ✅ CURRENT VALUE (Invested) */}
// // // //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// // // //               {/* ✅ CURRENT VALUE (Profit/Loss) */}
// // // //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem', color: '#0d6efd' }}>₹0.00</h5> {/* ✅ Text color changed to primary for consistency with image */}
// // // //             </Col>
// // // //           </Row>
// // // //         </Card>

// // // //         {/* ✅ Add / Withdraw Funds button */}
// // // //         <div className="text-center mb-4">
// // // //           <Button
// // // //             variant="primary"
// // // //             size="lg"
// // // //             className="rounded px-4 py-2 fw-semibold shadow-sm w-100" // ✅ Rounded corners hatakar square kiya, w-100 kiya
// // // //             onClick={() => navigate("/userAccount")}
// // // //           >
// // // //             ADD / WITHDRAW FUNDS
// // // //           </Button>
// // // //         </div>

// // // //         {/* ✅ Equity/MF/Positions Accordion (Image ke anusaar restore kiya) */}
// // // //         <Accordion defaultActiveKey="2" alwaysOpen> {/* ✅ defaultActiveKey="2" to open Positions by default */}
// // // //           <Accordion.Item eventKey="0">
// // // //             <Accordion.Header>Equity</Accordion.Header>
// // // //             <Accordion.Body>
// // // //               <p className="text-muted small">No active equity holdings</p> {/* ✅ Text made smaller and muted */}
// // // //             </Accordion.Body>
// // // //           </Accordion.Item>

// // // //           <Accordion.Item eventKey="1">
// // // //             <Accordion.Header>Mutual Funds</Accordion.Header>
// // // //             <Accordion.Body>
// // // //               <p className="text-muted small">No Mutual Fund data available</p> {/* ✅ Text made smaller and muted */}
// // // //             </Accordion.Body>
// // // //           </Accordion.Item>

// // // //           <Accordion.Item eventKey="2">
// // // //             <Accordion.Header>Positions</Accordion.Header>
// // // //             <Accordion.Body className="p-0"> {/* ✅ Body padding removed for custom inner content padding */}
// // // //               <Card className="border-0"> {/* ✅ Card without border */}
// // // //                 <Card.Body className="p-3"> {/* ✅ Custom padding for Card Body */}
// // // //                   <h6 className="fw-bold mb-3 text-start">Today Position</h6> {/* ✅ Matches image heading */}
// // // //                   <div className="d-flex justify-content-between mb-2">
// // // //                     <span className="text-muted small">Total P&L (Unrealized)</span>
// // // //                     <span className="fw-bold">0.00</span> {/* ✅ Changed to 0.00 as in image */}
// // // //                   </div>
// // // //                   <div className="d-flex justify-content-between mb-2">
// // // //                     <span className="text-muted small">Funds</span>
// // // //                     <span className="fw-bold">258</span> {/* ✅ Matches image value */}
// // // //                   </div>
// // // //                   <div className="d-flex justify-content-between mb-2">
// // // //                     <span className="text-muted small">Net profit</span>
// // // //                     <span className="fw-bold text-success">00</span> {/* ✅ Matches image value and color */}
// // // //                   </div>
// // // //                   <div className="d-flex justify-content-between">
// // // //                     <span className="text-muted small">Net Loss</span>
// // // //                     <span className="fw-bold text-danger">00</span> {/* ✅ Matches image value and color */}
// // // //                   </div>
// // // //                 </Card.Body>
// // // //               </Card>
// // // //             </Accordion.Body>
// // // //           </Accordion.Item>
// // // //         </Accordion>
// // // //       </Container>

// // // //       <BottomNavbar />
// // // //     </>
// // // //   );
// // // // };

// // // // export default Dashboard;

// // // // import React, { useEffect, useState } from "react"; // ✅ useState aur useEffect import kiye
// // // // import { Card, Button, Accordion, Container, Row, Col } from "react-bootstrap";
// // // // import { useNavigate } from "react-router-dom";
// // // // import LiveTicker from "../LiveTicker";
// // // // import BottomNavbar from "./BottomNavbar";
// // // // import { getMyTotalAmount } from "../../services/apiService"; // ✅ getMyTotalAmount import kiya

// // // // const Dashboard = () => {
// // // //   const navigate = useNavigate();
// // // //   const user = JSON.parse(localStorage.getItem("user")) || { name: "Hiphjoon" };
// // // //   const [totalAmount, setTotalAmount] = useState(0); // ✅ totalAmount state banaya

// // // //   useEffect(() => {
// // // //     const fetchTotalAmount = async () => {
// // // //       try {
// // // //         const data = await getMyTotalAmount();
// // // //         setTotalAmount(data.totalAmount || 0);
// // // //       } catch (error) {
// // // //         console.error("Failed to fetch total amount:", error);
// // // //         setTotalAmount(0); // Error hone par default 0 set karein
// // // //       }
// // // //     };
// // // //     fetchTotalAmount();
// // // //   }, []); // ✅ Component mount hone par amount fetch karein

// // // //   return (
// // // //     <>
// // // //       <Container
// // // //         fluid
// // // //         className="py-3"
// // // //         style={{ backgroundColor: "#f7f8fc", minHeight: "100vh" }}
// // // //       >
// // // //         <h4 className="fw-bold mb-4" style={{ textAlign: 'start' }}>
// // // //           Hi {user.name} 👋
// // // //         </h4>

// // // //         {/* Market Today */}
// // // //         <Card className="shadow-sm mb-4 border-0">
// // // //           <Card.Body>
// // // //             <h6 className="fw-bold mb-2 text-start">Market Today</h6>
// // // //             <LiveTicker />
// // // //           </Card.Body>
// // // //         </Card>

// // // //         {/* Asset Class Section */}
// // // //         <Card className="shadow-sm mb-4 border-0 p-3" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
// // // //           <div className="d-flex align-items-center mb-3">
// // // //             <Button
// // // //               variant="outline-primary"
// // // //               className="fw-bold px-3 py-1"
// // // //               style={{
// // // //                 borderRadius: '8px',
// // // //                 borderWidth: '2px',
// // // //                 fontSize: '0.85rem',
// // // //                 borderColor: '#0d6efd',
// // // //                 color: '#0d6efd',
// // // //                 backgroundColor: 'transparent',
// // // //               }}
// // // //             >
// // // //               ASSET CLASS
// // // //             </Button>
// // // //           </div>

// // // //           <Row className="align-items-center">
// // // //             <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
// // // //               {/* ✅ Donut chart with updated colors and styling for better attractiveness */}
// // // //               <div
// // // //                 className="d-inline-flex flex-column justify-content-center align-items-center"
// // // //                 style={{
// // // //                   width: "160px",
// // // //                   height: "160px",
// // // //                   borderRadius: "50%",
// // // //                   // Image ke anusaar darker blue for Equity, lighter grey for MF
// // // //                   background: "conic-gradient(#1a2b4b 0% 50%, #8b9cb9 50% 100%)",
// // // //                   color: 'white',
// // // //                   position: 'relative', // For absolute positioning of text if needed
// // // //                   fontSize: '1rem', // Adjust font size for overall look
// // // //                 }}
// // // //               >
// // // //                  <strong style={{ fontSize: '1rem', color: '#f8f9fa' }}>Equity: 0%</strong>
// // // //                  <small style={{ color: '#ced4da', marginTop: '5px' }}>MF: 0%</small>
// // // //               </div>
// // // //             </Col>

// // // //             <Col xs={12} md={7} className="text-start">
// // // //               <p className="mb-1 fw-semibold text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// // // //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// // // //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem', color: '#0d6efd' }}>₹0.00</h5>
// // // //             </Col>
// // // //           </Row>
// // // //         </Card>

// // // //         {/* Add / Withdraw Funds button */}
// // // //         <div className="text-center mb-4">
// // // //           <Button
// // // //             variant="primary"
// // // //             size="lg"
// // // //             className="rounded px-4 py-2 fw-semibold shadow-sm w-100"
// // // //             onClick={() => navigate("/userAccount")}
// // // //           >
// // // //             ADD / WITHDRAW FUNDS
// // // //           </Button>
// // // //         </div>

// // // //         {/* Equity/MF/Positions Accordion */}
// // // //         <Accordion defaultActiveKey="2" alwaysOpen>
// // // //           <Accordion.Item eventKey="0">
// // // //             <Accordion.Header>
// // // //               <span className="d-flex align-items-center">
// // // //                 <div style={verticalBarStyle}></div> {/* Vertical bar */}
// // // //                 Equity
// // // //               </span>
// // // //             </Accordion.Header>
// // // //             <Accordion.Body className="py-2"> {/* Padding adjust kiya */}
// // // //               <p className="text-muted small mb-0 ms-3">00</p> {/* ✅ "00" dikhaya */}
// // // //             </Accordion.Body>
// // // //           </Accordion.Item>

// // // //           <Accordion.Item eventKey="1">
// // // //             <Accordion.Header>
// // // //               <span className="d-flex align-items-center">
// // // //                 <div style={verticalBarStyle}></div> {/* Vertical bar */}
// // // //                 Mutual Funds
// // // //               </span>
// // // //             </Accordion.Header>
// // // //             <Accordion.Body className="py-2"> {/* Padding adjust kiya */}
// // // //               <p className="text-muted small mb-0 ms-3">00</p> {/* ✅ "00" dikhaya */}
// // // //             </Accordion.Body>
// // // //           </Accordion.Item>

// // // //           <Accordion.Item eventKey="2">
// // // //             <Accordion.Header>
// // // //               <span className="d-flex align-items-center">
// // // //                 <div style={verticalBarStyle}></div> {/* Vertical bar */}
// // // //                 Positions
// // // //               </span>
// // // //             </Accordion.Header>
// // // //             <Accordion.Body className="p-0">
// // // //               <Card className="border-0">
// // // //                 <Card.Body className="p-3">
// // // //                   <h6 className="fw-bold mb-3 text-start">Today Position</h6>
// // // //                   <div className="d-flex justify-content-between mb-2">
// // // //                     <span className="text-muted small">Total P&L (Unrealized)</span>
// // // //                     <span className="fw-bold">0.00</span>
// // // //                   </div>
// // // //                   <div className="d-flex justify-content-between mb-2">
// // // //                     <span className="text-muted small">Funds</span>
// // // //                     <span className="fw-bold">{totalAmount}</span> {/* ✅ current totalAmount show kiya */}
// // // //                   </div>
// // // //                   <div className="d-flex justify-content-between mb-2">
// // // //                     <span className="text-muted small">Net profit</span>
// // // //                     <span className="fw-bold text-success">00</span>
// // // //                   </div>
// // // //                   <div className="d-flex justify-content-between">
// // // //                     <span className="text-muted small">Net Loss</span>
// // // //                     <span className="fw-bold text-danger">00</span>
// // // //                   </div>
// // // //                 </Card.Body>
// // // //               </Card>
// // // //             </Accordion.Body>
// // // //           </Accordion.Item>
// // // //         </Accordion>
// // // //       </Container>

// // // //       <BottomNavbar />
// // // //     </>
// // // //   );
// // // // };

// // // // // ✅ Vertical bar style define kiya
// // // // const verticalBarStyle = {
// // // //   width: '4px',
// // // //   height: '20px', // Height adjust kiya for better look
// // // //   backgroundColor: '#0d6efd', // Primary color
// // // //   marginRight: '10px',
// // // //   borderRadius: '2px', // Slight rounding
// // // // };

// // // // export default Dashboard;


// // // import React, { useEffect, useState } from "react";
// // // import { Card, Button, Accordion, Container, Row, Col } from "react-bootstrap";
// // // import { useNavigate } from "react-router-dom";
// // // import LiveTicker from "../LiveTicker";
// // // import BottomNavbar from "./BottomNavbar";
// // // import { getMyTotalAmount } from "../../services/apiService";

// // // const Dashboard = () => {
// // //   const navigate = useNavigate();
// // //   const user = JSON.parse(localStorage.getItem("user")) || { name: "Hiphjoon" };
// // //   const [totalAmount, setTotalAmount] = useState(0);
// // //   const [isAssetClassHovered, setIsAssetClassHovered] = useState(false); // ✅ New state for hover effect

// // //   useEffect(() => {
// // //     const fetchTotalAmount = async () => {
// // //       try {
// // //         const data = await getMyTotalAmount();
// // //         setTotalAmount(data.totalAmount || 0);
// // //       } catch (error) {
// // //         console.error("Failed to fetch total amount:", error);
// // //         setTotalAmount(0);
// // //       }
// // //     };
// // //     fetchTotalAmount();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <Container
// // //   fluid
// // //   className="py-3"
// // //   style={{
// // //     backgroundColor: "#f7f8fc",
// // //     minHeight: "100vh",
// // //     paddingBottom: "100px"  // ✅ Page ke niche proper space
// // //   }}
// // // >

// // //         <h4 className="fw-bold mb-4" style={{ textAlign: 'start' }}>
// // //           Hi {user.name} 👋
// // //         </h4>

// // //         {/* Market Today */}
// // //         <Card className="shadow-sm mb-4 border-0">
// // //           <Card.Body>
// // //             <h6 className="fw-bold mb-2 text-start">Market Today</h6>
// // //             <LiveTicker />
// // //           </Card.Body>
// // //         </Card>

// // //         {/* Asset Class Section */}
// // //         <Card className="shadow-sm mb-4 border-0 p-3" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
// // //           <div className="d-flex align-items-center mb-3">
// // //             <Button
// // //               variant={isAssetClassHovered ? "primary" : "outline-primary"} // ✅ Change variant on hover
// // //               className="fw-bold px-3 py-1"
// // //               style={{
// // //                 borderRadius: '8px',
// // //                 borderWidth: '2px',
// // //                 fontSize: '0.85rem',
// // //                 // Conditional styling based on hover state
// // //                 borderColor: isAssetClassHovered ? '#0d6efd' : '#0d6efd', // Border remains primary blue
// // //                 color: isAssetClassHovered ? 'white' : '#0d6efd', // Text becomes white on hover
// // //                 backgroundColor: isAssetClassHovered ? '#0d6efd' : 'transparent', // Background becomes blue on hover
// // //               }}
// // //               onMouseEnter={() => setIsAssetClassHovered(true)} // ✅ Set hover state to true
// // //               onMouseLeave={() => setIsAssetClassHovered(false)} // ✅ Set hover state to false
// // //             >
// // //               ASSET CLASS
// // //             </Button>
// // //           </div>

// // //           <Row className="align-items-center">
// // //             <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
// // //               <div
// // //                 className="d-inline-flex flex-column justify-content-center align-items-center"
// // //                 style={{
// // //                   width: "160px",
// // //                   height: "160px",
// // //                   borderRadius: "50%",
// // //                   background: "conic-gradient(#1a2b4b 0% 50%, #8b9cb9 50% 100%)",
// // //                   color: 'white',
// // //                   position: 'relative',
// // //                   fontSize: '1rem',
// // //                 }}
// // //               >
// // //                  <strong style={{ fontSize: '1rem', color: '#f8f9fa' }}>Equity: 0%</strong>
// // //                  <small style={{ color: '#ced4da', marginTop: '5px' }}>MF: 0%</small>
// // //               </div>
// // //             </Col>

// // //             <Col xs={12} md={7} className="text-start">
// // //               <p className="mb-1 fw-semibold text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// // //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// // //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// // //               <h5 className="fw-bold" style={{ fontSize: '1.25rem', color: '#0d6efd' }}>₹0.00</h5>
// // //             </Col>
// // //           </Row>
// // //         </Card>

// // //         {/* Add / Withdraw Funds button */}
// // //         <div className="text-center mb-4">
// // //           <Button
// // //             variant="primary"
// // //             size="lg"
// // //             className="rounded px-4 py-2 fw-semibold shadow-sm w-100"
// // //             onClick={() => navigate("/userAccount")}
// // //           >
// // //             ADD / WITHDRAW FUNDS
// // //           </Button>
// // //         </div>

// // //         {/* Equity/MF/Positions Accordion */}
// // //         <Accordion defaultActiveKey="2" alwaysOpen>
// // //           <Accordion.Item eventKey="0">
// // //             <Accordion.Header>
// // //               <span className="d-flex align-items-center">
// // //                 <div style={verticalBarStyle}></div>
// // //                 Equity
// // //               </span>
// // //             </Accordion.Header>
// // //             <Accordion.Body className="py-2">
// // //               {/* ✅ Left-aligned "00" */}
// // //               <p className="text-muted small mb-0 ms-3 text-start">00</p>
// // //             </Accordion.Body>
// // //           </Accordion.Item>

// // //           <Accordion.Item eventKey="1">
// // //             <Accordion.Header>
// // //               <span className="d-flex align-items-center">
// // //                 <div style={verticalBarStyle}></div>
// // //                 Mutual Funds
// // //               </span>
// // //             </Accordion.Header>
// // //             <Accordion.Body className="py-2">
// // //               {/* ✅ Left-aligned "00" */}
// // //               <p className="text-muted small mb-0 ms-3 text-start">00</p>
// // //             </Accordion.Body>
// // //           </Accordion.Item>

// // //           <Accordion.Item eventKey="2">
// // //             <Accordion.Header>
// // //               <span className="d-flex align-items-center">
// // //                 <div style={verticalBarStyle}></div>
// // //                 Positions
// // //               </span>
// // //             </Accordion.Header>
// // //             <Accordion.Body className="p-0 mb-5">
// // //               <Card className="border-0">
// // //                 <Card.Body className="p-3">
// // //                   <h6 className="fw-bold mb-3 text-start">Today Position</h6>
// // //                   <div className="d-flex justify-content-between mb-2">
// // //                     <span className="text-muted small">Total P&L (Unrealized)</span>
// // //                     <span className="fw-bold">0.00</span>
// // //                   </div>
// // //                   <div className="d-flex justify-content-between mb-2">
// // //                     <span className="text-muted small">Funds</span>
// // //                     <span className="fw-bold">{totalAmount}</span>
// // //                   </div>
// // //                   <div className="d-flex justify-content-between mb-2">
// // //                     <span className="text-muted small">Net profit</span>
// // //                     <span className="fw-bold text-success">00</span>
// // //                   </div>
// // //                   <div className="d-flex justify-content-between">
// // //                     <span className="text-muted small">Net Loss</span>
// // //                     <span className="fw-bold text-danger">00</span>
// // //                   </div>
// // //                 </Card.Body>
// // //               </Card>
    
// // //             </Accordion.Body>
// // //           </Accordion.Item>
// // //         </Accordion>
// // //       </Container>

// // //       <BottomNavbar />
// // //     </>
// // //   );
// // // };

// // // const verticalBarStyle = {
// // //   width: '4px',
// // //   height: '20px',
// // //   backgroundColor: '#0d6efd',
// // //   marginRight: '10px',
// // //   borderRadius: '2px',
// // // };

// // // export default Dashboard;


// // // Dashboard.jsx
// // import React, { useEffect, useState } from "react";
// // import { Card, Button, Accordion, Container, Row, Col } from "react-bootstrap";
// // import { useNavigate } from "react-router-dom";
// // import LiveTicker from "../LiveTicker";
// // import BottomNavbar from "./BottomNavbar";
// // import { getMyTotalAmount } from "../../services/apiService";

// // const Dashboard = () => {
// //   const navigate = useNavigate();
// //   const user = JSON.parse(localStorage.getItem("user")) || { name: "Hiphjoon" };
// //   const [totalAmount, setTotalAmount] = useState(0);
// //   const [isAssetClassHovered, setIsAssetClassHovered] = useState(false);

// //   useEffect(() => {
// //     const fetchTotalAmount = async () => {
// //       try {
// //         const data = await getMyTotalAmount();
// //         setTotalAmount(data.totalAmount || 0);
// //       } catch (error) {
// //         console.error("Failed to fetch total amount:", error);
// //         setTotalAmount(0);
// //       }
// //     };
// //     fetchTotalAmount();
// //   }, []);

// //   return (
// //     <>
// //       <Container
// //         fluid
// //         className="py-3"
// //         style={{
// //           backgroundColor: "#f7f8fc",
// //           minHeight: "100vh",
// //           paddingBottom: "140px", // ✅ Enough space for BottomNavbar
// //         }}
// //       >
// //         <h4 className="fw-bold mb-4" style={{ textAlign: 'start' }}>
// //           Hi {user.name} 👋
// //         </h4>

// //         {/* Market Today */}
// //         <Card className="shadow-sm mb-4 border-0">
// //           <Card.Body>
// //             <h6 className="fw-bold mb-2 text-start">Market Today</h6>
// //             <LiveTicker />
// //           </Card.Body>
// //         </Card>

// //         {/* Asset Class Section */}
// //         <Card className="shadow-sm mb-4 border-0 p-3" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
// //           <div className="d-flex align-items-center mb-3">
// //             <Button
// //               variant={isAssetClassHovered ? "primary" : "outline-primary"}
// //               className="fw-bold px-3 py-1"
// //               style={{
// //                 borderRadius: '8px',
// //                 borderWidth: '2px',
// //                 fontSize: '0.85rem',
// //                 color: isAssetClassHovered ? 'white' : '#0d6efd',
// //                 backgroundColor: isAssetClassHovered ? '#0d6efd' : 'transparent',
// //               }}
// //               onMouseEnter={() => setIsAssetClassHovered(true)}
// //               onMouseLeave={() => setIsAssetClassHovered(false)}
// //             >
// //               ASSET CLASS
// //             </Button>
// //           </div>

// //           <Row className="align-items-center">
// //             <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
// //               <div
// //                 className="d-inline-flex flex-column justify-content-center align-items-center"
// //                 style={{
// //                   width: "160px",
// //                   height: "160px",
// //                   borderRadius: "50%",
// //                   background: "conic-gradient(#1a2b4b 0% 50%, #8b9cb9 50% 100%)",
// //                   color: 'white',
// //                   position: 'relative',
// //                   fontSize: '1rem',
// //                 }}
// //               >
// //                 <strong style={{ fontSize: '1rem', color: '#f8f9fa' }}>Equity: 0%</strong>
// //                 <small style={{ color: '#ced4da', marginTop: '5px' }}>MF: 0%</small>
// //               </div>
// //             </Col>

// //             <Col xs={12} md={7} className="text-start">
// //               <p className="mb-1 fw-semibold text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// //               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

// //               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
// //               <h5 className="fw-bold" style={{ fontSize: '1.25rem', color: '#0d6efd' }}>₹0.00</h5>
// //             </Col>
// //           </Row>
// //         </Card>

// //         {/* Add / Withdraw Funds button */}
// //         <div className="text-center mb-4">
// //           <Button
// //             variant="primary"
// //             size="lg"
// //             className="rounded px-4 py-2 fw-semibold shadow-sm w-100"
// //             onClick={() => navigate("/userAccount")}
// //           >
// //             ADD / WITHDRAW FUNDS
// //           </Button>
// //         </div>

// //         {/* Equity/MF/Positions Accordion */}
// //         <Accordion defaultActiveKey="2">
// //           <Accordion.Item eventKey="0">
// //             <Accordion.Header>
// //               <span className="d-flex align-items-center gap-2">
// //                 <div style={verticalBarStyle}></div>
// //                 Equity
// //               </span>
// //             </Accordion.Header>
// //             <Accordion.Body className="py-2 text-start">
// //               00
// //             </Accordion.Body>
// //           </Accordion.Item>

// //           <Accordion.Item eventKey="1">
// //             <Accordion.Header>
// //               <span className="d-flex align-items-center gap-2">
// //                 <div style={verticalBarStyle}></div>
// //                 Mutual Funds
// //               </span>
// //             </Accordion.Header>
// //             <Accordion.Body className="py-2 text-start">
// //               00
// //             </Accordion.Body>
// //           </Accordion.Item>

// //           <Accordion.Item eventKey="2">
// //             <Accordion.Header>
// //               <span className="d-flex align-items-center gap-2">
// //                 <div style={verticalBarStyle}></div>
// //                 Positions
// //               </span>
// //             </Accordion.Header>
// //             <Accordion.Body className="p-3">
// //               <Card className="border-0">
// //                 <Card.Body className="p-0">
// //                   <h6 className="fw-bold mb-3 text-start">Today Position</h6>
// //                   <div className="d-flex justify-content-between mb-2">
// //                     <span className="text-muted small">Total P&L (Unrealized)</span>
// //                     <span className="fw-bold">0.00</span>
// //                   </div>
// //                   <div className="d-flex justify-content-between mb-2">
// //                     <span className="text-muted small">Funds</span>
// //                     <span className="fw-bold">{totalAmount}</span>
// //                   </div>
// //                   <div className="d-flex justify-content-between mb-2">
// //                     <span className="text-muted small">Net profit</span>
// //                     <span className="fw-bold text-success">00</span>
// //                   </div>
// //                   <div className="d-flex justify-content-between">
// //                     <span className="text-muted small">Net Loss</span>
// //                     <span className="fw-bold text-danger">00</span>
// //                   </div>
// //                 </Card.Body>
// //               </Card>
// //             </Accordion.Body>
// //           </Accordion.Item>
// //         </Accordion>
// //       </Container>

// //       <BottomNavbar />
// //     </>
// //   );
// // };

// // const verticalBarStyle = {
// //   width: "4px",
// //   height: "20px",
// //   backgroundColor: "#0d6efd",
// //   borderRadius: "2px",
// // };

// // export default Dashboard;


// // Dashboard.jsx
// import React, { useEffect, useState } from "react";
// import { Card, Button, Accordion, Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import LiveTicker from "../LiveTicker";
// import BottomNavbar from "./BottomNavbar";
// import { getMyTotalAmount } from "../../services/apiService";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user")) || { name: "Hiphjoon" };
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [isAssetClassHovered, setIsAssetClassHovered] = useState(false);

//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const data = await getMyTotalAmount();
//         setTotalAmount(data.totalAmount || 0);
//       } catch (error) {
//         console.error("Failed to fetch total amount:", error);
//         setTotalAmount(0);
//       }
//     };
//     fetchTotalAmount();
//   }, []);

//   return (
//     <>
//       <Container
//         fluid
//         className="py-3"
//         style={{
//           backgroundColor: "#f7f8fc",
//           minHeight: "100vh",
//           paddingBottom: "40px", // Keep this value or adjust it based on BottomNavbar's actual height
//         }}
//       >
//         <h4 className="fw-bold mb-4" style={{ textAlign: 'start' }}>
//           Hi {user.name} 👋
//         </h4>

//         {/* Market Today */}
//         <Card className="shadow-sm mb-4 border-0">
//           <Card.Body>
//             <h6 className="fw-bold mb-2 text-start">Market Today</h6>
//             <LiveTicker />
//           </Card.Body>
//         </Card>

//         {/* Asset Class Section */}
//         <Card className="shadow-sm mb-4 border-0 p-3" style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}>
//           <div className="d-flex align-items-center mb-3">
//             <Button
//               variant={isAssetClassHovered ? "primary" : "outline-primary"}
//               className="fw-bold px-3 py-1"
//               style={{
//                 borderRadius: '8px',
//                 borderWidth: '2px',
//                 fontSize: '0.85rem',
//                 color: isAssetClassHovered ? 'white' : '#0d6efd',
//                 backgroundColor: isAssetClassHovered ? '#0d6efd' : 'transparent',
//               }}
//               onMouseEnter={() => setIsAssetClassHovered(true)}
//               onMouseLeave={() => setIsAssetClassHovered(false)}
//             >
//               ASSET CLASS
//             </Button>
//           </div>

//           <Row className="align-items-center">
//             <Col xs={12} md={5} className="text-center mb-3 mb-md-0">
//               <div
//                 className="d-inline-flex flex-column justify-content-center align-items-center"
//                 style={{
//                   width: "160px",
//                   height: "160px",
//                   borderRadius: "50%",
//                   background: "conic-gradient(#1a2b4b 0% 50%, #8b9cb9 50% 100%)",
//                   color: 'white',
//                   position: 'relative',
//                   fontSize: '1rem',
//                 }}
//               >
//                 <strong style={{ fontSize: '1rem', color: '#f8f9fa' }}>Equity: 0%</strong>
//                 <small style={{ color: '#ced4da', marginTop: '5px' }}>MF: 0%</small>
//               </div>
//             </Col>

//             <Col xs={12} md={7} className="text-start">
//               <p className="mb-1 fw-semibold text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
//               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

//               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
//               <h5 className="fw-bold" style={{ fontSize: '1.25rem' }}>₹0.00</h5>

//               <p className="mb-1 fw-semibold mt-3 text-secondary" style={{ fontSize: '0.85rem' }}>CURRENT VALUE</p>
//               <h5 className="fw-bold" style={{ fontSize: '1.25rem', color: '#0d6efd' }}>₹0.00</h5>
//             </Col>
//           </Row>
//         </Card>

//         {/* Add / Withdraw Funds button */}
//         <div className="text-center mb-4">
//           <Button
//             variant="primary"
//             size="lg"
//             className="rounded px-4 py-2 fw-semibold shadow-sm w-100"
//             onClick={() => navigate("/userAccount")}
//           >
//             ADD / WITHDRAW FUNDS
//           </Button>
//         </div>

//         {/* Equity/MF/Positions Accordion */}
//         <Accordion defaultActiveKey="2">
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>
//               <span className="d-flex align-items-center gap-2">
//                 <div style={verticalBarStyle}></div>
//                 Equity
//               </span>
//             </Accordion.Header>
//             <Accordion.Body className="py-2 text-start">
//               00
//             </Accordion.Body>
//           </Accordion.Item>

//           <Accordion.Item eventKey="1">
//             <Accordion.Header>
//               <span className="d-flex align-items-center gap-2">
//                 <div style={verticalBarStyle}></div>
//                 Mutual Funds
//               </span>
//             </Accordion.Header>
//             <Accordion.Body className="py-2 text-start">
//               00
//             </Accordion.Body>
//           </Accordion.Item>

//           <Accordion.Item eventKey="2">
//             <Accordion.Header>
//               <span className="d-flex align-items-center gap-2">
//                 <div style={verticalBarStyle}></div>
//                 Positions
//               </span>
//             </Accordion.Header>
//             <Accordion.Body className="p-3">
//               <Card className="border-0">
//                 <Card.Body className="p-0">
//                   <h6 className="fw-bold mb-3 text-start">Today Position</h6>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span className="text-muted small">Total P&L (Unrealized)</span>
//                     <span className="fw-bold">0.00</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span className="text-muted small">Funds</span>
//                     <span className="fw-bold">{totalAmount}</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span className="text-muted small">Net profit</span>
//                     <span className="fw-bold text-success">00</span>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <span className="text-muted small">Net Loss</span>
//                     <span className="fw-bold text-danger">00</span>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </Container>

//       <BottomNavbar  />
//     </>
//   );
// };

// const verticalBarStyle = {
//   width: "4px",
//   height: "20px",
//   backgroundColor: "#0d6efd",
//   borderRadius: "2px",
// };

// export default Dashboard;


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
          paddingBottom: "40px", // Keep this value or adjust it based on BottomNavbar's actual height
        }}
      >
        <h4 className="fw-bold mb-4" style={{ textAlign: 'start' }}>
          Hi {user.fullName} 👋
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
        <Accordion defaultActiveKey="2">
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
                  <h6 className="fw-bold mb-3 text-start">Today Position</h6>
                  {loadingPositions ? (
                    <div className="text-center">
                      <Spinner animation="border" />
                    </div>
                  ) : (
                    <>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted small">Net P&L</span> {/* Changed to Net P&L */}
                        <span className="fw-bold" style={{ color: totals.net >= 0 ? 'green' : 'red' }}>₹{formatAmount(totals.net)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted small">Funds Available</span> {/* Clarified to Funds Available */}
                        <span className="fw-bold">₹{formatAmount(totalAmount)}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span className="text-muted small">Total Profit</span> {/* Clarified to Total Profit */}
                        <span className="fw-bold text-success">₹{formatAmount(totals.profit)}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted small">Total Loss</span> {/* Clarified to Total Loss */}
                        <span className="fw-bold text-danger">₹{formatAmount(Math.abs(totals.loss))}</span>
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