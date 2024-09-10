import React from 'react';

// 12분
// 부모에게 나이를 받아서
// 부모의 나이가 홀수면 자식의 글자를 blue 색깔로 만들기
// 삼항연산자, props를 이용해서 해결하기

const Component04 = ({age}) => {
  
  const isOdd = age % 2 == 1;

  return (
    <div style={isOdd ? {color : "blue"} : {color : "black"}}>
      나 자식태그😎
    </div>
  );
};

export default Component04;