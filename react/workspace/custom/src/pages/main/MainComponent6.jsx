import React from 'react';
import S from './style';

const MainComponent6 = () => {

  const onClickToConsole = () => {
    console.log("1번")
  }

  return (
    <div>
      <S.ThemeButton onClick={onClickToConsole}>테마가 적용된 버튼</S.ThemeButton>
    </div>
  );
};

export default MainComponent6;