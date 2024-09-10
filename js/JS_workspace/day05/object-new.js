const user1 = { name : "홍길동" };
const user2 = { name : "이순신" };
const user3 = { name : "장보고" };
const user4 = { name : "김철수" };
const user5 = { name : "김영희" };

// 프로토타입
function User(name) {
  this.name = name;
}

// 결론 : 이미 값을 알고 있는 경우 프로토타입을 사용하기

const user6 = new User("6번");
const user7 = new User("7번");
console.log(user6);

