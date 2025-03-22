import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Evaluations from "./pages/Evaluations";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/evaluations" element={<Evaluations />}></Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
