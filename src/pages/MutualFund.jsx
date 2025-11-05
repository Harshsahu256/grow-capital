// import React from "react";
// import { Container } from "react-bootstrap";

// const MutualFund = () => {
//      const bannerContainer = {
//     backgroundColor: "#002b5b",
//     overflow: "hidden",
//     whiteSpace: "nowrap",
//     position: "relative",
//     height: "45px",
//     display: "flex",
//     alignItems: "center",
//   };

//   const scrollingWrapper = {
//     display: "inline-block",
//     whiteSpace: "nowrap",
//   };

//   const scrollingText = {
//     display: "inline-block",
//     paddingRight: "50px", // space between repeated texts
//     fontWeight: 600,
//     color: "white",
//     fontSize: "17px",
//   };
//   return (
//     <>
//        <section className="py-3 mt-3" >
//   <div className="container">
//     <div className="d-flex justify-content-between align-items-center flex-wrap">
//       {/* Left: Title */}
//       <h4 className="fw-bold mb-0 text-dark">Mutual Fund</h4>

//       {/* Right: Breadcrumb */}
//       <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
//         <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
//           <li className="breadcrumb-item">
//             <a href="/" className="text-primary text-decoration-none fw-semibold">
//               Services
//             </a>
//           </li>
//           <li className="breadcrumb-item active fw-semibold" aria-current="page">
//            Mutual Fund
//           </li>
//         </ol>
//       </nav>
//     </div>
//   </div>
// </section>
//     <div
//   style={{ backgroundColor: "#002b5b", color: "white" }}
//   className="py-2 px-3 fw-semibold"
// >
//   <marquee scrollamount="5">
//     We are SEBI registered. And We provides all type of services like demat handling , demat opening , PMS etc.
//   </marquee>
// </div>

    
//     <Container className="py-5">
      
//     <h3>Mutual Fund</h3>
//       <p>
//         A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities. These investors may be retail or institutional in nature. Mutual funds have advantages and disadvantages compared to direct investing in individual securities.
//       </p>
//       <p>
//         The advantages of mutual funds include economies of scale, diversification, liquidity, and professional management. However, these come with mutual fund fees and expenses.
//       </p>
//       <p>
//         Primary structures of mutual funds are open-end funds, unit investment trusts, closed-end funds, and exchange-traded funds (ETFs).
//       </p>
//     </Container>
//     </>
//   );
// };

// export default MutualFund;


import React from "react";
import { Container } from "react-bootstrap";

const MutualFund = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-3 mt-3">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            {/* Left: Title */}
            <h4 className="fw-bold mb-0 text-dark">Mutual Fund</h4>

            {/* Right: Breadcrumb */}
            <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
              <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
                <li className="breadcrumb-item">
                  <a href="/" className="text-primary text-decoration-none fw-semibold">
                    Services
                  </a>
                </li>
                <li className="breadcrumb-item active fw-semibold" aria-current="page">
                  Mutual Fund
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
          Demat opening, PMS, Mutual Funds, Equity, Commodities, Derivatives & Forex.
        </marquee>
      </div>

      {/* Main Content */}
      <Container className="py-5" style={{ textAlign: "left" }}>
        <section className="mb-5 mt-4">
          <h5 className="fw-bold">Mutual Fund</h5>
          <p>
            A mutual fund is a professionally managed investment vehicle that pools money from
            multiple investors to buy a variety of securities. These investors may be retail
            individuals or institutional entities. Mutual funds offer certain advantages over
            directly investing in individual stocks or bonds, including diversification, liquidity,
            professional management, and economies of scale, though they do carry fees and expenses.
          </p>
          <p>
            Mutual funds are structured in several ways, including open-end funds, unit investment
            trusts, closed-end funds, and exchange-traded funds (ETFs). Each type has its own
            investment approach and liquidity features.
          </p>
          <p>
            Funds are typically classified by the type of assets they invest in, such as money
            market funds, bond or fixed income funds, equity funds, hybrid funds, and others. They
            can also be categorized as index funds, which passively track a market index, or
            actively managed funds. Hedge funds differ from mutual funds, as they are not available
            to the general public.
          </p>
        </section>
      </Container>
    </>
  );
};

export default MutualFund;
