import React from 'react';
import { CountIndicatorProps } from "../models/count";

const Counter = ({increase, decrease}:CountIndicatorProps) => {
  return (
    <div>
      <button onClick={decrease}>-1 감소</button>
      <button onClick={increase}>+1 증가</button>
    </div>
  );
};

export default Counter;