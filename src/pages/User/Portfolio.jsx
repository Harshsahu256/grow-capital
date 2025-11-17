// // // import React, { useState } from "react";
// // // import { Container, Card, Nav, Image } from "react-bootstrap";
// // // import LiveTicker from "../LiveTicker";
// // // import BottomNavbar from "./BottomNavbar";

// // // const Portfolio = () => {
// // //   const user = JSON.parse(localStorage.getItem("user"));
// // //   const [activeTab, setActiveTab] = useState("pending");

// // //   return (
// // //      <>
// // //     <Container className="py-4">
// // //       {/* 👋 User Greeting */}
// // //       <div className="d-flex align-items-center mb-3">
// // //         <Image
// // //           src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
// // //           roundedCircle
// // //           width="45"
// // //           height="45"
// // //           className="me-2"
// // //         />
// // //         <h5 className="mb-0">Hi {user?.name || "Trader"} 👋</h5>
// // //       </div>

// // //       {/* 📊 Market Today */}
// // //       <Card className="shadow-sm mb-4 border-0">
// // //         <Card.Body>
// // //           <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
// // //           <LiveTicker />
// // //         </Card.Body>
// // //       </Card>

// // //       {/* 📁 Portfolio Section */}
// // //       <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>

// // //       {/* Tabs */}
// // //       <Nav
// // //         variant="tabs"
// // //         activeKey={activeTab}
// // //         onSelect={(key) => setActiveTab(key)}
// // //         className="mb-3 justify-content-center"
// // //       >
        
// // //         <Nav.Item>
// // //           <Nav.Link eventKey="positions" className="fw-semibold text-dark">
// // //             Positions
// // //           </Nav.Link>
// // //         </Nav.Item>
       
// // //       </Nav>

// // //       {/* 📉 Tab Content */}
// // //       <Card className="shadow-sm border-0 p-4 text-center">
// // //         {activeTab === "pending" && (
// // //           <>
// // //             <img
// // //               src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
// // //               alt="No Data"
// // //               className="img-fluid"
// // //               style={{ maxWidth: "250px" }}
// // //             />
// // //             <p className="mt-3 text-muted">No Pending Orders Found</p>
// // //           </>
// // //         )}

// // //         {activeTab === "positions" && (
// // //           <>
// // //             <img
// // //               src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
// // //               alt="No Data"
// // //               className="img-fluid"
// // //               style={{ maxWidth: "250px" }}
// // //             />
// // //             <p className="mt-3 text-muted">No Active Positions</p>
// // //           </>
// // //         )}

// // //         {activeTab === "fno" && (
// // //           <>
// // //             <img
// // //               src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
// // //               alt="No Data"
// // //               className="img-fluid"
// // //               style={{ maxWidth: "250px" }}
// // //             />
// // //             <p className="mt-3 text-muted">No F&O Trades Found</p>
// // //           </>
// // //         )}
// // //       </Card>

// // //       {/* Footer Summary */}
// // //       <div className="text-center mt-4 py-2 bg-light rounded border fw-semibold">
// // //         Total Gain/Loss: ₹0.00
// // //       </div>
// // //     </Container>
// // //     <BottomNavbar/>
   
// // //     ]</>
// // //   );
// // // };

// // // export default Portfolio;

// // import React, { useState, useEffect } from "react";
// // import { Container, Card, Nav, Image, Table, Spinner } from "react-bootstrap";
// // import { getUserPositions } from "../../services/apiService";
// // import LiveTicker from "../LiveTicker";
// // import BottomNavbar from "./BottomNavbar";

// // const Portfolio = () => {
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const [activeTab, setActiveTab] = useState("positions");
// //   const [positions, setPositions] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [totalProfit, setTotalProfit] = useState(0);

// //   useEffect(() => {
// //     const fetchPositions = async () => {
// //       setLoading(true);
// //       const data = await getUserPositions();
// //       if (data && Array.isArray(data)) {
// //         setPositions(data);
// //         // ✅ Calculate total profit/loss
// //         const total = data.reduce((sum, item) => sum + (item.totalProfit || 0), 0);
// //         setTotalProfit(total);
// //       }
// //       setLoading(false);
// //     };
// //     fetchPositions();
// //   }, []);

// //   return (
// //     <>
// //       <Container className="py-4">
// //         {/* 👋 Greeting */}
// //         <div className="d-flex align-items-center mb-3">
// //           <Image
// //             src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
// //             roundedCircle
// //             width="45"
// //             height="45"
// //             className="me-2"
// //           />
// //           <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
// //         </div>

// //         {/* 📊 Market Today */}
// //         <Card className="shadow-sm mb-4 border-0">
// //           <Card.Body>
// //             <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
// //             <LiveTicker />
// //           </Card.Body>
// //         </Card>

// //         {/* 📁 Portfolio Section */}
// //         <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>
// //         <Nav
// //           variant="tabs"
// //           activeKey={activeTab}
// //           onSelect={(key) => setActiveTab(key)}
// //           className="mb-3 "
// //         >
// //           <Nav.Item>
// //             <Nav.Link eventKey="positions" className="fw-semibold text-dark">
// //               Positions
// //             </Nav.Link>
// //           </Nav.Item>
// //         </Nav>

// //         {/* 📈 Tab Content */}
// //         <Card className="shadow-sm border-0 p-4 text-center">
// //           {loading ? (
// //             <Spinner animation="border" />
// //           ) : positions.length === 0 ? (
// //             <>
// //               <img
// //                 src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
// //                 alt="No Data"
// //                 className="img-fluid"
// //                 style={{ maxWidth: "250px" }}
// //               />
// //               <p className="mt-3 text-muted">No Active Positions Found</p>
// //             </>
// //           ) : (
// //             <Table striped bordered hover responsive className="align-middle">
// //               <thead>
// //                 <tr>
// //                   <th>Company</th>
// //                   <th>Buy</th>
// //                   <th>Sell</th>
// //                   <th>Qty</th>
// //                   <th>Total Price</th>
// //                   <th>Profit</th>
// //                   <th>Date</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {positions.map((pos) => (
// //                   <tr key={pos._id}>
// //                     <td>{pos.companyName}</td>
// //                     <td>₹{pos.buy}</td>
// //                     <td>₹{pos.sell}</td>
// //                     <td>{pos.quantity?.toFixed(2)}</td>
// //                     <td>₹{pos.totalPrice?.toLocaleString()}</td>
// //                     <td
// //                       style={{
// //                         color: pos.totalProfit >= 0 ? "green" : "red",
// //                         fontWeight: "bold",
// //                       }}
// //                     >
// //                       ₹{pos.totalProfit?.toLocaleString()}
// //                     </td>
// //                     <td>{new Date(pos.createdAt).toLocaleDateString()}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </Table>
// //           )}
// //         </Card>

// //         {/* 💰 Footer Summary */}
// //         <div className="text-center mt-4 py-2 bg-light rounded border fw-semibold">
// //           Total Gain/Loss:{" "}
// //           <span style={{ color: totalProfit >= 0 ? "green" : "red" }}>
// //             ₹{totalProfit.toLocaleString()}
// //           </span>
// //         </div>
// //       </Container>

// //       <BottomNavbar />
// //     </>
// //   );
// // };

// // export default Portfolio;


// import React, { useState, useEffect } from "react";
// import { Container, Card, Nav, Image, Table, Spinner, Row, Col } from "react-bootstrap";
// import { getUserPositions } from "../../services/apiService";
// import LiveTicker from "../LiveTicker";
// import BottomNavbar from "./BottomNavbar";

// const Portfolio = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [activeTab, setActiveTab] = useState("positions");
//   const [positions, setPositions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totals, setTotals] = useState({
//     profit: 0,
//     loss: 0,
//     net: 0,
//     totalPrice: 0,
//   });

//   useEffect(() => {
//     const fetchPositions = async () => {
//       setLoading(true);
//       const data = await getUserPositions();
//       if (data && Array.isArray(data)) {
//         setPositions(data);

//         // ✅ Calculate separate totals
//         let profit = 0;
//         let loss = 0;
//         let totalPriceSum = 0;

//         data.forEach((item) => {
//           if (item.totalProfit >= 0) {
//             profit += item.totalProfit;
//           } else {
//             loss += item.totalProfit; // negative number
//           }

//           totalPriceSum += item.totalPrice || 0;
//         });

//         setTotals({
//           profit,
//           loss,
//           net: profit + loss,
//           totalPrice: totalPriceSum,
//         });
//       }
//       setLoading(false);
//     };
//     fetchPositions();
//   }, []);

//   // ✅ Helper function for formatting numbers
//   const formatAmount = (num) =>
//     num?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

//   return (
//     <>
//       <Container className="py-4">
//         {/* 👋 Greeting */}
//         <div className="d-flex align-items-center mb-3">
//           <Image
//             src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
//             roundedCircle
//             width="45"
//             height="45"
//             className="me-2"
//           />
//           <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
//         </div>

//         {/* 📊 Market Today */}
//         <Card className="shadow-sm mb-4 border-0">
//           <Card.Body>
//             <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
//             <LiveTicker />
//           </Card.Body>
//         </Card>

//         {/* 📁 Portfolio Section */}
//         <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>
//         <Nav
//           variant="tabs"
//           activeKey={activeTab}
//           onSelect={(key) => setActiveTab(key)}
//           className="mb-3"
//         >
//           <Nav.Item>
//             <Nav.Link eventKey="positions" className="fw-semibold text-dark">
//               Positions
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>

//         {/* 💎 Summary Cards */}
//         <Row className="mb-4">
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Price</h6>
//               <h5 className="fw-bold">₹{formatAmount(totals.totalPrice)}</h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Profit</h6>
//               <h5 className="fw-bold" style={{ color: "green" }}>
//                 ₹{formatAmount(totals.profit)}
//               </h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Loss</h6>
//               <h5 className="fw-bold" style={{ color: "red" }}>
//                 ₹{formatAmount(Math.abs(totals.loss))}
//               </h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Net Total</h6>
//               <h5 className="fw-bold" style={{ color: totals.net >= 0 ? "green" : "red" }}>
//                 ₹{formatAmount(totals.net)}
//               </h5>
//             </Card>
//           </Col>
//         </Row>

//         {/* 📈 Tab Content */}
//         <Card className="shadow-sm border-0 p-4 text-center">
//           {loading ? (
//             <Spinner animation="border" />
//           ) : positions.length === 0 ? (
//             <>
//               <img
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//                 alt="No Data"
//                 className="img-fluid"
//                 style={{ maxWidth: "250px" }}
//               />
//               <p className="mt-3 text-muted">No Active Positions Found</p>
//             </>
//           ) : (
//             <Table striped bordered hover responsive className="align-middle mb-5">
//               <thead>
//                 <tr>
//                   <th>Company</th>
//                   <th>Buy</th>
//                   <th>Sell</th>
//                   <th>Qty</th>
//                   <th>Total Price</th>
//                   <th>Profit</th>
//                   <th>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {positions.map((pos) => (
//                   <tr key={pos._id}>
//                     <td>{pos.companyName}</td>
//                     <td>₹{formatAmount(pos.buy)}</td>
//                     <td>₹{formatAmount(pos.sell)}</td>
//                     <td>{pos.quantity?.toFixed(2)}</td>
//                     <td>₹{formatAmount(pos.totalPrice)}</td>
//                     <td
//                       style={{
//                         color: pos.totalProfit >= 0 ? "green" : "red",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       ₹{formatAmount(pos.totalProfit)}
//                     </td>
//                     <td>{new Date(pos.createdAt).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Card>
//       </Container>

//       <BottomNavbar />
//     </>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect } from "react";
// import { Container, Card, Nav, Image, Table, Spinner, Row, Col, Form } from "react-bootstrap";
// import { getUserPositions } from "../../services/apiService";
// import LiveTicker from "../LiveTicker";
// import BottomNavbar from "./BottomNavbar";

// const Portfolio = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [activeTab, setActiveTab] = useState("positions");
//   const [positions, setPositions] = useState([]);
//   const [filteredPositions, setFilteredPositions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totals, setTotals] = useState({
//     profit: 0,
//     loss: 0,
//     net: 0,
//     totalPrice: 0,
//   });
//   const [filterDate, setFilterDate] = useState("");

//   useEffect(() => {
//     const fetchPositions = async () => {
//       setLoading(true);
//       const data = await getUserPositions();
//       if (data && Array.isArray(data)) {
//         setPositions(data);
//         setFilteredPositions(data);
//         calculateTotals(data);
//       }
//       setLoading(false);
//     };
//     fetchPositions();
//   }, []);

//   // ✅ Calculate totals helper
//   const calculateTotals = (data) => {
//     let profit = 0;
//     let loss = 0;
//     let totalPriceSum = 0;

//     data.forEach((item) => {
//       if (item.totalProfit >= 0) profit += item.totalProfit;
//       else loss += item.totalProfit;

//       totalPriceSum += item.totalPrice || 0;
//     });

//     setTotals({
//       profit,
//       loss,
//       net: profit + loss,
//       totalPrice: totalPriceSum,
//     });
//   };

//   // ✅ Format number helper
//   const formatAmount = (num) =>
//     num?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

//   // ✅ Handle date filter
//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setFilterDate(selectedDate);

//     if (selectedDate === "") {
//       setFilteredPositions(positions);
//       calculateTotals(positions);
//     } else {
//       const filtered = positions.filter(
//         (pos) => new Date(pos.createdAt).toLocaleDateString() === new Date(selectedDate).toLocaleDateString()
//       );
//       setFilteredPositions(filtered);
//       calculateTotals(filtered);
//     }
//   };

//   return (
//     <>
//       <Container className="py-4">
//         {/* 👋 Greeting */}
//         <div className="d-flex align-items-center mb-3">
//           <Image
//             src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
//             roundedCircle
//             width="45"
//             height="45"
//             className="me-2"
//           />
//           <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
//         </div>

//         {/* 📊 Market Today */}
//         <Card className="shadow-sm mb-4 border-0">
//           <Card.Body>
//             <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
//             <LiveTicker />
//           </Card.Body>
//         </Card>

//         {/* 📁 Portfolio Section */}
//         <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>

//         {/* 📅 Date Filter */}
//         <Form.Group className="mb-3" controlId="filterDate">
//           <Form.Label>Filter by Date:</Form.Label>
//           <Form.Control
//             type="date"
//             value={filterDate}
//             onChange={handleDateChange}
//           />
//         </Form.Group>

//         {/* 💎 Summary Cards */}
//         <Row className="mb-4">
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Price</h6>
//               <h5 className="fw-bold">₹{formatAmount(totals.totalPrice)}</h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Profit</h6>
//               <h5 className="fw-bold" style={{ color: "green" }}>
//                 ₹{formatAmount(totals.profit)}
//               </h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Loss</h6>
//               <h5 className="fw-bold" style={{ color: "red" }}>
//                 ₹{formatAmount(Math.abs(totals.loss))}
//               </h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Net Total</h6>
//               <h5 className="fw-bold" style={{ color: totals.net >= 0 ? "green" : "red" }}>
//                 ₹{formatAmount(totals.net)}
//               </h5>
//             </Card>
//           </Col>
//         </Row>

//         {/* 📈 Table */}
//         <Card className="shadow-sm border-0 p-4 text-center">
//           {loading ? (
//             <Spinner animation="border" />
//           ) : filteredPositions.length === 0 ? (
//             <>
//               <img
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//                 alt="No Data"
//                 className="img-fluid"
//                 style={{ maxWidth: "250px" }}
//               />
//               <p className="mt-3 text-muted">No Positions Found for Selected Date</p>
//             </>
//           ) : (
//             <Table striped bordered hover responsive className="align-middle mb-5">
//               <thead>
//                 <tr>
//                   <th>Company</th>
//                   <th>Buy</th>
//                   <th>Sell</th>
//                   <th>Qty</th>
//                   <th>Total Price</th>
//                   <th>Profit</th>
//                   <th>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredPositions.map((pos) => (
//                   <tr key={pos._id}>
//                     <td>{pos.companyName}</td>
//                     <td>₹{formatAmount(pos.buy)}</td>
//                     <td>₹{formatAmount(pos.sell)}</td>
//                     <td>{pos.quantity?.toFixed(2)}</td>
//                     <td>₹{formatAmount(pos.totalPrice)}</td>
//                     <td
//                       style={{
//                         color: pos.totalProfit >= 0 ? "green" : "red",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       ₹{formatAmount(pos.totalProfit)}
//                     </td>
//                     <td>{new Date(pos.createdAt).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Card>
//       </Container>

//       <BottomNavbar />
//     </>
//   );
// };

// export default Portfolio;


// import React, { useState, useEffect } from "react";
// import { Container, Card, Image, Spinner, Row, Col, Form } from "react-bootstrap";
// import { getUserPositions } from "../../services/apiService";
// import LiveTicker from "../LiveTicker";
// import BottomNavbar from "./BottomNavbar";

// const Portfolio = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [positions, setPositions] = useState([]);
//   const [filteredPositions, setFilteredPositions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totals, setTotals] = useState({
//     profit: 0,
//     loss: 0,
//     net: 0,
//     totalPrice: 0,
//   });
//   const [filterDate, setFilterDate] = useState("");

//   useEffect(() => {
//     const fetchPositions = async () => {
//       setLoading(true);
//       const data = await getUserPositions();
//       if (data && Array.isArray(data)) {
//         setPositions(data);
//         setFilteredPositions(data);
//         calculateTotals(data);
//       }
//       setLoading(false);
//     };
//     fetchPositions();
//   }, []);

//   // ✅ Calculate totals helper
//   const calculateTotals = (data) => {
//     let profit = 0;
//     let loss = 0;
//     let totalPriceSum = 0;

//     data.forEach((item) => {
//       if (item.totalProfit >= 0) profit += item.totalProfit;
//       else loss += item.totalProfit;

//       totalPriceSum += item.totalPrice || 0;
//     });

//     setTotals({
//       profit,
//       loss,
//       net: profit + loss,
//       totalPrice: totalPriceSum,
//     });
//   };

//   // ✅ Format number helper
//   const formatAmount = (num) =>
//     num?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

//   // ✅ Handle date filter
//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setFilterDate(selectedDate);

//     if (selectedDate === "") {
//       setFilteredPositions(positions);
//       calculateTotals(positions);
//     } else {
//       const filtered = positions.filter(
//         (pos) => new Date(pos.createdAt).toLocaleDateString() === new Date(selectedDate).toLocaleDateString()
//       );
//       setFilteredPositions(filtered);
//       calculateTotals(filtered);
//     }
//   };

//   return (
//     <>
//       <Container className="py-4">
//         {/* 👋 Greeting */}
//         <div className="d-flex align-items-center mb-3">
//           <Image
//             src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
//             roundedCircle
//             width="45"
//             height="45"
//             className="me-2"
//           />
//           <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
//         </div>

//         {/* 📊 Market Today */}
//         <Card className="shadow-sm mb-4 border-0">
//           <Card.Body>
//             <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
//             <LiveTicker />
//           </Card.Body>
//         </Card>

//         {/* 📁 Portfolio Section */}
//         <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>

//         {/* 📅 Date Filter */}
//         <Form.Group className="mb-3" controlId="filterDate">
//           <Form.Label>Filter by Date:</Form.Label>
//           <Form.Control
//             type="date"
//             value={filterDate}
//             onChange={handleDateChange}
//           />
//         </Form.Group>

//         {/* 💎 Summary Cards */}
//         <Row className="mb-4">
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Price</h6>
//               <h5 className="fw-bold">₹{formatAmount(totals.totalPrice)}</h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Profit</h6>
//               <h5 className="fw-bold" style={{ color: "green" }}>
//                 ₹{formatAmount(totals.profit)}
//               </h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Total Loss</h6>
//               <h5 className="fw-bold" style={{ color: "red" }}>
//                 ₹{formatAmount(Math.abs(totals.loss))}
//               </h5>
//             </Card>
//           </Col>
//           <Col md={3} sm={6} className="mb-2">
//             <Card className="shadow-sm text-center p-3 bg-light border-0">
//               <h6>Net Total</h6>
//               <h5 className="fw-bold" style={{ color: totals.net >= 0 ? "green" : "red" }}>
//                 ₹{formatAmount(totals.net)}
//               </h5>
//             </Card>
//           </Col>
//         </Row>

//         {/* 📈 Positions as Cards (one below the other, styled like the image) */}
//         <div className="positions-list">
//           {loading ? (
//             <div className="text-center p-4">
//               <Spinner animation="border" />
//             </div>
//           ) : filteredPositions.length === 0 ? (
//             <Card className="shadow-sm border-0 p-4 text-center mb-3">
//               <img
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//                 alt="No Data"
//                 className="img-fluid mx-auto"
//                 style={{ maxWidth: "250px" }}
//               />
//               <p className="mt-3 text-muted">No Positions Found for Selected Date</p>
//             </Card>
//           ) : (
//             filteredPositions.map((pos) => (
//               // Changed card padding to p-2 for reduced height
//               <Card key={pos._id} className="shadow-sm border-0 p-2 mb-3">
//                 {/* No padding on Card.Body, elements handle their own spacing */}
//                 <Card.Body className="p-0">
//                   {/* Top section: Company Name, Qty */}
//                   {/* Changed mb-2 to mb-1 for less spacing */}
//                   <div className="d-flex justify-content-between align-items-center mb-1">
//                     <div>
//                       <h6 className="fw-bold mb-0">{pos.companyName}</h6> {/* CRUDE OIL (SELL) */}
//                       {/* Changed mb-3 to mb-0, combined with date line for compactness */}
//                       <small className="text-muted mb-0">{new Date(pos.createdAt).toLocaleDateString()} | Intraday</small> {/* 19 Nov 2025 | Intraday */}
//                     </div>
//                     <div className="text-end">
//                       <small className="text-muted d-block">Qty</small> {/* Qty */}
//                       {/* Formatted Qty as 1(100) assuming a lot size of 100 */}
//                       <h6 className="fw-bold mb-0">{pos.quantity} (100)</h6> {/* 1(100) */}
//                     </div>
//                   </div>

//                   {/* Middle section: Avg Buy Price, Avg Sell Price */}
//                   {/* gx-4 to create some gap between columns, changed mb-2 to mb-1 */}
//                   <Row className="gx-4 mb-1">
//                     <Col className="text-start"> {/* Removed xs={6} as it's not strictly needed for this side-by-side */}
//                       <small className="text-muted d-block">Avg Buy Price</small>
//                       <h6 className="fw-bold mb-0">₹{formatAmount(pos.buy)}</h6> {/* ₹ 5338 */}
//                     </Col>
//                     <Col className="text-start"> {/* Removed xs={6} and text-end, now it's next to buy price */}
//                       <small className="text-muted d-block">Avg Sell Price</small>
//                       <h6 className="fw-bold mb-0">₹{formatAmount(pos.sell)}</h6> {/* ₹ 5388 */}
//                     </Col>
//                   </Row>

//                   {/* Bottom section: Gain */}
//                   <div className="text-end">
//                     <small className="text-muted d-block">Gain</small>
//                     <h6
//                       className="fw-bold mb-0"
//                       style={{ color: pos.totalProfit >= 0 ? "green" : "red" }}
//                     >
//                       {pos.totalProfit >= 0 ? "+" : "-"}₹{formatAmount(Math.abs(pos.totalProfit))} {/* +₹ 5,000.00 */}
//                     </h6>
//                   </div>
//                 </Card.Body>
//               </Card>
//             ))
//           )}
//         </div>
//       </Container>

//       <BottomNavbar />
//     </>
//   );
// };

// export default Portfolio;

// import React, { useState, useEffect } from "react";
// import { Container, Card, Image, Spinner, Form } from "react-bootstrap";
// import { getUserPositions } from "../../services/apiService";
// import LiveTicker from "../LiveTicker";
// import BottomNavbar from "./BottomNavbar";

// const Portfolio = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [positions, setPositions] = useState([]);
//   const [filteredPositions, setFilteredPositions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totals, setTotals] = useState({ profit: 0, loss: 0, net: 0, totalPrice: 0 });
//   const [filterDate, setFilterDate] = useState("");

//   useEffect(() => {
//     const fetchPositions = async () => {
//       setLoading(true);
//       const data = await getUserPositions();
//       if (data && Array.isArray(data)) {
//         setPositions(data);
//         setFilteredPositions(data);
//         calculateTotals(data);
//       }
//       setLoading(false);
//     };
//     fetchPositions();
//   }, []);

//   const calculateTotals = (data) => {
//     let profit = 0, loss = 0, totalPriceSum = 0;
//     data.forEach(item => {
//       if (item.totalProfit >= 0) profit += item.totalProfit;
//       else loss += item.totalProfit;
//       totalPriceSum += item.totalPrice || 0;
//     });
//     setTotals({ profit, loss, net: profit + loss, totalPrice: totalPriceSum });
//   };

//   const formatAmount = (num) =>
//     num?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setFilterDate(selectedDate);
//     if (selectedDate === "") {
//       setFilteredPositions(positions);
//       calculateTotals(positions);
//     } else {
//       const filtered = positions.filter(
//         pos => new Date(pos.createdAt).toLocaleDateString() === new Date(selectedDate).toLocaleDateString()
//       );
//       setFilteredPositions(filtered);
//       calculateTotals(filtered);
//     }
//   };

//   return (
//     <>
//       <Container className="py-4">
//         {/* Greeting */}
//         <div className="d-flex align-items-center mb-3">
//           <Image src="https://cdn-icons-png.flaticon.com/512/219/219970.png" roundedCircle width="45" height="45" className="me-2" />
//           <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
//         </div>

//         {/* Market Today */}
//         <Card className="shadow-sm mb-4 border-0">
//           <Card.Body>
//             <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
//             <LiveTicker />
//           </Card.Body>
//         </Card>

//         {/* Portfolio Section */}
//         <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>

//         {/* Date Filter */}
//         <Form.Group className="mb-3" controlId="filterDate">
//           <Form.Label>Filter by Date:</Form.Label>
//           <Form.Control type="date" value={filterDate} onChange={handleDateChange} />
//         </Form.Group>

//         {/* Positions as Cards */}
//         <div className="positions-list">
//           {loading ? (
//             <div className="text-center p-2"><Spinner animation="border" /></div>
//           ) : filteredPositions.length === 0 ? (
//             <Card className="shadow-sm border-0 p-2 text-center mb-2">
//               <img
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//                 alt="No Data"
//                 className="img-fluid mx-auto" style={{ maxWidth: "200px" }}
//               />
//               <p className="mt-2 text-muted">No Positions Found for Selected Date</p>
//             </Card>
//           ) : (
//             filteredPositions.map((pos) => (
//               <Card key={pos._id} className="shadow-sm border-0 p-2 mb-2" style={{ minHeight: "75px" }}>
//                 <Card.Body className="p-1">
//                   {/* Top: Company Name + Date + Qty */}
//                   <div className="d-flex justify-content-between align-items-start mb-1">
//                     <div>
//                       <h6 className="fw-bold mb-0" style={{ fontSize: "16px", color: "#000" }}>{pos.companyName}</h6>
//                       <small className="text-muted">{new Date(pos.createdAt).toLocaleDateString("en-GB")} | {pos.tradeType}</small>
//                     </div>
//                     <div className="text-end">
//                       <small className="text-muted d-block">Qty</small>
//                       <h6 className="fw-bold mb-0">{pos.quantity}</h6>
//                     </div>
//                   </div>

//                   {/* Bottom: Gain left, Avg Sell center, Avg Buy right */}
//                   <div className="d-flex justify-content-between align-items-center mt-1">
//                     <div>
//                       <small className="text-muted d-block">Gain</small>
//                       <h6 className="fw-bold mb-0" style={{ color: pos.totalProfit >= 0 ? "green" : "red" }}>
//                         {pos.totalProfit >= 0 ? "+" : "-"}₹{formatAmount(Math.abs(pos.totalProfit))}
//                       </h6>
//                     </div>
//                     <div className="text-center">
//                       <small className="text-muted d-block">Avg Sell Price</small>
//                       <h6 className="fw-bold mb-0">₹{formatAmount(pos.sell)}</h6>
//                     </div>
//                     <div className="text-end">
//                       <small className="text-muted d-block">Avg Buy Price</small>
//                       <h6 className="fw-bold mb-0">₹{formatAmount(pos.buy)}</h6>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             ))
//           )}
//         </div>
//       </Container>

//       <BottomNavbar />
//     </>
//   );
// };

// export default Portfolio;





// import React, { useState, useEffect } from "react";
// import { Container, Card, Image, Spinner, Form } from "react-bootstrap";
// import { getUserPositions } from "../../services/apiService";
// import LiveTicker from "../LiveTicker";
// import BottomNavbar from "./BottomNavbar";

// const Portfolio = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [positions, setPositions] = useState([]);
//   const [filteredPositions, setFilteredPositions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totals, setTotals] = useState({ profit: 0, loss: 0, net: 0, totalPrice: 0 });
//   const [filterDate, setFilterDate] = useState("");

//   useEffect(() => {
//     const fetchPositions = async () => {
//       setLoading(true);
//       const data = await getUserPositions();
//       if (data && Array.isArray(data)) {
//         setPositions(data);
//         setFilteredPositions(data);
//         calculateTotals(data);
//       }
//       setLoading(false);
//     };
//     fetchPositions();
//   }, []);

//   const calculateTotals = (data) => {
//     let profit = 0, loss = 0, totalPriceSum = 0;
//     data.forEach(item => {
//       if (item.totalProfit >= 0) profit += item.totalProfit;
//       else loss += item.totalProfit;
//       totalPriceSum += item.totalPrice || 0;
//     });
//     setTotals({ profit, loss, net: profit + loss, totalPrice: totalPriceSum });
//   };

//   const formatAmount = (num) =>
//     num?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setFilterDate(selectedDate);
//     if (selectedDate === "") {
//       setFilteredPositions(positions);
//       calculateTotals(positions);
//     } else {
//       const filtered = positions.filter(
//         pos => new Date(pos.createdAt).toLocaleDateString() === new Date(selectedDate).toLocaleDateString()
//       );
//       setFilteredPositions(filtered);
//       calculateTotals(filtered);
//     }
//   };

//   return (
//     <>
//       <Container className="py-4">
//         {/* Greeting */}
//         <div className="d-flex align-items-center mb-3">
//           <Image src="https://cdn-icons-png.flaticon.com/512/219/219970.png" roundedCircle width="45" height="45" className="me-2" />
//           <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
//         </div>

//         {/* Market Today */}
//         <Card className="shadow-sm mb-4 border-0">
//           <Card.Body>
//             <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
//             <LiveTicker />
//           </Card.Body>
//         </Card>

//         {/* Portfolio Section */}
//         <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>

//         {/* Date Filter */}
//         <Form.Group className="mb-3" controlId="filterDate">
//           <Form.Label>Filter by Date:</Form.Label>
//           <Form.Control type="date" value={filterDate} onChange={handleDateChange} />
//         </Form.Group>

//         {/* Positions as Cards */}
//         <div className="positions-list">
//           {loading ? (
//             <div className="text-center p-2"><Spinner animation="border" /></div>
//           ) : filteredPositions.length === 0 ? (
//             <Card className="shadow-sm border-0 p-2 text-center mb-2">
//               <img
//                 src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
//                 alt="No Data"
//                 className="img-fluid mx-auto" style={{ maxWidth: "200px" }}
//               />
//               <p className="mt-2 text-muted">No Positions Found for Selected Date</p>
//             </Card>
//           ) : (
//             filteredPositions.map((pos) => (
//               <Card key={pos._id} className="shadow-sm border-0 p-2 mb-2" style={{ minHeight: "75px" }}>
//                 <Card.Body className="p-1">
//                   {/* Top: Company Name + Date + Qty */}
//                   <div className="d-flex justify-content-between align-items-start mb-1">
//                     <div>
//                       <h6 className="fw-bold mb-0" style={{ fontSize: "16px", color: "#000" }}>{pos.companyName}</h6>
//                       <small className="text-muted">{new Date(pos.createdAt).toLocaleDateString("en-GB")} | {pos.tradeType}</small>
//                     </div>
//                     <div className="text-end">
//                       <small className="text-muted d-block">Qty</small>
//                       <h6 className="fw-bold mb-0">{pos.quantity}</h6>
//                     </div>
//                   </div>

//                   {/* Bottom: Avg Buy left, Avg Sell center, Gain right */}
//                   <div className="d-flex justify-content-between align-items-center mt-1">
//                     {/* Left: Avg Buy Price */}
//                     <div>
//                       <small className="text-muted d-block">Avg Buy Price</small>
//                       <h6 className="fw-bold mb-0">₹{formatAmount(pos.buy)}</h6>
//                     </div>

//                     {/* Center: Avg Sell Price */}
//                     <div className="text-center">
//                       <small className="text-muted d-block">Avg Sell Price</small>
//                       <h6 className="fw-bold mb-0">₹{formatAmount(pos.sell)}</h6>
//                     </div>

//                     {/* Right: Gain */}
//                     <div className="text-end">
//                       <small className="text-muted d-block">Gain</small>
//                       <h6 className="fw-bold mb-0" style={{ color: pos.totalProfit >= 0 ? "green" : "red" }}>
//                         {pos.totalProfit >= 0 ? "+" : "-"}₹{formatAmount(Math.abs(pos.totalProfit))}
//                       </h6>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             ))
//           )}
//         </div>
//       </Container>

//       <BottomNavbar />
//     </>
//   );
// };

// export default Portfolio;


import React, { useState, useEffect } from "react";
import { Container, Card, Image, Spinner, Form } from "react-bootstrap";
import { getUserPositions } from "../../services/apiService";
import LiveTicker from "../LiveTicker";
import BottomNavbar from "./BottomNavbar";

const Portfolio = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [positions, setPositions] = useState([]);
  const [filteredPositions, setFilteredPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({ profit: 0, loss: 0, net: 0, totalPrice: 0 });
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    const fetchPositions = async () => {
      setLoading(true);
      console.log("TOKEN:", localStorage.getItem("token"));

      const data = await getUserPositions();
      if (data && Array.isArray(data)) {
        setPositions(data);
        setFilteredPositions(data);
        calculateTotals(data);
      }
      setLoading(false);
    };
    fetchPositions();
  }, []);

  const calculateTotals = (data) => {
    let profit = 0, loss = 0, totalPriceSum = 0;
    data.forEach(item => {
      if (item.gain >= 0) profit += item.gain;
      else loss += item.gain;
      totalPriceSum += item.totalPrice || 0;
    });
    setTotals({ profit, loss, net: profit + loss, totalPrice: totalPriceSum });
  };

  const formatAmount = (num) =>
    num?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);
    if (selectedDate === "") {
      setFilteredPositions(positions);
      calculateTotals(positions);
    } else {
      const filtered = positions.filter(
        pos => new Date(pos.createdAt).toLocaleDateString() === new Date(selectedDate).toLocaleDateString()
      );
      setFilteredPositions(filtered);
      calculateTotals(filtered);
    }
  };

  return (
    <>
      <Container className="py-4 mb-5" >
        {/* Greeting */}
        <div className="d-flex align-items-center mb-3">
          <Image src="https://cdn-icons-png.flaticon.com/512/219/219970.png" roundedCircle width="45" height="45" className="me-2" />
          <h5 className="mb-0">Hi {user?.fullName || "Trader"} 👋</h5>
        </div>

        {/* Market Today */}
        <Card className="shadow-sm mb-4 border-0">
          <Card.Body>
            <h6 className="text-start mb-3 fw-semibold">Market Today</h6>
            <LiveTicker />
          </Card.Body>
        </Card>

        {/* Portfolio Section */}
        <h5 className="fw-semibold mb-3 text-start">Portfolio</h5>

        {/* Date Filter */}
        <Form.Group className="mb-3" controlId="filterDate">
          <Form.Label>Filter by Date:</Form.Label>
          <Form.Control type="date" value={filterDate} onChange={handleDateChange} />
        </Form.Group>

        {/* Positions as Cards */}
        <div className="positions-list">
          {loading ? (
            <div className="text-center p-2"><Spinner animation="border" /></div>
          ) : filteredPositions.length === 0 ? (
            <Card className="shadow-sm border-0 p-2 text-center mb-2">
              {/* <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-illustration-download-in-svg-png-gif-file-formats--empty-error-page-pack-business-illustrations-5296760.png"
                alt="No Data"
                className="img-fluid mx-auto" style={{ maxWidth: "200px" }}
              /> */}
              <p className="mt-2 text-muted">No Positions Found for Selected Date</p>
            </Card>
          ) : (
            filteredPositions.map((pos) => (
              <Card key={pos._id} className="shadow-sm border-0 p-2 mb-2" style={{ minHeight: "75px" }}>
                <Card.Body className="p-1">
                  {/* Top: Company Name + Date + Qty */}
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <div>
                      <h6 className="fw-bold mb-0" style={{ fontSize: "16px", color: "#000" }}>{pos.companyName}</h6>
                      <small className="text-muted">{new Date(pos.createdAt).toLocaleDateString("en-GB")} | {pos.tradeType}</small>
                    </div>
                    <div className="text-end">
                      <small className="text-muted d-block">Qty</small>
                      <h6 className="fw-bold mb-0">{pos.quantity}</h6>
                    </div>
                  </div>

                  {/* Bottom: Avg Buy left, Avg Sell center, Gain right */}
                  <div className="d-flex justify-content-between align-items-center mt-1">
                    {/* Left: Avg Buy Price */}
                    <div>
                      <small className="text-muted d-block">Avg Buy Price</small>
                      <h6 className="fw-bold mb-0">₹{formatAmount(pos.buy)}</h6>
                    </div>

                    {/* Center: Avg Sell Price */}
                    <div className="text-center">
                      <small className="text-muted d-block">Avg Sell Price</small>
                      <h6 className="fw-bold mb-0">₹{formatAmount(pos.sell)}</h6>
                    </div>

                    {/* Right: Gain */}
                    <div className="text-end">
                      <small className="text-muted d-block">Gain</small>
                      <h6 className="fw-bold mb-0" style={{ color: pos.gain >= 0 ? "green" : "red" }}>
                        {pos.gain >= 0 ? "+" : "-"}₹{formatAmount(Math.abs(pos.gain))}
                      </h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
      </Container>

      <BottomNavbar />
    </>
  );
};

export default Portfolio;
