// 누적 복합 연산자, +=, -=, *=

// let a = 5;

// a = a + 5;
// a += 5;
// a = a + 10;
// a += 10;
// console.log(a);

// let b = 100;

// 1번째는 b 값에 50 빼기
// 2번째는 b 값에 20 빼기
// 최종 결과값을 30으로 만들기
// b -= 50;
// b -= 20;

// console.log(b);

// let c = 3;
// c *= 3;
// console.log(c);

// console.log(20 == "20");
// console.log(20 === "20");

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// let isTrue = 10 == 11;
// console.log(isTrue);
// console.log(isTrue && 10 == 10); // true
// console.log(isTrue && 10 != 10); // false
// console.log(isTrue || 10 != 10); // true
// console.log(isTrue && 0) // false
// console.log(isTrue && undefined) // undefined

// console.log(isTrue || "야 틀렸다!");

// let data = 10;
// "" && ++data;
// false가 아니어도 false로 인식되는 값
// null, undefined, 0, "", 공백문자, NaN, false
// console.log(Number(true));
// console.log(Number(false));
// console.log(data);

// 삼항 연산자
// 삼항 연산자 조건식 ? true일 때 : false 일 때
let number = 10;

let result = number < 9 ? "작습니다." : "큽니다.";
console.log(result);