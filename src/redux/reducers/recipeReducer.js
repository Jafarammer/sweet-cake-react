const defaultState = { listRecipe: [], currentResep: null };
const recipeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_RECIPE": {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default recipeReducer;
