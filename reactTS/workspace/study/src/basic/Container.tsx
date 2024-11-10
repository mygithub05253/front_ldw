import React from 'react';
import Basic from './Basic';

const Container = () => {
  const name = "이동원";
  const printConsoleName = () => {
    console.log(name);
  }

  return (
    <div>
      <Basic printConsoleName={printConsoleName} />
    </div>
  );
};

export default Container;