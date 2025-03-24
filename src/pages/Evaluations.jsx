import React from "react";
import Sidebar from "../components/Sidebar";
import FilterCategories from "../components/FilterCategories";

const Evaluations = () => {
  return (
    <div className="evaluations-c">
      <Sidebar />
      <main>
        <div className="categories">
          <FilterCategories />
        </div>
        <div className="evaluations"></div>
      </main>
    </div>
  );
};

export default Evaluations;
