import React, { useState } from "react";

const FilterCategories = () => {
  const [subject, setSubject] = useState("");
  const [period, setPeriod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(subject, period);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <select onChange={(prev) => setSubject(prev.currentTarget.value)}>
        <option>Matière</option>
        <option value="mathematic">Math</option>
        <option value="french">Français</option>
        <option value="Geography">Géographie</option>
        <option value="History">Histoire</option>
        <option value="physic">Physique</option>
        <option value="biology">Biologie</option>
        <option value="sport">Gym</option>
      </select>
      <select onChange={(prev) => setPeriod(prev.currentTarget.value)}>
        <option>Période</option>
        <option value="p1">Période 1</option>
        <option value="p2">Période 2</option>
        <option value="p3">Période 3</option>
      </select>
      <input type="submit" value="Chercher" />
    </form>
  );
};

export default FilterCategories;
