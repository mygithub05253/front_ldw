// 마트에 등록되지 않은 고객이 3명
// 고객별 정보

/* 
  1)
  이름 : 홍길동
  나이 : 30
  포인트 : 3500
*/
const user1 = {
  name : "홍길동",
  age : 30,
  point : 3500
};
/* 
  2)
  이름 : 이순신
  나이 : 22
  포인트 : 0
*/
const user2 = {
  name : "이순신",
  age : 22,
  point : 0
};
/* 
  3)
  이름 : 장보고
  나이 : 66
  포인트 : 9500
*/
const user3 = {
  name : "장보고",
  age : 66,
  point : 9500
};

// 3명을 모두 카트에 등록 시킴
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언
// 마트 고객들의 포인트를 출력

const market = new Object();

market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

// console.log(market);

for(let i in market) {
  console.log(market[i].point);
}