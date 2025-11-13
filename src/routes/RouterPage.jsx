// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import AppNavbar from "../components/Navbar";
// import Home from "../pages/Home";
// import Footer from "../components/Footer";
// import About from "../pages/About";
// import Account from "../pages/Account";
// import Pricing from "../pages/Pricing";
// import Insurance from "../pages/Insurance";
// import MutualFund from "../pages/MutualFund";
// import Services from "../pages/Services";
// import Signup from "../pages/Signup";
// import Login from "../pages/Login";
// import TermsAndCondition from "../pages/TermsAndCondition";
// import UserDashboard from "../pages/User/UserDashboard";
// import Portfolio from "../pages/User/Portfolio";
// import Dashboard from "../pages/User/Dashboard";
// import UserAccount from "../pages/User/UserAccount";
// import UserProfile from "../pages/User/UserProfile.jsx";


// const RouterPage = () => {
//   return (
//     <>
//       <AppNavbar />
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//          <Route path="/account" element={<Account/>} />
         
//            <Route path="/Pricing" element={<Pricing/>} />
//             <Route path="/Insurance" element={<Insurance/>} />
//              <Route path="/mutual-fund" element={<MutualFund/>} />
//               <Route path="/Services" element={<Services/>} />
                 
//             <Route path="/term-and-condition" element={< TermsAndCondition/>} />
//            <Route path="/Signup" element={<Signup/>} />
//            <Route path="/Login" element={<Login />}/>
//              <Route path="/userDashboard" element={<ProtectedRoute element={<UserDashboard />} />} />
             
//              <Route path="/Portfolio" element={<Portfolio />}/>
//       <Route path="/dashboard" element={<Dashboard />}/>
//              <Route path="/UserAccount" element={<UserAccount />}/>
//         <Route path="/profile" element={<UserProfile />} />
        
//       </Routes>
//       <Footer/>
//     </>
//   );
// };

// export default RouterPage;

// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import AppNavbar from "../components/Navbar";
// import Home from "../pages/Home";
// import Footer from "../components/Footer";
// import About from "../pages/About";
// import Account from "../pages/Account";
// import Pricing from "../pages/Pricing";
// import Insurance from "../pages/Insurance";
// import MutualFund from "../pages/MutualFund";
// import Services from "../pages/Services";
// import Signup from "../pages/Signup";
// import Login from "../pages/Login";
// import TermsAndCondition from "../pages/TermsAndCondition";
// import UserDashboard from "../pages/User/UserDashboard";
// import Portfolio from "../pages/User/Portfolio";
// import Dashboard from "../pages/User/Dashboard";
// import UserAccount from "../pages/User/UserAccount";
// import UserProfile from "../pages/User/UserProfile.jsx";
// import DepositPage from "../pages/User/DepositPage.jsx";
// import UploadFile from "../pages/User/UploadFile.jsx"
// import TransactionHistory from "../pages/User/TransactionHistory.jsx";


// const RouterPage = () => {
//   return (
//     <>
//       <AppNavbar />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/account" element={<Account />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/insurance" element={<Insurance />} />
//         <Route path="/mutual-fund" element={<MutualFund />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/term-and-condition" element={<TermsAndCondition />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* ✅ Protected Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route path="/userDashboard" element={<UserDashboard />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/userAccount" element={<UserAccount />} />
//           <Route path="/profile" element={<UserProfile />} />
//           <Route path="/deposit" element={<DepositPage />} />
//           <Route path="/uploadfile" element={<UploadFile/>} />
//           <Route path="/transaction-history" element={<TransactionHistory/>} />

//         </Route>
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default RouterPage;


import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AppNavbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import About from "../pages/About";
import Account from "../pages/Account";
import Pricing from "../pages/Pricing";
import Insurance from "../pages/Insurance";
import MutualFund from "../pages/MutualFund";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import TermsAndCondition from "../pages/TermsAndCondition";
import UserDashboard from "../pages/User/UserDashboard";
import Portfolio from "../pages/User/Portfolio";
import Dashboard from "../pages/User/Dashboard";
import UserAccount from "../pages/User/UserAccount";
import UserProfile from "../pages/User/UserProfile.jsx";
import DepositPage from "../pages/User/DepositPage.jsx";
import UploadFile from "../pages/User/UploadFile.jsx";
import TransactionHistory from "../pages/User/TransactionHistory.jsx";

const RouterPage = () => {
  const location = useLocation();

  // ✅ List of routes where Navbar should NOT appear
  const hideNavbarRoutes = [
    "/userDashboard",
    "/portfolio",
    "/dashboard",
    "/UserAccount",
    "/profile",
    "/deposit",
    "/uploadfile",
    "/transaction-history"
  ];


  
  // ✅ List of routes where Navbar should NOT appear
  const hidefooterRoutes = [
    "/userDashboard",
    "/portfolio",
    "/dashboard",
    "/UserAccount",
    "/profile",
    "/deposit",
    "/uploadfile",
    "/transaction-history"
  ];

    const hidefooter = hidefooterRoutes.includes(location.pathname);
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* ✅ Navbar will hide automatically on protected pages */}
      {!hideNavbar && <AppNavbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/mutual-fund" element={<MutualFund />} />
        <Route path="/services" element={<Services />} />
        <Route path="/term-and-condition" element={<TermsAndCondition />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/deposit" element={<DepositPage />} />

        {/* ✅ Protected Pages */}
        <Route element={<ProtectedRoute />}>
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userAccount" element={<UserAccount />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/uploadfile" element={<UploadFile />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
        </Route>
      </Routes>

        {!hidefooter && <Footer />}
      {/* ✅ Footer will remain always */}

    </>
  );
};

export default RouterPage;
