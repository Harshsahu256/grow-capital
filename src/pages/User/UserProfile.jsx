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


import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Image, Spinner, Alert } from "react-bootstrap";
import { getUserProfile } from "../../services/apiService";

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile(); // API call returns response.data.data
        setProfile(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-4">
      {/* 🔷 Profile Section */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
     <Row className="justify-content-center text-center align-items-center" style={{ minHeight: "150px" }}>
  <Col md={8}>
    <p className="mb-2 fw-bold fs-5">
      Name: <span className="fw-normal">{profile.fullName}</span>
    </p>
    <p className="mb-0 fw-bold fs-6">
      Client ID: <span className="fw-normal">{profile._id}</span>
    </p>
  </Col>
</Row>

        </Card.Body>
      </Card>

      {/* 🔷 Personal Details */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="fw-bold mb-3">Personal Details</h5>
          <Row>
            <Col md={6}>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.mobileNumber}</p>
              <p><strong>Aadhar No.:</strong> {profile.aadharNumber}</p>
            </Col>
            <Col md={6}>
              <p><strong>PAN No.:</strong> {profile.panCardNumber}</p>
              <p><strong>D.O.B.:</strong> {profile.dob}</p>
              <p><strong>Total Amount:</strong> {profile.totalAmount}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* 🔷 Bank Details */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="fw-bold mb-3">Bank Details</h5>
          <Row>
            <Col md={6}>
              <p><strong>Bank Name:</strong> {profile.bankName}</p>
              <p><strong>IFSC No.:</strong> {profile.ifscCode}</p>
            </Col>
            <Col md={6}>
              <p><strong>Branch Name:</strong> {profile.bankBranchName}</p>
              <p><strong>Account No.:</strong> {profile.accountNumber}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* 🔷 Nominee Details */}
      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="fw-bold mb-3">Nominee Details</h5>
          <Row>
            <Col md={6}>
              <p><strong>Nominee’s Name:</strong> {profile.nomineeName}</p>
              <p><strong>Nominee’s Aadhar No.:</strong> {profile.nomineeAadhar}</p>
            </Col>
            <Col md={6}>
              <p><strong>Nominee’s Relation:</strong> {profile.nomineeRelation}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
