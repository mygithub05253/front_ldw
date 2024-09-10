/*
  나이는 상수로 설정, 삼항 연산자
  ** 중요 ** 값을 모두 변수에 담아보기

  실습 나이가 19살 이상이면 "입장 가능" 출력
  19살 이하이면 "입장 불가" 출력

  나이가 짝수면 "짝수" 출력
  나이가 홀수면 "홀수" 출력

  && || 연산자 사용해보기
  나이가 16살이면 "당첨" 출력
  아니면 "꽝입니다" 출력

  콘솔 결과 : [본인 이름]님은 [입장 가능]
  [나이], [홀수], [꽝입니다.].
*/
const age = 18;
const name = "이동원";
const baseAge = 19;
const pass = "입장 가능";
const notPass = "입장 불가";
const lucky = "당첨";
const unlucky = "꽝입니다.";
const even = "짝수";
const odd = "홀수";
const isAdult = age >= baseAge;
const isEven = age % 2 === 0;
const isLucky = age === 16;

const result = age >= baseAge && age % 2 === 0 ? "성인이면서 짝수" : age >= baseAge ? "성인이면서 홀수" : "성인이 아닙니다."; 
console.log(result);

// const isPassResult = isAdult ? pass : notPass;
// const isEvenResult = isEven ? even : odd;
// const isLuckyResult = isLucky ? lucky : unlucky;

// console.log(name + "님은\n" + isPassResult + "\t" + isEvenResult + "\t" + isLuckyResult);


