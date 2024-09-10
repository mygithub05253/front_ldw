import React, { useState } from 'react';

// 불변성 유지
// 바벨 es5로 바꿔주는 문법
// 모던 자바스크립트가 편하자고 만든 문법의 종류
// 실제 배포 시 모던 자바스크립트 문법이 변경되어야 함
// 그것을 도와주는 것이 바벨
// 바벨을 통해 es6 -> ex5로 다운 그레이드하여 배포
// 하지만 배열의 많은 메서드들은 es5에서도 사용 가능

const Checkbox = () => {
  
  const [message, setMessage] = useState([]);

  const onClickToCheck = (e) => {
    let value = e.target.value;
    // 배열에 값을 추가하는 메서드
    // push보다 concat을 사용해서 새로운 배열을 리턴해주기
    if(e.target.checked) {
      setMessage(message.concat(value))
    } else {
      // filter를 통해 필요한 값을 검증하기
      setMessage(message.filter((m) => m !== value))
    }
  }

  return (
    <div>
      <div>
        <span>front-end</span>
        <input type="checkbox" value="front-end" onClick={onClickToCheck} />
      </div>
      <div>
        <span>back-end</span>
        <input type="checkbox" value="back-end" onClick={onClickToCheck} />
      </div>
      <div>
        <span>AI</span>
        <input type="checkbox" value="AI" onClick={onClickToCheck} />
      </div>

      <div>
        <h1>{message.map((message, i) => <p key={i}>{message}</p>)}</h1>
      </div>

    </div>
  );
};

export default Checkbox;