import React from 'react';
import { User } from '../models/user';

type UserProps = {
  user:User;
}

// 기본 원리
// const Tsx02:React.FC<UserProps> = ({user}) => {

// 간략하게 사용하는 방법
const Tsx02 = ({user}:UserProps) => {
  return (
    <div>
      {user.name}
    </div>
  );
};

export default Tsx02;