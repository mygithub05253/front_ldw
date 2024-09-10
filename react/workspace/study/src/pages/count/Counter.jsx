import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from '../../redux/modules/count';

const Counter = () => {
  
  // store에 있는 값을 선택해서 사용
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => {dispatch(decrease())}}>-1</button>
        <button onClick={() => {dispatch(increase())}}>+1</button>
      </div>
    </div>
  );
};

export default Counter;