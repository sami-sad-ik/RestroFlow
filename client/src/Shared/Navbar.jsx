import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className="my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0">
        Home
      </NavLink>
      <NavLink className="my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0">
        All Foods
      </NavLink>
      <NavLink className="my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0">
        Gallery
      </NavLink>
      <NavLink
        to={"/login"}
        className="my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  hover:text-blue-500  md:mx-4 md:my-0">
        Login
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-grow">
        <Link>
          <img className="w-24 h-12 " src="/Restro.png" alt="logo" />
        </Link>
      </div>
      <div className="">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 px-0 space-y-1 shadow">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 px-0 space-y-1 shadow">
          <Link className="py-2 hover:bg-gray-300 rounded-md px-2 transition-colors duration-300 transform font-semibold hover:text-blue-500  md:mx-4">
            My added food items
          </Link>
          <Link className="py-2 hover:bg-gray-300 rounded-md px-2 transition-colors duration-300 transform font-semibold hover:text-blue-500  md:mx-4">
            Add a food item
          </Link>
          <Link className="py-2 hover:bg-gray-300 rounded-md px-2 transition-colors duration-300 transform font-semibold  hover:text-blue-500  md:mx-4">
            My ordered food items
          </Link>
          <button className="py-2 bg-gray-300 rounded-md px-2 text-left text-red-500 font-bold transition-colors duration-300 transform hover:bg-gray-400  md:mx-4">
            Logout
          </button>
        </ul>
      </div>

      <label className="mr-3 toggle text-base-content">
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
  );
};

export default Navbar;
