import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputBigger } from '../../redux/modules/font';

// 2번
// 사용자에게 입력 받은 폰트 사이즈로 폰트 크기를 변경하기
// FontInputComponent에서 구현

const FontInputComponent = () => {

  const [value, setValue] = useState("");
  const fontSize = useSelector((state) => state.fontSize);

  const onChangeInputValue = (e) => {
    setValue(e.target.value)
  }
  
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{fontSize : fontSize}}>재미있는 리덕스 수업</h1>
      <input type="text" placeholder="font 사이즈를 입력하세요." onChange={onChangeInputValue} />
      <button onClick={() => {dispatch(inputBigger(value))}}>크기 적용</button>
    </div>
  );
};

export default FontInputComponent;