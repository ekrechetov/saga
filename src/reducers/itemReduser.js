import { RECEIVE_API_DATA_URL } from "../actions/action-types";

 const itemReduser = (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_API_DATA_URL: {
      return payload;
    }

    default:
      return state;
  }
};
export default itemReduser;