import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bigger } from '../../redux/modules/font';

// 1번 : "재미있는 리덕스 수업!"
// 폰트 기본 크기 1rem
// 버튼을 눌렀을 때 2rem으로 변경

const FontButtonComponent = () => {

  const fontSize = useSelector((state) => state.fontSize);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{fontSize : fontSize}}>재미있는 redux 실습!</h1>
      <button onClick={() => {dispatch(bigger())}}>커지는 버튼</button>
    </div>
  );
};

export default FontButtonComponent;