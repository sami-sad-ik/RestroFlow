const AddFood = () => {
  return (
    <section className="max-w-4xl mt-5 p-6 mx-auto  rounded-md shadow-lg ">
      <h2 className="text-2xl text-center font-semibold">Add a Food Item</h2>

      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label>Food Name</label>
            <input
              type="text"
              name="foodname"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label>Food Image</label>
            <input
              type="text"
              name="imageURL"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label>Food Category</label>
            <input
              type="text"
              name="category"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label>Food Origin</label>
            <input
              type="text"
              name="origin"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label>Added by</label>
            <input
              type="text"
              name="username"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label>Short Description</label>
          <textarea
            className="block w-full px-4 py-2 mt-2 bg-base-200 border border-base-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            name="description"></textarea>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 active:bg-gray-800 focus:outline-none focus:bg-gray-600">
            Add Item
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddFood;
