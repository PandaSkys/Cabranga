import {
  Archive,
  Calendar,
  ChevronDown,
  ChevronRight,
  FileChartColumn,
  FileSpreadsheet,
  House,
  MailWarning,
  NotebookText,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(true);

  const toggleHoverMenu = () => {
    setisOpen(!isOpen);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      y: -20,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className="sidebar">
      <div className="head">
        <h1>Cabranga</h1>
        <ChevronRight color="#292929" width={30} />
      </div>
      <div className="links">
        <ul>
          <li className={location.pathname == "/" ? "active" : ""}>
            <House />
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li className={location.pathname == "/calendar" ? "active" : ""}>
            <Calendar />
            <NavLink to="/calendar">Calendrier</NavLink>
          </li>
          <li className={location.pathname == "/school-diary" ? "active" : ""}>
            <NotebookText />
            <NavLink to="/school-diary">Jdc</NavLink>
          </li>
          <motion.div>
            <li
              className={
                isOpen ? "dropdown-menu active-menu " : "dropdown-menu"
              }
              onClick={toggleHoverMenu}
            >
              <div className="lin">
                <Archive />
                <p>Résultats</p>
              </div>
              <ChevronDown className="arrow" color="#5b5b5b" width={30} />
            </li>
            <motion.div
              initial="exit"
              animate={isOpen ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <div className="dropdown">
                <li
                  className={
                    location.pathname == "/evaluations" ? "active" : ""
                  }
                >
                  <FileChartColumn />
                  <NavLink to="/evaluations">Évaluations</NavLink>
                </li>
                <li className={location.pathname == "/report" ? "active" : ""}>
                  <FileSpreadsheet />
                  <NavLink to="/report">Bulletins</NavLink>
                </li>
              </div>
            </motion.div>
          </motion.div>
          <li className={location.pathname == "/note" ? "active" : ""}>
            <MailWarning />
            <NavLink to="/note">Remarques</NavLink>
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
