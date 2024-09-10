import { createAction, handleActions } from "redux-actions";

// 1번 실습
const BIGGER = "font/BIGGER";
export const bigger = createAction(BIGGER);

// 2번 실습
const INPUTBIGGER = "font/INPUTBIGGER";
// Optional Chaining 적용한 방식
// export const inputBigger = createAction(INPUTBIGGER, (fontSize) => fontSize);
export const inputBigger = createAction(INPUTBIGGER);

// 초기값
const initialState = {
  fontSize : "1rem",
}

// 
const font = handleActions({
  [BIGGER] : (state, action) => ({ fontSize : "2rem" }),
  [INPUTBIGGER] : (state, action) => ({ fontSize : action.payload })
}, initialState)

export default font;
