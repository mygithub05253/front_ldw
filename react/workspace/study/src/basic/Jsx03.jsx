// name과 age, message를 넣어서 화면에 p태그로 보여주기
// name은 이름
// age는 나이
// message는 환영합니다.
// 5분

import React from 'react';

const Jsx03 = () => {
  
  const name = "김세환";
  const age = 20;
  const message = "환영합니다"

  return (
    <div>
      {name}입니다. 나이는 {age}살 <br />
      {message}😎
    </div>
  );
};

export default Jsx03;