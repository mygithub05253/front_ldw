import React, { useState } from 'react';

const Count = () => {
  // 훅함수 사용 시 상태를 바꾸면서 리랜더링을 실행
  // 상태를 관리할 변수, 상태를 바꿀 수 있는 setter 메서드 => 상태 관리
  // useState(변수의 초기값);
  // 비구조화 할당 활용
  const [number, setNumber] = useState(10);

  const decrease = () => {
    setNumber(number - 1);
  };
  const increase = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <button onClick={decrease}>-1 감소</button>
      <p>{number}</p>
      <button onClick={increase}>+1 증가</button>
    </div>
  );
};

export default Count;




