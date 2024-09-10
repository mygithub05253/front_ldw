import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>여기는 헤더</header>
      <main>
        <Outlet />
      </main>
      <footer>여기는 푸터</footer>
    </div>
  );
};

export default Layout;