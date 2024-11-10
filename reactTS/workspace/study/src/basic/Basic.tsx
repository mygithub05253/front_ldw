import React from 'react';

// React.FC
// Function Component
// 단점
// 1. children을 자동으로 가짐
// 2. React.FC에서 Generic 타입을 명시적으로 전달하기 어려움
// 결론 : React.FC 사용을 지양하자

type BasicProps = {
  printConsoleName : () => void;
}

// const Basic:React.FC<BasicProps> = ({printConsoleName}:BasicProps) => {
const Basic = ({printConsoleName}:BasicProps) => {
  return (
    <div>
      <button onClick={printConsoleName}>버튼</button>
    </div>
  );
};

export default Basic;