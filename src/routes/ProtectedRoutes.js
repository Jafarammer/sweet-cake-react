import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAccessToken } from "../utils/token";

const ProtectedRoutes = ({ children }) => {
  const token = getAccessToken();
  if (!token) return <Navigate to={"/login"} replace />;

  return children;
};

export default ProtectedRoutes;
