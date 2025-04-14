import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <nav className="relative bg-base-100 shadow ">
      <div className="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link>
            <img className="w-24 h-12 " src="/Restro.png" alt="" />
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
              aria-label="toggle menu"></button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white :mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center `}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-2 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0">
              Home
            </a>
            <a className="my-2 transition-colors duration-300 transform  hover:text-blue-500 md:mx-4 md:my-0">
              Shop
            </a>
            <a className="my-2 transition-colors duration-300 transform  hover:text-blue-500 md:mx-4 md:my-0">
              Contact
            </a>
            <a className="my-2 transition-colors duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0">
              About
            </a>
          </div>

          <label className="toggle text-base-content">
            <input
              onChange={handleToggle}
              type="checkbox"
              checked={theme === "dark"}
              value="dark"
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
