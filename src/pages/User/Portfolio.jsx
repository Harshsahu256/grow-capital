

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
//       console.log("TOKEN:", localStorage.getItem("token"));

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
//       if (item.gain >= 0) profit += item.gain;
//       else loss += item.gain;
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
//       <Container className="py-4 mb-5" >
//         {/* Greeting */}
//         <div className="d-flex align-items-center mb-3">
//           <Image src="https://cdn-icons-png.flaticon.com/512/219/219970.png" roundedCircle width="45" height="45" className="me-2" />
//           <h5 className="mb-0">Hi {user?.name || "Trader"} 👋</h5>
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
//         {/* आकर्षक Positions हेडिंग यहां जोड़ी गई है */}
//         <div className="d-flex align-items-center mb-3">
//           <div style={{ flexGrow: 1, borderBottom: '1px solid black', marginRight: '10px' }}></div>
//           <h6 className="fw-semibold mb-0" style={{ whiteSpace: 'nowrap' }}>Positions</h6>
//           <div style={{ flexGrow: 1, borderBottom: '1px solid black', marginLeft: '10px' }}></div>
//         </div>

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
//               <p className="mt-2 text-muted">No Positions Found for Selected Date</p>
//             </Card>
//           ) : (
//             filteredPositions.map((pos) => (
//               <Card key={pos._id} className="shadow-sm border-0 py-2 ps-0 pe-2 mb-2" style={{ minHeight: "75px" }}>
//                 <Card.Body className="py-1 ps-0 pe-1">
//                   {/* Top: Company Name + Date + Qty */}
//                   <div className="d-flex justify-content-between align-items-start mb-1">
//                     <div className="ms-0">
//                       <h6 className="fw-bold mb-0 m-0" style={{ fontSize: "16px", color: "#000" }}>{pos.companyName}</h6>
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
//                     <div className="ms-0">
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
//                       <h6 className="fw-bold mb-0" style={{ color: pos.gain >= 0 ? "green" : "red" }}>
//                         {pos.gain >= 0 ? "+" : "-"}₹{formatAmount(Math.abs(pos.gain))}
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
      <Container className="py-4 mb-5">
        {/* Greeting */}
        <div className="d-flex align-items-center mb-3">
          <Image src="https://cdn-icons-png.flaticon.com/512/219/219970.png" roundedCircle width="45" height="45" className="me-2" />
          <h5 className="mb-0">Hi {user?.name || "Trader"} 👋</h5>
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

        {/* Positions as Cards */}DFY7H
        <div className="positions-list">
          {loading ? (
            <div className="text-center p-2"><Spinner animation="border" /></div>
          ) : filteredPositions.length === 0 ? (
            <Card className="shadow-sm border-0 p-2 text-center mb-2">
              <p className="mt-2 text-muted">No Positions Found for Selected Date</p>
            </Card>
          ) : (
            filteredPositions.map((pos) => (
              <Card key={pos._id} className="shadow-sm border-0 py-2 ps-0 pe-2 mb-2" style={{ minHeight: "75px" }}>
                <Card.Body className="py-1 ps-0 pe-1">
                  {/* Top: Company Name + Date + Qty */}
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <div className="ms-0">
                      <h6 className="fw-bold mb-0 m-0" style={{ fontSize: "16px", color: "#000" }}>{pos.companyName}</h6>
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
                    <div style={{ marginLeft: "23px" }}>
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
