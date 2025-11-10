// // import React from "react";
// // import { House, Star, Folder, BarChart3, User } from "lucide-react";

// // const DepositPage = () => {
// //   return (
// //     <div
// //       style={{
// //         backgroundColor: "#f8f9fa",
// //         minHeight: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //       }}
// //     >
// //       {/* --- Main Section --- */}
// //       <div
// //         style={{
// //           textAlign: "center",
// //           marginTop: "160px",
// //         }}
// //       >
// //         <h2
// //           style={{
// //             fontWeight: "900",
// //             fontSize: "42px", // 🔹 Bigger title
// //             letterSpacing: "2px",
// //           }}
// //         >
// //           STOCK MARKET INVESTING BY GROW CAPITAL
// //         </h2>

// //         <div
// //           style={{
// //             marginTop: "70px",
// //             background: "#fff",
// //             padding: "30px 50px",
// //             borderRadius: "15px",
// //             boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
// //             display: "inline-block",
// //           }}
// //         >
// //           <p
// //             style={{
// //               fontSize: "28px", // 🔹 Increased size
// //               fontWeight: "700",
// //               margin: "0 0 18px 0",
// //             }}
// //           >
// //             Account No. <b>41323834718</b>
// //           </p>
// //           <p
// //             style={{
// //               fontSize: "28px", // 🔹 Increased size
// //               fontWeight: "700",
// //               margin: 0,
// //             }}
// //           >
// //             IFSC:- <b>SBIN0000490</b>
// //           </p>
// //         </div>
// //       </div>

// //       {/* --- Bottom Navigation Bar --- */}
// //       <div
// //         style={{
// //           width: "100%",
// //           position: "fixed",
// //           bottom: 0,
// //           backgroundColor: "#fff",
// //           borderTop: "1px solid #ddd",
// //           display: "flex",
// //           justifyContent: "space-around",
// //           alignItems: "center",
// //           padding: "10px 0",
// //         }}
// //       >
// //         <div style={{ textAlign: "center" }}>
// //           <House size={26} />
// //           <p style={{ fontSize: "15px", marginTop: "4px" }}>Home</p>
// //         </div>
// //         <div style={{ textAlign: "center" }}>
// //           <Star size={26} />
// //           <p style={{ fontSize: "15px", marginTop: "4px" }}>Watchlive</p>
// //         </div>
// //         <div style={{ textAlign: "center" }}>
// //           <Folder size={26} />
// //           <p style={{ fontSize: "15px", marginTop: "4px" }}>Portfolio</p>
// //         </div>
// //         <div style={{ textAlign: "center" }}>
// //           <BarChart3 size={26} />
// //           <p style={{ fontSize: "15px", marginTop: "4px" }}>Dashboard</p>
// //         </div>
// //         <div style={{ textAlign: "center" }}>
// //           <User size={26} />
// //           <p style={{ fontSize: "15px", marginTop: "4px" }}>Account</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DepositPage;

// // import React, { useEffect, useState } from "react";
// // import { House, Star, Folder, BarChart3, User } from "lucide-react";
// // import { getAllBankAccounts } from "../../services/apiService"

// // const DepositPage = () => {
// //   const [accounts, setAccounts] = useState([]);


// //  useEffect(() => {
// //   const fetchAccounts = async () => {
// //     console.log("🔄 Fetching bank accounts...");
// //     try {
// //       const data = await getAllBankAccounts();
// //       console.log("✅ API Response:", data);

// //       // ✅ Safe check: only set if data.account exists
// //       if (data && data.account) {
// //         setAccounts([data.account]); // wrap in array for mapping
// //       } else {
// //         setAccounts([]); // if nothing found
// //       }
// //     } catch (error) {
// //       console.error("❌ Error fetching accounts:", error);
// //       setAccounts([]);
// //     }
// //   };
// //   fetchAccounts();
// // }, []);



// //   return (
// //     <div
// //       style={{
// //         backgroundColor: "#f8f9fa",
// //         minHeight: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //       }}
// //     >
// //       {/* --- Main Section --- */}
// //       <div
// //         style={{
// //           textAlign: "center",
// //           marginTop: "160px",
// //         }}
// //       >
// //         <h2
// //           style={{
// //             fontWeight: "900",
// //             fontSize: "42px",
// //             letterSpacing: "2px",
// //           }}
// //         >
// //           STOCK MARKET INVESTING BY GROW CAPITAL
// //         </h2>

// //       {accounts && accounts.length > 0 ? (
// //   accounts.map((acc, index) => (
// //     acc && (
// //       <div
// //         key={index}
// //         style={{
// //           marginTop: "70px",
// //           background: "#fff",
// //           padding: "30px 50px",
// //           borderRadius: "15px",
// //           boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
// //           display: "inline-block",
// //         }}
// //       >
// //         <p
// //           style={{
// //             fontSize: "28px",
// //             fontWeight: "700",
// //             margin: "0 0 18px 0",
// //           }}
// //         >
// //           Account No. <b>{acc.accountNumber}</b>
// //         </p>
// //         <p
// //           style={{
// //             fontSize: "28px",
// //             fontWeight: "700",
// //             margin: 0,
// //           }}
// //         >
// //           IFSC:- <b>{acc.ifscCode}</b>
// //         </p>
// //       </div>
// //     )
// //   ))
// // ) : (
// //   <p style={{ marginTop: "50px", fontSize: "20px" }}>Loading...</p>
// // )}

// //       </div>

     
// //     </div>
// //   );
// // };

// // export default DepositPage;


// import React, { useEffect, useState } from "react";
// import { getAllBankAccounts } from "../../services/apiService";

// const DepositPage = () => {
//   const [accounts, setAccounts] = useState([]);

//   useEffect(() => {
//     const fetchAccounts = async () => {
//       console.log("🔄 Fetching bank accounts...");
//       try {
//         const data = await getAllBankAccounts();
//         console.log("✅ API Response:", data);

//         // ✅ Fix: use data.accounts instead of data.account
//         if (data && data.accounts && Array.isArray(data.accounts)) {
//           setAccounts(data.accounts);
//         } else {
//           setAccounts([]);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching accounts:", error);
//         setAccounts([]);
//       }
//     };

//     fetchAccounts();
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: "#f8f9fa",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       {/* --- Main Section --- */}
//       <div
//         style={{
//           textAlign: "center",
//           marginTop: "160px",
//         }}
//       >
//         <h2
//           style={{
//             fontWeight: "900",
//             fontSize: "42px",
//             letterSpacing: "2px",
//           }}
//         >
//           STOCK MARKET INVESTING BY GROW CAPITAL
//         </h2>

//         {/* ✅ Show Bank Accounts */}
//         {accounts.length > 0 ? (
//           accounts.map((acc, index) => (
//             <div
//               key={index}
//               style={{
//                 marginTop: "70px",
//                 background: "#fff",
//                 padding: "30px 50px",
//                 borderRadius: "15px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
//                 display: "inline-block",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "28px",
//                   fontWeight: "700",
//                   margin: "0 0 18px 0",
//                 }}
//               >
//                 Account No. <b>{acc.accountNumber}</b>
//               </p>
//               <p
//                 style={{
//                   fontSize: "28px",
//                   fontWeight: "700",
//                   margin: 0,
//                 }}
//               >
//                 IFSC: <b>{acc.ifscCode}</b>
//               </p>
//             </div>
//           ))
//         ) : (
//           <p style={{ marginTop: "50px", fontSize: "20px" }}>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DepositPage;


// import React, { useEffect, useState } from "react";
// import { getAllBankAccounts } from "../../services/apiService";
// import { useNavigate } from "react-router-dom";

// const DepositPage = () => {
//   const [accounts, setAccounts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAccounts = async () => {
//       console.log("🔄 Fetching bank accounts...");
//       try {
//         const data = await getAllBankAccounts();
//         console.log("✅ API Response:", data);

//         // ✅ Use correct key
//         if (data && data.accounts && Array.isArray(data.accounts)) {
//           setAccounts(data.accounts);
//         } else {
//           setAccounts([]);
//         }
//       } catch (error) {
//         console.error("❌ Error fetching accounts:", error);
//         setAccounts([]);
//       }
//     };

//     fetchAccounts();
//   }, []);

//   return (
//     <div
//       style={{
//         background: "linear-gradient(135deg, #e3f2fd, #f1f8e9)",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "40px 20px",
//       }}
//     >
//       <div
//         style={{
//           background: "#fff",
//           borderRadius: "20px",
//           boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//           padding: "50px 40px",
//           maxWidth: "600px",
//           width: "100%",
//           textAlign: "center",
//           transition: "all 0.3s ease-in-out",
//         }}
//       >
//         <h1
//           style={{
//             fontWeight: "900",
//             fontSize: "40px",
//             color: "#1565c0",
//             letterSpacing: "2px",
//             marginBottom: "25px",
//           }}
//         >
//            STOCK MARKET INVESTING BY GROW CAPITAL 💹
//         </h1>

//         <p style={{ color: "#555", fontSize: "18px", marginBottom: "30px" }}>
//           Please use the following bank account details to deposit your funds securely.
//         </p>

//         {/* ✅ Show Bank Accounts */}
//         {accounts.length > 0 ? (
//           accounts.map((acc, index) => (
//             <div
//               key={index}
//               style={{
//                 background: "#e3f2fd",
//                 border: "2px solid #90caf9",
//                 borderRadius: "15px",
//                 padding: "25px",
//                 marginBottom: "25px",
//                 boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "24px",
//                   fontWeight: "700",
//                   margin: "0 0 15px 0",
//                   color: "#0d47a1",
//                 }}
//               >
//                 Account No: <b>{acc.accountNumber}</b>
//               </p>
//               <p
//                 style={{
//                   fontSize: "22px",
//                   fontWeight: "600",
//                   color: "#1565c0",
//                   marginBottom: "5px",
//                 }}
//               >
//                 IFSC Code: <b>{acc.ifscCode}</b>
//               </p>
//             </div>
//           ))
//         ) : (
//           <p style={{ fontSize: "18px", color: "#777" }}>Loading account details...</p>
//         )}

//         <button
//           onClick={() => navigate("/dashboard")}
//           style={{
//             marginTop: "20px",
//             background: "#1565c0",
//             color: "#fff",
//             border: "none",
//             padding: "12px 30px",
//             borderRadius: "10px",
//             fontSize: "16px",
//             fontWeight: "600",
//             cursor: "pointer",
//             transition: "background 0.3s",
//           }}
//           onMouseOver={(e) => (e.target.style.background = "#0d47a1")}
//           onMouseOut={(e) => (e.target.style.background = "#1565c0")}
//         >
//           ← Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DepositPage;



import React, { useEffect, useState } from "react";
import { getAllBankAccounts, uploadSingleFile } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import { Card, Button, Alert, Form } from "react-bootstrap";

const DepositPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("success");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccounts = async () => {
      console.log("🔄 Fetching bank accounts...");
      try {
        const data = await getAllBankAccounts();
        console.log("✅ API Response:", data);

        if (data && data.accounts && Array.isArray(data.accounts)) {
          setAccounts(data.accounts);
        } else {
          setAccounts([]);
        }
      } catch (error) {
        console.error("❌ Error fetching accounts:", error);
        setAccounts([]);
      }
    };

    fetchAccounts();
  }, []);

  // File upload handlers
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);

    if (selected) {
      if (selected.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(selected));
      } else {
        setPreview(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMsgType("danger");
      setMsg("Please select a file");
      return;
    }

    try {
      await uploadSingleFile(file);
      setMsgType("success");
      setMsg("Uploaded Successfully ✅");
      setFile(null);
      setPreview(null);
    } catch (error) {
      setMsgType("danger");
      setMsg("Upload failed ❌");
      console.error("Upload Error:", error);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e3f2fd, #f1f8e9)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          padding: "50px 40px",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <h1
          style={{
            fontWeight: "900",
            fontSize: "36px",
            color: "#1565c0",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          STOCK MARKET INVESTING BY GROW CAPITAL 💹
        </h1>

        <p style={{ color: "#555", fontSize: "18px", marginBottom: "30px" }}>
          Please use the following bank account details to deposit your funds securely.
        </p>

        {/* Bank Accounts */}
        {accounts.length > 0 ? (
          accounts.map((acc, index) => (
            <div
              key={index}
              style={{
                background: "#e3f2fd",
                border: "2px solid #90caf9",
                borderRadius: "15px",
                padding: "25px",
                marginBottom: "25px",
                boxShadow: "inset 0 0 10px rgba(0,0,0,0.05)",
              }}
            >
              <p style={{ fontSize: "22px", fontWeight: "700", margin: "0 0 10px 0", color: "#0d47a1" }}>
                Account No: <b>{acc.accountNumber}</b>
              </p>
              <p style={{ fontSize: "20px", fontWeight: "600", color: "#1565c0" }}>
                IFSC Code: <b>{acc.ifscCode}</b>
              </p>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "18px", color: "#777" }}>Loading account details...</p>
        )}

        {/* Upload Document */}
        <Card className="shadow-lg p-4 mb-4" style={{ borderRadius: "20px" }}>
          <h4 className="text-center mb-2 fw-bold">Upload Deposit Slip / Document</h4>
          <p className="text-center text-muted mb-4" style={{ fontSize: "15px" }}>
            Upload your deposit slip safely
          </p>

          {msg && <Alert className="mb-3" variant={msgType}>{msg}</Alert>}

          <div
            style={{
              border: "2px dashed #b7b7b7",
              borderRadius: "12px",
              padding: "25px 15px",
              textAlign: "center",
              cursor: "pointer",
              marginBottom: "15px",
            }}
            onClick={() => document.getElementById("fileInput").click()}
          >
            {!preview ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/7153/7153160.png"
                alt="upload"
                style={{ width: "55px", opacity: "0.85", marginBottom: "10px" }}
              />
            ) : (
              <img
                src={preview}
                alt="Preview"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
            )}
            <p className="mb-1 fw-semibold">{file ? "Change File" : "Click to choose file"}</p>
            <small className="text-muted">(PDF, JPG, PNG, DOC allowed)</small>
          </div>

          <Form.Control
            id="fileInput"
            type="file"
            className="d-none"
            onChange={handleFileChange}
          />

          <Button
            className="w-100 py-2 mt-2 fw-semibold"
            variant="primary"
            onClick={handleUpload}
            style={{ borderRadius: "10px" }}
          >
            Upload Now
          </Button>
        </Card>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "10px",
            background: "#1565c0",
            color: "#fff",
            border: "none",
            padding: "12px 30px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0d47a1")}
          onMouseOut={(e) => (e.target.style.background = "#1565c0")}
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DepositPage;
