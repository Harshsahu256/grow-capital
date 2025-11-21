 
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "../assets/about1.png";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  const bannerContainer = {
    backgroundColor: "#002b5b",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "relative",
    height: "45px",
    display: "flex",
    alignItems: "center",
  };

  const scrollingText = {
    display: "inline-block",
    paddingRight: "50px",
    fontWeight: 600,
    color: "white",
    fontSize: "17px",
  };

  return (
    <div className="about-page">
      <style>
        {`
          @keyframes scrollSmooth {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-content {
            display: inline-block;
            white-space: nowrap;
            animation: scrollSmooth 20s linear infinite;
          }

          /* Custom text styling */
          .about-text {
            text-align: justify;
            line-height: 1.8;
          }

          /* Center align for small screens */
          @media (max-width: 768px) {
            .about-text {
              text-align: center;
            }
          }
        `}
      </style>
         {/* 🟦 Page Header Section */}
<section className="py-3 mt-3" >
  <div className="container">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      {/* Left: Title */}
      <h4 className="fw-bold mb-0 text-dark">About Us</h4>

      {/* Right: Breadcrumb */}
      <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
        <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
          <li className="breadcrumb-item">
            <a href="/" className="text-primary text-decoration-none fw-semibold">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active fw-semibold" aria-current="page">
            About Us
          </li>
        </ol>
      </nav>
    </div>
  </div>
</section>

    {/* 🟦 Blue strip below header */}
    <div
  style={{ backgroundColor: "#002b5b", color: "white" }}
  className="py-2 px-3 fw-semibold"
>
  <marquee scrollamount="5">
    We are SEBI registered. And We provides all type of services like demat handling , demat opening , PMS etc.
  </marquee>
</div>


      {/* 🟩 About Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          

          <ul className="fs-6 about-text list-unstyled">
            <Fade direction="up" triggerOnce delay={100}>
              <li className="mb-3">
                Stock Market Investing by Grow Capital is an Investment Advisory Company providing
                recommendations for Stocks—Cash and F&O traded in NSE & BSE,
                commodities including bullions, metals, and agro-commodities
                traded in MCX, NCDEX.
              </li>
            </Fade>
            <Fade direction="up" triggerOnce delay={200}>
              <li className="mb-3">
                We also provide weekly & daily newsletters to prepare you for
                trading; we also have services like FOREX Calls & Commodity Calls
                for Commodity Comdex International Exchange.
              </li>
            </Fade>
            <Fade direction="up" triggerOnce delay={300}>
              <li className="mb-3">
                We provide recommendations live through SMS. We know how
                important instant delivery is in this business, so we have the
                best instant SMS facility ensuring efficient message delivery
                without delay.
              </li>
            </Fade>
            <Fade direction="up" triggerOnce delay={400}>
              <li className="mb-3">
                Any problem with the mobile network, technical fault, or
                maintenance messaging will be stopped temporarily.
              </li>
            </Fade>
            <Fade direction="up" triggerOnce delay={500}>
              <li>
                We offer a diversified range of services based on the investor’s
                needs. We assure more than 90% accuracy in our recommendations
                and provide customer support round the clock.
              </li>
            </Fade>
          </ul>
        </div>
      </section>

      {/* 🟦 Our Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6 text-center">
              <Slide direction="left" triggerOnce>
                <img
                  src={aboutImg}
                  alt="Our Team"
                  className="img-fluid rounded shadow-lg"
                />
              </Slide>
            </div>
            <div className="col-md-6">
              <Slide direction="right" triggerOnce>
                <h3 className="fw-bold mb-3 text-center text-md-start text-uppercase">
                  Our Team
                </h3>
                <p className="about-text text-secondary">
                  Our team consists of highly qualified & experienced analysts
                  who are skilled and impeccable in their analysis. Using their
                  experience, skills, and latest software tools, they predict
                  movements in the world market with high accuracy. As a result,
                  using our tips, our members can increase their portfolio with
                  confidence.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </section>

      {/* 🟨 Our Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4 flex-md-row-reverse">
            <div className="col-md-6 text-center">
              <Slide direction="right" triggerOnce>
                <img
                  src={aboutImg}
                  alt="Our Values"
                  className="img-fluid rounded shadow-lg"
                />
              </Slide>
            </div>
            <div className="col-md-6">
              <Slide direction="left" triggerOnce>
                <h3 className="fw-bold mb-3 text-center text-md-start text-uppercase">
                  Our Values
                </h3>
                <p className="about-text mb-2">
                  <strong>Our Mission:</strong> To provide a trusted information
                  resource to the business community across the globe.
                </p>
                <p className="about-text mb-0">
                  <strong>Our Vision:</strong> To have a reliable global presence
                  by catering services to traders of all major exchanges.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
