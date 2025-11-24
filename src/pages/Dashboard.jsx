import React from "react";
import Card from "../components/Card";
import { ACTIVE_THEME, themes } from "../theme/UITheme";
import { motion } from "framer-motion";

const meetings = [
  { id: 1, title: "Meeting 1", date: "05 Nov 2025, 4:00 PM", status: "Upcoming" },
  { id: 2, title: "Meeting 2", date: "22 Oct 2025, 2:30 PM", status: "Completed" },
  { id: 3, title: "Meeting 3", date: "25 Oct 2025, 3:00 PM", status: "Cancelled" },
];

export default function Dashboard() {
  const styles = themes[ACTIVE_THEME] || themes[2];

  return (
    <div className={styles.pageBg}>
      <div className="container mx-auto">

        {/* Dashboard Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-semibold mb-10 text-center"
        >
          Mentorship Program Dashboard
        </motion.h2>

        {/* Meeting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {meetings.map((m) => (
            <Card key={m.id}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl">{m.title}</h3>
                  <p className="text-sm text-gray-500">{m.date}</p>
                </div>

                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
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
              </div>

              <p className="mt-3 text-sm text-gray-600">
                Short description or notes about the meeting can appear here.
              </p>

              <div className="mt-4">
                <button className={themes[ACTIVE_THEME].button + " w-full"}>
                  Update Meeting Status
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
