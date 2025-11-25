import React from "react";
import { motion } from "framer-motion";

const placements = [
  { name: "Rahul Sharma", company: "Infosys", status: "OFFERED" },
  { name: "Ananya Iyer", company: "TCS", status: "IN PROGRESS" },
  { name: "Vignesh Kumar", company: "Amazon", status: "REJECTED" },
  { name: "Preethi S", company: "Zoho", status: "OFFERED" },
];

export default function PlacementDashboard() {
  return (
    <div className="min-h-screen bg-orange-100 p-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-700">
        Placement Dashboard
      </h2>

      <div className="max-w-md mx-auto space-y-5">
        {placements.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-4 rounded-xl shadow-md"
          >
            <h3 className="font-semibold text-xl">{p.name}</h3>
            <p className="text-gray-600 text-sm">{p.company}</p>

            <span
              className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
                p.status === "OFFERED"
                  ? "bg-green-100 text-green-700"
                  : p.status === "IN PROGRESS"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {p.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
