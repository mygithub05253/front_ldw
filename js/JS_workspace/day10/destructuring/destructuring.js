// 비구조화 할당(Destructuring)
// 비구조화 할당은 구조화된 배열 또는 객체를 비구조화(파괴)하여 개별적인 변수에 할당하는 것을 의미
// 배열 또는 객체 리터널에서 필요한 값만 추출하여 변수에 할당하거나 반환할 때 유용

const user = {
  name : "이동원",
  password : 1234,
  age : 23,
  address : "서울특별시",
  phone : "010-0000-0000"
};

const { password, ...users } = user;
console.log(password)
console.log(users)

let arr = [1, 2, 3, 4];
let [one, two, three, four] = arr;

console.log(one, two, three, four)





