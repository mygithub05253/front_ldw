import React, { useContext } from 'react';
import { AnimalsContext, ContextValues } from './AnimalContext';

const Animal = () => {
  const {state, actions} = useContext<ContextValues>(AnimalsContext);
  const AnimalList = state.animals.map((animal, i) => (
    <li key={i}>
      <button onClick={() => actions.remove(i) }>{animal}</button>
    </li>
  ))
  return (
    <div>
      {AnimalList}
    </div>
  );
};

export default Animal;