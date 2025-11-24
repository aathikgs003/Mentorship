import React from "react";
import { ACTIVE_THEME, themes } from "../theme/UITheme";
import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  const styles = themes[ACTIVE_THEME] || themes[2];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, ease: "easeOut" }}
      className={`${styles.card} ${className}`}
    >
      {children}
    </motion.div>
  );
}
