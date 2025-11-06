// import React, { useState } from "react";
// import { Card, Button, Container, Alert, Form } from "react-bootstrap";
// import { uploadSingleFile } from "../../services/apiService";

// const UploadFile = () => {
//   const [file, setFile] = useState(null);
//   const [msg, setMsg] = useState("");
//   const [msgType, setMsgType] = useState("success");

//   const handleUpload = async () => {
//     if (!file) {
//       setMsgType("danger");
//       setMsg("Please select a file");
//       return;
//     }

//     try {
//       const response = await uploadSingleFile(file);
//       setMsgType("success");
//       setMsg("Uploaded Successfully ✅");
//     } catch (error) {
//       setMsgType("danger");
//       setMsg("Upload failed ❌");
//     }
//   };

//   return (
//     <Container
//       className="d-flex justify-content-center align-items-start pt-5 pb-5"
//       style={{ minHeight: "100vh", background: "#f3f6fb" }}
//     >
//       <Card
//         className="shadow-lg p-4"
//         style={{
//           width: "100%",
//           maxWidth: "430px",
//           borderRadius: "20px",
//           background: "white",
//         }}
//       >
//         <h4 className="text-center mb-2 fw-bold">Upload Document</h4>

//         <p
//           className="text-center text-muted mb-4"
//           style={{ fontSize: "15px", lineHeight: "20px" }}
//         >
//           Upload bank statements, reports or any required documents
//         </p>

//         {msg && <Alert className="mb-3" variant={msgType}>{msg}</Alert>}

//         <div
//           style={{
//             border: "2px dashed #b7b7b7",
//             borderRadius: "12px",
//             padding: "25px 15px",
//             textAlign: "center",
//             cursor: "pointer",
//           }}
//           onClick={() => document.getElementById("fileInput").click()}
//         >
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/7153/7153160.png"
//             alt="upload"
//             style={{ width: "55px", opacity: "0.85", marginBottom: "10px" }}
//           />
//           <p className="mb-1 fw-semibold">
//             {file ? file.name : "Click to choose file"}
//           </p>
//           <small className="text-muted">(PDF, JPG, PNG, DOC allowed)</small>
//         </div>

//         <Form.Control
//           id="fileInput"
//           type="file"
//           className="d-none"
//           onChange={(e) => setFile(e.target.files[0])}
//         />

//         <Button
//           className="w-100 py-2 mt-4 fw-semibold"
//           variant="primary"
//           onClick={handleUpload}
//           style={{ borderRadius: "10px" }}
//         >
//           Upload Now
//         </Button>
//       </Card>
//     </Container>
//   );
// };

// export default UploadFile;


import React, { useState } from "react";
import { Card, Button, Container, Alert, Form } from "react-bootstrap";
import { uploadSingleFile } from "../../services/apiService";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("success");

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
      const response = await uploadSingleFile(file);
      setMsgType("success");
      setMsg("Uploaded Successfully ✅");
    } catch (error) {
      setMsgType("danger");
      setMsg("Upload failed ❌");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-start pt-5 pb-5"
      style={{ minHeight: "100vh", background: "#f3f6fb" }}
    >
      <Card
        className="shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: "430px",
          borderRadius: "20px",
          background: "white",
        }}
      >
        <h4 className="text-center mb-2 fw-bold">Upload Document</h4>

        <p className="text-center text-muted mb-4" style={{ fontSize: "15px" }}>
          Upload any required file safely
        </p>

        {msg && <Alert className="mb-3" variant={msgType}>{msg}</Alert>}

        {/* Upload Box */}
        <div
          style={{
            border: "2px dashed #b7b7b7",
            borderRadius: "12px",
            padding: "25px 15px",
            textAlign: "center",
            cursor: "pointer",
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
                marginBottom: "10px"
              }}
            />
          )}

          <p className="mb-1 fw-semibold">
            {file ? "Change File" : "Click to choose file"}
          </p>

          <small className="text-muted">(PDF, JPG, PNG, DOC allowed)</small>
        </div>

        {/* Hidden File Input */}
        <Form.Control
          id="fileInput"
          type="file"
          className="d-none"
          onChange={handleFileChange}
        />

        <Button
          className="w-100 py-2 mt-4 fw-semibold"
          variant="primary"
          onClick={handleUpload}
          style={{ borderRadius: "10px" }}
        >
          Upload Now
        </Button>
      </Card>
    </Container>
  );
};

export default UploadFile;
