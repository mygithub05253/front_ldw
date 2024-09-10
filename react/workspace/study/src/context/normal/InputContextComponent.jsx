import React, { useContext, useState } from 'react';
import { FontSizeContext } from './FontContext';

// useContext 사용
// 사용자에게 입력 받은 사이즈로 폰트 사이즈를 변경하기
// 만약에 사용자가 초기화 버튼을 누르면 초기값인 2rem으로 변경된다.
// 버튼을 2개 만들기 (초기화 버튼, 적용 버튼)

const InputContextComponent = () => {

  const { state, action } = useContext(FontSizeContext);

  const [value, setValue] = useState("");

  const onChangeInputValue = (e) => {
    setValue(e.target.value);
  }

  const onClickToSetFontSize = () => {
    action.setFontSize(value)
  }

  const onClickToReset = () => {
    action.setFontSize("2rem");
  }

  return (
    <div>
      <p style={{fontSize : state.fontSize}}>{value}</p>
      <input type="text" placeholder="크기를 입력하세요." onChange={onChangeInputValue} />
      <button onClick={onClickToSetFontSize}>적용</button>
      <button onClick={onClickToReset}>초기화</button>
    </div>
  );
};

export default InputContextComponent;