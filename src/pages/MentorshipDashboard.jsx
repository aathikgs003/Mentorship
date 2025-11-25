import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { ACTIVE_THEME, themes } from "../theme/UITheme";

const meetings = [
  { id: 1, title: "Meeting 1", date: "05 Nov 2025, 4:00 PM", status: "Upcoming" },
  { id: 2, title: "Meeting 2", date: "22 Oct 2025, 2:30 PM", status: "Completed" },
  { id: 3, title: "Meeting 3", date: "25 Oct 2025, 3:00 PM", status: "Cancelled" },
];

export default function MentorshipDashboard() {
  const styles = themes[ACTIVE_THEME] || themes[2];

  return (
    <div className={styles.pageBg}>
      <div className="container mx-auto">

        {/* ================== PAGE TITLE ================== */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold mb-8 text-center"
        >
          Mentorship Dashboard
        </motion.h2>

        {/* ================== STAT COUNT CARDS ================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            ["18", "Active Mentors"],
            ["42", "Active Mentees"],
            ["35", "Successful Matches"],
            ["3", "Postponed"],
          ].map(([value, label], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white shadow-lg rounded-xl py-8 text-center border border-gray-100"
            >
              <h3 className="text-4xl font-extrabold text-blue-600">{value}</h3>
              <p className="text-gray-600 mt-2 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* ================== MEETING CARDS ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {meetings.map((m) => (
            <Card key={m.id}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl">{m.title}</h3>
                  <p className="text-sm text-gray-500">{m.date}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    m.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : m.status === "Upcoming"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {m.status}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-600">
                Short description or notes about the meeting can appear here.
              </p>

              <button className={`${styles.button} w-full mt-4`}>
                Update Meeting Status
              </button>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}
