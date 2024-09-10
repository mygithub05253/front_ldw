import React, { useState } from 'react';

const Name = () => {
  
  // 사용자가 이름을 입력했다면 화면에 바로 출력해서 보여주기
  // p 태그 안에 result에 사용자가 입력한 값을 출력하기

  const [result, setResult] = useState("");

  const viewResult = (e) => {
    setResult(e.target.value);
  }

  return (
    <div>
      <p>{result}</p>
      <input onChange={viewResult} type="text" />
    </div>
  );
};

export default Name;