import React from 'react';

const Form = (props) => {

  const {style, inputRef, formRef, onClickToCheck} = props;

  return (
    <div>
      <form ref={formRef} style={style}>
        <div><span>아이디</span><input ref={(element) => {inputRef.current[0] = element}} name="id" type="text" /></div>
        <div><span>비밀번호</span><input ref={(element) => {inputRef.current[1] = element}} name="password" type="password" /></div>
        <button type="button" onClick={onClickToCheck}>전송</button>
      </form>
    </div>
  );
};

export default Form;