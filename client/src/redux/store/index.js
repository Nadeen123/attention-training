import { createStore } from "redux";
import { counterReducer, scoreReducer, percentReducer, flagReducer, instructionsCounterReducer } from "../reducers";
import { combineReducers } from "redux";

const store = combineReducers({
  counter: counterReducer,
  score: scoreReducer,
  percent: percentReducer,
  flag: flagReducer, // this state is defined to refresh the page
  instructionsCounter: instructionsCounterReducer
});
export default createStore(store);
