import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import MenteeRegistration from "./pages/MenteeRegistration";
import MentorRegistration from "./pages/MentorRegistration";
import AssignmentForm from "./pages/AssignmentForm";
import ScheduleMeeting from "./pages/ScheduleMeeting";
import UpdateMeetingStatus from "./pages/UpdateMeetingStatus";
import ProgramFeedback from "./pages/ProgramFeedback";
import { ACTIVE_THEME, themes } from "./theme/UITheme";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="w-full p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mentor-register" element={<MentorRegistration />} />
          <Route path="/mentee-register" element={<MenteeRegistration />} />
          <Route path="/assignment" element={<AssignmentForm />} />
          <Route path="/schedule" element={<ScheduleMeeting />} />
          <Route path="/update-status" element={<UpdateMeetingStatus />} />
          <Route path="/feedback" element={<ProgramFeedback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
