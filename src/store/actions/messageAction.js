import { SHOW_MESSAGE, HIDE_MESSAGE } from "../actionType";

export const showMessage = (message, variant = "info") => ({
  type: SHOW_MESSAGE,
  payload: {
    message,
    variant,
  },
});

export const hideMessage = () => ({ type: HIDE_MESSAGE });
