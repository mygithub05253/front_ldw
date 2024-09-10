// 2개의 정수를 더해서 출력해주는 함수
/* const addNumber = (num1, num2, callback) => {
  callback(num1 +num2);
};

const show = (number) => {
  console.log(number);
};

addNumber(5, 6, show); */


// 성과 이름을 받아서 출력하는 함수
let firstName = "동원";
let lastName = "이";
const getFullName = (firstName, lastName, callback) => {
  callback(lastName + firstName);
};

const show = (fullName) => {
  console.log(fullName);
};

getFullName(firstName, lastName, show);