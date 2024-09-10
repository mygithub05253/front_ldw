import React, { useRef, useState } from 'react';

// 사용자가 입력한 이름을 p 태그에 실시간으로 반영
// 버튼을 클릭하면 이름 뒤에 "님"이 붙도록 구현
// 입력 후 엔터 작성 시 p 태그에 반영

const Name = () => {

  const [result, setResult] = useState("");
  const nameRef = useRef();
  const inputRef = useRef();

  const onChangeSetName = (e) => {
    setResult(e.target.value);
  }

  const onClickToPutName = () => {
    setResult(nameRef.current.innerText + "님");
    // inputRef.current.value = inputRef.current.value + "님";
  }

  return (
    <div>
      <p ref={nameRef}>{result}</p>
      <input ref={inputRef} value={result} onChange={onChangeSetName} type="text" placeholder="이름을 입력하세요." />
      <button onClick={onClickToPutName}>"님"을 붙여주는 버튼</button>
    </div>
  );
};

export default Name;