import { RECEIVE_API_DATA_URL } from "../actions/action-types";
import { RECEIVE_API_DATA_URL_SUCCESS } from "../actions/action-types";
import { RECEIVE_API_DATA_URL_ERROR } from "../actions/action-types";

const initialState = {
  itemData: {},
  loading: false,
  error: false
};

const itemReduser = (state = initialState, {type, payload}) => {
  switch (type) {
    case RECEIVE_API_DATA_URL:
      return {...state, loading: true, error: false};

    case RECEIVE_API_DATA_URL_SUCCESS: {
      return {...state, itemData: payload, loading: false, error: false};
    }

    case RECEIVE_API_DATA_URL_ERROR: {
      return {...state, loading: false, error: true};
    }

    default:
      return state;
  }
};
export default itemReduser;