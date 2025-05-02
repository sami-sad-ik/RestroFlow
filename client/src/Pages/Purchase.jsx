import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Purchase = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { _id, foodName, foodImage, price, quantity, owner } = useLoaderData();

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (user?.email === owner?.email) {
      return toast.error("Can't purchase own item!");
    }

    const purchasedQuantity = parseFloat(form.quantity.value);
    if (purchasedQuantity > quantity) {
      return toast.error("Insufficient stock available!");
    }
    const purchase = {
      fooId: _id,
      foodName,
      foodImage,
      price,
      purchasedQuantity,
      purchasedAt: new Date(),
      email: user?.email,
      owner: owner?.name,
      owner_email: owner?.email,
    };
    try {
      const { data } = await axiosSecure.post("/purchase", purchase);
      console.log(data);
      toast.success("Successfully purchased");
      form.reset();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <section className="max-w-4xl mt-5 p-6 mx-auto  rounded-md shadow-lg ">
      <h2 className="text-2xl text-center font-semibold">{foodName}</h2>

      <form onSubmit={handlePurchase}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              readOnly
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md "
            />
          </div>

          <div>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label>Buyer Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              name="username"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md "
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              name="email"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md "
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 active:bg-gray-800 focus:outline-none focus:bg-gray-600">
            Purchase
          </button>
        </div>
      </form>
    </section>
  );
};

export default Purchase;
