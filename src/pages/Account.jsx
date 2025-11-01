

// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import benefit1 from "../assets/benefit1.png";
// import benefit2 from "../assets/benefit2.png";
// import benefit3 from "../assets/benefit3.png";
// import benefit4 from "../assets/benefit4.png";
// import benefit5 from "../assets/benefit5.png";
// import benefit6 from "../assets/benefit6.png";

// const benefits = [
//   { img: benefit1, title: "No AMC Charge", desc: "Lifetime free AMC demat and trading free account" },
//   { img: benefit2, title: "High Exposer", desc: "10 times limit in MCX, Nifty and Bank Nifty, future option" },
//   { img: benefit3, title: "Trade with Ant Technology", desc: "Analyse and trade with ANT Mobi, ANT Web and ANT Desk" },
//   { img: benefit4, title: "Bracket Order Benefit", desc: "20 times limit in bracket order" },
//   { img: benefit5, title: "E-learning Kit", desc: "Get fundamental and technical research" },
//   { img: benefit6, title: "ANT Bridge", desc: "Advance version trading platform" },
// ];

// const Account = () => {
//   // 🔹 Simple fade-up animation on scroll
//   useEffect(() => {
//     const elements = document.querySelectorAll(".fade-up");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//             entry.target.style.transform = "translateY(0)";
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

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
//     <div className="account-page py-5" style={{ background: "linear-gradient(180deg, #ffffff, #f8fbff)" }}>
//       <div className="container text-center mb-3">
//         <h4
//           className="fw-bold mb-4"
//           style={{
//             color: "#0d6efd",
//             backgroundColor: "rgba(13,110,253,0.08)",
//             display: "inline-block",
//             padding: "10px 28px",
//             borderRadius: "50px",
//             fontSize: "1.9rem",
//             letterSpacing: "0.5px",
//           }}
//         >
//           Grow Capital’S BENEFIT
//         </h4>
//       </div>

//       {/* Smooth scrolling banner */}
//       <style>
//         {`
//           @keyframes scrollSmooth {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .scrolling-content {
//             display: inline-block;
//             white-space: nowrap;
//             animation: scrollSmooth 25s linear infinite;
//           }
//         `}
//       </style>
//       <div className="mb-5" style={bannerContainer}>
//         <div className="scrolling-content">
//           <span style={scrollingText}>
//             📢 We are SEBI registered. We provide all types of services like demat handling, demat opening, PMS etc.
//           </span>
//           <span style={scrollingText}>
//             📢 We are SEBI registered. We provide all types of services like demat handling, demat opening, PMS etc.
//           </span>
//         </div>
//       </div>

//       {/* Benefits Grid */}
//       <div className="container text-center">
//         <div className="row g-4">
//           {benefits.map((item, index) => (
//             <div key={index} className="col-lg-4 col-md-6 col-sm-12 fade-up" style={{
//               opacity: 0,
//               transform: "translateY(40px)",
//               transition: "all 0.8s ease",
//             }}>
//               <div
//                 className="p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center align-items-center"
//                 style={{
//                   transition: "all 0.5s ease",
//                   cursor: "pointer",
//                   backgroundColor: "#fff",
//                   border: "1px solid #f0f0f0",
//                   minHeight: "240px", // ⬆️ Bigger card
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-12px)";
//                   e.currentTarget.style.boxShadow = "0 10px 30px rgba(13,110,253,0.25)";
//                   e.currentTarget.style.background =
//                     "linear-gradient(180deg, rgba(13,110,253,0.1), rgba(13,110,253,0.03))";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
//                   e.currentTarget.style.background = "#fff";
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="mb-3"
//                   style={{
//                     width: "90px", // ⬆️ Slightly bigger icon
//                     height: "90px",
//                     transition: "transform 0.4s ease",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//                   onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                 />
//                 <h6 className="fw-bold mb-2 text-primary">{item.title}</h6>
//                 <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;



import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import benefit1 from "../assets/benefit1.png";
import benefit2 from "../assets/benefit2.png";
import benefit3 from "../assets/benefit3.png";
import benefit4 from "../assets/benefit4.png";
import benefit5 from "../assets/benefit5.png";
import benefit6 from "../assets/benefit6.png";

const benefits = [
  { img: benefit1, title: "No AMC Charge", desc: "Lifetime free AMC demat and trading free account" },
  { img: benefit2, title: "High Exposer", desc: "10 times limit in MCX, Nifty and Bank Nifty, future option" },
  { img: benefit3, title: "Trade with Ant Technology", desc: "Analyse and trade with ANT Mobi, ANT Web and ANT Desk" },
  { img: benefit4, title: "Bracket Order Benefit", desc: "20 times limit in bracket order" },
  { img: benefit5, title: "E-learning Kit", desc: "Get fundamental and technical research" },
  { img: benefit6, title: "ANT Bridge", desc: "Advance version trading platform" },
];

const Account = () => {
  // 🔹 Simple fade-up animation on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
    <div className="account-page py-5" style={{ background: "linear-gradient(180deg, #ffffff, #f8fbff)" }}>
      <div className="container text-center mb-3">
    <section className="py-3 mt-3" >
  <div className="container">
    <div className="d-flex justify-content-between align-items-center flex-wrap">
      {/* Left: Title */}
      <h4 className="fw-bold mb-0 text-dark">Account</h4>

      {/* Right: Breadcrumb */}
      <nav aria-label="breadcrumb" className="mt-2 mt-md-0">
        <ol className="breadcrumb mb-0" style={{ backgroundColor: "transparent" }}>
          <li className="breadcrumb-item">
            <a href="/" className="text-primary text-decoration-none fw-semibold">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active fw-semibold" aria-current="page">
           Account
          </li>
        </ol>
      </nav>
    </div>
  </div>
</section>
      </div>

      {/* Smooth scrolling banner */}
      <style>
        {`
          @keyframes scrollSmooth {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scrolling-content {
            display: inline-block;
            white-space: nowrap;
            animation: scrollSmooth 25s linear infinite;
          }
        `}
      </style>
      
             {/* 🟦 Blue strip below header */}
          <div
  style={{ backgroundColor: "#002b5b", color: "white" }}
  className="py-2 px-3 fw-semibold mb-5"
>
  <marquee scrollamount="5">
    We are SEBI registered. And We provides all type of services like demat handling , demat opening , PMS etc.
  </marquee>
</div>
     <div className="container text-center mb-3">
      <h4
          className="fw-bold mb-4"
          style={{
            color: "#0d6efd",
            backgroundColor: "rgba(13,110,253,0.08)",
            display: "inline-block",
            padding: "10px 28px",
            borderRadius: "50px",
            fontSize: "1.9rem",
            letterSpacing: "0.5px",
          }}
        >
          Grow Capital’S BENEFIT
        </h4>
      </div>

      {/* Benefits Grid */}
      <div className="container text-center">
        <div className="row g-4">
          {benefits.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 fade-up" style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "all 0.8s ease",
            }}>
              <div
                className="p-4 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center align-items-center"
                style={{
                  transition: "all 0.5s ease",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  border: "1px solid #f0f0f0",
                  minHeight: "240px", // ⬆️ Bigger card
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(13,110,253,0.25)";
                  e.currentTarget.style.background =
                    "linear-gradient(180deg, rgba(13,110,253,0.1), rgba(13,110,253,0.03))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
                  e.currentTarget.style.background = "#fff";
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="mb-3"
                  style={{
                    width: "90px", // ⬆️ Slightly bigger icon
                    height: "90px",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <h6 className="fw-bold mb-2 text-primary">{item.title}</h6>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;

