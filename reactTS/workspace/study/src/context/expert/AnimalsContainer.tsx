import React from 'react';
// import Animals from './Animals';
import { AnimalsProvider } from './AnimalContext';
import Animals from './Animals';

const AnimalsContainer = () => {
  return (
    <div>
      <AnimalsProvider>
        <Animals />
      </AnimalsProvider>
    </div>
  );
};

export default AnimalsContainer;