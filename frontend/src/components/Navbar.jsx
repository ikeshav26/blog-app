import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(true);
  const {user}=useContext(AppContext)

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-emerald-400 tracking-tight">
              BitBlog
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-neutral-200 font-medium hover:text-emerald-400 transition"
            >
              Home
            </Link>
            <Link
              to="/feed"
              className="text-neutral-200 font-medium hover:text-emerald-400 transition"
            >
              Explore
            </Link>
            <Link
              to="/create-blog"
              className="text-neutral-200 font-medium hover:text-emerald-400 transition"
            >
              Write
            </Link>
            <Link
              to="/contact"
              className="text-neutral-200 font-medium hover:text-emerald-400 transition"
            >
              Contact
            </Link>
          </div>

          {/* Desktop: Profile + Theme + Login */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile">
              <div className="w-9 h-9 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-full flex items-center justify-center transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-neutral-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M5.121 17.804A4.992 4.992 0 0012 21a4.992 4.992 0 006.879-3.196M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </Link>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-9 w-9 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-9 w-9 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {!user?<Link to="/login">
              <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-5 py-1.5 rounded-full text-sm font-semibold transition-all">
                Login
              </button>
            </Link>:<Link to="/">
              <button className="bg-red-500 hover:bg-red-400 text-white px-5 py-1.5 rounded-full text-sm font-semibold transition-all">
                Logout
              </button>
            </Link>}
          </div>

          {/* Mobile: Profile + Theme + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <Link to="/profile">
              <div className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-full flex items-center justify-center transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-neutral-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M5.121 17.804A4.992 4.992 0 0012 21a4.992 4.992 0 006.879-3.196M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </Link>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-neutral-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-neutral-900 border-t border-neutral-800 px-4`}
      >
        <div
          className={`flex flex-col gap-3 py-4 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          } transition-all duration-300 ease-in-out`}
        >
          <Link
            to="/"
            className="text-neutral-200 font-medium hover:text-emerald-400 transition"
          >
            Home
          </Link>
          <Link
            to="/feed"
            className="text-neutral-200 font-medium hover:text-emerald-400 transition"
          >
            Explore
          </Link>
          <Link
            to="/create-blog"
            className="text-neutral-200 font-medium hover:text-emerald-400 transition"
          >
            Write
          </Link>
          <Link
            to="/contact"
            className="text-neutral-200 font-medium hover:text-emerald-400 transition"
          >
            Contact
          </Link>

          {!user?<Link to="/login">
            <button className="bg-emerald-400 hover:bg-emerald-500 text-black px-4 py-2 rounded-full text-sm w-full text-left mt-2 transition-all">
              Login
            </button>
          </Link>:<Link to="/login">
            <button className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full text-sm w-full text-left mt-2 transition-all">
              Logout
            </button>
          </Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
