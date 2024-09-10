import React from 'react';

const Component03 = (props) => {
  console.log(props)
  // props.style
  // props.childen
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Component03;