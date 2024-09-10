import React, { useState } from 'react';

const Sound = () => {

  // 강아지 버튼, 고양이 버튼
  // 각각 다른 울음 소리가 나오도록 구현하기
  // ex) 강아지 버튼 -> "멍멍"을 화면에 출력
  // ex) 고양이 버튼 -> "야옹"을 화면에 출력
  // 훅함수 활용

  // const sound = "";
  // 울음소리 초기값 설정
  const [sound, setSound] = useState("안녕");

  // 울음소리를 "멍멍"으로 바꾸기
  const dogButton = () => {
    setSound("멍멍")
    console.log("강아지 버튼 눌림")
  };

  // 울음소리를 "야옹"으로 바꾸기
  const catButton = () => {
    setSound("야옹")
    console.log("고양이 버튼 눌림")
  };
    
  // 울음소리 초기화
  const resetButton = () => {
    setSound("")
  };

  return (
    <div>
      <p>{sound}</p>
      <button onClick={dogButton}>강아지 버튼</button>
      <button onClick={catButton}>고양이 버튼</button>
      <button onClick={resetButton}>초기화 버튼</button>
    </div>
  );
};

export default Sound;