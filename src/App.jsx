import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";

// Your existing pages
import MenteeRegistration from "./pages/MenteeRegistration";
import MentorRegistration from "./pages/MentorRegistration";
import AssignmentForm from "./pages/AssignmentForm";
import ScheduleMeeting from "./pages/ScheduleMeeting";
import UpdateMeetingStatus from "./pages/UpdateMeetingStatus";
import ProgramFeedback from "./pages/ProgramFeedback";

// New pages you need to create
import MentorshipDashboard from "./pages/MentorshipDashboard";
import WebinarDashboard from "./pages/WebinarDashboard";
import PlacementDashboard from "./pages/PlacementDashboard";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="w-full p-6">
        <Routes>

          {/* Main Dashboard with 3 Cards */}
          <Route path="/" element={<Dashboard />} />

          {/* NEW ROUTES for the 3 card pages */}
          <Route path="/mentorship" element={<MentorshipDashboard />} />
          <Route path="/webinars" element={<WebinarDashboard />} />
          <Route path="/placement" element={<PlacementDashboard />} />

          {/* Existing routes */}
          <Route path="/mentor-register" element={<MentorRegistration />} />
          <Route path="/mentee-register" element={<MenteeRegistration />} />
          <Route path="/assignment" element={<AssignmentForm />} />
          <Route path="/schedule" element={<ScheduleMeeting />} />
          <Route path="/update-status" element={<UpdateMeetingStatus />} />
          <Route path="/feedback" element={<ProgramFeedback />} />

          {/* Redirect unknown paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
