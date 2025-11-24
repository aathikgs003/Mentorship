import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ACTIVE_THEME, themes } from "../theme/UITheme";
import { motion } from "framer-motion";
import logo from "../public/nec-logo.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const styles = themes[ACTIVE_THEME];

  // Dynamic background based on active theme
  const getNavbarBg = () => {
    if (ACTIVE_THEME === 1) return "bg-white/10 backdrop-blur-lg";
    if (ACTIVE_THEME === 7) return "bg-gradient-to-r from-purple-100/95 via-pink-100/95 to-cyan-100/95 backdrop-blur-lg border-b-2 border-purple-200";
    return "bg-white";
  };

  // Dynamic text color based on theme
  const getTextColor = () => {
    if (ACTIVE_THEME === 1) return "text-white";
    if (ACTIVE_THEME === 7) return "text-slate-800";
    return "text-slate-900";
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full z-50"
    >
      <div className={`w-full shadow-md ${getNavbarBg()}`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <motion.img
              src={logo}
              alt="NEC Logo"
              className={`w-12 h-12 object-contain rounded-md ${
                ACTIVE_THEME === 7 ? "shadow-lg shadow-purple-300/50 border-2 border-purple-200" : ""
              }`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />

            <div>
              <h1 className={`text-lg font-bold ${getTextColor()}`}>
                NEC Alumni Association
              </h1>
              <p className={`text-xs ${styles.mutedText}`}>Mentorship System</p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => navLinkStyle(isActive)}>
              Dashboard
            </NavLink>
            <NavLink to="/mentor-register" className={({ isActive }) => navLinkStyle(isActive)}>
              Mentor Register
            </NavLink>
            <NavLink to="/mentee-register" className={({ isActive }) => navLinkStyle(isActive)}>
              Mentee Register
            </NavLink>
            <NavLink to="/feedback" className={({ isActive }) => navLinkStyle(isActive)}>
              Feedback
            </NavLink>
          </nav>

        </div>
      </div>
    </motion.header>
  );
}

// Dynamic NavLink styling based on active theme
const navLinkStyle = (isActive) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-300";
  
  if (ACTIVE_THEME === 7) {
    return isActive
      ? `${baseStyle} bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-white shadow-lg shadow-purple-400/40 scale-105`
      : `${baseStyle} text-slate-700 hover:text-purple-600 hover:bg-purple-50 hover:scale-105`;
  }
  
  if (ACTIVE_THEME === 1) {
    return isActive
      ? `${baseStyle} bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg`
      : `${baseStyle} text-white/90 hover:text-white hover:bg-white/20`;
  }
  
  // Default style for other themes
  return isActive
    ? `${baseStyle} bg-blue-600 text-white shadow-md`
    : `${baseStyle} text-slate-700 hover:text-blue-600 hover:bg-blue-50`;
};