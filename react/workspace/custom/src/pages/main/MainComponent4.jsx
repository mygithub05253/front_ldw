import React from 'react';
import S from './style';

// 부모에서 자식에게 스타일 정의하기

const MainComponent4 = () => {
  return (
    <S.InputBox>
      <S.Input placeholder="이름을 입력하세요" type="text" />
      <button>전송하는 버튼</button>
    </S.InputBox>
  );
};

export default MainComponent4;