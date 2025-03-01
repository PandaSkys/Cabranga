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

const Sidebar = ({ username }) => {
    const [isOpen, setisOpen] = useState(false);

    const toggleHoverMenu = () => {
        setisOpen(!isOpen);
    };

    const animeSubMenu = {
        enter: {
            height: "fit-content",
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.1,
            },
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: 0.2,
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
                        <NavLink to="/">
                            <House /> Accueil
                        </NavLink>
                    </li>
                    <li
                        className={
                            location.pathname == "/calendar" ? "active" : ""
                        }
                    >
                        <NavLink to="/calendar">
                            <Calendar /> Calendrier
                        </NavLink>
                    </li>
                    <li
                        className={
                            location.pathname == "/school-diary" ? "active" : ""
                        }
                    >
                        <NavLink to="/school-diary">
                            <NotebookText /> Jdc
                        </NavLink>
                    </li>
                    <motion.div>
                        <li
                            className={
                                isOpen
                                    ? "dropdown-menu active-menu "
                                    : "dropdown-menu"
                            }
                            onClick={toggleHoverMenu}
                        >
                            <div className="lin">
                                <p>
                                    <Archive /> Résultats
                                </p>
                            </div>
                            <ChevronDown
                                className="arrow"
                                color="#5b5b5b"
                                width={30}
                            />
                        </li>
                        <motion.div
                            initial="exit"
                            animate={isOpen ? "enter" : "exit"}
                            variants={animeSubMenu}
                            className="dropdown"
                        >
                            <li
                                className={
                                    location.pathname == "/evaluations"
                                        ? "active"
                                        : ""
                                }
                            >
                                <NavLink to="/evaluations">
                                    <FileChartColumn /> Évaluations
                                </NavLink>
                            </li>
                            <li
                                className={
                                    location.pathname == "/report"
                                        ? "active"
                                        : ""
                                }
                            >
                                <NavLink to="/report">
                                    <FileSpreadsheet /> Bulletins
                                </NavLink>
                            </li>
                        </motion.div>
                    </motion.div>
                    <li
                        className={location.pathname == "/note" ? "active" : ""}
                    >
                        <NavLink to="/note">
                            <MailWarning /> Remarques
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="profil">
                    <span>J</span>
                </div>
                <div className="user-name">
                    <span>{username}</span>
                </div>
                <ChevronRight color="#5b5b5b" width={30} />
            </div>
        </div>
    );
};

export default Sidebar;
