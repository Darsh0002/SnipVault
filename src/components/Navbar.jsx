import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    if (onLogout) onLogout();
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-white/10 text-white flex justify-between items-center p-3 shadow-lg">
      {/* Logo */}
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="pl-5 text-3xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 hover:opacity-90 bg-clip-text text-transparent transition"
      >
        SnipVault
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-10 mr-10">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-bold"
              : "text-white hover:text-cyan-300 transition"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/snippets"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-bold"
              : "text-white hover:text-cyan-300 transition"
          }
        >
          View All Snippets
        </NavLink>

        <NavLink
          to="/snippet/new"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-bold"
              : "text-white hover:text-cyan-300 transition"
          }
        >
          Create New Snippet
        </NavLink>

        {/* User Dropdown */}
        {user && (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-1 bg-gray-800/60 backdrop-blur-md rounded-lg border border-gray-700 hover:border-teal-400 hover:bg-gray-800/80 transition"
            >
              <FontAwesomeIcon icon={faUser} className="text-teal-400" />
              <span className="text-sm">{user.name}</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg z-50 animate-fadeIn overflow-hidden">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition"
                  onClick={() => setDropdownOpen(false)}
                >
                  <FontAwesomeIcon icon={faGear} className="mr-2" /> Settings
                </Link>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:bg-red-500 hover:text-white transition"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />{" "}
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
