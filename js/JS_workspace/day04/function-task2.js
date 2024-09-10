// 1) 정수를 넘기면 홀수인지 짝수인지 알려주는 함수
function oddEven(num) {
  let result = "";
  if(num % 2 == 0) {
    result = "짝수";
  } 
  if(num % 2 != 0) {
    result = "홀수";
  }
  return result;
}
console.log(oddEven(7));

// 2) 정수(n)을 넘기면 n번까지 더해주는 함수
function sumNumber(n) {
  let sum = 0;
  for(let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumNumber(10));

// 3) 0과 1을 마구잡이로 전달했을 때 0과 1의 개수를 알려주는 함수
// 3) ex myFunc(0, 0, 1, 0, 1)
// 결과 : 0의 개수 : 3개, 1의 개수는 2개

function showCount(...num) {
  let zeroCount = 0;
  let oneCount = 0;
  for(let i = 0; i <= num.length; i++) {
    if(num[i] === 0) {
      zeroCount++;
    } else if(num[i] === 1) {
      oneCount++;
    } else {
      continue;
    }
  }
  return `0의 개수 : ${zeroCount}개, 1의 개수는 ${oneCount}개`;
}
console.log(showCount(0, 0, 1, 0, 1));

