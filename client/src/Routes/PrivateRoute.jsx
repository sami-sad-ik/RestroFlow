import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <span className="loading loading-spinner loading-lg text-info"></span>
      </div>
    );

  if (user) return children;
  return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
