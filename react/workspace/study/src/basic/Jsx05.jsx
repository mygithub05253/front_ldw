// age 상수에 나이를 설정
// 19세 이하
// 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// age가 짝수라면 "당첨"

import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
  
  const age = 20;
  // const [notPass, lucky, unLucky] = ["입장 가능", "입장 불가", "당첨", "꽝"] 

  // const notPassComponent = (<div>{notPass}</div>);
  // const luckyComponent = (<div>{lucky}</div>);
  // const unLuckyComponent = (<div>{unLucky}</div>);

  const isAdult = age >= 19;
  const isEven = age % 2 == 0;
  
  // 나머지 3개 컴포넌트도 분리해서 가져오기 실습!
  // 10분
  const enter = isAdult ? <PassComponent /> : <NotPassComponent /> ;
  const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />
  
  return (
    <div>
      당신의 나이는 {age}이므로, <br />
      {enter}
      {win}      
    </div>
  );
};

export default Jsx05;