import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
// import Task from './pages/main/Task';
// import Main from './pages/main/Main';
// import Home from './components/Home';
// import MainComponent3 from './pages/main/MainComponent3';
// import MainComponent4 from './pages/main/MainComponent4';
// import MainComponent5 from './pages/main/MainComponent5';
// import MainComponent6 from './pages/main/MainComponent6';
// import BasicButton from './components/BasicButton';
import Login from './pages/login/Login';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <MainComponent5 /> */}
        {/* <MainComponent6 /> */}
        {/* <BasicButton>전송</BasicButton> */}
        {/* <BasicButton size={"full"} shape={"small"} variant={"primary"}>전송</BasicButton>
        <BasicButton size={"small"} shape={"small"} variant={"primary"}>전송</BasicButton>
        <BasicButton size={"large"} shape={"round"} variant={"primary"}>전송</BasicButton> */}
        <Login />
      </ThemeProvider>
    </>
  );
};

export default App;