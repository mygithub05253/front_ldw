import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animal = ({styleFlex, styleListStyle}) => {

  const { state, actions } = useContext(AnimalsContext);

  const animalList = state.animals.map((animal, i) => (
    <li style={styleListStyle} key={i}>
      <button onClick={() => { actions.remove(i) }}>{animal}</button>
    </li>
  ))

  return (
    <ul style={styleFlex}>
      {animalList}
    </ul>
  );
};

export default Animal;