
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import about1 from "../assets/WhyGrowCapital1.png";
// import about2 from "../assets/WhyGrowCapital2.png";
// import about3 from "../assets/WhyGrowCapital3.png";

// const WhyGrowCapital = () => {
//   const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

//   const cards = [
//     {
//       img: about1,
//       title: "Market Research",
//       text: "Do not have time to trade every day? Say goodbye to intraday trading and join our product dedicated to long-term traders. Make investments based on high-yielding research.",
//     },
//     {
//       img: about2,
//       title: "Market Pro",
//       text: "Select from our wide range of short-term products designed for equity and commodity markets. Trade based on signals derived by our fundamental and technical analysts.",
//     },
//     {
//       img: about3,
//       title: "Support",
//       text: "A support or support level is a financial term referring to the price level that historically a stock does not fall below. Buyers tend to purchase the stock at this level.",
//     },
//   ];

//   return (
//     <section
//       className="py-5"
//       style={{
//         background: "linear-gradient(180deg, #ffffff, #f8fbff)",
//         textAlign: "center",
//       }}
//     >
//       <div className="container">
//         <h2
//           className="fw-bold mb-5"
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
//           WHY GROW CAPITAL
//         </h2>

//         <div className="row justify-content-center g-4">
//           {cards.map((card, index) => {
//             const isHovered = hoveredCardIndex === index;

//             // Styles for the main card container
//             const cardContainerStyle = {
//               width: "90%",
//               // Set background to white by default, the animated fill will cover it
//               backgroundColor: "#fff",
//               border: "1px solid #f0f0f0",
//               borderRadius: "1rem", // Use rem for rounded-4 equivalent
//               overflow: "hidden", // Crucial to contain the bottom-to-top fill
//               position: "relative", // Crucial for positioning the inner animated background
//               cursor: "pointer",
//               // Combine transitions for multiple properties
//               transition:
//                 "transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease",
//               boxShadow: isHovered
//                 ? "0 15px 35px rgba(13,110,253,0.4)"
//                 : "0 5px 15px rgba(0,0,0,0.05)",
//               transform: isHovered ? "translateY(-15px)" : "translateY(0)",
//             };

//             // Styles for the animated background layer
//             const animatedBackgroundStyle = {
//               position: "absolute",
//               bottom: 0,
//               left: 0,
//               right: 0,
//               height: isHovered ? "100%" : "0%", // Animate height from 0 to 100%
//               backgroundColor: "#0d6efd", // The hover color
//               transition: "height 0.5s ease", // Control the animation speed
//               zIndex: 0, // Ensure it's below the content
//             };

//             // Styles for the content wrapper to keep it on top
//             const contentWrapperStyle = {
//               position: "relative",
//               zIndex: 1, // Ensure content is above the animated background
//               padding: "1.5rem", // Equivalent to Bootstrap's p-4 (adjust if needed)
//               textAlign: "center",
//             };

//             // Styles for the image
//             const imgStyle = {
//               marginBottom: "18px",
//               borderRadius: "15px",
//               objectFit: "contain",
//               background: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.8)",
//               padding: "5px",
//               transition: "background 0.4s ease",
//             };

//             // Styles for the title
//             const titleStyle = {
//               fontWeight: "bold",
//               marginBottom: "1rem",
//               color: isHovered ? "#fff" : "#0d6efd", // Change color on hover
//               transition: "color 0.3s ease",
//             };

//             // Styles for the text paragraph
//             const textStyle = {
//               fontSize: "0.95rem",
//               lineHeight: "1.5",
//               color: isHovered ? "#fff" : "#555", // Change color on hover
//               transition: "color 0.3s ease",
//             };

//             return (
//               <div
//                 key={index}
//                 className="col-md-4 col-sm-6 d-flex justify-content-center"
//               >
//                 <div
//                   style={cardContainerStyle}
//                   onMouseEnter={() => setHoveredCardIndex(index)}
//                   onMouseLeave={() => setHoveredCardIndex(null)}
//                 >
//                   {/* Animated background layer */}
//                   <div style={animatedBackgroundStyle}></div>

//                   {/* Content wrapper */}
//                   <div style={contentWrapperStyle}>
//                     <img
//                       src={card.img}
//                       alt={card.title}
//                       width="85"
//                       height="85"
//                       style={imgStyle}
//                     />
//                     <h5 style={titleStyle}>{card.title}</h5>
//                     <p style={textStyle}>{card.text}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyGrowCapital;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import about1 from "../assets/WhyGrowCapital1.png";
import about2 from "../assets/WhyGrowCapital2.png";
import about3 from "../assets/WhyGrowCapital3.png";

const WhyGrowCapital = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const cards = [
    {
      img: about1,
      title: "Market Research",
      text: "Do not have time to trade every day? Say goodbye to intraday trading and join our product dedicated to long-term traders. Make investments based on high-yielding research.",
    },
    {
      img: about2,
      title: "Market Pro",
      text: "Select from our wide range of short-term products designed for equity and commodity markets. Trade based on signals derived by our fundamental and technical analysts.",
    },
    {
      img: about3,
      title: "Support",
      text: "A support or support level is a financial term referring to the price level that historically a stock does not fall below. Buyers tend to purchase the stock at this level.",
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
        <h2
          className="fw-bold mb-5"
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
          WHY GROW CAPITAL
        </h2>

        <div className="row justify-content-center g-4">
          {cards.map((card, index) => {
            const isHovered = hoveredCardIndex === index;

            // Main card container
            const cardContainerStyle = {
              width: "90%",
              minHeight: "380px", // ⬆️ Increased height for better balance
              backgroundColor: "#fff",
              border: "1px solid #f0f0f0",
              borderRadius: "1rem",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              transition:
                "transform 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease",
              boxShadow: isHovered
                ? "0 15px 35px rgba(13,110,253,0.4)"
                : "0 5px 15px rgba(0,0,0,0.05)",
              transform: isHovered ? "translateY(-15px)" : "translateY(0)",
            };

            // Animated background layer
            const animatedBackgroundStyle = {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: isHovered ? "100%" : "0%",
              backgroundColor: "#40a5e9ff",
              transition: "height 0.5s ease",
              zIndex: 0,
            };

            // Content wrapper
            const contentWrapperStyle = {
              position: "relative",
              zIndex: 1,
              padding: "2rem 1.5rem", // ⬆️ Slightly increased padding
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            };

            const imgStyle = {
              marginBottom: "20px",
              borderRadius: "15px",
              objectFit: "contain",
              background: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.8)",
              padding: "5px",
              transition: "background 0.4s ease",
            };

            const titleStyle = {
              fontWeight: "bold",
              marginBottom: "1rem",
              color: isHovered ? "#fff" : "#0d6efd",
              transition: "color 0.3s ease",
            };

            const textStyle = {
              fontSize: "0.95rem",
              lineHeight: "1.6",
              color: isHovered ? "#fff" : "#555",
              transition: "color 0.3s ease",
            };

            return (
              <div
                key={index}
                className="col-md-4 col-sm-6 d-flex justify-content-center"
              >
                <div
                  style={cardContainerStyle}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  {/* Animated background layer */}
                  <div style={animatedBackgroundStyle}></div>

                  {/* Content */}
                  <div style={contentWrapperStyle}>
                    <img
                      src={card.img}
                      alt={card.title}
                      width="90"
                      height="90"
                      style={imgStyle}
                    />
                    <h5 style={titleStyle}>{card.title}</h5>
                    <p style={textStyle}>{card.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyGrowCapital;
