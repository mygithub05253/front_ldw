import React, { useState } from 'react';
import { StateUser } from '../models/user';

// 초기값
const userData:StateUser = {
  name : "초기 유저",
  age : 0,
  status : [""]
};

const changeUserData:StateUser = {
  name : "이동원",
  age : 23,
  status : ["여러가지", true, 23, {}, "any"]
}

const GenericState = () => {

  const [user, setUser] = useState<StateUser>(userData);

  const onClickToChangeUser = () => {
    setUser(changeUserData);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={onClickToChangeUser}>유저 변경!</button>
    </div>
  );
};

export default GenericState;