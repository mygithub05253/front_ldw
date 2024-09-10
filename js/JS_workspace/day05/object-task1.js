const user = {
  name : "이동원",
  age : 23,
  address : "서울특별시",
  rich : false,
  introduce : () => {
    console.log("안녕하세요.");
  }
}

// console.log(user.rich);
// user.introduce();

// console.log(typeof user.name);

// console.log(user["address"]);

const product = {
  product1 : "지우개",
  product2 : "키보드",
  product3 : "마우스",
  product4 : "노트북",
  product5 : "연필",
}

// key값의 규칙성이 필요하다면 [""] 문법을 사용해서 접근 가능
for(let i in product) {
  console.log(product[i]);
}


