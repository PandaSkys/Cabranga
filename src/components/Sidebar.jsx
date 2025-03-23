import {
  Calendar,
  GraduationCap,
  LayoutDashboard,
  MailWarning,
  Menu,
  Notebook,
  SettingsIcon,
  StickyNote,
} from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

const Sidebar = () => {
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav id="sidebar" className={isOpen ? "" : "hide"}>
      <ul>
        <li>
          <span className="logo">{isOpen && "Cabranga"}</span>
          <Menu
            color="#fafafa"
            cursor="pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </li>
        <li>
          <NavLink to="/" className={location.pathname == "/" ? "active" : ""}>
            <LayoutDashboard />
            <span>Accueil</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calendar"
            className={location.pathname == "/calendar" ? "active" : ""}
          >
            <Calendar />
            <span>Calendrier</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/agenda"
            className={location.pathname == "/agenda" ? "active" : ""}
          >
            <Notebook />
            <span>JDC</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/evaluations"
            className={location.pathname == "/evaluations" ? "active" : ""}
          >
            <StickyNote />
            <span>Évaluations</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/school-reports"
            className={location.pathname == "/school-reports" ? "active" : ""}
          >
            <GraduationCap />
            <span>Bulletins</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/comments"
            className={location.pathname == "/comments" ? "active" : ""}
          >
            <MailWarning />
            <span>Remarques</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={location.pathname == "/settings" ? "active" : ""}
          >
            <SettingsIcon />
            <span>Paramètres</span>
          </NavLink>
        </li>
      </ul>
      {isOpen && (
        <div className="bottom">
          <div className="user">
            <div className="pp">
              <p>
                Hey <span>{user?.user_metadata.firstName}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
