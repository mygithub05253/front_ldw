import React from 'react';
import FontButtonComponent from './FontButtonComponent';
import FontInputComponent from './FontInputComponent';

// 1번 : "재미있는 리덕스 수업!"
// 폰트 기본 크기 1rem
// 버튼을 눌렀을 때 2rem으로 변경
// FontButtonComponent에서 구현

// 2번
// 사용자에게 입력 받은 폰트 사이즈로 폰트 크기를 변경하기
// FontInputComponent에서 구현

const FontContainer = () => {
  return (
    <div>
      <FontButtonComponent />
      <FontInputComponent />
    </div>
  );
};

export default FontContainer;