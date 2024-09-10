import React from 'react';
import { FontSizeConsumer } from './FontContext';

const ContextComponent = () => {
  return (
    <div>
      <FontSizeConsumer>
        {
          (context) => (
            <>
              <p style={{fontSize : context.state.fontSize}}>리액트 context API 환영😎</p>
              {/* 버튼을 클릭 시 context에 있는 action을 이용해서 글자 크기를 0.1rem으로 변경 */}
              <button onClick={() => {context.action.setFontSize("0.1rem")}}>글자 크기 작게 변경</button>
            </>
          )
        }
      </FontSizeConsumer>
    </div>
  );
};

export default ContextComponent;