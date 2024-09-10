import React, { useRef, useState } from 'react';

const Color = () => {

  // 빨간색 버튼을 누르면 글자색을 빨갛게
  // 파란색 버튼을 누르면 글자색을 파랗게
  // "핑크색"을 입력하면 글자의 색깔을 없애기

  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const colorRed = () => {
    setColor("red")
  }

  const colorBlue = () => {
    setColor("blue")
  }

  const writeText = (e) => {
    let value = e.target.value;
    if(value === "핑크색") {
      setColor("")
    }
    setResult(e.target.value)
  }
  
  const inputRef = useRef([]);

  const textReset = () => {
    console.log(inputRef)
    inputRef[0].value = "";
    setResult("")
  }

  return (
    <div style={{color}}>
      <p>{result}</p>
      <input ref={(element) => inputRef[0] = element} onChange={writeText} type="text" /> <br />
      <input ref={(element) => inputRef[1] = element} type="text" />

      <button onClick={colorRed}>빨간색 버튼</button>
      <button onClick={colorBlue}>파란색 버튼</button>
      <div>
        <button onClick={textReset}>값 초기화</button>
      </div>
    </div>
  );
};

export default Color;