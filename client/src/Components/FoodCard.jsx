import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { _id, foodName, foodImage, category, price, quantity } = food;
  return (
    <div className="max-w-xs p-3 overflow-hidden bg-base-200 hover:scale-[101%] duration-200 rounded-md shadow-lg ">
      <div className="relative">
        <img
          className="object-cover w-72 h-44 rounded-md "
          src={foodImage}
          alt="foodImage"
        />
        <p className="absolute top-2 right-3 text-xs text-black bg-blue-500 font-bold px-3 py-1 rounded-full">
          {category}
        </p>
      </div>
      <div className="px-4 py-2">
        <p className="text-lg font-bold  uppercase mb-1">{foodName}</p>
        <p>
          <span className="font-semibold">{quantity}</span> Available
        </p>
      </div>

      <div className="flex items-center justify-between px-4 py-2 ">
        <h1 className="text-lg font-bold flex items-center gap-1">
          <span className="text-sm text-gray-500">BDT</span> {price}
        </h1>
        <Link
          to={`/food/${_id}`}
          className="px-2 py-1 text-xs text-black font-bold uppercase transition-colors duration-300 transform rounded bg-yellow-300 hover:bg-yellow-500 active:scale-[98%]">
          Details
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
