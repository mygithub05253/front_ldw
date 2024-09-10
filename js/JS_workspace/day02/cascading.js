let a = "1000";
let b = 1000;

console.log(a === b); // false

a = parseInt(a)

console.log(a === b); // true

/* 원하는 자료형으로 변환, 즉 타입을 바꾸는 것을 형변환이라고 함
정수형 숫자로 변환 : parseInt("문자열"), Number("문자열");
실수형 숫자로 변환 : parseFloat("문자열");
논리형으로 변환 : Boolean()
정수 또는 실수를 String 타입으로 변환 : 정수.toString()
실수의 소수점 자릿수를 제어해주는 함수 : 실수.toFixed(소수점 자리수) */