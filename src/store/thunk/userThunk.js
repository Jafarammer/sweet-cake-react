import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
} from "../actionType";
import { setAccessToken } from "../../utils/token";
import {
  loginUser,
  updatePersonalInformation,
  getProfile,
} from "../../service/authService";

export const loginThunk = (payload) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST });
    const response = await loginUser(payload);
    setAccessToken(response.data.token);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data.user });

    return response;
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: error.response?.data?.message || error.message || "any error",
    });

    throw error;
  }
};

export const updatePersonalInformationThunk = (payload) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST });
    const response = await updatePersonalInformation(payload);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });

    return response;
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: error.response?.data?.message || error.message || "any error",
    });

    throw error;
  }
};

export const getProfileThunk = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROFILE_REQUEST });
    const response = await getProfile();
    dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });

    return response;
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILED,
      payload: error.response?.data?.message || error.message || "any error",
    });

    throw error;
  }
};
