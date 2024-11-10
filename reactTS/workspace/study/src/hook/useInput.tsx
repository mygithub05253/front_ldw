import React, { useState } from 'react';

const useInput = (initialValue:any) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChangeInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return [inputValue, onChangeInputValue, setInputValue];
};

export default useInput;