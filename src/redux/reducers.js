import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import recipeReducer from "./reducers/recipeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
});

export default rootReducer;
