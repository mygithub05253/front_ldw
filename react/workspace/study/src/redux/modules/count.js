import { createAction, handleActions } from "redux-actions";

// type 생성
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// actions 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// state 초기값 설정
const initialState = {
  number : 0
}

// 훅함수를 사용하지 않을 때 사용하는 통상적인 switch문
// const reducer = (state, action) => {
//   switch(action) {
//     case INCREASE :
//       action.setNumber(state.number + 1);
//     case DECREASE :
//       action.setNumber(state.number -1);  
//   }
// }

// reducer 제작
const count = handleActions({
  // 안에 있는 실행문이 reducer의 역할을 수행
  // action에 있는 payload에 전달 받은 파라미터가 담김
  [INCREASE] : (state, action) => ({number: state.number + 1}),
  [DECREASE] : (state, action) => ({number: state.number - 1})
}, initialState)

export default count;