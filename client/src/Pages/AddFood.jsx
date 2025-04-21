const AddFood = () => {
  return (
    <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md ">
      <h2 className="text-lg font-semibold  capitalize ">Account settings</h2>

      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className=" " for="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className=" " for="emailAddress">
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className=" " for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className=" " for="passwordConfirmation">
              Password Confirmation
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddFood;
