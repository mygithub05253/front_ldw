// https://jsonplaceholder.typicode.com/users
// zipcode만 출력하기
// 배열
// 데이터를 주고 받는 것
// 비동기, 배열, promise 리턴

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  if(!response.ok) {
    throw new Error(`response : ${response.status}`);
  }
  return response.json();
}).then((users) => {
  // 유저 정보 배열로 들어옴
  if(!users) {
    throw new Error(`none users result`);
  }
  return users.map((user) => user.address.zipcode);
}).then((zipcodes) => {
  // zipcode를 배열로 들어옴
  if(!zipcodes) {
    throw new Error(`none zipcode result`);
  }
  zipcodes.forEach((z) => console.log(z));
}).catch(console.log)