import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarStyle = {
    backgroundColor: theme === "light" ? "#ebfaf7" : "#000000",
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex items-center p-5 "
      style={navbarStyle}
    >
      {" "}
      <div className="flex items-center w-full justify-center">
        <button
          className="text-xl md:hidden uppercase"
          onClick={handleToggleMenu}
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        <ul
          className={`md:flex md:items-center w-full md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:flex-row md:space-x-7 space-y-5 md:space-y-0 mt-10 md:mt-0 uppercase text-sm md:text-base font-bold `}
        >
          <li>
            <a
              href="#"
              // className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#internship">Internship</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contactme">Contact me</a>
          </li>
        </ul>

        <div
          className="flex"
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <button onClick={toggleTheme} className="mr-2 md:text-lg p-2">
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
