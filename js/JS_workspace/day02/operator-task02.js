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
const age = 23;
const name = "이동원";

const resultAge = (age >= 19) ? "입장 가능" : "입장 불가";
const resultAge2 = (age % 2 === 0) ? "짝수" : "홀수";
const resultAge3 = (age == 16) && "당첨" || "꽝입니다";

console.log(`${name}님은 ${resultAge}`);
console.log(`${age}, ${resultAge2}, ${resultAge3}`);
