import { SET_ERROR, SET_LOADING, SET_RECIPE, LOGOUT } from "../actionType";

export const setRecipe = (payload) => ({
  type: SET_RECIPE,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});
