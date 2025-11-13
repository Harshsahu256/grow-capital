
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

//   const bannerContainer = {
//     backgroundColor: "#002b5b",
//     overflow: "hidden",
//     whiteSpace: "nowrap",
//     position: "relative",
//     height: "45px",
//     display: "flex",
//     alignItems: "center",
//   };

//   const scrollingText = {
//     display: "inline-block",
//     paddingRight: "50px",
//     fontWeight: 600,
//     color: "white",
//     fontSize: "17px",
//   };

//   return (
//     <div className="pricing-page py-5" style={{ backgroundColor: "transparent",}}>
//       {/* 🔹 Smooth scrolling banner */}
//      <section className="py-3 mt-3" >
//   <div className="container">
//     <div className="d-flex justify-content-between align-items-center flex-wrap">
//       {/* Left: Title */}
//       <h4 className="fw-bold mb-0 text-dark">Pricing</h4>

//       {/* Right: Breadcrumb */}
//       <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
//         <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
//           <li className="breadcrumb-item">
//             <a href="/" className="text-primary text-decoration-none fw-semibold">
//               Home
//             </a>
//           </li>
//           <li className="breadcrumb-item active fw-semibold" aria-current="page">
//             Pricing
//           </li>
//         </ol>
//       </nav>
//     </div>
//   </div>
// </section>

//     {/* 🟦 Blue strip below header */}
//     <div
//   style={{ backgroundColor: "#002b5b", color: "white" }}
//   className="py-2 px-3 fw-semibold"
// >
//   <marquee scrollamount="5">
//     We are SEBI registered. And We provides all type of services like demat handling , demat opening , PMS etc.
//   </marquee>
// </div>

//       {/* 🟦 Pricing Section */}
//       <div className="container mt-5">
//         <h3
//           className="text-center fw-bold mb-5"
//           style={{
//             color: "#0056b3",
//             backgroundColor: "rgba(0, 86, 179, 0.1)",
//             display: "inline-block",
//             padding: "10px 25px",
//             borderRadius: "50px",
//           }}
//         >
//           OUR PRICING DETAILS
//         </h3>

//         <div className="row justify-content-center">
//           {plans.map((plan, index) => (
//             <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//               <div
//                 className="card shadow-sm border-0 h-100 text-center"
//                 style={{
//                   borderRadius: "12px",
//                   backgroundColor: "#fff",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.transform = "translateY(-7px)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.transform = "translateY(0)")
//                 }
//               >
//                 <div
//                   className="card-header fw-bold text-white"
//                   style={{
//                     backgroundColor: "#155ab6",
//                     borderTopLeftRadius: "12px",
//                     borderTopRightRadius: "12px",
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   {plan.title}
//                 </div>

//                 <div className="card-body">
//                   <table className="table table-borderless mb-0">
//                     <tbody>
//                       <tr>
//                         <td className="fw-semibold text-start">Monthly</td>
//                         <td className="text-center fw-bold">₹6000</td>
//                         <td className="text-end">
//                           <a href="#" className="btn btn-link p-0 text-primary">
//                             Pay Now
//                           </a>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="fw-semibold text-start">Quarterly</td>
//                         <td className="text-center fw-bold">₹13000</td>
//                         <td className="text-end">
//                           <a href="#" className="btn btn-link p-0 text-primary">
//                             Pay Now
//                           </a>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="fw-semibold text-start">Half-Yearly</td>
//                         <td className="text-center fw-bold">₹22000</td>
//                         <td className="text-end">
//                           <a href="#" className="btn btn-link p-0 text-primary">
//                             Pay Now
//                           </a>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="fw-semibold text-start">Yearly</td>
//                         <td className="text-center fw-bold">₹36000</td>
//                         <td className="text-end">
//                           <a href="#" className="btn btn-link p-0 text-primary">
//                             Pay Now
//                           </a>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔸 Inline Styling for Mobile Optimization */}
//       <style>{`
//         .pricing-page {
//           min-height: 100vh;
//         }
//         .card {
//           transition: all 0.3s ease-in-out;
//         }
//         .card:hover {
//           box-shadow: 0 8px 25px rgba(0, 86, 179, 0.2);
//         }
//         table {
//           width: 100%;
//         }
//         td {
//           vertical-align: middle;
//         }
//         @media (max-width: 768px) {
//           .card-header {
//             font-size: 1rem;
//             padding: 0.6rem;
//           }
//           td {
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Pricing;


import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Pricing = () => {
  const navigate = useNavigate(); // ✅ React Router navigation hook

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

  const handlePayNow = () => {
    navigate("/deposit"); // ✅ Redirect to UploadFile page
  };

  return (
    <div className="pricing-page py-5" style={{ backgroundColor: "transparent" }}>
      {/* 🔹 Header Section */}
      <section className="py-3 mt-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h4 className="fw-bold mb-0 text-dark">Pricing</h4>
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
      <div style={{ backgroundColor: "#002b5b", color: "white" }} className="py-2 px-3 fw-semibold">
        <marquee scrollamount="5">
          We are SEBI registered. And We provide all types of services like demat handling, demat opening, PMS, etc.
        </marquee>
      </div>

      {/* 🟦 Pricing Section */}
      <div className="container mt-5 text-center">
        <h3
          className="fw-bold mb-5 d-inline-block px-4 py-2 rounded-pill"
          style={{
            color: "#0056b3",
            backgroundColor: "rgba(0, 86, 179, 0.1)",
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
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-7px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
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
                      {[
                        { label: "Monthly", price: "₹6000" },
                        { label: "Quarterly", price: "₹13000" },
                        { label: "Half-Yearly", price: "₹22000" },
                        { label: "Yearly", price: "₹36000" },
                      ].map((item, i) => (
                        <tr key={i}>
                          <td className="fw-semibold text-start">{item.label}</td>
                          <td className="text-center fw-bold">{item.price}</td>
                          <td className="text-end">
                            {/* ✅ Navigate to UploadFile on click */}
                            <button
                              onClick={handlePayNow}
                              className="btn btn-link p-0 text-primary fw-semibold"
                            >
                              Pay Now
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔸 Inline Styling */}
      <style>{`
        .card:hover {
          box-shadow: 0 8px 25px rgba(0, 86, 179, 0.2);
        }
        table td {
          vertical-align: middle;
        }
        @media (max-width: 768px) {
          td {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;
