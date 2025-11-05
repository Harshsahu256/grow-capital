// // import React from "react";
// // import { Container, Row, Col, Form, Button } from "react-bootstrap";

// // const Login = () => {
// //   return (
// //     <Container className="py-5">
// //       <div
// //         className="bg-white shadow-sm rounded p-4 mx-auto"
// //         style={{ maxWidth: "900px" }}
// //       >
// //         <Row className="align-items-center">
// //           {/* Left Image Section */}
// //           <Col md={6} className="text-center mb-4 mb-md-0">
// //             <img
// //               src="/assets/login-graphic.png"
// //               alt="Grow Capital Login"
// //               className="img-fluid rounded"
// //               style={{ maxHeight: "280px", objectFit: "contain" }}
// //             />
// //           </Col>

// //           {/* Right Form Section */}
// //           <Col md={6}>
// //             <Form>
// //               <Form.Group className="mb-3" controlId="formmobileNumber">
// //                 <Form.Label className="fw-semibold">Client ID</Form.Label>
// //                 <Form.Control type="text" placeholder="Enter client id" />
// //               </Form.Group>

// //               <Form.Group className="mb-3" controlId="formPassword">
// //                 <Form.Label className="fw-semibold">Password</Form.Label>
// //                 <Form.Control type="password" placeholder="Enter Password" />
// //               </Form.Group>

// //               <Form.Group className="mb-3 d-flex align-items-center">
// //                 <Form.Check type="checkbox" id="terms" className="me-2" />
// //                 <Form.Label htmlFor="terms" className="mb-0">
// //                   I agree to these{" "}
// //                   <a href="/term-and-condition" className="text-primary text-decoration-none">
// //                     Terms of Condition
// //                   </a>
// //                 </Form.Label>
// //               </Form.Group>

// //               <div className="text-center">
// //                 <Button
// //                   variant="primary"
// //                   type="submit"
// //                   className="px-5"
// //                   style={{ borderRadius: "5px" }}
// //                 >
// //                   Login
// //                 </Button>
// //               </div>

// //               <div className="text-center mt-3">
// //                 <span>New to Grow Capital? </span>
// //                 <a href="/signup" className="text-primary text-decoration-none">
// //                   Create an account
// //                 </a>
// //               </div>

// //               <div
// //                 className="text-center mt-4 p-2 rounded"
// //                 style={{
// //                   backgroundColor: "#b38b00",
// //                   color: "white",
// //                   fontSize: "0.9rem",
// //                 }}
// //               >
// //                 Never share your OTP, PIN or Password with anyone. Grow Capital
// //                 or its employees will never ask you for any of the above details.
// //               </div>
// //             </Form>
// //           </Col>
// //         </Row>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { loginUser } from "../services/apiService"; // ✅ API import

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ mobileNumber: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // ✅ Call backend API
//       const response = await loginUser({
//         mobileNumber: formData.mobileNumber,
//         password: formData.password,
//       });

//       if (response && response.token) {
//         localStorage.setItem("user", JSON.stringify(response.user || {}));
//         localStorage.setItem("token", response.token);

//         alert("Login successful!");
//         navigate("/user"); // ✅ redirect to dashboard
//       } else {
//         alert("Invalid credentials, please try again.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert(error.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <div className="bg-white shadow-sm rounded p-4 mx-auto" style={{ maxWidth: "900px" }}>
//         <Row className="align-items-center">
//           {/* Left Image Section */}
//           <Col md={6} className="text-center mb-4 mb-md-0">
//             <img
//               src="/assets/login-graphic.png"
//               alt="Grow Capital Login"
//               className="img-fluid rounded"
//               style={{ maxHeight: "280px", objectFit: "contain" }}
//             />
//           </Col>

//           {/* Right Form Section */}
//           <Col md={6}>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold">Client ID</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="mobileNumber"
//                   placeholder="Enter client id"
//                   value={formData.mobileNumber}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold">Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3 d-flex align-items-center">
//                 <Form.Check type="checkbox" id="terms" className="me-2" />
//                 <Form.Label htmlFor="terms" className="mb-0">
//                   I agree to{" "}
//                   <a href="/term-and-condition" className="text-primary text-decoration-none">
//                     Terms of Condition
//                   </a>
//                 </Form.Label>
//               </Form.Group>

//               <div className="text-center">
//                 <Button variant="primary" type="submit" className="px-5" disabled={loading}>
//                   {loading ? "Logging in..." : "Login"}
//                 </Button>
//               </div>

//               <div className="text-center mt-3">
//                 <span>New to Grow Capital? </span>
//                 <a href="/signup" className="text-primary text-decoration-none">
//                   Create an account
//                 </a>
//               </div>

//               <div
//                 className="text-center mt-4 p-2 rounded"
//                 style={{
//                   backgroundColor: "#b38b00",
//                   color: "white",
//                   fontSize: "0.9rem",
//                 }}
//               >
//                 Never share your OTP, PIN or Password with anyone. Grow Capital
//                 will never ask for it.
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { loginUser } from "../services/apiService"; // ✅ API import

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // ✅ Call backend API
//       const response = await loginUser({
//         email: formData.email,
//         password: formData.password,
//       });

//       if (response && response.token) {
//         localStorage.setItem("user", JSON.stringify(response.user || {}));
//         localStorage.setItem("token", response.token);

//         alert("Login successful!");
//         navigate("/user"); // ✅ redirect to dashboard
//       } else {
//         alert("Invalid credentials, please try again.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert(error.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <div className="bg-white shadow-sm rounded p-4 mx-auto" style={{ maxWidth: "900px" }}>
//         <Row className="align-items-center">
//           {/* Left Image Section */}
//           <Col md={6} className="text-center mb-4 mb-md-0">
//             <img
//               src="/assets/login-graphic.png"
//               alt="Grow Capital Login"
//               className="img-fluid rounded"
//               style={{ maxHeight: "280px", objectFit: "contain" }}
//             />
//           </Col>

//           {/* Right Form Section */}
//           <Col md={6}>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold">Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold">Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3 d-flex align-items-center">
//                 <Form.Check type="checkbox" id="terms" className="me-2" />
//                 <Form.Label htmlFor="terms" className="mb-0">
//                   I agree to{" "}
//                   <a href="/term-and-condition" className="text-primary text-decoration-none">
//                     Terms of Condition
//                   </a>
//                 </Form.Label>
//               </Form.Group>

//               <div className="text-center">
//                 <Button variant="primary" type="submit" className="px-5" disabled={loading}>
//                   {loading ? "Logging in..." : "Login"}
//                 </Button>
//               </div>

//               <div className="text-center mt-3">
//                 <span>New to Grow Capital? </span>
//                 <a href="/signup" className="text-primary text-decoration-none">
//                   Create an account
//                 </a>
//               </div>

//               <div
//                 className="text-center mt-4 p-2 rounded"
//                 style={{
//                   backgroundColor: "#b38b00",
//                   color: "white",
//                   fontSize: "0.9rem",
//                 }}
//               >
//                 Never share your OTP, PIN or Password with anyone. Grow Capital will never ask for it.
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { loginUser } from "../services/apiService";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await loginUser({
//         email: formData.email,
//         password: formData.password,
//       });

//       if (response && response.token) {
//         localStorage.setItem("user", JSON.stringify(response.user || {}));
//         localStorage.setItem("token", response.token);

//         alert("Login successful!");
//         navigate("/userDashboard"); // ✅ redirect to dashboard
//       } else {
//         alert("Invalid credentials, please try again.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert(error.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <div className="bg-white shadow-sm rounded p-4 mx-auto" style={{ maxWidth: "900px" }}>
//         <Row className="align-items-center">
//           <Col md={6} className="text-center mb-4 mb-md-0">
//             <img
//               src="/assets/login-graphic.png"
//               alt="Grow Capital Login"
//               className="img-fluid rounded"
//               style={{ maxHeight: "280px", objectFit: "contain" }}
//             />
//           </Col>

//           <Col md={6}>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold">Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3">
//                 <Form.Label className="fw-semibold">Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Enter Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <div className="text-center">
//                 <Button variant="primary" type="submit" className="px-5" disabled={loading}>
//                   {loading ? "Logging in..." : "Login"}
//                 </Button>
//               </div>

//               <div className="text-center mt-3">
//                 <span>New to Grow Capital? </span>
//                 <a href="/signup" className="text-primary text-decoration-none">
//                   Create an account
//                 </a>
//               </div>

//               <div
//                 className="text-center mt-4 p-2 rounded"
//                 style={{
//                   backgroundColor: "#b38b00",
//                   color: "white",
//                   fontSize: "0.9rem",
//                 }}
//               >
//                 Never share your OTP, PIN or Password with anyone.
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { loginUser } from "../services/apiService"; // ✅ Correct import path
import Logo from '../assets/navbar.png'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Call backend login API
      const response = await loginUser(formData);

      // ✅ Check if login successful
      if (response?.token) {
        // Save user + token in localStorage
        localStorage.setItem("token", response.token);
        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }

        alert("Login successful!");
        navigate("/userDashboard"); // ✅ Redirect after login
      } else {
        alert("Invalid credentials! Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.message || "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <div className="bg-white shadow-sm rounded p-4 mx-auto" style={{ maxWidth: "900px" }}>
        <Row className="align-items-center">
          {/* Left Side Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={Logo}
              alt="Prime  
              . Capital Login"
              className="img-fluid rounded"
              style={{ maxHeight: "280px", objectFit: "contain" }}
            />
          </Col>

          {/* Right Side Form */}
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" className="px-5" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>

              <div className="text-center mt-3">
                <span>New to Prime Capital? </span>
                <a href="/signup" className="text-primary text-decoration-none">
                  Create an account
                </a>
              </div>

              <div
                className="text-center mt-4 p-2 rounded"
                style={{
                  backgroundColor: "#b38b00",
                  color: "white",
                  fontSize: "0.9rem",
                }}
              >
                Never share your OTP, PIN or Password with anyone.
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
