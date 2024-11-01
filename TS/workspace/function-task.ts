// 설명형 문법(explicit type annotation)
// 1) 성과 이름을 받아서 출력해주는 함수 만들기
// 2) 두 수를 받아서 사칙 연산을 배열로 리턴해주는 함수
// 3) 두 수를 받아서 A와 B를 비교하여 A가 크면 A가 큽니다, 
// B가크면 B가 큽니다.를 리턴해주는 함수
// 4) 입력한 값들을 모두 문자열로 붙여주는 함수
// ex) myFunc('가', '나', '다', ...) 
// 결과: 가나다

// 1) 성과 이름을 받아서 출력해주는 함수 만들기
const printName = (firstName: string, lastName: string): string => {
  return `${firstName}${lastName}`;
}

console.log(printName("이", "동원"))

// 2) 두 수를 받아서 사칙 연산을 배열로 리턴해주는 함수
const calcPlus = (num1: number, num2: number): number => {
  return num1 + num2;
}

const calcMinus = (num1: number, num2: number): number => {
  if(num1 >= num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

const calcMultiple = (num1: number, num2: number): number => {
  return num1 * num2;
}

const calcDivide = (num1: number, num2: number): number => {
  return num1 / num2;
}

console.log(calcPlus(20, 10))
console.log(calcMinus(20, 10))
console.log(calcMultiple(20, 10))
console.log(calcDivide(20, 10))

// 3) 두 수를 받아서 A와 B를 비교하여 A가 크면 A가 큽니다, B가크면 B가 큽니다.를 리턴해주는 함수
const compare = (A: number, B: number): string => {
  if(A > B) {
    return "A가 크다";
  } else if(A < B) {
    return "B가 크다";
  } else {
    return "A와 B가 같다";
  }
}

console.log(compare(20, 10))
console.log(compare(10, 20))
console.log(compare(10, 10))

// 4) 입력한 값들을 모두 문자열로 붙여주는 함수
// ex) myFunc('가', '나', '다', ...) 
// 결과: 가나다

const stringMultiple = (...strings: string[]): string => {
  let totalString : string = "";
  for(let string of strings) {
    totalString += string;
  }
  return totalString;
}

console.log(stringMultiple("가", "나", "다"))
console.log(stringMultiple("가", "나", "다", "라", "마", "바"))
