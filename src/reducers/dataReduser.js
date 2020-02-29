import { RECEIVE_API_DATA } from "../actions/action-types";
import { RECEIVE_API_DATA_SUCCESS } from "../actions/action-types";
import { RECEIVE_API_DATA_ERROR } from "../actions/action-types";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const dataReduser = (state = initialState, {type, payload}) => {
    switch (type) {

    case RECEIVE_API_DATA:
      return {data: [], loading: true, error: false}    

    case RECEIVE_API_DATA_SUCCESS:            
      return {...state, data: payload, loading: false, error: false};

    case RECEIVE_API_DATA_ERROR:
      return {...state, loading: false, error: true}   

    default:
      return state;
  }
};
export default dataReduser;