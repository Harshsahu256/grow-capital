

import React from "react";
import { Container } from "react-bootstrap";

const Services = () => {
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
      <h4 className="fw-bold mb-0 text-dark">Services</h4>

      {/* Right: Breadcrumb */}
      <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
        <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
          <li className="breadcrumb-item">
            <a href="/" className="text-primary text-decoration-none fw-semibold">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active fw-semibold" aria-current="page">
           Services
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
        {/* <h2 className="fw-bold mb-4">Services</h2> */}

    

        <section className="mb-5 mt-4">
          <h5 className="fw-bold">Equity</h5>
          <p>
            Grow Capital provides a wide variety of services in the Equity Market, suitable for
            investors. Equity represents ownership in a company, allowing investors to share in
            profits and growth through share trading on NSE and BSE.
          </p>
        </section>

        <section className="mb-5">
          <h5 className="fw-bold">Commodity</h5>
          <p>
            Grow Capital provides wide-ranging services in the Commodity Market, enabling clients to
            trade in metals, agro-products, and energy sectors. We help investors diversify and
            manage risks effectively.
          </p>
        </section>

        <section>
          <h5 className="fw-bold">Derivative</h5>
          <p>
            Grow Capital offers Derivative Market services for hedging risks or speculating on price
            movements. Our team provides guidance on futures, options, and index-based contracts to
            maximize portfolio performance.
          </p>
        </section>
      </Container>
    </>
  );
};

export default Services;
