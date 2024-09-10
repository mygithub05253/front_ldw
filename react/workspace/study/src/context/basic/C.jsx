import React from 'react';
import CharContext from './CharContext';

const C = () => {
  return (
    <div>
      <CharContext.Consumer>
        {
          (context) => <p style={{color: context.color}}>최하위 컴포넌트😎</p>
        }
      </CharContext.Consumer>
    </div>
  );
};

export default C;