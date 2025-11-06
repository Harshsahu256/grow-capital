

// // import React from "react";
// // import { Container } from "react-bootstrap";

// // const Services = () => {
// //   const bannerContainer = {
// //     backgroundColor: "#002b5b",
// //     overflow: "hidden",
// //     whiteSpace: "nowrap",
// //     position: "relative",
// //     height: "45px",
// //     display: "flex",
// //     alignItems: "center",
// //   };

// //   const scrollingWrapper = {
// //     display: "inline-block",
// //     whiteSpace: "nowrap",
// //   };

// //   const scrollingText = {
// //     display: "inline-block",
// //     paddingRight: "50px", // space between repeated texts
// //     fontWeight: 600,
// //     color: "white",
// //     fontSize: "17px",
// //   };

// //   return (
// //     <>
// //     <section className="py-3 mt-3" >
// //   <div className="container">
// //     <div className="d-flex justify-content-between align-items-center flex-wrap">
// //       {/* Left: Title */}
// //       <h4 className="fw-bold mb-0 text-dark">Services</h4>

// //       {/* Right: Breadcrumb */}
// //       <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
// //         <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
// //           <li className="breadcrumb-item">
// //             <a href="/" className="text-primary text-decoration-none fw-semibold">
// //               Home
// //             </a>
// //           </li>
// //           <li className="breadcrumb-item active fw-semibold" aria-current="page">
// //            Services
// //           </li>
// //         </ol>
// //       </nav>
// //     </div>
// //   </div>
// // </section>
// //     <div
// //   style={{ backgroundColor: "#002b5b", color: "white" }}
// //   className="py-2 px-3 fw-semibold"
// // >
// //   <marquee scrollamount="5">
// //     We are SEBI registered. And We provides all type of services like demat handling , demat opening , PMS etc.
// //   </marquee>
// // </div>

// //       <Container className="py-5">
// //         {/* <h2 className="fw-bold mb-4">Services</h2> */}

    

// //         <section className="mb-5 mt-4">
// //           <h5 className="fw-bold">Equity</h5>
// //           <p>
// //               Prime Capital provides a wide variety of services in the Equity Market, suitable for
// //             investors. Equity represents ownership in a company, allowing investors to share in
// //             profits and growth through share trading on NSE and BSE.
// //           </p>
// //         </section>

// //         <section className="mb-5">
// //           <h5 className="fw-bold">Commodity</h5>
// //           <p>
// //               Prime Capital provides wide-ranging services in the Commodity Market, enabling clients to
// //             trade in metals, agro-products, and energy sectors. We help investors diversify and
// //             manage risks effectively.
// //           </p>
// //         </section>

// //         <section>
// //           <h5 className="fw-bold">Derivative</h5>
// //           <p>
// //               Prime Capital offers Derivative Market services for hedging risks or speculating on price
// //             movements. Our team provides guidance on futures, options, and index-based contracts to
// //             maximize portfolio performance.
// //           </p>
// //         </section>
// //       </Container>
// //     </>
// //   );
// // };

// // export default Services;


// import React from "react";
// import { Container } from "react-bootstrap";

// const Services = () => {
//   return (
//     <>
//       {/* Header Section */}
//       <section className="py-3 mt-3">
//         <Container>
//           <div className="d-flex justify-content-between align-items-center flex-wrap">
//             {/* Left: Title */}
//             <h4 className="fw-bold mb-0 text-dark">Services</h4>

//             {/* Right: Breadcrumb */}
//             <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
//               <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
//                 <li className="breadcrumb-item">
//                   <a href="/" className="text-primary text-decoration-none fw-semibold">
//                     Home
//                   </a>
//                 </li>
//                 <li className="breadcrumb-item active fw-semibold" aria-current="page">
//                   Services
//                 </li>
//               </ol>
//             </nav>
//           </div>
//         </Container>
//       </section>

//       {/* Scrolling Banner */}
//       <div
//         style={{
//           backgroundColor: "#002b5b",
//           color: "white",
//           padding: "10px 20px",
//           fontWeight: 600,
//           fontSize: "16px",
//         }}
//       >
//         <marquee scrollamount="5">
//           We are SEBI registered. And we provide all types of services like Demat handling,
//           Demat opening, PMS, etc.
//         </marquee>
//       </div>

//       {/* Main Content */}
//       <Container className="py-5" style={{ textAlign: "left" }}>
//         {/* Equity Section */}
//         <section className="mb-5 mt-4">
//           <h5 className="fw-bold">Equity</h5>
//           <p>
//             Prime Capital provides a wide variety of services in the Equity Market, suitable for
//             investors. Equity represents ownership in a company, allowing investors to share in
//             profits and growth through share trading on NSE and BSE.
//           </p>
//         </section>

//         {/* Commodity Section */}
//         <section className="mb-5">
//           <h5 className="fw-bold">Commodity</h5>
//           <p>
//             Prime Capital provides wide-ranging services in the Commodity Market, enabling clients to
//             trade in metals, agro-products, and energy sectors. We help investors diversify and
//             manage risks effectively.
//           </p>
//         </section>

//         {/* Derivative Section */}
//         <section>
//           <h5 className="fw-bold">Derivative</h5>
//           <p>
//             Prime Capital offers Derivative Market services for hedging risks or speculating on price
//             movements. Our team provides guidance on futures, options, and index-based contracts to
//             maximize portfolio performance.
//           </p>
//         </section>
//       </Container>
//     </>
//   );
// };

// export default Services;

import React from "react";
import { Container } from "react-bootstrap";

const Services = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-3 mt-3">
        <Container>
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
        </Container>
      </section>

      {/* Scrolling Banner */}
      <div
        style={{
          backgroundColor: "#002b5b",
          color: "white",
          padding: "10px 20px",
          fontWeight: 600,
          fontSize: "16px",
        }}
      >
        <marquee scrollamount="5">
          We are SEBI registered. And we provide all types of services like Demat handling,
          Demat opening, PMS, Forex, Commodities & Derivatives.
        </marquee>
      </div>

      {/* Main Content */}
      <Container className="py-5" style={{ textAlign: "left" }}>
        {/* Equity Section */}
        <section className="mb-5 mt-4">
          <h5 className="fw-bold">Equity</h5>
          <p>
           Stock Market Investing by Grow Capital provides a wide variety of services in the Equity Market, suitable for
            investors. Equity in the share market is broadly defined as a part of the company's
            capital held by investors, promoters, institutions, and alike. Any investor looking to
            invest in equity can do so via IPOs, mutual funds, or direct stock trading. Equity is
            the market where shares are issued and exchanged, through trading and over-the-counter
            systems. From the Indian perspective, NSE (National Stock Exchange) and BSE (Bombay
            Stock Exchange) are the main exchanges for equity trading.
          </p>
        </section>

        {/* Commodity Section */}
        <section className="mb-5">
          <h5 className="fw-bold">Commodity</h5>
          <p>
           Stock Market Investing by Grow Capital provides services in the Commodity Market, suitable for investors. An
            online commodity market deals with monetary trading rather than physical objects. This
            market allows speculators from over 50 important markets to trade efficiently. Online
            commodity trading is popular across four main categories, and prospects contracts are
            a key strategy for successful trading.
          </p>
        </section>

        {/* Derivative Section */}
        <section className="mb-5">
          <h5 className="fw-bold">Derivative</h5>
          <p>
            Stock Market Investing by Grow Capital provides services in the Derivative Market, suitable for investors.
            Derivatives are financial securities whose value depends on an underlying asset such as
            stocks, bonds, commodities, currencies, interest rates, or market indexes. Derivatives
            can be traded over-the-counter (OTC) or on an exchange, allowing hedging or
            speculation.
          </p>
        </section>

        {/* Forex Section */}
        <section>
          <h5 className="fw-bold">Forex</h5>
          <p>
            Stock Market Investing by Grow Capital provides services in the Forex Market, suitable for investors. Forex, also
            called foreign exchange or FX, is a decentralized global market where all the world's
            currencies trade. It is the largest and most liquid market in the world, with an average
            daily trading volume exceeding $5 trillion.
          </p>
        </section>
      </Container>
    </>
  );
};

export default Services;

