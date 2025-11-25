import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Sample data
const DATA = {
  "January 2025": [
    { id: "w1", title: "AI in Healthcare", slot: "10 Jan 2025, 3:00 PM", registered: 45, status: "approved" },
    { id: "w2", title: "Data Science Career Roadmap", slot: "15 Jan 2025, 5:00 PM", registered: 38, status: "approved" },
    { id: "w3", title: "Cybersecurity Trends 2025", slot: "20 Jan 2025, 4:00 PM", registered: 52, status: "postponed" },
  ],
  "February 2025": [
    { id: "w4", title: "Full Stack Development", slot: "05 Feb 2025, 2:00 PM", registered: 60, status: "approved" },
    { id: "w5", title: "Cloud Computing Basics", slot: "12 Feb 2025, 4:00 PM", registered: 50, status: "approved" },
  ],
};

export default function WebinarDashboard() {
  const navigate = useNavigate();

  /* ============================
     📊 STATS (Auto Calculated)
     ============================ */
  const allWebinars = Object.values(DATA).flat();

  const approvedCount = allWebinars.filter((w) => w.status === "approved").length;
  const postponedCount = allWebinars.filter((w) => w.status === "postponed").length;
  const availableCount = allWebinars.length;
  const certificateCount = allWebinars.length; // or replace with real backend count
  const totalRegistrations = allWebinars.reduce((sum, w) => sum + w.registered, 0);


  const handleDetails = (id) => {
    navigate(`/webinar/${id}`);
  };

  const handleDownloadCertificate = (title) => {
    const url = "/mnt/data/a19fa4d3-6324-4fff-88bc-a7fd4c7b43d2.png";
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}-certificate.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handlePrintReport = () => {
    window.open("/mnt/data/e8ddc2d5-6aa3-4d69-85cb-526e6aacb672.png", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf4ff] to-[#dfefff] py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page title */}
        <motion.h1
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center text-4xl font-extrabold text-[#0f4aa6] mb-10"
        >
          Webinars Dashboard
        </motion.h1>

        {/* 📊 Stats Section */}
<section className="mb-14">
  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

    {/* Approved */}
    <div className="bg-[#f5f7fb] rounded-xl p-8 text-center shadow-sm">
      <h1 className="text-5xl font-extrabold text-[#0b4a85]">{approvedCount}</h1>
      <p className="mt-2 text-gray-600 text-lg">Approved</p>
    </div>

    {/* Postponed */}
    <div className="bg-[#f5f7fb] rounded-xl p-8 text-center shadow-sm">
      <h1 className="text-5xl font-extrabold text-[#0b4a85]">{postponedCount}</h1>
      <p className="mt-2 text-gray-600 text-lg">Postponed</p>
    </div>

    {/* Available */}
    <div className="bg-[#f5f7fb] rounded-xl p-8 text-center shadow-sm">
      <h1 className="text-5xl font-extrabold text-[#0b4a85]">{availableCount}</h1>
      <p className="mt-2 text-gray-600 text-lg">Available</p>
    </div>

    {/* Certificates */}
    <div className="bg-[#f5f7fb] rounded-xl p-8 text-center shadow-sm">
      <h1 className="text-5xl font-extrabold text-[#0b4a85]">{certificateCount}</h1>
      <p className="mt-2 text-gray-600 text-lg">Certificates</p>
    </div>

    {/* ⭐ Total Registrations */}
    <div className="bg-[#f5f7fb] rounded-xl p-8 text-center shadow-sm">
      <h1 className="text-5xl font-extrabold text-[#0b4a85]">{totalRegistrations}</h1>
      <p className="mt-2 text-gray-600 text-lg">Total Registrations</p>
    </div>

  </div>
</section>


        {/* ============================
            Month Groups
           ============================ */}
        {Object.entries(DATA).map(([month, webinars]) => (
          <section key={month} className="mb-10">
            <h2 className="text-xl font-semibold text-[#0b4a85] mb-6">{month}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {webinars.map((w) => (
                <motion.div
                  key={w.id}
                  whileHover={{ y: -6, boxShadow: "0 25px 40px rgba(2,6,23,0.08)" }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-white"
                >
                  <h3 className="text-lg font-semibold text-[#0b3b6b] mb-2">{w.title}</h3>

                  <div className="text-sm text-slate-600 mb-4">
                    <div><strong>Slot:</strong> {w.slot}</div>
                    <div><strong>Registered:</strong> {w.registered}</div>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => handleDetails(w.id)}
                      className="flex-1 bg-gradient-to-r from-[#0f62c7] to-[#2da1ff] text-white py-2 rounded-md shadow-sm hover:opacity-95"
                    >
                      See Details
                    </button>

                    <button
                      onClick={() => handleDownloadCertificate(w.title)}
                      className="px-4 py-2 border rounded-md text-[#0f4aa6] bg-white/90 hover:bg-slate-50"
                    >
                      Certificate
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* ============================
            Certificate Section
           ============================ */}
        <section className="mt-12 bg-white rounded-xl p-8 shadow-md border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-[#0b4a85]">Certificate Download</h3>

            <p className="text-sm text-slate-600">
              Download your participation certificates for attended webinars.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">

            <div className="flex items-center justify-between bg-slate-50 rounded-lg p-4">
              <div>
                <div className="font-semibold text-[#154b8d]">AI and Future Innovations</div>
                <div className="text-sm text-slate-600">
                  Date: 12 October 2025 | Time: 10:00 AM - 11:30 AM
                </div>
              </div>

              <button
                onClick={() => handleDownloadCertificate("AI-and-Future-Innovations")}
                className="bg-[#0f62c7] text-white px-4 py-2 rounded-md"
              >
                Download
              </button>
            </div>

            <div className="flex items-center justify-between bg-slate-50 rounded-lg p-4">
              <div>
                <div className="font-semibold text-[#154b8d]">Career Paths in Data Science</div>
                <div className="text-sm text-slate-600">
                  Date: 05 October 2025 | Time: 3:00 PM - 4:15 PM
                </div>
              </div>

              <button
                onClick={() => handleDownloadCertificate("Career-Paths-in-Data-Science")}
                className="bg-[#0f62c7] text-white px-4 py-2 rounded-md"
              >
                Download
              </button>
            </div>

          </div>
        </section>

        {/* ============================
            Overall Report
           ============================ */}
        <section className="mt-12">
          <div className="bg-white rounded-xl p-8 shadow-md border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-[#0b4a85]">
                Overall Webinar Report
              </h3>

              <div className="flex items-center gap-3">
                <input
                  placeholder="Search by Alumni, Topic, etc."
                  className="px-4 py-2 rounded-lg border w-72"
                />
                <button
                  onClick={handlePrintReport}
                  className="bg-[#0f62c7] text-white px-4 py-2 rounded-md"
                >
                  Print
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <img
                src="/mnt/data/e8ddc2d5-6aa3-4d69-85cb-526e6aacb672.png"
                alt="Overall report preview"
                className="w-full rounded-md border"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
