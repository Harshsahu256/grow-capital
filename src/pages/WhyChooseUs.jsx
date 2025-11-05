// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const WhyChooseUs = () => {
//   const cards = [
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
//       title: "Quality",
//       text: "Quality is the major strength of Grow Capital. We are committed to providing high-quality trading insights and trusted guidance to our clients.",
//     },
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
//       title: "Customized Service",
//       text: "We help you stay updated with the latest market movements through personalized reports and expert analysis designed for your investment goals.",
//     },
//     {
//       img: "https://cdn-icons-png.flaticon.com/512/616/616490.png",
//       title: "Best In Market",
//       text: "Never settle. Choose Grow Capital to achieve the best trading and investment results. Our expert team is dedicated to helping you succeed.",
//     },
//   ];

//   return (
//     <section
//       className="py-5"
//       style={{
//         backgroundColor: "#fff",
//         textAlign: "center",
//       }}
//     >
//       <div className="container">
//         {/* 🔹 Section Title */}
//         <h2
//           className="fw-bold mb-5"
//           style={{
//             color: "#00BFFF",
//             backgroundColor: "rgba(0,191,255,0.1)",
//             display: "inline-block",
//             padding: "10px 25px",
//             borderRadius: "50px",
//             fontSize: "1.8rem",
//           }}
//         >
//           WHY CHOOSE US
//         </h2>

//         {/* 🔹 Card Section */}
//         <div className="row justify-content-center">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
//             >
//               <div
//                 className="p-4 bg-white rounded text-center"
//                 style={{
//                   width: "90%",
//                   border: "2px solid transparent",
//                   borderRadius: "12px",
//                   transition: "all 0.3s ease",
//                   boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-8px)";
//                   e.currentTarget.style.border = "2px solid #00BFFF";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 25px rgba(0,191,255,0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.border = "2px solid transparent";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 10px rgba(0,0,0,0.05)";
//                 }}
//               >
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   width="80"
//                   height="80"
//                   style={{
//                     marginBottom: "20px",
//                     backgroundColor: "rgba(0,191,255,0.05)",
//                     padding: "15px",
//                     borderRadius: "10px",
//                   }}
//                 />
//                 <h5
//                   className="fw-bold mb-3"
//                   style={{
//                     color: "#00BFFF",
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   {card.title}
//                 </h5>
//                 <p
//                   style={{
//                     color: "#555",
//                     fontSize: "0.95rem",
//                     lineHeight: "1.6",
//                   }}
//                 >
//                   {card.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUs = () => {
  const cards = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
      title: "Quality",
      text: "At InvestInvest Mart Research, we focus on maintaining high standards by delivering accurate and reliable trading guidance to our clients.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3523/3523063.png",
      title: "Customized Service",
      text: "Our reports keep you informed about market updates, helping you take advantage of market movements through our trade sheets and detailed insights.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/616/616490.png",
      title: "Best In Market",
      text: "Don’t settle for less — experience top results with us. Our Invest Mart team is dedicated to delivering the finest services in the investment market.",
    },
    // 🔹 New 3 Cards added below
    {
      img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
      title: "Daily Research Report",
      text: "Stay updated with the latest market trends and take advantage of every movement through our insightful trade sheets and detailed research reports.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
      title: "Live Chat",
      text: "We offer real-time support to our clients, both online and offline, ensuring confident and seamless trading with instant assistance whenever needed.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828643.png",
      title: "Fidelity",
      text: "Backed by skilled research analysts dedicated to delivering accurate and effective intraday trading insights.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
      backgroundColor: "transparent",
        textAlign: "center",
      }}
    >
      <div className="container">
        {/* 🔹 Section Title */}
        <h2
          className="fw-bold mb-5"
          style={{
            color: "#00BFFF",
            backgroundColor: "rgba(0,191,255,0.1)",
            display: "inline-block",
            padding: "10px 25px",
            borderRadius: "50px",
            fontSize: "1.8rem",
          }}
        >
          WHY CHOOSE US
        </h2>

        {/* 🔹 Card Section */}
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
            >
              <div
                className="p-4 bg-white rounded text-center"
                style={{
                  width: "90%",
                  border: "2px solid transparent",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.border = "2px solid #00BFFF";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0,191,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.border = "2px solid transparent";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.05)";
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  width="80"
                  height="80"
                  style={{
                    marginBottom: "20px",
                    backgroundColor: "rgba(0,191,255,0.05)",
                    padding: "15px",
                    borderRadius: "10px",
                  }}
                />
                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: "#00BFFF",
                    fontSize: "1.1rem",
                  }}
                >
                  {card.title}
                </h5>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
