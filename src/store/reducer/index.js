import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
});

export default rootReducer;
