import React, { useRef, useState } from 'react';

const FoodContainerSolution = () => {
  const [foods, setFoods] = useState([]);
  
  // foods랑 check랑 방 번호를 맞추는 작업, index 번호
  const [checked, setChecked] = useState([]);

  const inputRef = useRef([]);

  // 값을 추가하는 logic
  const onClickToAddFood = () => {
    setFoods(foods.concat({kor : inputRef.current[0].value, eng : inputRef.current[1].value}))
    setChecked(checked.concat(false));
  }

  // checkbox 클릭을 하고 index 번호 부여
  const onChangeCheckBox = (i) => {
    checked.splice(i, 1, !checked[i]);
    setChecked(checked.concat());
  }

  // 값을 삭제하는 logic
  const onClickToRemoveFood = () => {
    // check가 되어 있지 않은 것들을 제외하고 되어 있는 것을 삭제하도록 하는 코드
    setFoods(foods.filter((food, i) => !checked[i]))
    // 나머지 check 값들을 false로 변경
    setChecked(new Array(foods.length).fill(false))
  }

  // foods들을 출력해주고 checkbox 설정
  const foodList = foods.map(({kor, eng}, i) => {
    return (
      <li key={i}>
        <input type="checkbox" onChange={() => {onChangeCheckBox(i)}} checked={checked[i]} />
        {`${kor} (${eng})`}
      </li>
    )
  })

  return (
    <div>
      <input type="text" placeholder="한국 음식 이름" ref={(element) => {inputRef.current[0] = element}} />
      <input type="text" placeholder="영어 음식 이름" ref={(element) => {inputRef.current[1] = element}} />
      <button onClick={onClickToAddFood}>추가</button>
      <button onClick={onClickToRemoveFood}>삭제</button>
      <div>
        {foodList}
      </div>
    </div>
  );
};

export default FoodContainerSolution;