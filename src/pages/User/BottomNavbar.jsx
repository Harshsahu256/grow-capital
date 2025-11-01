import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const BottomNavbar = () => {
  return (
    <nav
      className="bg-light border-top shadow-sm position-fixed bottom-0 w-100"
      style={{ zIndex: 1000 }}
    >
      <div
        className="d-flex justify-content-around align-items-center py-2"
        style={{ fontSize: "0.9rem" }}
      >
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          <i className="bi bi-house-door-fill fs-5 d-block"></i>
          Home
        </NavLink>

        <NavLink
          to="https://www.nseindia.com/"
          className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          <i className="bi bi-star-fill fs-5 d-block"></i>
          Watchlive
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          <i className="bi bi-folder-fill fs-5 d-block"></i>
          Portfolio
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          <i className="bi bi-grid-3x3-gap-fill fs-5 d-block"></i>
          Dashboard
        </NavLink>

        <NavLink
          to="/UserAccount"
          className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          <i className="bi bi-person-circle fs-5 d-block"></i>
          Account
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `text-decoration-none text-center ${isActive ? "text-primary" : "text-dark"}`
          }
        >
          <i className="bi bi-person-circle fs-5 d-block"></i>
          profile
        </NavLink>
        
      </div>
    </nav>
  );
};

export default BottomNavbar;
