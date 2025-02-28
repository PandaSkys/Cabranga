import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
