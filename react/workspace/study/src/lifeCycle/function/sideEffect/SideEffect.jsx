import React, { useEffect, useState } from 'react';

const SideEffect = () => {

  const [color, setColor] = useState("black");
  const [name, setName] = useState("이동원");

  // 랜더링될 때마다 실행
  // useEffect(() => {
  //   console.log("리랜더링될 때마다")
  // })

  // 마운트가 될 때만 실행
  useEffect(() => {
    console.log("마운트가 될 때")
  }, [])

  // 특정 컴포넌트가 변경될 때 실행
  useEffect(() => {
    console.log("컬러가 바뀔 때만 실행")
  }, [color])

  const onClickToChangeColor = () => {
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  }

  const onClickToChangeName = () => {
    setName("홍길동")
    console.log("이름 변경")
  }
  return (
    <div>
      <h1 style={{color}}>안녕하세요, {name}</h1>
      <button onClick={onClickToChangeColor}>색상 변경</button>
      <button onClick={onClickToChangeName}>이름 변경</button>
    </div>
  );
};

export default SideEffect;