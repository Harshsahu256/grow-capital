// // // // // src/components/Navbar.jsx
// // // // import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// // // // import { Link } from "react-router-dom";


// // // // function AppNavbar() {
// // // //   return (
// // // //     <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
// // // //       <Container>
// // // //         <Navbar.Brand as={Link} to="/">
// // // //           {/* <img src={logo} alt="Grow Capital" height="40" />{" "} */}
// // // //           <span className="fw-bold text-primary">Grow Capital</span>
// // // //         </Navbar.Brand>
// // // //         <Navbar.Toggle />
// // // //         <Navbar.Collapse>
// // // //           <Nav className="ms-auto">
// // // //             <Nav.Link as={Link} to="/">Home</Nav.Link>
// // // //             <Nav.Link as={Link} to="/about">About</Nav.Link>
// // // //          {/* Dropdown for Services */}
// // // //             <NavDropdown title="Services" id="services-dropdown">
// // // //               <NavDropdown.Item as={Link} to="/services">Service</NavDropdown.Item>
// // // //               <NavDropdown.Item as={Link} to="/mutual-fund">Mutual Fund</NavDropdown.Item>
// // // //               <NavDropdown.Item as={Link} to="/insurance">Insurance</NavDropdown.Item>
// // // //               <NavDropdown.Item as={Link} to="/ipo">IPO</NavDropdown.Item>
// // // //             </NavDropdown>

// // // //               <Nav.Link as={Link} to="/account">Account</Nav.Link>
            
// // // //             <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
// // // //             {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
// // // //             <Nav.Link as={Link} to="/login">Login</Nav.Link>
// // // //             <Nav.Link as={Link} to="/signup" className="btn btn-primary  px-3 ms-2">Sign Up</Nav.Link>
// // // //           </Nav>
// // // //         </Navbar.Collapse>
// // // //       </Container>
// // // //     </Navbar>
// // // //   );
// // // // }

// // // // export default AppNavbar;

// // // import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// // // import { Link, useLocation } from "react-router-dom";

// // // function AppNavbar() {
// // //   const location = useLocation();

// // //   const linkStyle = {
// // //     position: "relative",
// // //     margin: "0 10px",
// // //     color: "#000",
// // //     fontWeight: 500,
// // //     textDecoration: "none",
// // //     transition: "all 0.3s ease-in-out",
// // //   };

// // //   const activeLink = {
// // //     color: "#0dcaf0",
// // //     fontWeight: 600,
// // //     borderBottom: "2px solid #0dcaf0",
// // //   };

// // //   const hoverEffect = (e) => {
// // //     e.target.style.color = "#0dcaf0";
// // //   };

// // //   const removeHover = (e, path) => {
// // //     if (location.pathname !== path) {
// // //       e.target.style.color = "#000";
// // //     }
// // //   };

// // //   return (
// // //     <Navbar
// // //       bg="light"
// // //       expand="lg"
// // //       className="shadow-sm sticky-top"
// // //       style={{ fontFamily: "Poppins, sans-serif" }}
// // //     >
// // //       <Container>
// // //         <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
// // //           <span style={{ color: "#0d6efd" }}>Grow</span>{" "}
// // //           <span style={{ color: "#000" }}>Capital</span>
// // //         </Navbar.Brand>

// // //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// // //         <Navbar.Collapse id="basic-navbar-nav">
// // //           <Nav className="ms-auto align-items-center">
// // //             {[
// // //               { name: "Home", path: "/" },
// // //               { name: "About", path: "/about" },
// // //               { name: "Account", path: "/account" },
// // //               { name: "Pricing", path: "/pricing" },
// // //               { name: "Login", path: "/login" },
// // //             ].map((link) => (
// // //               <Nav.Link
// // //                 key={link.path}
// // //                 as={Link}
// // //                 to={link.path}
// // //                 style={
// // //                   location.pathname === link.path
// // //                     ? { ...linkStyle, ...activeLink }
// // //                     : linkStyle
// // //                 }
// // //                 onMouseEnter={hoverEffect}
// // //                 onMouseLeave={(e) => removeHover(e, link.path)}
// // //               >
// // //                 {link.name}
// // //               </Nav.Link>
// // //             ))}

// // //             <NavDropdown
// // //               title="Services"
// // //               id="services-dropdown"
// // //               style={linkStyle}
// // //               menuVariant="light"
// // //             >
// // //               <NavDropdown.Item as={Link} to="/services">
// // //                 Service
// // //               </NavDropdown.Item>
// // //               <NavDropdown.Item as={Link} to="/mutual-fund">
// // //                 Mutual Fund
// // //               </NavDropdown.Item>
// // //               <NavDropdown.Item as={Link} to="/insurance">
// // //                 Insurance
// // //               </NavDropdown.Item>
// // //               <NavDropdown.Item as={Link} to="/ipo">
// // //                 IPO
// // //               </NavDropdown.Item>
// // //             </NavDropdown>

// // //             <Nav.Link
// // //               as={Link}
// // //               to="/signup"
// // //               className="btn btn-primary px-3 ms-2 rounded-pill shadow-sm"
// // //               style={{ fontWeight: 600 }}
// // //             >
// // //               Sign Up
// // //             </Nav.Link>
// // //           </Nav>
// // //         </Navbar.Collapse>
// // //       </Container>
// // //     </Navbar>
// // //   );
// // // }

// // // export default AppNavbar;

// // import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// // import { Link, useLocation } from "react-router-dom";

// // function AppNavbar() {
// //   const location = useLocation();

// //   const linkStyle = {
// //     position: "relative",
// //     margin: "0 10px",
// //     color: "#000",
// //     fontWeight: 500,
// //     textDecoration: "none",
// //     transition: "all 0.3s ease-in-out",
// //   };

// //   const activeLink = {
// //     color: "#0dcaf0",
// //     fontWeight: 600,
// //     borderBottom: "2px solid #0dcaf0",
// //   };

// //   const hoverEffect = (e) => {
// //     e.target.style.color = "#0dcaf0";
// //   };

// //   const removeHover = (e, path) => {
// //     if (location.pathname !== path) {
// //       e.target.style.color = "#000";
// //     }
// //   };

// //   return (
// //     <Navbar
// //       bg="light"
// //       expand="lg"
// //       className="shadow-sm sticky-top"
// //       style={{ fontFamily: "Poppins, sans-serif" }}
// //     >
// //       <Container>
// //         <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
// //           <span style={{ color: "#0d6efd" }}>Grow</span>{" "}
// //           <span style={{ color: "#000" }}>Capital</span>
// //         </Navbar.Brand>

// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="ms-auto align-items-center">
// //             {/* ✅ Correct order */}
// //             {[
// //               { name: "Home", path: "/" },
// //               { name: "About", path: "/about" },
// //             ].map((link) => (
// //               <Nav.Link
// //                 key={link.path}
// //                 as={Link}
// //                 to={link.path}
// //                 style={
// //                   location.pathname === link.path
// //                     ? { ...linkStyle, ...activeLink }
// //                     : linkStyle
// //                 }
// //                 onMouseEnter={hoverEffect}
// //                 onMouseLeave={(e) => removeHover(e, link.path)}
// //               >
// //                 {link.name}
// //               </Nav.Link>
// //             ))}

// //             {/* ✅ Services Dropdown */}
// //             <NavDropdown
// //               title="Services"
// //               id="services-dropdown"
// //               style={linkStyle}
// //               menuVariant="light"
// //             >
// //               <NavDropdown.Item as={Link} to="/services">
// //                 Service
// //               </NavDropdown.Item>
// //               <NavDropdown.Item as={Link} to="/mutual-fund">
// //                 Mutual Fund
// //               </NavDropdown.Item>
// //               <NavDropdown.Item as={Link} to="/insurance">
// //                 Insurance
// //               </NavDropdown.Item>
// //               <NavDropdown.Item as={Link} to="/services">
// //                 IPO
// //               </NavDropdown.Item>
// //             </NavDropdown>

// //             {/* ✅ Remaining links */}
// //             {[
// //               { name: "Account", path: "/account" },
// //               { name: "Pricing", path: "/pricing" },
// //               { name: "Login", path: "/login" },
// //             ].map((link) => (
// //               <Nav.Link
// //                 key={link.path}
// //                 as={Link}
// //                 to={link.path}
// //                 style={
// //                   location.pathname === link.path
// //                     ? { ...linkStyle, ...activeLink }
// //                     : linkStyle
// //                 }
// //                 onMouseEnter={hoverEffect}
// //                 onMouseLeave={(e) => removeHover(e, link.path)}
// //               >
// //                 {link.name}
// //               </Nav.Link>
// //             ))}

// //             {/* ✅ Sign Up Button */}
// //             <Nav.Link
// //               as={Link}
// //               to="/signup"
// //               className="btn btn-primary px-3 ms-2 rounded-pill shadow-sm"
// //               style={{ fontWeight: 600 }}
// //             >
// //               Sign Up
// //             </Nav.Link>
// //           </Nav>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
// //   );
// // }

// // export default AppNavbar;

// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";

// function AppNavbar() {
//   const location = useLocation();

//   const linkStyle = {
//     position: "relative",
//     margin: "0 12px",
//     color: "#000",
//     fontWeight: 500,
//     textDecoration: "none",
//     transition: "all 0.3s ease-in-out",
//     padding: "10px 0", // 🟩 Add vertical padding to increase clickable area
//   };

//   const activeLink = {
//     color: "#0dcaf0",
//     fontWeight: 600,
//     borderBottom: "2px solid #0dcaf0",
//   };

//   const hoverEffect = (e) => {
//     e.target.style.color = "#0dcaf0";
//   };

//   const removeHover = (e, path) => {
//     if (location.pathname !== path) {
//       e.target.style.color = "#000";
//     }
//   };

//   return (
//     <Navbar
//       bg="light"
//       expand="lg"
//       className="shadow-sm sticky-top"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         padding: "18px 0", // 🟩 Increased height of Navbar
//       }}
//     >
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
//           <span style={{ color: "#0d6efd" }}>Grow</span>{" "}
//           <span style={{ color: "#000" }}>Capital</span>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto align-items-center">
//             {/* ✅ Correct order */}
//             {[
//               { name: "Home", path: "/" },
//               { name: "About", path: "/about" },
//             ].map((link) => (
//               <Nav.Link
//                 key={link.path}
//                 as={Link}
//                 to={link.path}
//                 style={
//                   location.pathname === link.path
//                     ? { ...linkStyle, ...activeLink }
//                     : linkStyle
//                 }
//                 onMouseEnter={hoverEffect}
//                 onMouseLeave={(e) => removeHover(e, link.path)}
//               >
//                 {link.name}
//               </Nav.Link>
//             ))}

//             {/* ✅ Services Dropdown */}
//             <NavDropdown
//               title="Services"
//               id="services-dropdown"
//               style={linkStyle}
//               menuVariant="light"
//             >
//               <NavDropdown.Item as={Link} to="/services">
//                 Service
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/mutual-fund">
//                 Mutual Fund
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/insurance">
//                 Insurance
//               </NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/ipo">
//                 IPO
//               </NavDropdown.Item>
//             </NavDropdown>

//             {/* ✅ Remaining links */}
//             {[
//               { name: "Account", path: "/account" },
//               { name: "Pricing", path: "/pricing" },
//               { name: "Login", path: "/login" },
//             ].map((link) => (
//               <Nav.Link
//                 key={link.path}
//                 as={Link}
//                 to={link.path}
//                 style={
//                   location.pathname === link.path
//                     ? { ...linkStyle, ...activeLink }
//                     : linkStyle
//                 }
//                 onMouseEnter={hoverEffect}
//                 onMouseLeave={(e) => removeHover(e, link.path)}
//               >
//                 {link.name}
//               </Nav.Link>
//             ))}

//             {/* ✅ Sign Up Button */}
//             <Nav.Link
//               as={Link}
//               to="/signup"
//               className="btn btn-primary px-3 ms-2 rounded-pill shadow-sm"
//               style={{ fontWeight: 600 }}
//             >
//               Sign Up
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/navbar.png'
function AppNavbar() {
  const location = useLocation();

  const linkStyle = {
    position: "relative",
    margin: "0 12px",
    color: "#000",
    fontWeight: 750,
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
    padding: "10px 0", // 👈 kam padding se text aur underline paas aa jayenge
lineHeight: "1.2", // 👈 text aur underline ke beech ka gap tight ho jayega
display: "inline-block", // 👈 alignment consistent rakhta hai

  };

  const activeLink = {
    color: "#0dcaf0",
    fontWeight: 600,
  };

  const hoverEffect = (e) => {
    e.target.style.color = "#0dcaf0";
  };

  const removeHover = (e, path) => {
    if (location.pathname !== path) {
      e.target.style.color = "#000";
    }
  };

  return (
    <>
      {/* 🟦 Custom underline animation styles */}
      <style>
        {`
          .nav-link-underline {
            position: relative;
            display: inline-block;
          }
          .nav-link-underline::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 2px;
            background-color: #0dcaf0;
            transition: width 0.4s ease;
          }
          .nav-link-underline:hover::after {
            width: 100%;
          }
          .nav-link-underline.active::after {
            width: 100%;
          }
        `}
      </style>

      <Navbar
        bg="light"
        expand="lg"
        className="shadow-sm sticky-top"
        style={{
          fontFamily: "Poppins, sans-serif",
          padding: "15px 0",
        }}
      >
        <Container>
          {/* <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
            <span style={{ color: "#0d6efd" }}>Grow</span>{" "}
            <span style={{ color: "#000" }}>Capital</span>
          </Navbar.Brand> */}
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: "-30px" }}>
  <img
    src={Logo}
    alt="Prime Capital Logo"
    height="60" // 👈 height aap adjust kar sakte ho (e.g., 40 ya 60)
    className="d-inline-block align-top"
  />
</Navbar.Brand>


          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* ✅ Main links */}
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
              ].map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  className={`nav-link-underline ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  style={
                    location.pathname === link.path
                      ? { ...linkStyle, ...activeLink }
                      : linkStyle
                  }
                  onMouseEnter={hoverEffect}
                  onMouseLeave={(e) => removeHover(e, link.path)}
                >
                  {link.name}
                </Nav.Link>
              ))}

              {/* ✅ Services Dropdown */}
              <NavDropdown
                title="Services"
                id="services-dropdown"
                style={linkStyle}
                menuVariant="light"
              >
                <NavDropdown.Item as={Link} to="/services">
                  Service
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mutual-fund">
                  Mutual Fund
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/insurance">
                  Insurance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services">
                  IPO
                </NavDropdown.Item>
              </NavDropdown>

              {/* ✅ Other links */}
              {[
                { name: "Account", path: "/account" },
                { name: "Pricing", path: "/pricing" },
                { name: "Login", path: "/login" },
              ].map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  className={`nav-link-underline ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  style={
                    location.pathname === link.path
                      ? { ...linkStyle, ...activeLink }
                      : linkStyle
                  }
                  onMouseEnter={hoverEffect}
                  onMouseLeave={(e) => removeHover(e, link.path)}
                >
                  {link.name}
                </Nav.Link>
              ))}

              {/* ✅ Sign Up Button */}
              <Nav.Link
                as={Link}
                to="/signup"
                className="btn btn-primary px-3 ms-2 rounded-pill shadow-sm"
                style={{ fontWeight: 600 }}
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;