import React from 'react';
import User from './User.jsx';

const UserContainer = () => {

  // 화면에 유저의 이름과 주소를 출력하기
  // ex) 이동원 : 서울 성동
  //     홍길동 : 서울 강남
  // ...
  // 단 부모 컨테이너에서 컴포넌트로 prop으로 모두 전달하여 사용

  const userList = [
    {
      id : 1,
      name : "이동원",
      age : 22,
      address : "서울",
      phone : "010-0000-0000",
    },
    {
      id : 2,
      name : "홍길동",
      age : 23,
      address : "서울",
      phone : "010-0000-0000",
    },
    {
      id : 3,
      name : "장보고",
      age : 24,
      address : "서울",
      phone : "010-0000-0000",
    },
    {
      id : 4,
      name : "이순신",
      age : 25,
      address : "서울",
      phone : "010-0000-0000",
    },
  ]

  // const userListItems = userList.map((user) => <User key={user.id} id={user.id} age={user.age} name={user.name} address={user.address} phone={user.phone} />)

  
  return (
    <>
      {userList.map((user) => <User key={user.id} id={user.id} age={user.age} name={user.name} address={user.address} />)}
    </>
  );
};

export default UserContainer;