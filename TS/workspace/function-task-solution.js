"use strict";
// 설명형 문법(explicit type annotation)
// 1) 성과 이름을 받아서 출력해주는 함수 만들기
const getFullName = (lastName, firstName) => {
    return lastName + firstName;
};
const lastName = "김";
const firstName = "세환";
const fullName = getFullName(lastName, firstName);
console.log(fullName);
// 2) 두 수를 받아서 사칙 연산을 배열로 리턴해주는 함수
const getCalc = (num1, num2) => {
    let sum = num1 + num2;
    let subtract = num1 = num2;
    let multiply = num1 * num2;
    let divide = num1 / num2;
    return [sum, subtract, multiply, divide];
};
let result = getCalc(10, 20);
for (let num of result) {
    console.log(num);
}
// 3) 두 수를 받아서 A와 B를 비교하여 A가 크면 A가 큽니다, 
// B가크면 B가 큽니다.를 리턴해주는 함수
// const isMinMax = (num1:number, num2:number):string => {
//   if(num1 > num2){
//     return `큰 수는 :${num1}`
//   }else if(num1 === num2){
//     return `두 수는 같습니다`
//   } else(num1 < num2) {
//     return `큰 수는 :${num2}`
//   }
// }
// let result2:string = isMinMax(100, 100);
// console.log(result2)
// 4) 입력한 값들을 모두 문자열로 붙여주는 함수
// ex) myFunc('가', '나', '다', ...) 
// 결과: 가나다
const getStrings = (...strings) => {
    let result = "";
    for (let str of strings) {
        result += str;
    }
    return result;
};
let result3 = getStrings("안", "녕", "하", "세", "요", "😎");
console.log(result3);
