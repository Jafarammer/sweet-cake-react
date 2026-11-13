import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoute = ({ children }) => {
  const { token } = useSelector((state) => state?.auth);

  if (token) return <Navigate to={"/home"} replace />;

  return children;
};

export default GuestRoute;
