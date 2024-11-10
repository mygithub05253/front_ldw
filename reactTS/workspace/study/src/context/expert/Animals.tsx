import React, { useContext, useState } from 'react';
import { AnimalsContext, ContextValues } from './AnimalContext';
import Animal from './Animal';
import useInput from "../../hook/useInput";

// Context 저장된 동물 세 마리를 버튼으로 출력
// input에 동물을 입력 후 엔터를 치면 버튼이 추가
// 동물 버튼을 클릭하면 해당 버튼을 삭제
// 추가와 삭제는 모두 context의 메서드를 사용한다.

const Animals = () => {
  const {state, actions} = useContext<ContextValues>(AnimalsContext);
  const [inputValue, onChangeInputValue] = useInput("");

  const onChangeKeyUpAnimalInsert = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      actions.insert(inputValue);
    }
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={onChangeInputValue} 
        onKeyUp={onChangeKeyUpAnimalInsert}
      />
      <Animal />
    </div>
  );
};

export default Animals;