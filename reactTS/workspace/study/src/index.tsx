import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리덕스 추가
import { Provider } from 'react-redux';
import rootReducer from './redux/modules';
import { configureStore } from '@reduxjs/toolkit'; 

// 스토어 생성
const store = configureStore({
  reducer : rootReducer,
  devTools : true,
})

// 스토어에서 제공하는 dispatch 리턴타입 생성
export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
