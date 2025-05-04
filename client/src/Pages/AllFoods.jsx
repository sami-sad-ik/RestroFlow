import { useLoaderData } from "react-router-dom";
import FoodCard from "../Components/FoodCard";

const AllFoods = () => {
  const foods = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-3">All Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-auto justify-items-center">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
