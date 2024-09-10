globalThis.number = 0;
globalThis.a = 10;
globalThis.b = 20;

// 변수 a와 변수 b 값을 바꿔주는 함수 만들기
/* function changeNumber() {
  globalThis.number = globalThis.a;
  globalThis.a = globalThis.b;
  globalThis.b = globalThis.number;

  console.log(`a : ${globalThis.a}, b : ${globalThis.b}`);
}
changeNumber(); */

function changeNumber(a, b) {
  globalThis.number = globalThis.b;
  globalThis.b = globalThis.a;
  globalThis.a = globalThis.number;
}

changeNumber(a, b);
console.log(a, b);