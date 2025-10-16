import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="font-lato ">
      <div className="h-[90px]">
        <Navbar />
      </div>
      <div className="w-11/12 mx-auto min-h-[calc(100vh-256.8px)]">
        <Outlet />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
