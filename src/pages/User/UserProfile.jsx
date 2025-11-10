// import React from "react";
// import { Container, Row, Col, Card, Button, Form, Image } from "react-bootstrap";

// const UserProfile = () => {
//   return (
//     <Container className="py-4">
//       {/* 🔷 Profile Section */}
//       <Card className="shadow-sm mb-4">
//         <Card.Body>
//           <Row className="align-items-center">
//             <Col md={8}>
//               <Form>
//                 <Row className="align-items-center mb-3">
//                   <Col xs="auto">
//                     <Form.Label className="fw-semibold me-2">
//                       Change Image
//                     </Form.Label>
//                     <Form.Control type="file" size="sm" className="d-inline-block w-auto" />
//                   </Col>
//                   <Col xs="auto">
//                     <Button variant="success" size="sm">
//                       UPDATE
//                     </Button>
//                   </Col>
//                 </Row>
//               </Form>

//               <p className="mb-1 fw-bold">
//                 Name: <span className="fw-normal">Md Hiphjaan</span>
//               </p>
//               <p className="mb-0 fw-bold">
//                 Client ID: <span className="fw-normal">GC195989</span>
//               </p>
//             </Col>

//             <Col md={4} className="text-center">
//               <Image
//                 src="/assets/avatar.png"
//                 roundedCircle
//                 width="100"
//                 height="100"
//                 alt="User Avatar"
//                 className="border p-1"
//               />
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* 🔷 Personal Details */}
//       <Card className="shadow-sm mb-4">
//         <Card.Body>
//           <h5 className="fw-bold mb-3">Personal Details</h5>
//           <Row>
//             <Col md={6}>
//               <p><strong>Email:</strong> gjcmohd@gmail.com</p>
//               <p><strong>Phone:</strong> 7755900543</p>
//               <p><strong>Aadhar No.:</strong> 3456 5678 9987</p>
//             </Col>
//             <Col md={6}>
//               <p><strong>PAN No.:</strong> AUMPG1234A</p>
//               <p><strong>D.O.B.:</strong> 07-08-1994</p>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* 🔷 Bank Details */}
//       <Card className="shadow-sm mb-4">
//         <Card.Body>
//           <h5 className="fw-bold mb-3">Bank Details</h5>
//           <Row>
//             <Col md={6}>
//               <p><strong>Bank Name:</strong> Bank of Baroda</p>
//               <p><strong>IFSC No.:</strong> BARB0TRUXXX</p>
//             </Col>
//             <Col md={6}>
//               <p><strong>Branch Name:</strong> Trupti Nagar</p>
//               <p><strong>Account No.:</strong> 20987654321</p>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>

//       {/* 🔷 Nominee Details */}
//       <Card className="shadow-sm">
//         <Card.Body>
//           <h5 className="fw-bold mb-3">Nominee Details</h5>
//           <Row>
//             <Col md={6}>
//               <p><strong>Nominee’s Name:</strong> Aisha Begum</p>
//               <p><strong>Nominee’s Aadhar No.:</strong> 4567 8890 1234</p>
//             </Col>
//             <Col md={6}>
//               <p><strong>Nominee’s Relation:</strong> Wife</p>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default UserProfile;
import React from "react";

const Profile = () => {
  const user = {
    fullName: "Md Hiphjaan",
    clientId: "GC195989",
    email: "gjcmohdhiphijaan7755@gmail.com",
    phone: "7755027256",
    aadhar: "395828213685",
    pan: "AUMPH5385D",
    dob: "07-08-1996",

    bankName: "Bank of Baroda",
    ifsc: "BARB0TRISUN",
    branch: "TRISUNDI, UP",
    accountNo: "20930100016371",

    nomineeName: "RUQAIYA BANO",
    nomineeAadhar: "459487153070",
    nomineeRelation: "Wife",

    profilePic:
      "https://cdn-icons-png.flaticon.com/512/219/219970.png",
  };

  const card = {
    margin: "0 20px 20px 20px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "rgba(0,0,0,0.08) 0px 2px 8px",
  };

  const textLine = {
    fontSize: "16px",
    margin: "6px 0",
    color: "#222",
    display: "flex",
    gap: "8px",
  };

  const title = {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "15px",
  };

  return (
    <div
      style={{
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center", // ✅ CONTENT CENTER HO JAYEGA
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}> {/* ✅ PERFECT CENTER CONTAINER */}
        
        {/* TOP PROFILE */}
        <div style={card}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={textLine}>
                <b>Name:</b> <span>{user.fullName}</span>
              </div>
              <div style={textLine}>
                <b>Client Id:</b> <span>{user.clientId}</span>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src={user.profilePic}
                alt="avatar"
                width="95"
                height="95"
                style={{ borderRadius: "50%", marginBottom: "10px" }}
              />
              <br />
            </div>
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <div style={card}>
          <p style={title}>Personal Details</p>

          <div style={textLine}><b>Email:</b> <span>{user.email}</span></div>
          <div style={textLine}><b>Phone:</b> <span>{user.phone}</span></div>
          <div style={textLine}><b>Aadhar No.:</b> <span>{user.aadhar}</span></div>
          <div style={textLine}><b>PAN No.:</b> <span>{user.pan}</span></div>
          <div style={textLine}><b>D.O.B.:</b> <span>{user.dob}</span></div>
        </div>

        {/* BANK DETAILS */}
        <div style={card}>
          <p style={title}>Bank Details</p>

          <div style={textLine}><b>Bank Name:</b> <span>{user.bankName}</span></div>
          <div style={textLine}><b>IFSC No.:</b> <span>{user.ifsc}</span></div>
          <div style={textLine}><b>Branch Name:</b> <span>{user.branch}</span></div>
          <div style={textLine}><b>Account No.:</b> <span>{user.accountNo}</span></div>
        </div>

        {/* NOMINEE DETAILS */}
        <div style={card}>
          <p style={title}>Nominee Details</p>

          <div style={textLine}><b>Nominee’s Name:</b> <span>{user.nomineeName}</span></div>
          <div style={textLine}><b>Nominee’s Aadhar Card:</b> <span>{user.nomineeAadhar}</span></div>
          <div style={textLine}><b>Nominee’s Relations:</b> <span>{user.nomineeRelation}</span></div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
