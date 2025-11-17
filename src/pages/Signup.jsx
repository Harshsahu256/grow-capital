// // import React from "react";
// // import { Container, Row, Col, Form, Button } from "react-bootstrap";

// // const Signup = () => {
// //   return (
// //     <Container className="py-5">
// //       <div className="bg-white shadow-sm rounded p-4 mx-auto" style={{ maxWidth: "900px" }}>
// //         <h5 className="text-center fw-bold mb-4">User Register</h5>
// //         <Form>
// //           <Row className="mb-3">
// //             <Col md={8}>
// //               <Form.Control type="text" placeholder="Enter Full Name *" />
// //             </Col>
// //             <Col md={4}>
// //               <Form.Control type="date" placeholder="Date of Birth (YYYY-MM-DD) *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Mobile Number *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control type="email" placeholder="Enter Your Email ID *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Enter Pan Card Number *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Enter IFSC Code *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Enter Bank Name *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Enter Bank Branch Name *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="text" placeholder="Enter Account Number *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="text" placeholder="Enter Aadhar Number *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Nominee's Name *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Nominee's Relations *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="text" placeholder="Nominee's Aadhar Card *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="password" placeholder="Enter Password *" />
// //             </Col>
// //           </Row>

// //           {/* Captcha Section */}
// //           <Row className="mb-4 align-items-center">
// //             <Col md={2}>
// //               <div className="bg-light border rounded text-center p-2 fw-bold">
// //                 e49573
// //               </div>
// //             </Col>
// //             <Col md={10}>
// //               <Form.Control type="text" placeholder="Enter Captcha Code *" />
// //             </Col>
// //           </Row>

// //           {/* Register Button */}
// //           <div className="text-center">
// //             <Button variant="primary" type="submit" className="px-5">
// //               Register
// //             </Button>
// //           </div>

// //           <div className="text-center mt-3">
// //             <a href="/login" className="text-primary text-decoration-none">
// //               Already have an account?
// //             </a>
// //           </div>
// //         </Form>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Signup;


// // import React, { useState } from "react";
// // import { Container, Row, Col, Form, Button } from "react-bootstrap";

// // const Signup = () => {
// //   const generateCaptcha = () => {
// //     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
// //     let code = "";
// //     for (let i = 0; i < 6; i++) {
// //       code += chars.charAt(Math.floor(Math.random() * chars.length));
// //     }
// //     return code;
// //   };

// //   const [captcha, setCaptcha] = useState(generateCaptcha());

// //   const handleRefreshCaptcha = () => {
// //     setCaptcha(generateCaptcha());
// //   };

// //   return (
// //     <Container className="py-5">
// //       <div
// //         className="bg-white shadow-sm rounded p-4 mx-auto"
// //         style={{ maxWidth: "900px" }}
// //       >
// //         <h5 className="text-center fw-bold mb-4">User Register</h5>
// //         <Form>
// //           <Row className="mb-3">
// //             <Col md={8}>
// //               <Form.Control type="text" placeholder="Enter Full Name *" />
// //             </Col>
// //             <Col md={4}>
// //               <Form.Control
// //                 type="date"
// //                 placeholder="Date of Birth (YYYY-MM-DD) *"
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Mobile Number *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control type="email" placeholder="Enter Your Email ID *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Enter Pan Card Number *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Enter IFSC Code *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Enter Bank Name *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 placeholder="Enter Bank Branch Name *"
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="text" placeholder="Enter Account Number *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="text" placeholder="Enter Aadhar Number *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Nominee's Name *" />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control type="text" placeholder="Nominee's Relations *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="text" placeholder="Nominee's Aadhar Card *" />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control type="password" placeholder="Enter Password *" />
// //             </Col>
// //           </Row>

// //           {/* 🔴 Captcha Section */}
// //           <Row className="mb-4 align-items-center">
// //             <Col
// //               md={3}
// //               className="d-flex justify-content-center align-items-center"
// //             >
// //               <div
// //                 className="border rounded text-center fw-bold"
// //                 style={{
// //                   background: "#fff4f4",
// //                   color: "red",
// //                   fontSize: "1.3rem",
// //                   letterSpacing: "3px",
// //                   padding: "8px 12px",
// //                   width: "120px",
// //                   userSelect: "none",
// //                 }}
// //               >
// //                 {captcha}
// //               </div>
// //               <Button
// //                 variant="link"
// //                 className="ms-2 p-0 text-decoration-none"
// //                 onClick={handleRefreshCaptcha}
// //               >
// //                 🔁
// //               </Button>
// //             </Col>
// //             <Col md={9}>
// //               <Form.Control type="text" placeholder="Enter Captcha Code *" />
// //             </Col>
// //           </Row>

// //           {/* Register Button */}
// //           <div className="text-center">
// //             <Button variant="primary" type="submit" className="px-5">
// //               Register
// //             </Button>
// //           </div>

// //           <div className="text-center mt-3">
// //             <a href="/login" className="text-primary text-decoration-none">
// //               Already have an account?
// //             </a>
// //           </div>
// //         </Form>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Signup;

// // import React, { useState } from "react";
// // import { Container, Row, Col, Form, Button } from "react-bootstrap";
// // import { registerUser } from "../services/apiService"; // ✅ Register API import

// // const Signup = () => {
// //   const generateCaptcha = () => {
// //     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
// //     let code = "";
// //     for (let i = 0; i < 6; i++) {
// //       code += chars.charAt(Math.floor(Math.random() * chars.length));
// //     }
// //     return code;
// //   };

// //   const [captcha, setCaptcha] = useState(generateCaptcha());
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     dob: "",
// //     mobileNumber: "",
// //     email: "",
// //     panCard: "",
// //     ifscCode: "",
// //     bankName: "",
// //     bankBranch: "",
// //     accountNumber: "",
// //     aadharNumber: "",
// //     nomineeName: "",
// //     nomineeRelation: "",
// //     nomineeAadhar: "",
// //     password: "",
// //     enteredCaptcha: ""
// //   });

// //   const [loading, setLoading] = useState(false);

// //   const handleRefreshCaptcha = () => {
// //     setCaptcha(generateCaptcha());
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // ✅ Handle Submit and Call Register API
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (formData.enteredCaptcha !== captcha) {
// //       alert("Invalid Captcha! Please try again.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await registerUser(formData);
// //       alert(response.message || "Registration Successful!");
// //       setFormData({
// //         fullName: "",
// //         dob: "",
// //         mobileNumber: "",
// //         email: "",
// //         panCard: "",
// //         ifscCode: "",
// //         bankName: "",
// //         bankBranch: "",
// //         accountNumber: "",
// //         aadharNumber: "",
// //         nomineeName: "",
// //         nomineeRelation: "",
// //         nomineeAadhar: "",
// //         password: "",
// //         enteredCaptcha: ""
// //       });
// //       setCaptcha(generateCaptcha());
// //     } catch (error) {
// //       console.error("Registration error:", error);
// //       alert(error.response?.data?.message || "Something went wrong, try again!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Container className="py-5">
// //       <div
// //         className="bg-white shadow-sm rounded p-4 mx-auto"
// //         style={{ maxWidth: "900px" }}
// //       >
// //         <h5 className="text-center fw-bold mb-4">User Register</h5>
// //         <Form onSubmit={handleSubmit}>
// //           <Row className="mb-3">
// //             <Col md={8}>
// //               <Form.Control
// //                 type="text"
// //                 name="fullName"
// //                 placeholder="Enter Full Name *"
// //                 value={formData.fullName}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //             <Col md={4}>
// //               <Form.Control
// //                 type="date"
// //                 name="dob"
// //                 placeholder="Date of Birth (YYYY-MM-DD) *"
// //                 value={formData.dob}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 name="mobileNumber"
// //                 placeholder="Mobile Number *"
// //                 value={formData.mobileNumber}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control
// //                 type="email"
// //                 name="email"
// //                 placeholder="Enter Your Email ID *"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 name="panCard"
// //                 placeholder="Enter Pan Card Number *"
// //                 value={formData.panCard}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 name="ifscCode"
// //                 placeholder="Enter IFSC Code *"
// //                 value={formData.ifscCode}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 name="bankName"
// //                 placeholder="Enter Bank Name *"
// //                 value={formData.bankName}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 name="bankBranch"
// //                 placeholder="Enter Bank Branch Name *"
// //                 value={formData.bankBranch}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control
// //                 type="text"
// //                 name="accountNumber"
// //                 placeholder="Enter Account Number *"
// //                 value={formData.accountNumber}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control
// //                 type="text"
// //                 name="aadharNumber"
// //                 placeholder="Enter Aadhar Number *"
// //                 value={formData.aadharNumber}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 name="nomineeName"
// //                 placeholder="Nominee's Name *"
// //                 value={formData.nomineeName}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //             <Col md={6}>
// //               <Form.Control
// //                 type="text"
// //                 name="nomineeRelation"
// //                 placeholder="Nominee's Relations *"
// //                 value={formData.nomineeRelation}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control
// //                 type="text"
// //                 name="nomineeAadhar"
// //                 placeholder="Nominee's Aadhar Card *"
// //                 value={formData.nomineeAadhar}
// //                 onChange={handleChange}
// //               />
// //             </Col>
// //           </Row>

// //           <Row className="mb-3">
// //             <Col md={12}>
// //               <Form.Control
// //                 type="password"
// //                 name="password"
// //                 placeholder="Enter Password *"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //           </Row>

// //           {/* 🔴 Captcha Section */}
// //           <Row className="mb-4 align-items-center">
// //             <Col
// //               md={3}
// //               className="d-flex justify-content-center align-items-center"
// //             >
// //               <div
// //                 className="border rounded text-center fw-bold"
// //                 style={{
// //                   background: "#fff4f4",
// //                   color: "red",
// //                   fontSize: "1.3rem",
// //                   letterSpacing: "3px",
// //                   padding: "8px 12px",
// //                   width: "120px",
// //                   userSelect: "none",
// //                 }}
// //               >
// //                 {captcha}
// //               </div>
// //               <Button
// //                 variant="link"
// //                 className="ms-2 p-0 text-decoration-none"
// //                 onClick={handleRefreshCaptcha}
// //               >
// //                 🔁
// //               </Button>
// //             </Col>
// //             <Col md={9}>
// //               <Form.Control
// //                 type="text"
// //                 name="enteredCaptcha"
// //                 placeholder="Enter Captcha Code *"
// //                 value={formData.enteredCaptcha}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </Col>
// //           </Row>

// //           {/* Register Button */}
// //           <div className="text-center">
// //             <Button variant="primary" type="submit" className="px-5" disabled={loading}>
// //               {loading ? "Registering..." : "Register"}
// //             </Button>
// //           </div>

// //           <div className="text-center mt-3">
// //             <a href="/login" className="text-primary text-decoration-none">
// //               Already have an account?
// //             </a>
// //           </div>
// //         </Form>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Signup;



// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { registerUser } from "../services/apiService"; // ✅ Register API import

// const Signup = () => {
//   const generateCaptcha = () => {
//     const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
//     let code = "";
//     for (let i = 0; i < 6; i++) {
//       code += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return code;
//   };

//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     mobileNumber: "",
//     email: "",
//     panCardNumber: "",
//     ifscCode: "",
//     bankName: "",
//     bankBranchName: "",
//     accountNumber: "",
//     aadharNumber: "",
//     nomineeName: "",
//     nomineeRelation: "",
//     nomineeAadhar: "",
//     password: "",
//     enteredCaptcha: ""
//   });

//   const [loading, setLoading] = useState(false);

//   const handleRefreshCaptcha = () => {
//     setCaptcha(generateCaptcha());
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Handle Submit and Call Register API
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.enteredCaptcha !== captcha) {
//       alert("Invalid Captcha! Please try again.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await registerUser(formData);
//       alert(response.message || "Registration Successful!");
//       setFormData({
//         fullName: "",
//         dob: "",
//         mobileNumber: "",
//         email: "",
//         panCardNumber: "",
//         ifscCode: "",
//         bankName: "",
//         bankBranchName: "",
//         accountNumber: "",
//         aadharNumber: "",
//         nomineeName: "",
//         nomineeRelation: "",
//         nomineeAadhar: "",
//         password: "",
//         enteredCaptcha: ""
//       });
//       setCaptcha(generateCaptcha());
//     } catch (error) {
//       console.error("Registration error:", error);
//       alert(error.response?.data?.message || "Something went wrong, try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <div
//         className="bg-white shadow-sm rounded p-4 mx-auto"
//         style={{ maxWidth: "900px" }}
//       >
//         <h5 className="text-center fw-bold mb-4">User Register</h5>
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-3">
//             <Col md={8}>
//               <Form.Control
//                 type="text"
//                 name="fullName"
//                 placeholder="Enter Full Name *"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//             <Col md={4}>
//               <Form.Control
//                 type="date"
//                 name="dob"
//                 placeholder="Date of Birth (YYYY-MM-DD) *"
//                 value={formData.dob}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Control
//                 type="text"
//                 name="mobileNumber"
//                 placeholder="Mobile Number *"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//             <Col md={6}>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email ID *"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Control
//                 type="text"
//                 name="panCardNumber"
//                 placeholder="Enter Pan Card Number *"
//                 value={formData.panCardNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//             <Col md={6}>
//               <Form.Control
//                 type="text"
//                 name="ifscCode"
//                 placeholder="Enter IFSC Code *"
//                 value={formData.ifscCode}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Control
//                 type="text"
//                 name="bankName"
//                 placeholder="Enter Bank Name *"
//                 value={formData.bankName}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//             <Col md={6}>
//               <Form.Control
//                 type="text"
//                 name="bankBranchName"
//                 placeholder="Enter Bank Branch Name *"
//                 value={formData.bankBranchName}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={12}>
//               <Form.Control
//                 type="text"
//                 name="accountNumber"
//                 placeholder="Enter Account Number *"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={12}>
//               <Form.Control
//                 type="text"
//                 name="aadharNumber"
//                 placeholder="Enter Aadhar Number *"
//                 value={formData.aadharNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Control
//                 type="text"
//                 name="nomineeName"
//                 placeholder="Nominee's Name *"
//                 value={formData.nomineeName}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//             <Col md={6}>
//               <Form.Control
//                 type="text"
//                 name="nomineeRelation"
//                 placeholder="Nominee's Relation *"
//                 value={formData.nomineeRelation}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={12}>
//               <Form.Control
//                 type="text"
//                 name="nomineeAadhar"
//                 placeholder="Nominee's Aadhar Card *"
//                 value={formData.nomineeAadhar}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col md={12}>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password *"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           {/* 🔴 Captcha Section */}
//           <Row className="mb-4 align-items-center">
//             <Col
//               md={3}
//               className="d-flex justify-content-center align-items-center"
//             >
//               <div
//                 className="border rounded text-center fw-bold"
//                 style={{
//                   background: "#fff4f4",
//                   color: "red",
//                   fontSize: "1.3rem",
//                   letterSpacing: "3px",
//                   padding: "8px 12px",
//                   width: "120px",
//                   userSelect: "none",
//                 }}
//               >
//                 {captcha}
//               </div>
//               <Button
//                 variant="link"
//                 className="ms-2 p-0 text-decoration-none"
//                 onClick={handleRefreshCaptcha}
//               >
//                 🔁
//               </Button>
//             </Col>
//             <Col md={9}>
//               <Form.Control
//                 type="text"
//                 name="enteredCaptcha"
//                 placeholder="Enter Captcha Code *"
//                 value={formData.enteredCaptcha}
//                 onChange={handleChange}
//                 required
//               />
//             </Col>
//           </Row>

//           {/* Register Button */}
//           <div className="text-center">
//             <Button variant="primary" type="submit" className="px-5" disabled={loading}>
//               {loading ? "Registering..." : "Register"}
//             </Button>
//           </div>

//           <div className="text-center mt-3">
//             <a href="/login" className="text-primary text-decoration-none">
//               Already have an account?
//             </a>
//           </div>
//         </Form>
//       </div>
//     </Container>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { registerUser } from "../services/apiService"; // Ensure this imports registerUser

const Signup = () => {
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobileNumber: "",
    email: "",
    panCardNumber: "",
    ifscCode: "",
    bankName: "",
    bankBranchName: "",
    accountNumber: "",
    aadharNumber: "",
    nomineeName: "",
    nomineeRelation: "",
    nomineeAadhar: "",
    password: "",
    enteredCaptcha: ""
  });

  const [loading, setLoading] = useState(false);

  const handleRefreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.enteredCaptcha !== captcha) {
      alert("Invalid Captcha! Please try again.");
      setCaptcha(generateCaptcha()); // Refresh captcha on failure
      setFormData({ ...formData, enteredCaptcha: "" }); // Clear entered captcha
      return;
    }

    setLoading(true);
    try {
      const response = await registerUser(formData);
      // 🔴 IMPORTANT CHANGE HERE: Update the success message for the user
      alert(response.message || "Registration Successful! Your account is awaiting admin approval.");
      setFormData({ // Clear form after successful registration
        fullName: "",
        dob: "",
        mobileNumber: "",
        email: "",
        panCardNumber: "",
        ifscCode: "",
        bankName: "",
        bankBranchName: "",
        accountNumber: "",
        aadharNumber: "",
        nomineeName: "",
        nomineeRelation: "",
        nomineeAadhar: "",
        password: "",
        enteredCaptcha: ""
      });
      setCaptcha(generateCaptcha()); // Generate a new captcha
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data?.message || "Something went wrong during registration, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <div
        className="bg-white shadow-sm rounded p-4 mx-auto"
        style={{ maxWidth: "900px" }}
      >
        <h5 className="text-center fw-bold mb-4">User Register</h5>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={8}>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth (YYYY-MM-DD) *"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number *"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Your Email ID *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                name="panCardNumber"
                placeholder="Enter Pan Card Number *"
                value={formData.panCardNumber}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                name="ifscCode"
                placeholder="Enter IFSC Code *"
                value={formData.ifscCode}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                name="bankName"
                placeholder="Enter Bank Name *"
                value={formData.bankName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                name="bankBranchName"
                placeholder="Enter Bank Branch Name *"
                value={formData.bankBranchName}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Control
                type="text"
                name="accountNumber"
                placeholder="Enter Account Number *"
                value={formData.accountNumber}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Control
                type="text"
                name="aadharNumber"
                placeholder="Enter Aadhar Number *"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                name="nomineeName"
                placeholder="Nominee's Name *"
                value={formData.nomineeName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                name="nomineeRelation"
                placeholder="Nominee's Relation *"
                value={formData.nomineeRelation}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Control
                type="text"
                name="nomineeAadhar"
                placeholder="Nominee's Aadhar Card *"
                value={formData.nomineeAadhar}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password *"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          {/* 🔴 Captcha Section */}
          <Row className="mb-4 align-items-center">
            <Col
              md={3}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="border rounded text-center fw-bold"
                style={{
                  background: "#fff4f4",
                  color: "red",
                  fontSize: "1.3rem",
                  letterSpacing: "3px",
                  padding: "8px 12px",
                  width: "120px",
                  userSelect: "none",
                }}
              >
                {captcha}
              </div>
              <Button
                variant="link"
                className="ms-2 p-0 text-decoration-none"
                onClick={handleRefreshCaptcha}
              >
                🔁
              </Button>
            </Col>
            <Col md={9}>
              <Form.Control
                type="text"
                name="enteredCaptcha"
                placeholder="Enter Captcha Code *"
                value={formData.enteredCaptcha}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          {/* Register Button */}
          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
          </div>

          <div className="text-center mt-3">
            <a href="/login" className="text-primary text-decoration-none">
              Already have an account?
            </a>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;