import React from "react";
import { ACTIVE_THEME, themes } from "../theme/UITheme";

export default function InputField({
  label,
  name,
  register,
  required = false,
  placeholder = "",
  type = "text",
}) {
  const styles = themes[ACTIVE_THEME] || themes[2];
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        {...(register ? register(name, { required }) : {})}
        placeholder={placeholder}
        className={`${styles.input} w-full`}
      />
    </div>
  );
}
