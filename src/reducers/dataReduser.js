import { RECEIVE_API_DATA } from "../actions/action-types";

 const dataReduser = (state = [], { type, payload }) => {
  switch (type) {
    case RECEIVE_API_DATA:      
      return payload;

    default:
      return state;
  }
};
export default dataReduser;