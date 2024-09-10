import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <p>메인 페이지😎</p>
      <Link to={"/intro"}><button>소개 페이지 이동</button></Link>
    </div>
  );
};

export default Main;