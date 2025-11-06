// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";
// import { Container, Button } from "react-bootstrap";
// import homeImage from "../assets/home.jpg";
// import WhyGrowCapital from "./WhyGrowCapital";
// import WhyChooseUs from "./WhyChooseUs";
// import ContactUs from "./ContactUs";
// import { useNavigate } from "react-router-dom";
// import LiveTicker from "./LiveTicker";
// const Home = () => {
//   const navigate = useNavigate();
//   const sectionStyle = {
//     backgroundImage: `url(${homeImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh",
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     color: "white",
//     overflow: "hidden",
//   };

//   const overlayStyle = {
//     position: "absolute",
//     inset: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   };

//   const textStyle = {
//     position: "relative",
//     zIndex: 2,
//   };

//   return (
//     <>
//       <section style={sectionStyle}>
//         <div style={overlayStyle}></div>

//         <Container>
//           <div style={textStyle}>
//             {/* 🔹 Heading Animation */}
//             <h1
//               className="fw-bold animate__animated animate__fadeInDown animate__slow"
//               style={{
//                 letterSpacing: "1px",
//                 textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
//               }}
//             >
//               Welcome to{" "}
//               <span
//                 className="text-info animate__animated animate__pulse animate__infinite"
//                 style={{
//                   fontWeight: "700",
//                   textShadow: "0 0 10px rgba(0,255,255,0.7)",
//                 }}
//               >
//                 STOCK MARKET INVESTING BY GROW CAPITAL
//               </span>
//             </h1>

//             {/* 🔹 Sub Text */}
//             <p
//               className="mt-3 fs-5 animate__animated animate__fadeInUp animate__delay-1s"
//               style={{
//                 color: "#ddd",
//                 maxWidth: "700px",
//                 margin: "10px auto",
//                 lineHeight: "1.6",
//               }}
//             >
//               Your trusted partner in financial growth and investment success.
//             </p>

//             {/* 🔹 Animated Button */}
//             <Button
//               variant="info"
//               size="lg"
//               className="mt-4 fw-bold text-white animate__animated animate__zoomIn animate__delay-2s"
//               style={{
//                 transition: "all 0.3s ease-in-out",
//                 boxShadow: "0 4px 15px rgba(0, 255, 255, 0.4)",
//                 border: "none",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "scale(1.1)";
//                 e.target.style.boxShadow = "0 6px 20px rgba(0,255,255,0.7)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "scale(1)";
//                 e.target.style.boxShadow = "0 4px 15px rgba(0,255,255,0.4)";
//               }}
//                onClick={() => navigate("/signup")}
//             >
//               GET STARTED
//             </Button>
//           </div>
//         </Container>
       
//       </section>
//       <LiveTicker></LiveTicker>
//        <WhyGrowCapital/>
//        <WhyChooseUs/>
//        <ContactUs/>
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "animate.css";
// import { Container, Button } from "react-bootstrap";
// import homeImage from "../assets/home.jpg";
// import WhyGrowCapital from "./WhyGrowCapital";
// import WhyChooseUs from "./WhyChooseUs";
// import ContactUs from "./ContactUs";
// import { useNavigate } from "react-router-dom";
// import LiveTicker from "./LiveTicker";

// const Home = () => {
//   const navigate = useNavigate();

//   const sectionStyle = {
//     backgroundImage: `url(${homeImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "70vh", // 🔹 Reduced height
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     color: "white",
//     overflow: "hidden",
//   };

//   // 🟢 Light gradient overlay instead of dark blur
//   const overlayStyle = {
//     position: "absolute",
//     inset: 0,
//     background:
//       "linear-gradient(to right, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.1) 80%)",
//   };

//   const textContainerStyle = {
//     position: "relative",
//     zIndex: 2,
//     maxWidth: "600px",
//     textAlign: "left",
//     marginLeft: "60px",
//   };

//   return (
//     <>
//       <section style={sectionStyle}>
//         <div style={overlayStyle}></div>

//         <Container>
//           <div style={textContainerStyle}>
//             {/* 🔹 Single line heading */}
//             <h1
//               className="animate__animated animate__fadeInDown"
//               style={{
//                 fontSize: "3rem",
//                 fontWeight: "700",
//                 color: "#fff",
//                 textShadow: "0 0 10px rgba(0,0,0,0.6)",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Welcome to{" "}
//               <span
//                 style={{
//                   color: "#00cfff",
//                   fontWeight: "800",
//                 }}
//                 className="animate__animated animate__pulse animate__infinite"
//               >
//                 STOCK MARKET INVESTING BY GROW CAPITAL
//               </span>
//             </h1>

//             {/* 🔹 CTA Button */}
//             <Button
//               variant="info"
//               size="lg"
//               className="fw-bold text-white animate__animated animate__fadeInUp animate__delay-1s"
//               style={{
//                 backgroundColor: "#00cfff",
//                 border: "none",
//                 fontSize: "1rem",
//                 padding: "10px 26px",
//                 borderRadius: "6px",
//                 marginTop: "20px",
//                 boxShadow: "0 0 15px rgba(0,207,255,0.5)",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "scale(1.08)";
//                 e.target.style.boxShadow = "0 0 25px rgba(0,207,255,0.8)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "scale(1)";
//                 e.target.style.boxShadow = "0 0 15px rgba(0,207,255,0.5)";
//               }}
//               onClick={() => navigate("/signup")}
//             >
//               GET STARTED
//             </Button>
//           </div>
//         </Container>
//       </section>

//       <LiveTicker />
//       <WhyGrowCapital />
//       <WhyChooseUs />
//       <ContactUs />
//     </>
//   );
// };

// export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Container, Button } from "react-bootstrap";
import homeImage from "../assets/home.jpg";
import WhyGrowCapital from "./WhyGrowCapital";
import WhyChooseUs from "./WhyChooseUs";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router-dom";
import LiveTicker from "./LiveTicker";

const Home = () => {
  const navigate = useNavigate();

  const sectionStyle = {
    backgroundImage: `url(${homeImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    position: "relative",
    display: "flex",
    justifyContent: "center", // center horizontally
    alignItems: "center", // center vertically
    color: "white",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.35)", // light transparent overlay
  };

  const textContainerStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <>
      <section style={sectionStyle}>
        <div style={overlayStyle}></div>

        <Container>
          <div style={textContainerStyle}>
            {/* Heading Part */}
            <h1
              className="animate__animated animate__fadeInDown"
              style={{
                fontSize: "2.5rem",
                fontWeight: "600",
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              Welcome to
            </h1>

            <h1
              className="animate__animated animate__fadeInDown animate__delay-1s"
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                color: "#00cfff",
                textShadow: "0 0 15px rgba(0,207,255,0.6)",
                marginBottom: "15px",
              }}
            >
              STOCK MARKET INVESTING BY GROW CAPITAL
            </h1>

            {/* Subtext */}
            <p
              className="animate__animated animate__fadeInUp animate__delay-2s"
              style={{
                fontSize: "1.1rem",
                color: "#f1f1f1",
                maxWidth: "600px",
                margin: "0 auto 25px auto",
              }}
            >
              Your trusted partner in financial growth and investment success.
            </p>

            {/* Button */}
            <Button
              variant="info"
              size="lg"
              className="fw-bold text-white animate__animated animate__fadeInUp animate__delay-3s"
              style={{
                backgroundColor: "#00cfff",
                border: "none",
                fontSize: "1.2rem",
                padding: "12px 30px",
                borderRadius: "8px",
                boxShadow: "0 0 20px rgba(0,207,255,0.6)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.08)";
                e.target.style.boxShadow = "0 0 30px rgba(0,207,255,0.8)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 0 20px rgba(0,207,255,0.6)";
              }}
              onClick={() => navigate("/signup")}
            >
              GET STARTED
            </Button>
          </div>
        </Container>
      </section>

      <LiveTicker />
      <WhyGrowCapital />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
};

export default Home;
