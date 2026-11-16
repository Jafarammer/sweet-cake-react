import { Navigate } from "react-router-dom";
import { getAccessToken } from "../utils/token";

const GuestRoute = ({ children }) => {
  const token = getAccessToken();

  if (token) return <Navigate to={"/home"} replace />;

  return children;
};

export default GuestRoute;
