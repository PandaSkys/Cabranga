import React from "react";

const FilterCategories = () => {
  return (
    <form>
      <select>
        <option>Matière</option>
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
      </select>
      <select>
        <option>Période</option>
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
      </select>
      <input type="submit" value="Chercher" />
    </form>
  );
};

export default FilterCategories;
