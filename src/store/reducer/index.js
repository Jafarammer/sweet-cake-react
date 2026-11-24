import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import userReducer from "./userReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
  message: messageReducer,
});

export default rootReducer;
