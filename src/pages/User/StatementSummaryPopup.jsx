// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const StatementSummaryPopup = ({ onClose, openingBalance }) => {
//   return (
//     <div style={modalOverlayStyle}>
//       <div className="card shadow-sm border-0" style={popupCardStyle}>
//         <div className="card-header d-flex justify-content-between align-items-center">
//           <h5 className="mb-0 fw-bold">Statement Summary</h5>
//           <button
//             type="button"
//             className="btn-close"
//             aria-label="Close"
//             onClick={onClose}
//           ></button>
//         </div>
//         <div className="card-body">
//           <div className="row g-3">
//             <div className="col-6">
//               <div className="card h-100 border text-center">
//                 <div className="card-body d-flex flex-column justify-content-center">
//                   <h6 className="text-secondary mb-1">Opening Balance</h6>
//                   <h5 className="fw-bold mb-0">₹{openingBalance}</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="card h-100 border text-center">
//                 <div className="card-body d-flex flex-column justify-content-center">
//                   <h6 className="text-secondary mb-1">Closing Balance</h6>
//                   <h5 className="fw-bold mb-0">₹ 00</h5> {/* Hardcoded as requested */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
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
//   zIndex: 1050, // Higher z-index than other modals if any
// };

// const popupCardStyle = {
//   width: "90%", // Adjust width as needed
//   maxWidth: "500px", // Max width for larger screens
//   borderRadius: "8px",
// };

// export default StatementSummaryPopup;
import React, { useEffect, useState } from 'react'; // useState aur useEffect import karein
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const StatementSummaryPopup = ({ onClose, openingBalance }) => {
  const [isAnimating, setIsAnimating] = useState(false); // Animation state

  useEffect(() => {
    // Component mount hone par animation ko trigger karein
    // Ek chota delay (e.g., 50ms) isliye diya gaya hai taki component render ho sake
    // uski initial (off-screen/transparent) state mein, aur fir smoothly animate kare.
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 50);

    // Cleanup function: component unmount hone par timer ko clear karein
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={modalOverlayStyle}>
      <div
        className="card shadow-lg border-0" // Shadow ko thoda aur prominent kiya
        style={{
          ...popupCardStyle,
          // Animation styles ko dynamically apply karein
          transform: isAnimating ? 'translateY(0)' : 'translateY(-50px)', // Top se niche slide karega (-50px se 0px)
          opacity: isAnimating ? 1 : 0, // Transparent se fully opaque hoga
          transition: 'transform 0.4s ease-out, opacity 0.4s ease-out', // Smooth transition effect
        }}
      >
        <div className="card-header d-flex justify-content-between align-items-center" style={popupHeaderStyle}>
          <h5 className="mb-0 fw-bold" style={{ fontSize: '1.25rem' }}>Statement Summary</h5> {/* Header font size badhaya */}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="card-body" style={popupBodyStyle}>
          <div className="row g-3"> {/* Gutter spacing thoda badhaya */}
            <div className="col-6">
              <div className="card h-100 border text-center" style={balanceCardStyle}>
                <div className="card-body d-flex flex-column justify-content-center py-4"> {/* Vertical padding badhaya */}
                  <h6 className="text-secondary mb-1" style={{ fontSize: '0.95rem' }}>Opening Balance</h6> {/* Font size badhaya */}
                  <h5 className="fw-bold mb-0" style={{ fontSize: '1.4rem' }}>₹{openingBalance}</h5> {/* Amount font size badhaya */}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card h-100 border text-center" style={balanceCardStyle}>
                <div className="card-body d-flex flex-column justify-content-center py-4"> {/* Vertical padding badhaya */}
                  <h6 className="text-secondary mb-1" style={{ fontSize: '0.95rem' }}>Closing Balance</h6> {/* Font size badhaya */}
                  <h5 className="fw-bold mb-0" style={{ fontSize: '1.4rem' }}>₹ 00</h5> {/* Hardcoded, amount font size badhaya */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay background ko thoda dark kiya
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1050, // Ensure it's above other elements
};

const popupCardStyle = {
  width: "90%",
  maxWidth: "500px", // ✅ Max width ko badhaya gaya (previous: 380px)
  borderRadius: "10px", // Corners ko thoda aur round kiya
  backgroundColor: "white", // Card ka background white rakha
  boxShadow: "0 8px 16px rgba(0,0,0,0.2)", // Popup ka shadow badhaya
};

const popupHeaderStyle = {
  padding: '15px 25px', // Header padding badhaya
  borderBottom: '1px solid #dee2e6',
  backgroundColor: '#f8f9fa', // Header ko light grey background diya
};

const popupBodyStyle = {
  padding: '25px', // Body padding badhaya
};

const balanceCardStyle = {
  borderRadius: '8px', // Individual balance cards ke corners round kiye
  borderColor: '#e9ecef', // Light border color
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // Balance cards par subtle shadow
};

export default StatementSummaryPopup;