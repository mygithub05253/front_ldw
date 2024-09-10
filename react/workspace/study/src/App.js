// css 파일 import
import './App.css';

// router import
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
// import { Route, Routes } from "react-router-dom";

// js 혹은 jsx 파일 import
// import Main from './pages/route/Main';
// import Intro from './pages/route/Intro';
// import Job from './pages/route/Job';
// import CountContainer from './pages/count/CountContainer';
// import FontContainer from './pages/font/FontContainer';
// import { FontSizeProvider } from './context/normal/FontContext';
// import ParentContainer from './context/normal/ParentContainer';
// import UseContextComponent from './context/normal/UseContextComponent';
// import InputContextComponent from './context/normal/InputContextComponent';
// import AnimalsContainer from './context/expert/AnimalsContainer';
// import A from './context/basic/A';
// import CharContext from './context/basic/CharContext';
// import SideEffect from './sideEffect/SideEffect';
// import SideEffectMount from './lifeCycle/function/sideEffect/SideEffectMount';
// import SideEffectMountSolution from './lifeCycle/function/sideEffect/SideEffectMountSolution';
// import ProductContainer from './lifeCycle/function/memoization/ProductContainer';
// import Infinite from './lifeCycle/class/Infinite';
// import LifeCycleContainer from './lifeCycle/class/LifeCycleContainer';
// import FoodContainer from './ref/expert/FoodContainer';
// import FoodContainerSolution from './ref/expert/FoodContainerSolution';
// import Name from './ref/Name';
// import Check from './ref/Check';
// import Checkbox from './ref/expert/Checkbox';
// import CheckSolution from './ref/CheckSolution';
// import Color from './map/state/basic/Color';
// import Name from './map/state/basic/Name';
// import Count from './map/state/basic/Count';
// import Sound from './map/state/basic/Sound';
// import FoodContainer from './map/FoodContainer';
// import UserContainer from './map/task/UserContainer';

function App() {
  return (
    <>
      {/* <FoodContainer /> */}
      {/* <UserContainer /> */}
      {/* <Count /> */}
      {/* <Sound /> */}
      {/* <Name /> */}
      {/* <Color /> */}
      {/* <Name /> */}
      {/* <Check /> */}
      {/* <CheckSolution /> */}
      {/* <Checkbox /> */}
      {/* <FoodContainer /> */}
      {/* <FoodContainerSolution /> */}
      {/* <LifeCycleContainer /> */}
      {/* <Infinite /> */}
      {/* <SideEffect /> */}
      {/* <SideEffectMount /> */}
      {/* <SideEffectMountSolution /> */}
      {/* <ProductContainer /> */}
      {/* <CharContext.Provider value={{color: "blue",}}><A /></CharContext.Provider> */}
      {/* <FontSizeProvider>
        <ParentContainer />
      </FontSizeProvider> */}
      {/* <UseContextComponent /> */}
      {/* <InputContextComponent /> */}
      {/* <AnimalsContainer /> */}
      {/* <CountContainer /> */}
      {/* <FontContainer /> */}
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/job" element={<Job />}>
          <Route path=":title" element={<Job />}></Route>
        </Route>
      </Routes> */}

      <RouterProvider router={router} />  

    </>
  );
}

export default App;
