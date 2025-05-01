import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="font-lato ">
      <div className="h-[90px]">
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
