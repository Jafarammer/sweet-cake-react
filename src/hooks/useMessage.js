import { useDispatch } from "react-redux";
import { showMessage } from "../store/actions/messageAction";

const useMessage = () => {
  const dispatch = useDispatch();

  return (message, variant = "info") => {
    dispatch(showMessage(message, variant));
  };
};

export default useMessage;
