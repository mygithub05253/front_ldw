import React from 'react';
import S from './style';

// styled 컴포넌트 p 태그를 만들어서
// props로 글자색을 파란색으로 만들기
// p 태그의 폰트 크기는 30px

const Task = () => {
  return (
    <S.P color={"blue"}>
      안녕하세요
    </S.P>
  );
};

export default Task;