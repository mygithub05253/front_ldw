import React from 'react';
import S from './style';

const MainComponent3 = () => {
  return (
    <S.InputBox>
      <S.Input placeholder="아이디 입력하세요" value={"123"} />
      <S.Input placeholder="비밀번호를 입력하세요" type="password" />
      <S.Input type="checkbox" />
      <S.Input type="button" />
    </S.InputBox>
  );
};

export default MainComponent3;