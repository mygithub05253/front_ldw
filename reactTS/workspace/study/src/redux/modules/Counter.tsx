import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '.';
import { decrease, increase } from './count';
import { AppDispatch } from '../..';

const Counter = () => {
  const number = useSelector((state:ReduxState) => state.count.number);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => { dispatch(increase()) }}>-1 감소</button>
      <button onClick={() => { dispatch(decrease()) }}>+1 증가</button>
    </div>
  );
};

export default Counter;