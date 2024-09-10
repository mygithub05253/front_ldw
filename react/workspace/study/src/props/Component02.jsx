import React from 'react';

const Component02 = (props) => {
  console.log(props)
  return (
    <div>
      컴포넌트 2번
      {props.children}
    </div>
  );
};

export default Component02;