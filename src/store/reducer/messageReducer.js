import { SHOW_MESSAGE, HIDE_MESSAGE } from "../actionType";

const initialState = {
  open: false,
  message: "",
  variant: "info",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        variant: action.payload.variant,
      };
    case HIDE_MESSAGE:
      return {
        ...state,
        open: false,
        message: "",
      };

    default:
      return state;
  }
};

export default messageReducer;
