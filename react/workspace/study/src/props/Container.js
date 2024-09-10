import React from 'react';
import Component03 from './Component03';
import Component04 from './Component04';
// import Component01 from './Component01';
// import Component02 from './Component02';

const Container = () => {

  // const name = "김세환";
  // const age = 20;
  // const emptyFunction = () => {};

  // 실습 10분
  // component3번을 만들어서 
  // p태그를 자식요소 받고
  // prop로 style을 보내서 color를 blue로 변경하기
  const style = {color: "blue"};
  const age = 21;

  return (
    <div>
      {/* <Component01 name={name} age={age} emptyFunction={emptyFunction} /> */}
      {/* <Component02>
        <p>자식 태그</p>        
      </Component02> */}
      {/* <Component03>
        <p style={style}>나 자식😀</p>
      </Component03> */}
      <Component04 age={age}/>

    </div>
  );
};

export default Container;