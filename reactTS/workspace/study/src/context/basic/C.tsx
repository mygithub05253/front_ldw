import React from 'react';
import { AContext } from './AProvider';

const C = () => {
  return (
    <div>
      <AContext.Consumer>
        {
          (context) => (
            <p style={{color : context.color}}>최하위 C 요소</p>
          )
        }
      </AContext.Consumer>
    </div>
  );
};

export default C;