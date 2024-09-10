import React, { useRef, useState } from 'react';

// 로그인 로직
// 유효성 검사 반드시 필요
// useRef() 활용해서 사용자의 이름과 비밀번호가 작성되었는지 감지하기
// 작성이 모두 완료되었다면 그 때 전송 submit() 활용

const Check = () => {

  // 아이디의 상태
  const [idResult, setIdResult] = useState("");

  // 비밀번호의 상태
  const [passwordResult, setPasswordResult] = useState("");

  const idRef = useRef();
  const passwordRef = useRef();

  // 입력한 아이디 값 저장
  const onChangeId = () => {
    // console.log(idRef)
    setIdResult(idRef.current.value)
  }

  // 입력한 비밀번호 값 저장
  const onChangePassword = () => {
    // console.log(passwordRef)
    setPasswordResult(passwordRef.current.value)
  }

  // 로그인 로직 유효성 검사 코드
  const onClickToSubmit = () => {
    // 아이디랑 비밀번호가 둘 다 입력된 상태인 경우
    if(idResult && passwordResult) {
      alert("전송")
    }
    // 아이디나 비밀번호가 전부 다 입력되지 않았거나 하나만 입력된 상태인 경우
    else {
      alert("아이디 혹은 비밀번호가 전부 입력되었는지 확인하세요")
    }
  }

  return (
    <div>
      <form>
        <div><span>아이디</span><input ref={idRef} value={idResult} onChange={onChangeId} name="id" type="text" /></div>
        <div><span>비밀번호</span><input ref={passwordRef} value={passwordResult} onChange={onChangePassword} name="password" type="text" /></div>
        <button onClick={onClickToSubmit}>전송</button>
      </form>
    </div>
  );
};

export default Check;