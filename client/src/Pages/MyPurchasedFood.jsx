import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";

const MyPurchasedFood = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  useEffect(() => {
    getData();
  }, [user?.email]);

  const getData = async () => {
    const { data } = await axiosSecure(`/purchased/${user?.email}`);
    setFoods(data);
    return data;
  };
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/purchased/${id}`);
      toast.success("deleted successfully");
      getData();
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section className="container px-4 mx-auto">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          Your Purchased Foods
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
          {foods?.length} Foods
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-3 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-base-200 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right ">
                      <div className="flex items-center gap-x-3">
                        <span>Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="text-sm text-center font-normal rtl:text-right ">
                      <span>Owner</span>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right ">
                      <span>Price</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right">
                      Purchased Quantity
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {foods.map((food) => (
                    <tr key={food._id}>
                      <td className="px-4 py-3 text-sm font-medium whitespace-nowrap">
                        {food.foodName}
                      </td>
                      <td className="px-12 py-3 text-sm font-medium whitespace-nowrap">
                        <div className="px-12 py-3 text-sm font-normal text-center rtl:text-right ">
                          <h2 className="text-sm text-center font-normal">
                            {food?.owner}
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-3 text-sm font-normal text-center rtl:text-right ">
                        {food.price} tk
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="">
                          <p className="px-3 py-1 text-center text-yellow-600">
                            {food.purchasedQuantity}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          {/* delete button */}
                          <button
                            onClick={() => handleDelete(food._id)}
                            className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPurchasedFood;
