import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/nestedLogin/Login";
import Dashboard from "./components/nestedDashboard/Dashboard";
import MentorLogin from "./components/nestedLogin/MentorLogin";
import StudentLogin from "./components/nestedLogin/StudentLogin";
import MentorDashboard from "./components/nestedDashboard/MentorDashboard";
import StudentDashboard from "./components/nestedDashboard/StudentDashboard";

export const url = "http://localhost:3000";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path="mentorlogin" element={<MentorLogin />} />
          <Route path="studentlogin" element={<StudentLogin />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="mentordashboard" element={<MentorDashboard />} />
          <Route path="studentdashboard" element={<StudentDashboard />} />
        </Route>
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
