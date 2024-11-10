import React from 'react';
import B from './B';
import AProvider from './AProvider';

const A = () => {
  return (
    <AProvider>
      <B />
    </AProvider>
  );
};

export default A;