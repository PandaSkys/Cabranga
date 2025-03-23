import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Agenda from "./pages/Agenda";
import Evaluations from "./pages/Evaluations";
import SchoolReports from "./pages/SchoolReports";
import Comments from "./pages/Comments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
        <Route path="/evaluations" element={<Evaluations />}></Route>
        <Route path="/school-reports" element={<SchoolReports />}></Route>
        <Route path="/comments" element={<Comments />}></Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
