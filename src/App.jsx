import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
