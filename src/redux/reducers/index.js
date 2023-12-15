import { combineReducers } from "redux";
import { bikeDetailReducer } from "./bikeDetailReducer";

export const reducers = combineReducers({
  allbikes: bikeDetailReducer,
});
