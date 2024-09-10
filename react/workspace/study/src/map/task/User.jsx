import React from 'react';

const User = (props) => {
  console.log(props)
  return (
    <li>
      {props.name} : {props.address}
    </li>
  );
};

export default User;