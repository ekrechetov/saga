import { combineReducers } from "redux";
import dataReduser from "./dataReduser";
import itemReduser from "./itemReduser";

const rootReduser = combineReducers({
  data: dataReduser,
  itemInfo: itemReduser
});
export default rootReduser;