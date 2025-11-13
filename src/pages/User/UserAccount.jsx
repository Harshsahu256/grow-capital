
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import BottomNavbar from "./BottomNavbar";
// import { useNavigate } from "react-router-dom";
// import { getMyTotalAmount } from "../../services/apiService";
// import WithdrawCard from "./WithdrawCard";

// const UserAccount = () => {
//   const navigate = useNavigate();
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [showWithdrawModal, setShowWithdrawModal] = useState(false);


  
//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const data = await getMyTotalAmount();
//         setTotalAmount(data.totalAmount || 0);
//       } catch (error) {
//         console.error("Failed to fetch total amount:", error);
//       }
//     };
//     fetchTotalAmount();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   const goToContact = () => {
//     navigate("/#contact");
//     setTimeout(() => {
//       const section = document.getElementById("contact");
//       if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 400);
//   };

//   const goToAbout = () => {
//     navigate("/about");
//     setTimeout(() => window.scrollTo(0, 0), 100);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <>
//       <div className="container py-3" style={{ backgroundColor: "#f7f8fc", minHeight: "100vh" }}>
        
//         {/* ✅ LEFT ALIGNED MAIN HEADING */}
//         <h5 className="fw-bold mb-3 text-start">Your Account</h5>

//         {/* ✅ TRADING BALANCE */}
//         <div className="card shadow-sm border-0 mb-3">
//           <div className="card-body">
            
//             {/* ✅ LEFT ALIGNED */}
//             <h6 className="fw-bold text-secondary text-start">Trading Balance</h6>
//             <h5 className="fw-bold mt-2 text-start">₹{totalAmount}</h5>

//             <div className="d-flex mt-3 gap-3">
//               <button
//                 className="btn btn-outline-primary flex-fill"
//                 onClick={() => setShowWithdrawModal(true)}
//               >
//                 WITHDRAW
//               </button>
//               <button className="btn btn-primary flex-fill" onClick={() => navigate("/deposit")}>
//                 ADD FUNDS
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* --- START OF NEWLY ADDED SECTION (with updated Bootstrap Icon for Stock Pledging) --- */}
//         <div className="mb-3">
//           <div className="row g-3">
//             <div className="col-6">
//               <div className="card shadow-sm border-0 h-100">
//                 <div className="card-body d-flex flex-column align-items-start">
//                   {/* Updated with a new Bootstrap Icon: Graph Up Arrow (represents growth/stocks) */}
//                   <i className="bi bi-graph-up-arrow fs-3 text-primary mb-2"></i> 
//                   <h6 className="fw-bold text-start">Stock Pledging</h6>
//                   <p className="small text-muted text-start mb-0">Pledge stocks you hold to increase trading balance</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="card shadow-sm border-0 h-100">
//                 <div className="card-body d-flex flex-column align-items-start">
//                   {/* This icon remains the same as per your previous feedback */}
//                   <i className="bi bi-file-earmark-richtext-fill fs-3 text-info mb-2"></i> 
//                   <h6 className="fw-bold text-start">MTF Pledge</h6>
//                   <p className="small text-muted text-start mb-0">Buy upto 4x stocks at just 0.049% interest per day</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button className="btn btn-primary w-100 mt-3" onClick={() => navigate("/transaction-history")}>
//             VIEW TRANSACTION HISTORY
//           </button>
//         </div>
//         {/* --- END OF NEWLY ADDED SECTION --- */}


//         {/* ✅ DASH SECTION */}
//         <div className="card shadow-sm border-0 mb-3">
//           <div className="card-body">
            
//             {/* ✅ LEFT ALIGNED */}
//             <h6 className="fw-bold text-primary text-start">DASH</h6>
//             <p className="small text-muted text-start">
//               Reports and Statements Modern back office for investors and traders
//             </p>

//             <div className="list-group">
//               <div className="list-group-item border-0 d-flex align-items-start text-start">
//                 <i className="bi bi-file-earmark-text fs-5 text-primary me-3 mt-1"></i>
//                 <div>
//                   <strong>Statement / Ledger</strong>
//                   <div className="small text-muted">
//                     Your Transactions with Stock Market Investing by Grow Capital
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="list-group-item border-0 d-flex align-items-start text-start"
//                 onClick={() => navigate("/account")}
//                 style={{ cursor: "pointer" }}
//               >
//                 <i className="bi bi-wallet2 fs-5 text-primary me-3 mt-1"></i>
//                 <div>
//                   <strong>Trades and Charges</strong>
//                   <div className="small text-muted">All your charges in one place</div>
//                 </div>
//               </div>

//            <div
//   className="list-group-item border-0 d-flex align-items-start text-start"
//   onClick={() => navigate("/Dashboard")}
//   style={{ cursor: "pointer" }}
// >
//   <i className="bi bi-graph-up fs-5 text-primary me-3 mt-1"></i>
//   <div>
//     <strong>Profit and Loss</strong>
//     <div className="small text-muted">
//       Analyse profit and loss for your trade
//     </div>
//   </div>
// </div>

//             </div>
//           </div>
//         </div>

//         {/* ✅ HELP SECTION */}
//         <div className="card shadow-sm border-0 mb-3">
//           <div className="card-body">
            
//             {/* ✅ LEFT ALIGNED */}
//             <h6 className="fw-bold text-primary text-start">How Can We Help You?</h6>

//             <div className="list-group">
//               <div
//                 className="list-group-item border-0 d-flex align-items-center"
//                 onClick={goToContact}
//                 style={{ cursor: "pointer" }}
//               >
//                 <i className="bi bi-send fs-5 text-primary me-3"></i>
//                 <strong>Contact Us</strong>
//               </div>

//               <div
//                 className="list-group-item border-0 d-flex align-items-center"
//                 onClick={goToContact}
//                 style={{ cursor: "pointer" }}
//               >
//                 <i className="bi bi-telephone fs-5 text-primary me-3"></i>
//                 <strong>Call Us</strong>
//               </div>

//               <div
//                 className="list-group-item border-0 d-flex align-items-center"
//                 onClick={scrollToTop}
//                 style={{ cursor: "pointer" }}
//               >
//                 <i className="bi bi-credit-card fs-5 text-primary me-3"></i>
//                 <strong>A third item</strong>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ ABOUT + LOGOUT */}
//         <div className="card shadow-sm border-0 mb-3">
//           <div className="card-body">
//             <div className="list-group">
//               <div
//                 className="list-group-item border-0 d-flex align-items-center"
//                 onClick={goToAbout}
//                 style={{ cursor: "pointer" }}
//               >
//                 <i className="bi bi-book fs-5 text-primary me-3"></i>
//                 <strong>About Us</strong>
//               </div>

//               <div
//                 className="list-group-item border-0 d-flex align-items-center"
//                 onClick={handleLogout}
//                 style={{ cursor: "pointer" }}
//               >
//                 <i className="bi bi-power fs-5 text-danger me-3"></i>
//                 <strong>Logout</strong>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ SOCIAL SECTION */}
//       <div className="text-center mb-5">
//   <h6 className="fw-bold">Join Our Community</h6>

//   <div className="d-flex justify-content-center gap-3 mt-2">
//     <i className="bi bi-instagram fs-4"></i>
//     <i className="bi bi-facebook fs-4"></i>
//     <i className="bi bi-youtube fs-4"></i>
//     <i className="bi bi-linkedin fs-4"></i>
//     <i className="bi bi-twitter-x fs-4"></i>
//   </div>
// </div>

//       </div>

//       <BottomNavbar />

//       {showWithdrawModal && (
//         <div style={modalOverlayStyle}>
//           <WithdrawCard onClose={() => setShowWithdrawModal(false)} />
//         </div>
//       )}
//     </>
//   );
// };

// const modalOverlayStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1000,
// };

// export default UserAccount;


import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BottomNavbar from "./BottomNavbar";
import { useNavigate } from "react-router-dom";
import { getMyTotalAmount } from "../../services/apiService";
import WithdrawCard from "./WithdrawCard";
import StatementSummaryPopup from "./StatementSummaryPopup"; // ✅ Import the new component

const UserAccount = () => {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showStatementSummaryPopup, setShowStatementSummaryPopup] = useState(false); // ✅ New state for Statement Summary

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const data = await getMyTotalAmount();
        setTotalAmount(data.totalAmount || 0);
      } catch (error) {
        console.error("Failed to fetch total amount:", error);
        setTotalAmount(0); // Set to 0 on error
      }
    };
    fetchTotalAmount();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const goToContact = () => {
    navigate("/#contact");
    setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  };

  const goToAbout = () => {
    navigate("/about");
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container py-3" style={{ backgroundColor: "#f7f8fc", minHeight: "100vh" }}>

        {/* ✅ LEFT ALIGNED MAIN HEADING */}
        <h5 className="fw-bold mb-3 text-start">Your Account</h5>

        {/* ✅ TRADING BALANCE */}
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-body">

            {/* ✅ LEFT ALIGNED */}
            <h6 className="fw-bold text-secondary text-start">Trading Balance</h6>
            <h5 className="fw-bold mt-2 text-start">₹{totalAmount}</h5>

            <div className="d-flex mt-3 gap-3">
              <button
                className="btn btn-outline-primary flex-fill"
                onClick={() => setShowWithdrawModal(true)}
              >
                WITHDRAW
              </button>
              <button className="btn btn-primary flex-fill" onClick={() => navigate("/deposit")}>
                ADD FUNDS
              </button>
            </div>
          </div>
        </div>

        {/* --- START OF NEWLY ADDED SECTION (with updated Bootstrap Icon for Stock Pledging) --- */}
        <div className="mb-3">
          <div className="row g-3">
            <div className="col-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column align-items-start">
                  {/* Updated with a new Bootstrap Icon: Graph Up Arrow (represents growth/stocks) */}
                  <i className="bi bi-graph-up-arrow fs-3 text-primary mb-2"></i>
                  <h6 className="fw-bold text-start">Stock Pledging</h6>
                  <p className="small text-muted text-start mb-0">Pledge stocks you hold to increase trading balance</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column align-items-start">
                  {/* This icon remains the same as per your previous feedback */}
                  <i className="bi bi-file-earmark-richtext-fill fs-3 text-info mb-2"></i>
                  <h6 className="fw-bold text-start">MTF Pledge</h6>
                  <p className="small text-muted text-start mb-0">Buy upto 4x stocks at just 0.049% interest per day</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary w-100 mt-3" onClick={() => navigate("/transaction-history")}>
            VIEW TRANSACTION HISTORY
          </button>
        </div>
        {/* --- END OF NEWLY ADDED SECTION --- */}


        {/* ✅ DASH SECTION */}
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-body">

            {/* ✅ LEFT ALIGNED */}
            <h6 className="fw-bold text-primary text-start">DASH</h6>
            <p className="small text-muted text-start">
              Reports and Statements Modern back office for investors and traders
            </p>

            <div className="list-group">
              <div
                className="list-group-item border-0 d-flex align-items-start text-start"
                onClick={() => setShowStatementSummaryPopup(true)} // ✅ Add onClick handler here
                style={{ cursor: "pointer" }} // ✅ Add cursor pointer for better UX
              >
                <i className="bi bi-file-earmark-text fs-5 text-primary me-3 mt-1"></i>
                <div>
                  <strong>Statement / Ledger</strong>
                  <div className="small text-muted">
                    Your Transactions with Stock Market Investing by Grow Capital
                  </div>
                </div>
              </div>

              <div
                className="list-group-item border-0 d-flex align-items-start text-start"
                onClick={() => navigate("/account")}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-wallet2 fs-5 text-primary me-3 mt-1"></i>
                <div>
                  <strong>Trades and Charges</strong>
                  <div className="small text-muted">All your charges in one place</div>
                </div>
              </div>

           <div
  className="list-group-item border-0 d-flex align-items-start text-start"
  onClick={() => navigate("/Dashboard")}
  style={{ cursor: "pointer" }}
>
  <i className="bi bi-graph-up fs-5 text-primary me-3 mt-1"></i>
  <div>
    <strong>Profit and Loss</strong>
    <div className="small text-muted">
      Analyse profit and loss for your trade
    </div>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* ✅ HELP SECTION */}
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-body">

            {/* ✅ LEFT ALIGNED */}
            <h6 className="fw-bold text-primary text-start">How Can We Help You?</h6>

            <div className="list-group">
              <div
                className="list-group-item border-0 d-flex align-items-center"
                onClick={goToContact}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-send fs-5 text-primary me-3"></i>
                <strong>Contact Us</strong>
              </div>

              <div
                className="list-group-item border-0 d-flex align-items-center"
                onClick={goToContact}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-telephone fs-5 text-primary me-3"></i>
                <strong>Call Us</strong>
              </div>

              <div
                className="list-group-item border-0 d-flex align-items-center"
                onClick={scrollToTop}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-credit-card fs-5 text-primary me-3"></i>
                <strong>A third item</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ ABOUT + LOGOUT */}
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-body">
            <div className="list-group">
              <div
                className="list-group-item border-0 d-flex align-items-center"
                onClick={goToAbout}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-book fs-5 text-primary me-3"></i>
                <strong>About Us</strong>
              </div>

              <div
                className="list-group-item border-0 d-flex align-items-center"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                <i className="bi bi-power fs-5 text-danger me-3"></i>
                <strong>Logout</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ SOCIAL SECTION */}
      {/* <div className="text-center mb-5">
  <h6 className="fw-bold">Join Our Community</h6>

  <div className="d-flex justify-content-center gap-3 mt-2">
    <i className="bi bi-instagram fs-4"></i>
    <i className="bi bi-facebook fs-4"></i>
    <i className="bi bi-youtube fs-4"></i>
    <i className="bi bi-linkedin fs-4"></i>
    <i className="bi bi-twitter-x fs-4"></i>
  </div>
</div> */}

      </div>

      <BottomNavbar />

      {showWithdrawModal && (
        <div style={modalOverlayStyle}>
          <WithdrawCard onClose={() => setShowWithdrawModal(false)} />
        </div>
      )}

      {/* ✅ Conditionally render StatementSummaryPopup */}
      {showStatementSummaryPopup && (
        <StatementSummaryPopup
          onClose={() => setShowStatementSummaryPopup(false)}
          openingBalance={totalAmount}
        />
      )}
    </>
  );
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

export default UserAccount;