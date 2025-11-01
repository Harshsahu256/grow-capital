import React from "react";
import { Container } from "react-bootstrap";

const Insurance = () => {
      const bannerContainer = {
    backgroundColor: "#002b5b",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "relative",
    height: "45px",
    display: "flex",
    alignItems: "center",
  };

  const scrollingWrapper = {
    display: "inline-block",
    whiteSpace: "nowrap",
  };

  const scrollingText = {
    display: "inline-block",
    paddingRight: "50px", // space between repeated texts
    fontWeight: 600,
    color: "white",
    fontSize: "17px",
  };
  return (
    <>
     <section className="py-3 mt-3" >
  <div className="container">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      {/* Left: Title */}
      <h4 className="fw-bold mb-0 text-dark">Insurance</h4>

      {/* Right: Breadcrumb */}
      <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
        <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
          <li className="breadcrumb-item">
            <a href="/" className="text-primary text-decoration-none fw-semibold">
              Services
            </a>
          </li>
          <li className="breadcrumb-item active fw-semibold" aria-current="page">
         Insurance
          </li>
        </ol>
      </nav>
    </div>
  </div>
</section>
    <div
  style={{ backgroundColor: "#002b5b", color: "white" }}
  className="py-2 px-3 fw-semibold"
>
  <marquee scrollamount="5">
    We are SEBI registered. And We provides all type of services like demat handling , demat opening , PMS etc.
  </marquee>
</div>

    
   
    <Container className="py-5">
     
    

      <ul>
        <li>Grow Capital is an Investment Advisory Company providing recommendations for Stocks, F&O traded in NSE & BSE, commodities including bullions, metals, and agro-commodities traded in MCX, NCDEX.</li>
        <li>We also provide weekly & daily newsletters for trading preparation, and services like FOREX Calls & Commodity Calls.</li>
        <li>We provide recommendations live through SMS, ensuring instant delivery without delay.</li>
        <li>Any technical or network issues may cause temporary message delivery pause.</li>
        <li>We assure more than 90% accuracy in our recommendations and provide 24/7 assistance via online and telephonic support.</li>
      </ul>
    </Container>
     </>
  );
};

export default Insurance;
