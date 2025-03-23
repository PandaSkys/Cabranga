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
import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

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
          <NavLink to="/">
            <LayoutDashboard />
            <span>Accueil</span>
            {location.pathname === "/" && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar">
            <Calendar />
            <span>Calendrier</span>
            {location.pathname === "/calendar" && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/agenda">
            <Notebook />
            <span>JDC</span>
            {location.pathname === "/agenda" && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/evaluations">
            <StickyNote />
            <span>Évaluations</span>
            {location.pathname === "/evaluations" && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/school-reports">
            <GraduationCap />
            <span>Bulletins</span>
            {location.pathname === "/school-reports" && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/comments">
            <MailWarning />
            <span>Remarques</span>
            {location.pathname === "/comments" && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <SettingsIcon />
            <span>Paramètres</span>
            {location.pathname === "/settings" && (
              <motion.div
                layoutId="activeIndicator"
                className="active-indicator"
              />
            )}
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
