import FoodCard from "../Components/FoodCard";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useEffect } from "react";

const AllFoods = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/all-foods?sort=${
        asc ? "asc" : "dsc"
      }&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [asc, search]);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };
  return (
    <div>
      <Helmet>
        <title>RestroFlow | All Food</title>
      </Helmet>
      <h2 className="text-center text-4xl font-bold my-3">All Foods</h2>
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <button
          onClick={() => setAsc(!asc)}
          className="bg-blue-500 p-2 text-sm font-semibold shadow-md rounded-[4px] hover:scale-[101%] active:scale-[100%] cursor-pointer duration-200 inline-block  ">
          {asc ? "Price: Low to High" : "Price: High to Low"}
        </button>
        <form onSubmit={handleSearch}>
          <input
            className="rounded-l-full px-4 py-2 mt-2 bg-base-300 border border-gray-400 rounded-md focus:outline-none"
            type="text"
            placeholder="Search"
            name="search"
          />
          <input
            className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 transition-colors duration-200 cursor-pointer border border-blue-500"
            type="submit"
            value="search"
          />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mx-auto justify-items-center">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
