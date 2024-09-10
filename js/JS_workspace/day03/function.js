// 함수의 선언
/* function add(num1, num2) {
  return num1 + num2;
}

result = add(1, 2);
console.log(result); */

// 선언
// 디폴트 파라미터
/* function add2(num1, num2 = 0, num3 = 0) {
  return num1 + num2 + num3;
}

console.log(add2(5)); */

// 실습
// 숫자 5개를 받아서 더하고 출력하기

/* function add3(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

console.log(add3(1, 2, 3, 4, 5)); */

// 안녕 + 하세요.
/* function showMessage(text1, text2 = text()) {
  return text1 + text2;
}

function text() {
  return "하세요";
}

console.log(showMessage("안녕")); */

/* 
  숫자 8개를 받고, 8개를 더해서 출력하기
*/

// 가변인자
/* function add4(...num) {
  console.log(num[2]);
}

add4(1, 2, 3, 4, 5, 6, 7, 8); */

// 가변 인자로 이름, 나이, 이메일을 받아서 출력하기
/* function showUserInfo(...info) {
  console.log(info[0]);
  console.log(info[1]);
  console.log(info[2]);
}

showUserInfo("이동원", 23, "dongwon0525@naver.com"); */

// 재귀함수
/* function f(n) {
  if(n <= 1) {
    return 1;
  }
  return n + f(n - 1);
}

console.log(f(10)); */

// 즉시 사용 함수
(function(){
  console.log("즉시 사용 함수 사용함");
})()

