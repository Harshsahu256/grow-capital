

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ role }) => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user") || '{}');

//   if (!token) return <Navigate to="/" replace />;

//   if (role && user.role !== role) {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />; // ✅ This renders the nested route
// };

// export default ProtectedRoute;


import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // Token na ho to redirect to login page
  if (!token) return <Navigate to="/login" replace />;

  // Role mismatch ho to home page pe bhej do
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // ✅ Nested route yahan render hoga
};

export default ProtectedRoute;
