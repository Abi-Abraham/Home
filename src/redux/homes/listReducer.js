import { HOME_REQUEST, HOME_SUCCESS, HOME_FAILURE } from "./listTypes";

const initialState = {
  loading: false,
  homelists: [],
  error: "",
};

const homeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        homelists: action.payload,
        error: "",
      };
    case HOME_FAILURE:
      return {
        ...state,
        loading: false,
        homelists: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeListReducer;
