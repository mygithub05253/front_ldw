import React from 'react';

const Tsx01 = () => {
  // 설명형 문법
  const name:string = "이동원";
  const age:number = 23;
  const isTrue:boolean = false;
  const arr:[] = [];
  const numArr:number[] = [1, 2, 3, 4];
  const strArr:string[] = ["가", "나", "다", "라"];
  const obj:{} = {};
  // const mixArr:mix[] = ["문자", 10, true];

  return (
    <div>
      <h1>Hello TypeScript With React!</h1>
      <h1>My name is {name}</h1>
    </div>
  );
};

export default Tsx01;