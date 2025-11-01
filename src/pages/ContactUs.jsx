// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ContactUs = () => {
//   return (
//     <section
//       className="py-5"
//       style={{
//         backgroundColor: "transparent",
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
//           CONTACT US
//         </h2>

//         {/* 🔹 Contact Info Boxes */}
//         <div className="row justify-content-center mb-5">
//           {[
//             {
//               icon: "📍",
//               title: "Our Address",
//               text: "B-15 Subhash Nagar, Bhopal - 462001",
//             },
//             {
//               icon: "✉️",
//               title: "Email Us",
//               text: "info@smsgc.in",
//             },
//             {
//               icon: "📞",
//               title: "Call Us",
//               text: "8962315503",
//             },
//           ].map((item, i) => (
//             <div key={i} className="col-md-4 col-sm-6 mb-4">
//               <div
//                 className="p-4 bg-white rounded shadow-sm"
//                 style={{
//                   border: "2px solid transparent",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.border = "2px solid #00BFFF";
//                   e.currentTarget.style.transform = "translateY(-6px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 25px rgba(0,191,255,0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.border = "2px solid transparent";
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 10px rgba(0,0,0,0.05)";
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "2.5rem",
//                     color: "#00BFFF",
//                     marginBottom: "15px",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <h5 className="fw-bold mb-2">{item.title}</h5>
//                 <p style={{ color: "#555", fontSize: "0.95rem" }}>
//                   {item.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 🔹 Map and Form */}
//         <div className="row justify-content-center align-items-start">
//           <div className="col-md-6 mb-4">
//             <iframe
//               title="map"
//               src="https://www.google.com/maps?q=Bhopal,Madhya+Pradesh&output=embed"
//               width="100%"
//               height="300"
//               style={{
//                 border: "0",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//               }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>

//           <div className="col-md-6">
//             <form
//               className="p-4 bg-white rounded shadow-sm"
//               style={{ textAlign: "left" }}
//             >
//               <div className="row mb-3">
//                 <div className="col">
//                   <input
//                     type="text"
//                     placeholder="Your Name *"
//                     className="form-control"
//                   />
//                 </div>
//                 <div className="col">
//                   <input
//                     type="email"
//                     placeholder="Your Email *"
//                     className="form-control"
//                   />
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   placeholder="Phone *"
//                   className="form-control"
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   placeholder="Message *"
//                   className="form-control"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <div className="d-flex justify-content-between align-items-center">
//                 <input
//                   type="text"
//                   className="form-control w-25"
//                   placeholder="Captcha"
//                 />
//                 <button
//                   type="submit"
//                   className="btn fw-bold"
//                   style={{
//                     backgroundColor: "#00BFFF",
//                     color: "white",
//                     padding: "10px 25px",
//                     borderRadius: "6px",
//                   }}
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Import animation components
import { Fade, Slide } from "react-awesome-reveal";

const ContactUs = () => {
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
        <Fade triggerOnce>
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
            CONTACT US
          </h2>
        </Fade>

        {/* 🔹 Contact Info (Boxes Removed) */}
        <div className="row justify-content-center mb-5">
          {[
            {
              icon: "📍",
              title: "Our Address",
              text: "B-15 Subhash Nagar, Bhopal - 462001",
            },
            {
              icon: "✉️",
              title: "Email Us",
              text: "info@smsgc.in",
            },
            {
              icon: "📞",
              title: "Call Us",
              text: "8962315503",
            },
          ].map((item, i) => (
            <div key={i} className="col-md-4 col-sm-6 mb-4">
              <Fade direction="up" triggerOnce delay={i * 150}>
                {/* Removed the 'p-4 bg-white rounded shadow-sm' div */}
                <div className="d-flex flex-column align-items-center p-3"> {/* Added a simple div for centering and padding */}
                  <div
                    style={{
                      fontSize: "2.5rem",
                      color: "#00BFFF",
                      marginBottom: "10px", // Adjusted margin
                    }}
                  >
                    {item.icon}
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p style={{ color: "#555", fontSize: "0.95rem" }}>
                    {item.text}
                  </p>
                </div>
              </Fade>
            </div>
          ))}
        </div>

        {/* 🔹 Map and Form */}
        <div className="row justify-content-center align-items-start">
          <div className="col-md-6 mb-4">
            <Slide direction="left" triggerOnce>
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Bhopal,Madhya+Pradesh&output=embed"
                width="100%"
                height="325" // Map height is 300px
                style={{
                  border: "0",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Slide>
          </div>

          {/* Form container with fixed height matching the map */}
          <div className="col-md-6" style={{ height: '300px' }}>
            <Slide direction="right" triggerOnce>
              <form
                className="p-4 bg-white rounded shadow-sm d-flex flex-column" // Added d-flex flex-column for vertical layout
                style={{ textAlign: "left", height: '100%', justifyContent: 'space-between' }} // Form takes 100% height, content is spaced out
              >
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Phone *"
                    className="form-control"
                  />
                </div>
                <div className="mb-3 flex-grow-1"> {/* Textarea's parent grows */}
                  <textarea
                    placeholder="Message *"
                    className="form-control"
                    rows="4" // rows attribute acts as a minimum height
                    style={{ height: '100%', resize: 'none' }} // Make textarea fill remaining space and disable manual resize
                  ></textarea>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="text"
                    className="form-control w-25"
                    placeholder="Captcha"
                  />
                  <button
                    type="submit"
                    className="btn fw-bold"
                    style={{
                      backgroundColor: "#00BFFF",
                      color: "white",
                      padding: "10px 25px",
                      borderRadius: "6px",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;