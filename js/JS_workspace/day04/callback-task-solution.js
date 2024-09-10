// 두 정수를 더해서 덧셈 결과를 출력
function add(num1, num2, callback) {
  if(callback) {
    callback(num1 + num2);
  }
  return num1 + num2;
}

const print = (result) => {
  console.log(result);
};

add(1, 5, print);

// 두 정수의 값 중 작은 값을 반환하여 출력
function isMin(num1, num2, callback) {
  let result = num1 > num2 ? num2 : num1;
  if(callback) {
    callback(result);
  }
  return result;
}

isMin(10, 20, print);

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
function mul(num1, num2, callback) {
  if(callback) {
    callback(num1 * num2);
  }
  return num1 * num2;
}

function mulByTwo(number, callback) {
  if(callback) {
    callback(number * 2);
  }
  return number * 2;
}

mulByTwo(mul(10, 20, mulByTwo), print);

// 성과 이름을 전달받아서 풀네임을 만든 후 "000"님 출력
function getFullName(lastName, firstName, callback) {
  fullName = lastName + firstName + "님";
  if(callback) {
    callback(fullName);
  }
  return fullName;
}

getFullName("이", "동원", print);

// 결재 상품 이름과 결재 상태를 전달받아서 결재 상태가 true이면 결재 완료, false이면 결재 취소 출력
function getPayStatus(name, status, callback) {
  let result = status ? "결재 성공" : "결제 실패";
  if(callback) {
    callback(name, result);
  }
  return result;
}

getPayStatus("키보드", true, (name, message) => console.log(`${name}은 ${message}`));
