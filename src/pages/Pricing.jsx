// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Pricing = () => {
//   const plans = [
//     { title: "Basic Stock Cash" },
//     { title: "Basic Stock Future" },
//     { title: "Basic Stock Option" },
//     { title: "HNI Stock Cash" },
//     { title: "HNI Stock Future" },
//     { title: "HNI Stock Option" },
//     { title: "Index Option" },
//     { title: "Index Future" },
//     { title: "BTST" },
//     { title: "Premium Stock Cash" },
//     { title: "Premium Stock Future" },
//     { title: "Premium Stock Option" },
//   ];

//    const bannerContainer = {
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
//     <div className="pricing-page bg-light py-5">

//         <style>
//         {`
//           @keyframes scrollSmooth {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .scrolling-content {
//             display: inline-block;
//             white-space: nowrap;
//             animation: scrollSmooth 20s linear infinite; /* slow & continuous */
//           }
//         `}
//       </style>
//                   {/* 🟦 Smooth continuous banner */}
//         <div style={bannerContainer}>
//           <div className="scrolling-content">
//             <span style={scrollingText}>
//               📢  We are SEBI registered. And We provide all types of services like demat handling,
//           demat opening, PMS etc.
//             </span>
//             {/* duplicate text for seamless loop */}
//             <span style={scrollingText}>
//              📢  We are SEBI registered. And We provide all types of services like demat handling,
//           demat opening, PMS etc.
//             </span>
//           </div>
//         </div>
//       <div className="container">
//         <h3 className="text-center text-primary fw-bold mb-5">
//           OUR PRICING DETAILS
//         </h3>

//         <div className="row">
//           {plans.map((plan, index) => (
//             <div key={index} className="col-md-4 col-sm-6 mb-4">
//               <div
//                 className="card shadow-sm border-0 h-100"
//                 style={{ borderRadius: "10px" }}
//               >
//                 <div
//                   className="card-header text-white text-center fw-bold"
//                   style={{
//                     backgroundColor: "#155ab6",
//                     borderTopLeftRadius: "10px",
//                     borderTopRightRadius: "10px",
//                   }}
//                 >
//                   {plan.title}
//                 </div>
//                 <div className="card-body text-center">
//                   <div className="mb-2 d-flex justify-content-between px-3">
//                     <strong>Monthly</strong> <span>6000</span>
//                     <a href="#" className="btn btn-link p-0 text-primary">
//                       Pay Now
//                     </a>
//                   </div>
//                   <div className="mb-2 d-flex justify-content-between px-3">
//                     <strong>Quarterly</strong> <span>13000</span>
//                     <a href="#" className="btn btn-link p-0 text-primary">
//                       Pay Now
//                     </a>
//                   </div>
//                   <div className="mb-2 d-flex justify-content-between px-3">
//                     <strong>Half-yearly</strong> <span>22000</span>
//                     <a href="#" className="btn btn-link p-0 text-primary">
//                       Pay Now
//                     </a>
//                   </div>
//                   <div className="mb-2 d-flex justify-content-between px-3">
//                     <strong>Yearly</strong> <span>36000</span>
//                     <a href="#" className="btn btn-link p-0 text-primary">
//                       Pay Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Inline styles for responsive layout */}
//       <style>{`
//         .pricing-page {
//           min-height: 100vh;
//         }
//         .card {
//           transition: transform 0.2s ease-in-out;
//         }
//         .card:hover {
//           transform: translateY(-5px);
//         }
//         @media (max-width: 768px) {
//           .card-header {
//             font-size: 15px;
//           }
//           .card-body strong {
//             font-size: 14px;
//           }
//           .card-body span, .card-body a {
//             font-size: 13px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Pricing;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pricing = () => {
  const plans = [
    { title: "Basic Stock Cash" },
    { title: "Basic Stock Future" },
    { title: "Basic Stock Option" },
    { title: "HNI Stock Cash" },
    { title: "HNI Stock Future" },
    { title: "HNI Stock Option" },
    { title: "Index Option" },
    { title: "Index Future" },
    { title: "BTST" },
    { title: "Premium Stock Cash" },
    { title: "Premium Stock Future" },
    { title: "Premium Stock Option" },
  ];

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
    <div className="pricing-page py-5" style={{ backgroundColor: "transparent",}}>
      {/* 🔹 Smooth scrolling banner */}
     <section className="py-3 mt-3" >
  <div className="container">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      {/* Left: Title */}
      <h4 className="fw-bold mb-0 text-dark">Pricing</h4>

      {/* Right: Breadcrumb */}
      <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
        <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
          <li className="breadcrumb-item">
            <a href="/" className="text-primary text-decoration-none fw-semibold">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active fw-semibold" aria-current="page">
            Pricing
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

      {/* 🟦 Pricing Section */}
      <div className="container mt-5">
        <h3
          className="text-center fw-bold mb-5"
          style={{
            color: "#0056b3",
            backgroundColor: "rgba(0, 86, 179, 0.1)",
            display: "inline-block",
            padding: "10px 25px",
            borderRadius: "50px",
          }}
        >
          OUR PRICING DETAILS
        </h3>

        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="card shadow-sm border-0 h-100 text-center"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-7px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  className="card-header fw-bold text-white"
                  style={{
                    backgroundColor: "#155ab6",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    fontSize: "1.1rem",
                  }}
                >
                  {plan.title}
                </div>

                <div className="card-body">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr>
                        <td className="fw-semibold text-start">Monthly</td>
                        <td className="text-center fw-bold">₹6000</td>
                        <td className="text-end">
                          <a href="#" className="btn btn-link p-0 text-primary">
                            Pay Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-start">Quarterly</td>
                        <td className="text-center fw-bold">₹13000</td>
                        <td className="text-end">
                          <a href="#" className="btn btn-link p-0 text-primary">
                            Pay Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-start">Half-Yearly</td>
                        <td className="text-center fw-bold">₹22000</td>
                        <td className="text-end">
                          <a href="#" className="btn btn-link p-0 text-primary">
                            Pay Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-semibold text-start">Yearly</td>
                        <td className="text-center fw-bold">₹36000</td>
                        <td className="text-end">
                          <a href="#" className="btn btn-link p-0 text-primary">
                            Pay Now
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔸 Inline Styling for Mobile Optimization */}
      <style>{`
        .pricing-page {
          min-height: 100vh;
        }
        .card {
          transition: all 0.3s ease-in-out;
        }
        .card:hover {
          box-shadow: 0 8px 25px rgba(0, 86, 179, 0.2);
        }
        table {
          width: 100%;
        }
        td {
          vertical-align: middle;
        }
        @media (max-width: 768px) {
          .card-header {
            font-size: 1rem;
            padding: 0.6rem;
          }
          td {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
