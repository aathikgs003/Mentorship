import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ACTIVE_THEME, themes } from "../theme/UITheme";
import { motion } from "framer-motion";
import logo from "../public/nec-logo.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const styles = themes[ACTIVE_THEME];

  // Detect Dashboard
  const isDashboard = location.pathname === "/";

  // Detect webinar pages
  const isWebinarPage =
    location.pathname.startsWith("/webinars") ||
    location.pathname.startsWith("/webinar-request") ||
    location.pathname.startsWith("/alumni-feedback") ||
    location.pathname.startsWith("/certificates");

  const getNavbarBg = () => {
    return "bg-gradient-to-r from-[#0b4a85] to-[#2d8dff] text-white shadow-md";
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full z-50"
    >
      <div className={`w-full ${getNavbarBg()}`}>
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo + Title */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 object-contain rounded-md bg-white p-1"
            />

            <div>
              <h1 className="text-lg font-bold text-white">NEC Alumni Association</h1>
              <p className="text-xs text-blue-100">Mentorship System</p>
            </div>
          </div>

          {/* ❌ Hide all menu on dashboard */}
          {isDashboard ? null : (
            <>
              {/* ✔ Show webinar navbar only on webinar pages */}
              {isWebinarPage ? (
                <nav className="flex items-center gap-4">
                  <NavLink
                    to="/webinar-request"
                    className="px-4 py-2 bg-white text-[#0b4a85] rounded-lg shadow hover:bg-slate-100"
                  >
                    Webinar Request Form
                  </NavLink>

                  <NavLink
                    to="/alumni-feedback"
                    className="px-4 py-2 bg-white text-[#0b4a85] rounded-lg shadow hover:bg-slate-100"
                  >
                    Alumni Feedback Form
                  </NavLink>

                  <NavLink
                    to="/certificates"
                    className="px-4 py-2 bg-white text-[#0b4a85] rounded-lg shadow hover:bg-slate-100"
                  >
                    Certificates
                  </NavLink>
                </nav>
              ) : (
                /* ✔ Default navigation for all other pages */
                <nav className="flex items-center gap-6">
                  <NavLink
                    to="/mentor-register"
                    className="text-white/90 hover:text-white"
                  >
                    Mentor Register
                  </NavLink>

                  <NavLink
                    to="/mentee-register"
                    className="text-white/90 hover:text-white"
                  >
                    Mentee Register
                  </NavLink>

                  <NavLink
                    to="/feedback"
                    className="text-white/90 hover:text-white"
                  >
                    Feedback
                  </NavLink>
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </motion.header>
  );
}
