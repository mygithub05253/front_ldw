import React from 'react';
import { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';
import Animal from './Animal';
import useInput from '../../hooks/useInput';

// Context에 저장된 세 마리의 동물을 버튼으로 출력
// input에 동물 입력 후 엔터를 하면 "동물"버튼이 추가된다.
// 동물 버튼을 클릭 시 해당 버튼은 삭제된다.
// 각 Context에 선언된 insert(), remove() action을 사용해야한다.

const Animals = () => {
  const {state, actions} = useContext(AnimalsContext);

  const [value, onChangeValue] = useInput("");

  const styleFlex = { display: "flex" };
  const styleListStyle = { listStyle : "none" };

  const onKeyUpToAddAnimal = (e) => {
    if(e.key === 'Enter') {
      actions.insert(value);
    }
  }

  return (
    <>
      <input type="text" onChange={onChangeValue} onKeyUp={onKeyUpToAddAnimal} />
      <Animal styleFlex={styleFlex} styleListStyle={styleListStyle} />
    </>
  );
};

export default Animals;