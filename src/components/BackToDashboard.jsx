import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackToDashboard() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 text-center">
      <button
        onClick={() => navigate("/dashboard")}
        className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg shadow"
      >
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}
