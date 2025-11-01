import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndCondition = () => {
  return (
    <div>
      {/* 🟦 Header Section */}
      <div className="bg-light py-4 text-center">
        <h3 className="fw-bold">Terms And Condition</h3>
        <p className="text-muted">
          Home / <span className="text-dark">Terms And Condition</span>
        </p>
      </div>

      {/* 🟦 Blue strip below header */}
      <div className="bg-primary text-white py-2 px-3 fw-semibold">
        <marquee scrollamount="5">
          We deal in all type of services like demat handling, demat opening, PMS etc.
        </marquee>
      </div>

      {/* 🟦 Main Content */}
      <div className="container my-5">
        <ul className="fs-5">
          <li>Minimum investment Indian 10000x rupee.</li>
          <li>Our accuracy stand above 80–90% in the intraday basis.</li>
          <li>Your services period stand for 30 working days.</li>
          <li>
            Loss recovery guarantee plan guaranteed recovery by the company within days.
          </li>
          <li>
            Company settlement monthly withdrawal. Weekly withdrawal and day to day withdrawal.
          </li>
          <li>
            Investment in stock and commodity market subject to risk.
          </li>
          <li>For other information please kindly contact me.</li>
        </ul>
      </div>

  
    </div>
  );
};

export default TermsAndCondition;
