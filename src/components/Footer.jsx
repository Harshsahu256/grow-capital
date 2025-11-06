// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer
//       style={{
//         backgroundColor: "#1b1f24",
//         color: "#ccc",
//         fontSize: "15px",
//         lineHeight: "1.7",
//       }}
//     >
//       <Container className="pt-5 pb-4">
//         <Row>
//           {/* Left section */}
//           <Col md={4}>
//             <div className="mb-3">
//               <img
//                 src="/assets/logo.png"
//                 alt="STOCK MARKET INVESTING BY GROW CAPITAL"
//                 style={{ width: "180px", marginBottom: "15px" }}
//               />
//             </div>
//             <p>
//               STOCK MARKET INVESTING BY GROW CAPITAL is an Investment Advisory Company basically providing
//               recommendations for Stocks - Cash and F&O traded in NSE & BSE,
//               commodities including bullions, metals and agro-commodities traded
//               in MCX, NCDEX.
//             </p>
//           </Col>

//           {/* Middle section */}
//           <Col md={4}>
//             <h6 className="text-light mb-3">Useful Links</h6>
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               <li>
//                 <a href="#" style={{ color: "#9aa0a6", textDecoration: "none" }}>
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" style={{ color: "#9aa0a6", textDecoration: "none" }}>
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" style={{ color: "#9aa0a6", textDecoration: "none" }}>
//                   Money Control
//                 </a>
//               </li>
//               <li>
//                 <a href="#" style={{ color: "#9aa0a6", textDecoration: "none" }}>
//                   Economic Times
//                 </a>
//               </li>
//               <li>
//                 <a href="#" style={{ color: "#9aa0a6", textDecoration: "none" }}>
//                   Terms & Conditions
//                 </a>
//               </li>
//             </ul>
//           </Col>

//           {/* Right section */}
//           <Col md={4}>
//             <h6 className="text-light mb-3">Contact Details</h6>
//             <p>B-15 Subhash Nagar, Bhopal - 462001</p>
//             <p>
//               <strong>Phone:</strong>{" "}
//               <a
//                 href="tel:8962315503"
//                 style={{ color: "#9aa0a6", textDecoration: "none" }}
//               >
//                 8962315503
//               </a>
//             </p>
//             <p>
//               <strong>Email:</strong>{" "}
//               <a
//                 href="mailto:info@smsgc.in"
//                 style={{ color: "#9aa0a6", textDecoration: "none" }}
//               >
//                 info@smsgc.in
//               </a>
//             </p>

//             <div className="d-flex gap-3 mt-3">
//               <a
//                 href="#"
//                 style={{
//                   color: "#9aa0a6",
//                   fontSize: "20px",
//                   textDecoration: "none",
//                 }}
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="#"
//                 style={{
//                   color: "#9aa0a6",
//                   fontSize: "20px",
//                   textDecoration: "none",
//                 }}
//               >
//                 <FaInstagram />
//               </a>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <div
//         style={{
//           backgroundColor: "#000",
//           color: "#ccc",
//           textAlign: "center",
//           padding: "12px 0",
//           fontSize: "14px",
//         }}
//       >
//         © Copyright{" "}
//         <span style={{ color: "#fff", fontWeight: "600" }}>Aasmo Digital PVT.LTD</span>.
//         All Rights Reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from '../assets/navbar.png'



const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1b1f24",
        color: "#ccc",
        fontSize: "15px",
        lineHeight: "1.7",
      }}
    >
      <Container className="py-5">
        <Row className="gy-4 align-items-start text-center text-md-start">
          {/* 🔹 Left Section */}
        {/* 🔹 Left Section */}
<Col md={4}>
  <div
    className="d-flex justify-content-center justify-content-md-start"
    style={{
      position: "relative",
      top: "-25px", // 👈 logo ko top par uthane ke liye
    }}
  >
    <img
      src={Logo}
      alt="STOCK MARKET INVESTING BY GROW CAPITAL"
      style={{
        width: "250px", // 👈 size chhota kar diya (150 → 110)
        height: "auto",
      }}
    />
  </div>
  <p
    className="px-md-0 px-3 mt-2"
    style={{ fontSize: "14px", lineHeight: "1.6", color: "#ccc" }}
  >
    Stock Market Investing by Grow Capital is a financial advisory firm offering expert recommendations
    on stock cash and F&O segments listed on NSE and BSE, along with
    commodities such as bullion, metals, and agro-products traded on MCX and NCDEX.
  </p>
</Col>

          {/* 🔹 Middle Section */}
          <Col md={4}>
            <h6 className="text-light mb-3 fw-semibold">Useful Links</h6>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: "2",
              }}
            >
              {["Home", "Services", "Money Control", "Economic Times", "Terms & Conditions"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      style={{
                        color: "#9aa0a6",
                        textDecoration: "none",
                        transition: "0.3s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.color = "#0d6efd")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.color = "#9aa0a6")
                      }
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </Col>

          {/* 🔹 Right Section */}
          <Col md={4}>
            <h6 className="text-light mb-3 fw-semibold">Contact Details</h6>
            <p className="mb-2">A-45 Shivaji Nagar, Bhopal – 462003</p>
            <p className="mb-1">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:8962315503"
                style={{
                  color: "#9aa0a6",
                  textDecoration: "none",
                }}
              >
              8352345303
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:capitalstock.in"
                style={{
                  color: "#9aa0a6",
                  textDecoration: "none",
                }}
              >
              capitalstock.in
              </a>
            </p>

            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a
                href="#"
                style={{
                  color: "#9aa0a6",
                  fontSize: "25px",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                onMouseOut={(e) => (e.target.style.color = "#9aa0a6")}
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                style={{
                  color: "#9aa0a6",
                  fontSize: "25px",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#d63384")}
                onMouseOut={(e) => (e.target.style.color = "#9aa0a6")}
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* 🔹 Bottom Bar */}
      <div
        style={{
          backgroundColor: "#000",
          color: "#ccc",
          textAlign: "center",
          padding: "12px 0",
          fontSize: "14px",
          borderTop: "1px solid #222",
        }}
      >
      </div>
    </footer>
  );
};

export default Footer;
