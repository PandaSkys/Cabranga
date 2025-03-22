import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  const error = "404";

  return (
    <div className="n-container">
      <h1>{error}</h1>
      <p>Oups ! La page que vous cherchez n'existe pas.</p>
      <NavLink to="/">Retour à l'accueil</NavLink>
    </div>
  );
};

export default NotFound;
