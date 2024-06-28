import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Logo from "../assets/Logo.svg";

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-800 ml-3">
          <Link to="/" className="">
            <img src={Logo} alt="CarVista" className="w-8 h-8 rounded-full" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 mr-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/buy"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
          >
            Buy
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
          >
            Sell
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
          >
            Reviews
          </NavLink>
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pinimg.com/564x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg"
                alt=""
                className="object-cover rounded-full w-9 h-8"
              />
              <button
                onClick={handleLogout}
                className="bg-red-600 font-semibold hover:bg-red-800 px-2 py-1 rounded-md transition duration-300 text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                "text-gray-600 font-medium hover:text-red-600 " +
                (isActive && " text-red-500 font-bold")
              }
            >
              Login
            </NavLink>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-600" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-white shadow-md`}
      >
        <nav className="flex flex-col space-y-2 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/buy"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
            onClick={() => setMenuOpen(false)}
          >
            Buy
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
            onClick={() => setMenuOpen(false)}
          >
            Sell
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              "text-gray-600 font-medium hover:text-red-600 " +
              (isActive && " text-red-500 font-bold")
            }
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </NavLink>
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <img
                src="https://i.pinimg.com/564x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg"
                alt=""
                className="object-cover rounded-full w-9 h-8"
              />
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-600 font-semibold hover:bg-red-800 px-2 py-1 rounded-md transition duration-300 text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                "text-gray-600 font-medium hover:text-red-600 " +
                (isActive && " text-red-500 font-bold")
              }
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
