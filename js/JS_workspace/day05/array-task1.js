// 1 ~ 10까지 Array 객체에 담은 후 짝수만 출력하기

/* const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = Array.filter(function (data) {
  return data % 2 == 0;
})
console.log(result); */
/* 
const datas = new Array(10).fill(0);
const result = datas.map((data, i) => i + 1).filter((data) => data % 2 == 0);
console.log(result); */

// 한글을 숫자로
// ex) "일이삼사" => "1234"
// 형변환 string -> number, parseInt()
/* const hangle = "공일이삼사오육칠팔구";
const input = "일공이사".split("");
console.log(input.map((c) => hangle.indexOf(c)).join("")); */

// 숫자를 한글로
// ex) "1234 => "일이삼사"
/* const hangle = "공일이삼사오육칠팔구";
const input = "1092".split("");
input.map((c) => hangle[c]);
console.log(input.map((c) => hangle[c]).join("")); */

// 1 ~ 100까지 합의 출력
// 100칸짜리 배열
/* const array3 = new Array(100).fill(0);
const array3Result = array3.map((data, i) => i + 1);
let sum = 0;
for(let i = 0; i < array3Result.length; i++) {
  sum += array3Result[i];
}
console.log(sum); */

// reduce((콜백 함수의 반환 값, 현재 반복되고 있는 값, 초기 값) => {})
// const datas = new Array(100).fill(0).map((value, i) => i + 1);
/* datas.reduce((x, y) => {
  console.log("x 값 : ", x);
  console.log("y 값 : ", y);
}) */
// const total = datas.reduce((x, y) => y + x);
// console.log(total);

// 문자열 반대로 출력하기 reverse();
/* const reverseResult = "apple".split("").reverse().join("");
console.log(reverseResult); */

// 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// 결과 : 010-****-5678

/* const parsePhone = (phone) => {
  if(phone.includes("-")) {
    let parseNumber = phone.split("-");
    parseNumber[1] = "****";
    return parseNumber.join("-");
  }
  return "번호를 다시 입력해주세요.";
}
const result = parsePhone("010-9971-7514");
console.log(result); */