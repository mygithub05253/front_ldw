import React from 'react';
import { useContext } from 'react';
import { FontSizeContext } from './FontContext';

const UseContextComponent = () => {
  // useContext(context);
  const {state, action} = useContext(FontSizeContext);
  const onClickToChangeFontSize = () => {
    action.setFontSize("5em");
  }
  return (
    <div>
      <p style={{fontSize : state.fontSize}}>안녕하세요! useContext 사용입니다!~😎</p>
      <button onClick={onClickToChangeFontSize}>커져라~! 폰트~!</button>
    </div>
  );
};

export default UseContextComponent;