import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="head">
        <h1>Cabranga</h1>
        <ChevronRight color="#292929" width={30} />
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/">Calendrier</NavLink>
          </li>
          <li>
            <NavLink to="/">JDC</NavLink>
          </li>
          <li className="dropdown-menu">
            <p>Résultats</p>
            <ChevronDown color="#5b5b5b" width={30} />
          </li>
          <div className="dropdown">
            <li>
              <NavLink to="/">Évaluations</NavLink>
            </li>
            <li>
              <NavLink to="/">Bulletins</NavLink>
            </li>
          </div>
          <li>
            <NavLink to="/">Remarques</NavLink>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="profil">
          <span>J</span>
        </div>
        <div className="user-name">
          <span>John Doe</span>
        </div>
        <ChevronRight color="#5b5b5b" width={30} />
      </div>
    </div>
  );
};

export default Sidebar;
