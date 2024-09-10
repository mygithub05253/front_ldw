// Context의 생성 및 초기화
// state : { animals : [] },
// action : { insert : () => {}, remove : () => {} }
// Provider
// useContext 사용할 것, consumer 필요 없음
// value= {}
// 그리고 내보내기

import { createContext, useState } from "react";

// 컨텍스트 생성 및 초기화
const AnimalsContext = createContext({
  state : { animals : [] },
  actions : { insert : () => {}, remove : () => {} }
});

// Provider 생성
const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(["누렁이", "점박이", "야옹이"]);
  const insert = (animal) => { setAnimals(animals.concat(animal)) };
  const remove = (index) => { setAnimals(animals.filter((animal, i) => i !== index ))};

  const value = {
    state : { animals : animals },
    actions : { insert : insert, remove : remove }
  }

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  );
}

export {AnimalsProvider, AnimalsContext};
