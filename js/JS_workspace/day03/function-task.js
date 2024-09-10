// 화살표 함수 활용
// 값을 3개를 받아서 제일 큰 값 작은 값을 알려주는 함수

/* let max = "";
let min = "";
const MaxMin = (num1, num2, num3) => {
  if(num1 > num2) {
    min = num2;
    max = num1;
  } else {
    min = num1;
    max = num2;
  }
  if(min > num3) {
    min = num3;
  }
  if(min < num3) {
    max = num3;
  }
  console.log(max);
  console.log(min);
};

MaxMin(1, 2, 3); */

const getMinMax = (num1, num2, num3) => {
  // 최대값 알고리즘
  // num1 > num2 결과에 num3을 비교해서 num1 > num3 검사 num1이 제일 큰 값
  // num2 > num1 결과에 num3을 비교해서 num2 > num3 검사 num2이 제일 큰 값
  // num3 > num1 결과에 num2을 비교해서 num3 > num2 검사 num3이 제일 큰 값

  // 최소값 알고리즘
  // num1 < num2 결과에 num3을 비교해서 num1 < num3 검사 num1이 제일 작은 값
  // num2 < num1 결과에 num3을 비교해서 num2 < num3 검사 num2이 제일 작은 값
  // num3 < num1 결과에 num2을 비교해서 num3 < num2 검사 num3이 제일 작은 값

  // 같은 지 비교
  // num1 == num2
  // num2 == num3
  // num1 == num3
  // num1 == num2 && num2 == num3

  let max = num1;
  let min = num1;
  let result = "";

  let sameNum1Num2 = num1 == num2;
  let sameNum2Num3 = num2 == num3;
  let sameNum1Num3 = num1 == num3;
  let sameAll = sameNum1Num2 && sameNum2Num3;

  if(sameAll) {
    result = "세 정수는 같습니다.";
    return result;
  }

  // num1과 num2가 같을 때
  if(sameNum1Num2) {
    num1 > num3 ? min = num3 : max = num1;
  }

  // num2와 num3가 같은 때
  if(sameNum2Num3) {
    num1 > num3 ? min = num3 : max = num1;
  }

  // num1과 num3가 같을 때
  if(sameNum1Num3) {
    num1 > num2 ? min = num2 : max = num1;
  }

  // 모두 다를 때 큰 값만 비교
  if(num2 > max) {
    max = num2;
  }
  
  if(num3 > max) {
    max = num3;
  }

  // 모두 다를 때 작은 값 비교
  if(num2 < min) {
    min = num2;
  }

  if(num3 < min) {
    min = num3;
  }

  result = `최소 값 : ${min}, 최대 값 : ${max}`;
  return result;
};

console.log(getMinMax(600, 30, 30));
console.log(getMinMax(30, 30, 700));
console.log(getMinMax(30, 10, 60));