// for문
// for(초기식; 조건식; 증감식)
/* for(let i = 0; i < 10; i++) {
  console.log(`${i + 1}번 째 너구리`);
} */

// 브론즈 1부터 10까지 출력하기
/* for(let i = 1; i <= 10; i++) {
  console.log(i);
} */

// 실버 1부터 100까지 짝수만 출력하기
/* for(let i = 1; i <= 100; i ++) {
  if(i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
} */

// 골드 0~10까지 5만 빼고 출력하기
/* for(let i = 0; i <= 10; i++) {
  if(i === 5) {
    continue;
  } else {
    console.log(i);
  }
} */

// 1부터 10까지 모든 합 출력하기
/* let sum = 0;
for(let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum); */

// 플래티넘
// 012340123401234 출력하기
/* for(let i = 0; i < 3; i++) {
  for(let j = 0; j <= 4; j++) {
    console.log(j);
  }
} */

let result = "";
for(let i = 0; i < 5; i++) {
  result += i % 5;
}
console.log(result);
