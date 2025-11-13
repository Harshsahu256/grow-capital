
// import React, { useState } from "react";
// // Link component import kiya gaya hai navigation ke liye
// import { useNavigate, Link } from "react-router-dom"; 
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { loginUser } from "../services/apiService";
// import Logo from '../assets/navbar.png';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   // Checkbox ke liye state add ki gayi hai
//   const [agreedToTerms, setAgreedToTerms] = useState(false); 

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Checkbox ke change ko handle karne ke liye function
//   const handleCheckboxChange = (e) => {
//     setAgreedToTerms(e.target.checked);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Submit karne se pehle check karega ki terms agree kiye hain ya nahi
//     if (!agreedToTerms) {
//       alert("Please agree to the Terms of Condition to continue.");
//       return; 
//     }
    
//     setLoading(true);

//     try {
//       const response = await loginUser(formData);

//       if (response?.token) {
//         localStorage.setItem("token", response.token);
//         if (response.user) {
//           localStorage.setItem("user", JSON.stringify(response.user));
//         }
//         alert("Login successful!");
//         navigate("/userDashboard");
//       } else {
//         alert("Invalid credentials! Please try again.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert(error.response?.data?.message || "Something went wrong, please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <div className="bg-white shadow-sm rounded p-4 mx-auto" style={{ maxWidth: "900px" }}>
//         <Row className="align-items-center">
//           {/* Left Side Image - Yahan koi change nahi kiya gaya hai */}
//           <Col md={6} className="text-center mb-4 mb-md-0">
//             <img
//               src={Logo}
//               alt="Grow. Capital Login"
//               className="img-fluid rounded"
//               style={{ maxHeight: "100px", objectFit: "contain" }}
//             />
//           </Col>

//           {/* Right Side Form */}
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
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               {/* ✅ SIRF YEH LINE ADD KI GAYI HAI */}
//               <Form.Group className="mb-3">
//                 <Form.Check
//                   type="checkbox"
//                   id="terms-checkbox"
//                   checked={agreedToTerms}
//                   onChange={handleCheckboxChange}
//                   label={
//                     <>
//                       I agree to these{" "}
//                       <Link to="/term-and-condition">Terms of Condition</Link>
//                     </>
//                   }
//                 />
//               </Form.Group>

//               <div className="text-center">
//                 {/* Button ko disable kar diya gaya hai jab tak terms agree na ho */}
//                 <Button variant="primary" type="submit" className="px-5" disabled={loading || !agreedToTerms}>
//                   {loading ? "Logging in..." : "Login"}
//                 </Button>
//               </div>

//               <div className="text-center mt-3">
//                 <span>New to Stock Market Investing by Grow Capital? </span>
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
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { loginUser } from "../services/apiService";
import Logo from "../assets/navbar.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert("Please agree to the Terms of Condition to continue.");
      return;
    }

    setLoading(true);

    try {
      const response = await loginUser(formData);

      if (response?.token) {
        localStorage.setItem("token", response.token);
        if (response.user) {
          localStorage.setItem("user", JSON.stringify(response.user));
        }
        alert("Login successful!");
        navigate("/userDashboard");
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
              alt="Grow. Capital Login"
              className="img-fluid rounded"
              style={{ maxHeight: "100px", objectFit: "contain" }}
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

              {/* ✅ Improved Checkbox Section with Black Border */}
              <Form.Group className="mb-3 d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  checked={agreedToTerms}
                  onChange={handleCheckboxChange}
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                    border: "2px solid black",   // ✅ Dark Black Border
                    accentColor: "#0d6efd",       // ✅ Blue Tick color
                    borderRadius: "3px",
                  }}
                />
                <Form.Label htmlFor="terms-checkbox" className="m-0" style={{ cursor: "pointer" }}>
                  I agree to these{" "}
                  <Link to="/term-and-condition" className="text-primary text-decoration-none">
                    Terms of Condition
                  </Link>
                </Form.Label>
              </Form.Group>

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="px-5"
                  disabled={loading || !agreedToTerms}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>

              <div className="text-center mt-3">
                <span>New to Stock Market Investing by Grow Capital? </span>
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
