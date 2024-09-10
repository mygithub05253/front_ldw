import React from 'react';
import Food from './Food';

const FoodContainer = () => {

  const foods = [
    {
      id : 1,
      name : "샐러드",
    },
    {
      id : 2,
      name : "치킨",
    },
    {
      id : 3,
      name : "피자",
    },
    {
      id : 4,
      name : "햄버거",
    },
  ];

  const foodList = foods.map(({id, name}) => <Food key={id} id={id} name={name} />);

  return (
    <div>
      {/* forEach : 새로운 배열 return 해주지 않음 */}
      {/* 버츄얼 DOM이 변화를 인식하지 못함 */}
      {/* console에 찍을 때를 제외하고는 거의 사용하지 않을 예정 */}
      {/* {foods.forEach((food) => {console.log(food.name)})}
      {foods.forEach((food) => <li>{food.name}</li>)} */}
      {/* map : 새로운 배열 return */}
      {/* 버츄얼 DOM이 변화를 인식함 */}
      {/* 반복문에서 넘겨줄 때 고유한 key 값을 지정해주어야 함 */}
      {foodList}
    </div>
  );
};

export default FoodContainer;