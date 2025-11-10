// import React from "react";
// import LiveTicker from "../LiveTicker";
// import UserSlider from "./UserSlider";


// const UserDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <div className="container py-4 text-center">
//       <h3 className="mb-3">Hi {user?.name} 👋</h3>

//       {/* 🔥 Auto Image Slider */}
//       <div className="mb-4 shadow-sm rounded overflow-hidden">
//         <UserSlider/>
//       </div>

//       {/* 🟢 Live Stock Ticker */}
//       <LiveTicker />

//       {/* You can add other dashboard widgets here */}
//     </div>
//   );
// };

// export default UserDashboard;


// import React from "react";
// import LiveTicker from "../LiveTicker";
// import UserSlider from "./UserSlider";
// import { Card, Row, Col, Button } from "react-bootstrap";
// import BottomNavbar from "./BottomNavbar";

// const UserDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//        <>
//     <div className="container py-4 text-center">
//       {/* 👋 Welcome Section */}
//       <h3 className="fw-bold text-primary mb-3">
//         Hi {user?.name} 👋
//       </h3>

//       {/* 🔥 Slider Section */}
//       <div
//         className="mb-4 rounded shadow overflow-hidden"
//         style={{ borderRadius: "15px" }}
//       >
//         <UserSlider />
//       </div>

//       {/* 🟢 Live Stock Ticker */}
//       <div className="mb-5">
//         <LiveTicker />
//       </div>

//       {/* 📊 Dashboard Cards Section */}
//       <div className="mt-4">
//         <h5 className="text-start mb-3 fw-bold text-secondary">
//           Market Tools
//         </h5>

//         <Row xs={1} sm={2} md={2} lg={2} className="g-3">
//           <Col>
//             <Card
//               className="shadow-sm border-0 hover-shadow transition"
//               style={{ borderRadius: "12px" }}
//             >
//               <Card.Body>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
//                       style={{ width: 45, height: 45 }}
//                     >
//                       <i className="bi bi-broadcast fs-4"></i>
//                     </div>
//                     <div className="text-start">
//                       <h6 className="fw-bold mb-0">Live Feed</h6>
//                       <small className="text-muted">View live market updates</small>
//                     </div>
//                   </div>
//                   <Button variant="outline-success" size="sm">Open</Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//               <Card.Body>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
//                       style={{ width: 45, height: 45 }}
//                     >
//                       <i className="bi bi-cash-coin fs-4"></i>
//                     </div>
//                     <div className="text-start">
//                       <h6 className="fw-bold mb-0">Investment Idea</h6>
//                       <small className="text-muted">Get expert insights</small>
//                     </div>
//                   </div>
//                   <Button variant="outline-primary" size="sm">View</Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//               <Card.Body>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
//                       style={{ width: 45, height: 45 }}
//                     >
//                       <i className="bi bi-gift fs-4"></i>
//                     </div>
//                     <div className="text-start">
//                       <h6 className="fw-bold mb-0">Refer & Earn</h6>
//                       <small className="text-muted">Invite friends & earn</small>
//                     </div>
//                   </div>
//                   <Button variant="outline-warning" size="sm">Refer</Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col>
//             <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//               <Card.Body>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div
//                       className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center me-3"
//                       style={{ width: 45, height: 45 }}
//                     >
//                       <i className="bi bi-newspaper fs-4"></i>
//                     </div>
//                     <div className="text-start">
//                       <h6 className="fw-bold mb-0">Short News</h6>
//                       <small className="text-muted">Top headlines & updates</small>
//                     </div>
//                   </div>
//                   <Button variant="outline-danger" size="sm">Read</Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </div>

//       {/* 💰 Add Funds Section */}
//       <div className="mt-5 p-4 border rounded-4 shadow-sm bg-light">
//         <h5 className="fw-bold text-dark mb-3">
//           Add Funds to Trading Balance
//         </h5>
//         <p className="text-muted mb-4">
//           Select an amount to proceed
//         </p>

//         <div className="d-flex justify-content-center flex-wrap gap-3">
//           <Button variant="outline-primary" size="lg" className="px-4">
//             20K
//           </Button>
//           <Button variant="outline-primary" size="lg" className="px-4">
//             50K
//           </Button>
//           <Button variant="outline-primary" size="lg" className="px-4">
//             1L
//           </Button>
//           <Button variant="primary" size="lg" className="px-4">
//             Custom
//           </Button>
//         </div>
//       </div>
       
//     </div>
 
//       <BottomNavbar />
//     </>
//   );
// };

// export default UserDashboard;


// import React from "react";
// import LiveTicker from "../LiveTicker";
// import UserSlider from "./UserSlider";
// import { Card, Row, Col, Button } from "react-bootstrap";
// import BottomNavbar from "./BottomNavbar";
// import { useNavigate } from "react-router-dom"; // 👈 Added import

// const UserDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate(); // 👈 Initialize navigate hook

//   // 👇 Function to handle click
//   const handleDeposit = (amount) => {
//     // You can also send selected amount using state
//     navigate("/deposit", { state: { amount } });
//   };

//   return (
//     <>
//       <div className="container py-4 text-center">
//         {/* 👋 Welcome Section */}
//         <h3 className="fw-bold text-primary mb-3">
//           Hi {user?.name} 👋
//         </h3>

//         {/* 🔥 Slider Section */}
//         <div
//           className="mb-4 rounded shadow overflow-hidden"
//           style={{ borderRadius: "15px" }}
//         >
//           <UserSlider />
//         </div>

//         {/* 🟢 Live Stock Ticker */}
//         <div className="mb-5">
//           <LiveTicker />
//         </div>

//         {/* 📊 Dashboard Cards Section */}
//         <div className="mt-4">
//           <h5 className="text-start mb-3 fw-bold text-secondary">
//             Market Tools
//           </h5>

//           <Row xs={1} sm={2} md={2} lg={2} className="g-3">
//             <Col>
//               <Card
//                 className="shadow-sm border-0 hover-shadow transition"
//                 style={{ borderRadius: "12px" }}
//               >
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-broadcast fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Live Feed</h6>
//                         <small className="text-muted">View live market updates</small>
//                       </div>
//                     </div>
//                     {/* <Button variant="outline-success" size="sm">Open</Button> */}
//                     <Button
//   variant="outline-success"
//   size="sm"
//   onClick={() => window.open("https://www.livemint.com/money/personal-finance/irdai-fraud-monitoring-guidelines-11761889490258.html", "_blank")}
// >
//   Open
// </Button>

//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-cash-coin fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Investment Idea</h6>
//                         <small className="text-muted">Get expert insights</small>
//                       </div>
//                     </div>
//                     <Button variant="outline-primary" size="sm">View</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-gift fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Refer & Earn</h6>
//                         <small className="text-muted">Invite friends & earn</small>
//                       </div>
//                     </div>
//                     <Button variant="outline-warning" size="sm">Refer</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col>
//               <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-newspaper fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Short News</h6>
//                         <small className="text-muted">Top headlines & updates</small>
//                       </div>
//                     </div>
//                     <Button variant="outline-danger" size="sm">Read</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </div>

//         {/* 💰 Add Funds Section */}
//         <div className="mt-5 p-4 border rounded-4 shadow-sm bg-light">
//           <h5 className="fw-bold text-dark mb-3">
//             Add Funds to Trading Balance
//           </h5>
//           <p className="text-muted mb-4">
//             Select an amount to proceed
//           </p>

//           <div className="d-flex justify-content-center flex-wrap gap-3">
//             <Button
//               variant="outline-primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("20K")}
//             >
//               20K
//             </Button>

//             <Button
//               variant="outline-primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("50K")}
//             >
//               50K
//             </Button>

//             <Button
//               variant="outline-primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("1L")}
//             >
//               1L
//             </Button>

//             <Button
//               variant="primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("Custom")}
//             >
//               Custom
//             </Button>
//           </div>
//         </div>
//       </div>

//       <BottomNavbar />
//     </>
//   );
// };

// export default UserDashboard;

// import React from "react";
// import LiveTicker from "../LiveTicker";
// import UserSlider from "./UserSlider";
// import { Card, Row, Col, Button } from "react-bootstrap";
// import BottomNavbar from "./BottomNavbar";
// import { useNavigate } from "react-router-dom";

// const UserDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();

//   // 👇 Function to handle deposit click
//   const handleDeposit = (amount) => {
//     navigate("/deposit", { state: { amount } });
//   };

//   return (
//     <>
//       <div className="container py-4 text-center">
//         {/* 👋 Welcome Section */}
//         <h3 className="fw-bold text-primary mb-3">
//           Hi {user?.name} 👋
//         </h3>

//         {/* 🔥 Slider Section */}
//         <div
//           className="mb-4 rounded shadow overflow-hidden"
//           style={{ borderRadius: "15px" }}
//         >
//           <UserSlider />
//         </div>

//         {/* 🟢 Live Stock Ticker */}
//         <div className="mb-5">
//           <LiveTicker />
//         </div>

//         {/* 📊 Dashboard Cards Section */}
//         <div className="mt-4">
//           <h5 className="text-start mb-3 fw-bold text-secondary">
//             Market Tools
//           </h5>

//           <Row xs={1} sm={2} md={2} lg={2} className="g-3">
//             {/* 1️⃣ Live Feed */}
//             <Col>
//               <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-broadcast fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Live Feed</h6>
//                         <small className="text-muted">View live market updates</small>
//                       </div>
//                     </div>
//                     <Button
//                       variant="outline-success"
//                       size="sm"
//                       onClick={() =>
//                         window.open(
//                           "https://www.livemint.com/money/personal-finance/irdai-fraud-monitoring-guidelines-11761889490258.html",
//                           "_blank"
//                         )
//                       }
//                     >
//                       Open
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* 2️⃣ Investment Idea */}
//             <Col>
//               <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-cash-coin fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Investment Idea</h6>
//                         <small className="text-muted">Get expert insights</small>
//                       </div>
//                     </div>
//                     <Button
//                       variant="outline-primary"
//                       size="sm"
//                       onClick={() =>
//                         window.open(
//                           "https://www.tradingview.com/chart/BANKNIFTY/yN6AVk4m-BANKNIFTY-Manipulation/",
//                           "_blank"
//                         )
//                       }
//                     >
//                       View
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* 3️⃣ Refer & Earn */}
//             <Col>
//               <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-gift fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Refer & Earn</h6>
//                         <small className="text-muted">Invite friends & earn</small>
//                       </div>
//                     </div>
//                     <Button variant="outline-warning" size="sm">
//                       Refer
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>

//             {/* 4️⃣ Short News */}
//             <Col>
//               <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
//                 <Card.Body>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <div
//                         className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center me-3"
//                         style={{ width: 45, height: 45 }}
//                       >
//                         <i className="bi bi-newspaper fs-4"></i>
//                       </div>
//                       <div className="text-start">
//                         <h6 className="fw-bold mb-0">Short News</h6>
//                         <small className="text-muted">Top headlines & updates</small>
//                       </div>
//                     </div>
//                     <Button
//                       variant="outline-danger"
//                       size="sm"
//                       onClick={() =>
//                         window.open("https://pwa.flipitnews.com/", "_blank")
//                       }
//                     >
//                       Read
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </div>

//         {/* 💰 Add Funds Section */}
//         <div className="mt-5 p-4 border rounded-4 shadow-sm bg-light">
//           <h5 className="fw-bold text-dark mb-3">
//             Add Funds to Trading Balance
//           </h5>
//           <p className="text-muted mb-4">Select an amount to proceed</p>

//           <div className="d-flex justify-content-center flex-wrap gap-3">
//             <Button
//               variant="outline-primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("20K")}
//             >
//               20K
//             </Button>

//             <Button
//               variant="outline-primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("50K")}
//             >
//               50K
//             </Button>

//             <Button
//               variant="outline-primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("1L")}
//             >
//               1L
//             </Button>

//             <Button
//               variant="primary"
//               size="lg"
//               className="px-4"
//               onClick={() => handleDeposit("Custom")}
//             >
//               Custom
//             </Button>
//           </div>
//         </div>
//       </div>

//       <BottomNavbar />
//     </>
//   );
// };

// export default UserDashboard;

import React, { useState } from "react";
import LiveTicker from "../LiveTicker";
import UserSlider from "./UserSlider";
import { Card, Row, Col, Button } from "react-bootstrap";
import BottomNavbar from "./BottomNavbar";
import { useNavigate } from "react-router-dom";
import ReferModal from "./ReferModal"; // 👈 Import Refer Modal

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [showRefer, setShowRefer] = useState(false); // 👈 For refer popup

  // 👇 Function to handle deposit click
  const handleDeposit = (amount) => {
    navigate("/deposit", { state: { amount } });
  };

  // 👇 Open links in same tab
  const openInSameTab = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="container py-4 text-center">
        {/* 👋 Welcome Section */}
        <h3 className="fw-bold text-primary mb-3">
          Hi {user?.name} 👋
        </h3>

        {/* 🔥 Slider Section */}
        <div
          className="mb-4 rounded shadow overflow-hidden"
          style={{ borderRadius: "15px" }}
        >
          <UserSlider />
        </div>

        {/* 🟢 Live Stock Ticker */}
        <div className="mb-5">
          <LiveTicker />
        </div>

        {/* 📊 Dashboard Cards Section */}
        <div className="mt-4">
          <h5 className="text-start mb-3 fw-bold text-secondary">
            Market Tools
          </h5>

          <Row xs={1} sm={2} md={2} lg={2} className="g-3">
            {/* 1️⃣ Live Feed */}
            <Col>
              <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="bi bi-broadcast fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h6 className="fw-bold mb-0">Live Feed</h6>
                        <small className="text-muted">View live market updates</small>
                      </div>
                    </div>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() =>
                        openInSameTab(
                          "https://www.livemint.com/money/personal-finance/irdai-fraud-monitoring-guidelines-11761889490258.html"
                        )
                      }
                    >
                      Open
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 2️⃣ Investment Idea */}
            <Col>
              <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="bi bi-cash-coin fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h6 className="fw-bold mb-0">Investment Idea</h6>
                        <small className="text-muted">Get expert insights</small>
                      </div>
                    </div>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() =>
                        openInSameTab(
                          "https://www.tradingview.com/chart/BANKNIFTY/yN6AVk4m-BANKNIFTY-Manipulation/"
                        )
                      }
                    >
                      View
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 3️⃣ Refer & Earn */}
            <Col>
              <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="bi bi-gift fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h6 className="fw-bold mb-0">Refer & Earn</h6>
                        <small className="text-muted">Invite friends & earn</small>
                      </div>
                    </div>
                    <Button
                      variant="outline-warning"
                      size="sm"
                      onClick={() => setShowRefer(true)} // 👈 Show modal
                    >
                      Refer
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 4️⃣ Short News */}
            <Col>
              <Card className="shadow-sm border-0" style={{ borderRadius: "12px" }}>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div
                        className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: 45, height: 45 }}
                      >
                        <i className="bi bi-newspaper fs-4"></i>
                      </div>
                      <div className="text-start">
                        <h6 className="fw-bold mb-0">Short News</h6>
                        <small className="text-muted">Top headlines & updates</small>
                      </div>
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => openInSameTab("https://pwa.flipitnews.com/")}
                    >
                      Read
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* 💰 Add Funds Section */}
        <div className="mt-5 p-4 border rounded-4 shadow-sm bg-light mb-5">
          <h5 className="fw-bold text-dark mb-3">
            Add Funds to Trading Balance
          </h5>
          <p className="text-muted mb-4">Select an amount to proceed</p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Button
              variant="outline-primary"
              size="lg"
              className="px-4"
              onClick={() => handleDeposit("20K")}
            >
              20K
            </Button>

            <Button
              variant="outline-primary"
              size="lg"
              className="px-4"
              onClick={() => handleDeposit("50K")}
            >
              50K
            </Button>

            <Button
              variant="outline-primary"
              size="lg"
              className="px-4"
              onClick={() => handleDeposit("1L")}
            >
              1L
            </Button>

            <Button
              variant="primary"
              size="lg"
              className="px-4"
              onClick={() => handleDeposit("Custom")}
            >
              Custom
            </Button>
          </div>
        </div>
      </div>

      {/* 🔥 Refer Modal Component */}
      <ReferModal show={showRefer} handleClose={() => setShowRefer(false)} />

      <BottomNavbar />
    </>
  );
};

export default UserDashboard;
