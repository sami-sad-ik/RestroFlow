import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const {
    _id,
    foodName,
    foodImage,
    category,
    price,
    description,
    owner,
    quantity,
  } = useLoaderData();
  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
          {foodName}
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center ">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={foodImage}
            alt="Food Image"
          />

          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 space-y-10">
            <p className="inline top-2 right-1 text-lg  bg-blue-500 font-semibold px-5 py-1 rounded-full">
              {category}
            </p>

            <p className="mt-3 text-md">{description}</p>
            <div className="space-y-4">
              <h1 className="text-lg font-bold">
                Price : <span className="text-sm text-gray-500">BDT</span>{" "}
                {price}
              </h1>
              <p className="text-lg font-bold">Quantity : {quantity}</p>
            </div>

            <div className="flex items-center mt-6">
              <div className="">
                <h1 className="text-base font-normal">
                  <span className="text-base font-bold">Owner :</span>{" "}
                  {owner?.name}
                </h1>
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                to={`/purchase/${_id}`}
                className="px-3 py-1 text-md text-black font-bold uppercase transition-colors duration-300 transform rounded-md bg-yellow-300 hover:bg-yellow-500 active:scale-[98%]">
                Purchase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
