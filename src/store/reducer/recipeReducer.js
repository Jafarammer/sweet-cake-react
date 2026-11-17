import {
  GET_ALL_RECIPE_REQUEST,
  GET_ALL_RECIPE_SUCCESS,
  GET_ALL_RECIPE_FAILED,
  GET_DETAIL_RECIPE_REQUEST,
  GET_DETAIL_RECIPE_SUCCESS,
  GET_DETAIL_RECIPE_FAILED,
  GET_MY_RECIPE_REQUEST,
  GET_MY_RECIPE_SUCCESS,
  GET_MY_RECIPE_FAILED,
} from "../actionType";

const initialState = {
  allRecipe: [],
  detailRecipe: null,
  myRecipe: [],
  loading: false,
  error: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPE_REQUEST:
    case GET_DETAIL_RECIPE_REQUEST:
    case GET_MY_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        allRecipe: action.payload,
        detailRecipe: null,
      };
    case GET_DETAIL_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        detailRecipe: action.payload,
      };
    case GET_MY_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        myRecipe: action.payload,
      };
    case GET_ALL_RECIPE_FAILED:
    case GET_DETAIL_RECIPE_FAILED:
    case GET_MY_RECIPE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default recipeReducer;
