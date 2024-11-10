import React from 'react';
import { User } from '../models/user';
import Tsx02 from './Tsx02';

// React.FC
// react에서 함수 컴포넌트를 정의할 때 사용하는 타입
// children이 없음 React.FC<React.PropsWithChildren>

const Tsx02Container:React.FC = () => {

  const user:User = {
    name : "이동원",
    age : 23,
    address : "서울특별시",
    hobby : {
        main : "잠자기",
        sub : "놀고 먹기"
    },
    phone : "01000000000",
    recommender: [
        {name: "홍길동", age: 30, address: "서울시 강남구"},
        {name: "장보고", age: 17, address: "경기도 남양주시"},
        {name: "김철수", age: 24, address: "서울시 중랑구"}
    ]
  }

  return (
    <div>
      <Tsx02 user={user} />
    </div>
  );
};

export default Tsx02Container;