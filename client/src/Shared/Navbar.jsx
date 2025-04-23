import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { signOutUser, user, setUser } = useAuth();
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
  const handleSignOut = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };
  const navLinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  ${
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 "
              : "hover:text-blue-500"
          }  md:mx-2 md:my-0`
        }>
        Home
      </NavLink>
      <NavLink
        to={"/all-foods"}
        className={({ isActive }) =>
          `my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  ${
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 "
              : "hover:text-blue-500"
          }  md:mx-2 md:my-0`
        }>
        All Foods
      </NavLink>
      <NavLink
        to={"/gallery"}
        className={({ isActive }) =>
          `my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  ${
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 "
              : "hover:text-blue-500"
          }  md:mx-2 md:my-0`
        }>
        Gallery
      </NavLink>
      {!user && (
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            `my-2 mx-2 transition-colors font-semibold tracking-wider duration-300 transform  ${
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 "
                : "hover:text-blue-500"
            }  md:mx-2 md:my-0`
          }>
          Login
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar z-10 fixed bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to={"/"} className="inline-flex items-center">
          <img className="w-24 h-12 " src="/Restro.png" alt="logo" />
        </Link>
      </div>
      <div className="flex-none">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 px-0 space-y-1 shadow">
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2">{navLinks}</ul>
      </div>
      {user && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="profile image"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 px-0 space-y-1 shadow">
            <NavLink
              to={"/add-food"}
              className={({ isActive }) =>
                `py-2  rounded-md px-2 transition-colors duration-300 transform font-semibold ${
                  isActive
                    ? "text-blue-500  bg-gray-300"
                    : "hover:bg-gray-300 hover:text-blue-500 "
                }  md:mx-2`
              }>
              Add a food item
            </NavLink>
            <NavLink
              className={`py-2  rounded-md px-2 transition-colors duration-300 transform font-semibold hover:bg-gray-300 hover:text-blue-500  md:mx-2`}>
              My added food items
            </NavLink>
            <NavLink
              className={`py-2  rounded-md px-2 transition-colors duration-300 transform font-semibold hover:bg-gray-300  hover:text-blue-500  md:mx-2`}>
              My ordered food items
            </NavLink>
            <button
              onClick={handleSignOut}
              className="py-2 bg-gray-300 rounded-md px-2 text-left text-red-500 font-bold transition-colors duration-300 transform hover:bg-gray-400  md:mx-2">
              Logout
            </button>
          </ul>
        </div>
      )}

      <label className="mx-3 toggle text-base-content">
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
