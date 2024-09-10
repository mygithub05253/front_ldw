// 프로토 타입
// 프로토 타입은 함수로 선언하여 사용
// 단 반드시 대문자로 시작하기
// 같은 형태(변수, 메서드)를 상속시켜주기 위해서 선언

function User(id, pw, name, age) {
  this.id = id;
  this.pw = pw;
  this.name = name;
  this.age = age;
  this.printName = () => {
    console.log(name);
  }
}

let kim = new User("ksh1234", "1234", "이동원", 23);
let hong = new User("hong1234", "1234", "홍길동", 30);

console.log(kim);
console.log(hong);

kim.printName();
hong.printName();