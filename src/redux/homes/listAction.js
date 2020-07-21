import axios from "axios";
import { HOME_REQUEST, HOME_SUCCESS, HOME_FAILURE } from "./listTypes";

export const homeRequest = () => {
  return {
    type: HOME_REQUEST,
  };
};

export const homeSuccess = (homelists) => {
  return {
    type: HOME_SUCCESS,
    payload: homelists,
  };
};

export const homeFailure = (error) => {
  return {
    type: HOME_FAILURE,
    payload: error,
  };
};

export const fetchHomeList = () => {
  return (dispatch) => {
    dispatch(homeRequest);
    axios
      .get("./MOCK_DATA.json")
      .then((res) => {
        const homelists = res.data;
        dispatch(homeSuccess(homelists));
      })
      .catch((error) => {
        const errMessage = error.message;
        dispatch(homeFailure(errMessage));
      });
  };
};
