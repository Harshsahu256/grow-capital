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
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const textStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <>
      <section style={sectionStyle}>
        <div style={overlayStyle}></div>

        <Container>
          <div style={textStyle}>
            {/* 🔹 Heading Animation */}
            <h1
              className="fw-bold animate__animated animate__fadeInDown animate__slow"
              style={{
                letterSpacing: "1px",
                textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              Welcome to{" "}
              <span
                className="text-info animate__animated animate__pulse animate__infinite"
                style={{
                  fontWeight: "700",
                  textShadow: "0 0 10px rgba(0,255,255,0.7)",
                }}
              >
                Grow Capital
              </span>
            </h1>

            {/* 🔹 Sub Text */}
            <p
              className="mt-3 fs-5 animate__animated animate__fadeInUp animate__delay-1s"
              style={{
                color: "#ddd",
                maxWidth: "700px",
                margin: "10px auto",
                lineHeight: "1.6",
              }}
            >
              Your trusted partner in financial growth and investment success.
            </p>

            {/* 🔹 Animated Button */}
            <Button
              variant="info"
              size="lg"
              className="mt-4 fw-bold text-white animate__animated animate__zoomIn animate__delay-2s"
              style={{
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 4px 15px rgba(0, 255, 255, 0.4)",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0 6px 20px rgba(0,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 15px rgba(0,255,255,0.4)";
              }}
               onClick={() => navigate("/signup")}
            >
              GET STARTED
            </Button>
          </div>
        </Container>
       
      </section>
      <LiveTicker></LiveTicker>
       <WhyGrowCapital/>
       <WhyChooseUs/>
       <ContactUs/>
    </>
  );
};

export default Home;
