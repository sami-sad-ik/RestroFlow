import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import FoodCard from "./FoodCard";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure("top-foods");
      // console.log(data);
      setFoods(data);
    };
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Top Selling Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-auto justify-items-center">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default TopFoods;
