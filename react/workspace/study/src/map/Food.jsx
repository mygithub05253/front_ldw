import React from 'react';

const Food = ({id, name}) => {
  // 반복문을 사용해 받으면 각각의 상태를 가지게 됨
  // console.log(props)
  return (
    <li>
      {name}
    </li>
  );
};

export default Food;