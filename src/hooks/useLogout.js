import { useDispatch } from "react-redux";
import useMessage from "./useMessage";
import { useNavigate } from "react-router-dom";
import { logout } from "../service/authService";
import { removeAccessToken } from "../utils/token";
import { persistor } from "../store/configureStore";

const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = useMessage();

  const onLogout = async () => {
    try {
      await logout();

      removeAccessToken();

      dispatch({ type: "RESET_STORE" });

      await persistor.purge();

      navigate("/login", { replace: true });
    } catch (error) {
      notify(error.response?.data?.message || "Logout failed", "error");
    }
  };

  return onLogout;
};

export default useLogout;
