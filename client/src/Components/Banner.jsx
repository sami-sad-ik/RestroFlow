import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className={
        "relative bg-[url('/banner.jpg')] bg-cover bg-center my-7 w-full h-[400px] md:h-[650px] rounded-lg "
      }>
      <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full rounded-lg bg-gradient-to-r from-gray-900">
        <div className="text-white text-center space-y-3 ">
          <h2 className="md:text-6xl text-4xl font-semibold">
            Welcome to{" "}
            <span className="text-blue-500 font-extrabold italic">Restro</span>
            <span className="text-orange-500 font-extrabold italic">Flow</span>
          </h2>
          <p className="md:text-xl text-md px-7 font-light ">
            Savor the Flavor – Experience Culinary Excellence at RestroFlow
          </p>
          <Link className="bg-yellow-500 p-2 md:text-lg text-sm rounded-[4px] hover:scale-[103%] hover:bg-yellow-600 active:bg-yellow-500 cursor-pointer duration-200 text-black font-semibold inline-block  ">
            See all foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
