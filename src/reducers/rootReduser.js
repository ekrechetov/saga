import { combineReducers } from "redux";
import dataReduser from "./dataReduser";

const rootReduser = combineReducers({
  data: dataReduser
});
export default rootReduser;