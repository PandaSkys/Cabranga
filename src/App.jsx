import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route> 
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
