import React, { ReactNode, useState } from 'react';

export type ContextValues = {
  state : { animals : String[] };
  actions : { insert : (value:string) => void, remove : (index:number) => void };
}

export const initialValues = {
  state : { animals : [] },
  actions : { insert : () => {}, remove : () => {} }
}

// context의 초기값 생성
const AnimalsContext = React.createContext<ContextValues>(initialValues);

const AnimalsProvider = ({children}:{children:ReactNode}) => {

  const [animals, setAnimals] = useState<string[]>(["누렁이", "점박이", "야옹이"]);
  const insert = (animal:string) => { setAnimals(animals.concat(animal)) }
  const remove = (index:number) => { setAnimals(animals.filter((animal, i) => i !== index))};

  const value = {
    state : { animals : animals },
    actions : { insert : insert, remove : remove }
  }

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


export { AnimalsContext, AnimalsProvider };