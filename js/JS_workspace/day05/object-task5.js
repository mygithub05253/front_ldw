// 프로토 타입 실습
// 마트에 등록되지 않은 고객이 3명
// 고객별 정보

/* 
  1)
  이름 : 홍길동
  나이 : 30
  포인트 : 3500
*/
/* 
  2)
  이름 : 이순신
  나이 : 22
  포인트 : 0
*/
/* 
  3)
  이름 : 장보고
  나이 : 66
  포인트 : 9500
*/

/* 
  3명을 모두 마트에 등록 시킴
  마트 객체를 만들고 각 고객을 프로퍼티로 선언
  유저의 이름만 모두 출력
  유저의 포인트를 모두 출력
*/

const market = new Object();

function User(name, age, point) {
  this.name = name;
  this.age = age;
  this.point = point;
}

const user1 = new User("홍길동", 30, 3500);
const user2 = new User("이순신", 22, 0);
const user3 = new User("장보고", 66, 9500);

market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

console.log(market);

for(let i in market) {
  console.log(market[i].name);
}

for(let i in market) {
  console.log(market[i].point);
}