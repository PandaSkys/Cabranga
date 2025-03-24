import React from "react";
import Sidebar from "../components/Sidebar";
import FilterCategories from "../components/FilterCategories";

const Evaluations = () => {
  const evaluations = [
    {
      category: "math",
      title: "UAA3 - Interro sur les fonctions",
      max: 20,
      currentNote: 16,
    },
    {
      category: "français",
      title: "UAA2 - Surréalisme",
      max: 50,
      currentNote: 28.5,
    },
  ];

  return (
    <div className="evaluations-c">
      <Sidebar />
      <main>
        <div className="categories">
          <FilterCategories />
        </div>
        <ul className="evaluations">
          {evaluations?.map((evaluation, index) => (
            <li key={index}>
              <p>{evaluation.category}</p> <p>{evaluation.title}</p>{" "}
              <p>
                {evaluation.currentNote}/{evaluation.max}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Evaluations;
