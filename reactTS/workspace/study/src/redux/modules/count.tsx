import { createAction, handleActions } from "redux-actions";

// 타입을 생성
// 타입을 상수로 고정
const INCREASE = "count/INCREASE" as const;
const DECREASE = "count/DECREASE" as const;

// 메소드 (값)이 들어왔을 때 실행할 액션 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 액션의 리턴타입 생성
type CounterAction = 
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;

type InitailProps = {
  number : number;
}

// 리덕스 초기값
const initailState:InitailProps = {
  number : 0
}

const count = handleActions<InitailProps>({
  [INCREASE] : (state:InitailProps, action:CounterAction) => ({number : state.number + 1}),
  [DECREASE] : (state:InitailProps, action:CounterAction) => ({number : state.number - 1})
}, initailState);

export default count;