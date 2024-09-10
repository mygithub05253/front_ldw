// 콜백 함수를 활용
// 1) 두 정수를 더해서 덧셈 결과를 출력
let num1 = 2;
let num2 = 4;

const sumNumber = (num1, num2, callback) => {
  callback(num1 + num2);
};

const showSum = (sum) => {
  console.log(sum);
};

sumNumber(num1, num2, showSum);

// 2) 두 정수의 값 중 작은 값을 반환하여 출력
const showLowNum = (num1, num2, callback) => {
  let minNum;
  if(num1 < num2) {
    minNum = num1;
    callback(minNum);
  }
  if(num1 > num2) {
    minNum = num2;
    callback(minNum);
  }
};

const showMinNum = (MinNum) => {
  console.log(MinNum);
};

showLowNum(num1, num2, showMinNum);

// 3) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
const showMultiple = (num1, num2, callback) => {
  multipleResult = num1 * num2;
  callback(multipleResult * 2);
};

const showResult = (result) => {
  console.log(result);
}

showMultiple(num1, num2, showResult);

// 4) 성과 이름을 전달 받아서 풀네임을 만든 후 "000"님 출력
let firstName = "동원";
let lastName = "이";

const getFullName = (firstName, lastName, callback) => {
  fullName = lastName + firstName;
  callback(fullName + "님");
};

const showFullName = (fullName) => {
  console.log(fullName);
}

getFullName(firstName, lastName, showFullName);

// 5) 결재 상품 이름과 결재 상태를 전달 받아서 결재 상태가 true일 경우 결재 완료, false일 경우 결재 취소를 출력
let buyItem = "사과";
let buyStatus = false;

const showBuyStatus = (buyItem, status, callback) => {
  if(status === true) {
    let result = "결재 완료";
    callback(result);
  }
  if(status === false) {
    let result = "결재 취소";
    callback(result);
  }
};

const showBuyResult = (buyResult) => {
  console.log(buyResult);
};

showBuyStatus(buyItem, buyStatus, showBuyResult);