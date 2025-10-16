import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import FoodDetails from "../Pages/FoodDetails";
import Error from "../Pages/Error";
import Purchase from "../Pages/Purchase";
import PrivateRoute from "./PrivateRoute";
import MyAddedFood from "../Pages/MyAddedFood";
import UpdateFood from "../Pages/UpdateFood";
import MyPurchasedFood from "../Pages/MyPurchasedFood";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/myaddedfood",
        element: (
          <PrivateRoute>
            <MyAddedFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/mypurchasedfood",
        element: (
          <PrivateRoute>
            <MyPurchasedFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`, {
            credentials: "include",
          }),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
