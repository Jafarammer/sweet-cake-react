import {
  GET_ALL_RECIPE_REQUEST,
  GET_ALL_RECIPE_SUCCESS,
  GET_ALL_RECIPE_FAILED,
  GET_DETAIL_RECIPE_REQUEST,
  GET_DETAIL_RECIPE_SUCCESS,
  GET_DETAIL_RECIPE_FAILED,
} from "../actionType";
import { getAllRecipe, getDetailRecipe } from "../../service/recipeService";

export const getAllRecipeThunk = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_RECIPE_REQUEST });
      const response = await getAllRecipe();
      dispatch({ type: GET_ALL_RECIPE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_RECIPE_FAILED,
        payload: error.response?.data?.message || error.message || "any error",
      });
    }
  };
};

export const getDetailRecipeThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_DETAIL_RECIPE_REQUEST });
      const response = await getDetailRecipe(id);

      dispatch({ type: GET_DETAIL_RECIPE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_RECIPE_FAILED,
        payload: error.response?.data?.message || error.message || "any error",
      });
    }
  };
};
