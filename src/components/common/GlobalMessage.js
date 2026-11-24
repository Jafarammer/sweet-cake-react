import { useEffect } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../../store/actions/messageAction";

const GlobalMessage = () => {
  const dispatch = useDispatch();
  const {
    open,
    message: content,
    variant,
  } = useSelector((state) => state.message);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (!open) return;

    messageApi[variant]?.({
      content,
      duration: 3,
    });

    dispatch(hideMessage());
  }, [open, content, variant, messageApi, dispatch]);

  return contextHolder;
};

export default GlobalMessage;
