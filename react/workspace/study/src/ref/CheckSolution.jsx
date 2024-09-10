import React, { useRef } from 'react';
import Form from './Form';

// 로그인 로직
// 유효성 검사 반드시 필요
// useRef() 활용해서 사용자의 이름과 비밀번호가 작성되었는지 감지하기
// 작성이 모두 완료되었다면 그 때 전송 submit() 활용

// Form 컴포넌트로 분리하는 실습

const CheckSolution = () => {

  const style = {
    display: "flex",
    flexDirection : "column",
    width: "200px"
  }

  const inputRef = useRef([]);
  const formRef = useRef();

  const onClickToCheck = () => {
    for(let input of inputRef.current) {
      console.log(input);
      if(!input.value) {
        console.log(input.name + " 값이 없습니다.")
        alert(input.name + "을 입력하세요.")
        return;
      }
    }
    formRef.current.submit();
  }

  return (
    <div>
      <Form style={style} inputRef={inputRef} formRef={formRef} onClickToCheck={onClickToCheck} />
    </div>
  );
};

export default CheckSolution;