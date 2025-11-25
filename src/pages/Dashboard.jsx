import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const cardsRef = useRef(null);

  const cards = [
    {
      title: "Webinars",
      desc: "Engage in alumni-led sessions.",
      color: "bg-blue-500",
      route: "/webinars",
    },
    {
      title: "Mentorship",
      desc: "Connect with alumni mentors.",
      color: "bg-green-500",
      route: "/mentorship",
    },
    {
      title: "Placement",
      desc: "Explore placement opportunities.",
      color: "bg-orange-500",
      route: "/placement",
    },
  ];

  const onExplorePrograms = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold text-[#0f4aa6]">NEC Alumni</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate("/programs")}
              className="text-slate-700 hover:text-[#0f4aa6] font-medium transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => navigate("/about")}
              className="text-slate-700 hover:text-[#0f4aa6] font-medium transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => navigate("/events")}
              className="text-slate-700 hover:text-[#0f4aa6] font-medium transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => navigate("/contact")}
              className="text-slate-700 hover:text-[#0f4aa6] font-medium transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => navigate("/signin")}
              className="px-6 py-2 bg-[#0f4aa6] text-white font-semibold rounded-lg hover:bg-[#0d3d8a] transition-colors"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

     {/* ================= HERO ================= */}
<header
  className="relative h-[520px] md:h-[600px] flex items-center justify-center text-white pb-24 mt-16"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/nec-dash.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="text-center px-6">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-extrabold"
    >
      Welcome to NEC Alumni Association
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
    >
      Connecting Talent. Building Futures. Creating Impact.
    </motion.p>

    <div className="mt-8 flex items-center justify-center gap-4">
      <button
        onClick={() => navigate("/mentee-register")}
        className="px-7 py-3 rounded-lg bg-white text-[#0f4aa6] font-semibold shadow-md hover:bg-gray-100"
      >
        Join Our Community
      </button>

      <button
        onClick={onExplorePrograms}
        className="px-7 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10"
      >
        Explore Programs
      </button>
    </div>
  </div>
</header>

      {/* ================= STATS CARD ================= */}
<div className="container mx-auto px-6 -mt-24 relative z-20 max-w-6xl">
  <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        ["2450+", "Active Members"],
        ["350+", "Successful Placements"],
        ["125+", "Expert Mentors"],
        ["92%", "Success Rate"],
      ].map(([number, label]) => (
        <div key={label}>
          <div className="text-3xl md:text-4xl font-extrabold text-[#1e63b8]">{number}</div>
          <div className="text-sm text-slate-600 mt-2">{label}</div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* ================= CARDS ================= */}
      <main className="container mx-auto px-6 py-20" ref={cardsRef}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-4">
          NEC Alumni Dashboard
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg">
          Mentorship & Alumni Engagement System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${card.color} cursor-pointer text-white rounded-2xl p-8 shadow-xl flex flex-col justify-center items-center text-center min-h-[200px]`}
              onClick={() => navigate(card.route)}
            >
              <h3 className="text-3xl font-extrabold mb-3">{card.title}</h3>
              <p className="text-white/90 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* ================= BOTTOM CTA SECTION ================= */}
      <section
        className="w-full py-20 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,45,90,0.65), rgba(7,45,90,0.65)), url('/nec-dash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Elevate Your Career?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Join thousands of NEC alumni making an impact in their careers.
          </p>
          <button className="px-8 py-3 bg-white text-[#0f4aa6] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#243447] text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl">

          <div>
            <h3 className="font-bold text-lg mb-4">About NEC</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Mission</li>
              <li className="hover:text-white cursor-pointer transition-colors">Leadership</li>
              <li className="hover:text-white cursor-pointer transition-colors">History</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">Events</li>
              <li className="hover:text-white cursor-pointer transition-colors">News & Updates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Resources</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">Facebook</li>
              <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Phone: +91-xxx-xxx-xxxx</li>
              <li>Email: alumni@nec.edu</li>
              <li>Address: NEC Campus</li>
              <li>Support: support@nec.edu</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-white/50 mt-10 text-sm">
          © 2025 NEC Alumni Association — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}