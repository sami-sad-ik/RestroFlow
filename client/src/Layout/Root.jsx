import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="font-lato">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
