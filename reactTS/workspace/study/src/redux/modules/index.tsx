import { combineReducers } from "redux";
import count from "./count";

const rootReducer = combineReducers({
  count,
});

export default rootReducer;

// 리듀서 리턴타입 지정
export type ReduxState = ReturnType<typeof rootReducer>;