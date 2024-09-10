import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalsContext';

// Provider로 Context를 제공
const AnimalsContainer = () => {
  return (
    <AnimalsProvider>
      <Animals />
    </AnimalsProvider>
  );
};

export default AnimalsContainer;