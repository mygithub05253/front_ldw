// 객체(object)
/* let obj = {
  name : "이동원",
  value1 : 20,
  value2 : 20,
  value3 : 20,
  value4 : 20,
} */

let img = {
  src : "day01/images/icon01.png",
  alt : "아이콘",
  onmouseover : this.src='day01/images/icon02.png',
  value3 : 20,
  value4 : 20,
}

// 마침표 표기법
console.log(img.alt);

// 대괄호 표기법
console.log(img["onmouseover"]);


// 객체의 프로퍼티는 있으면 수정, 없으면 추가
const post = {
  id : 1,
  name : "이동원",
  content : "프론트엔드2"
}

post.value = "프론트엔드3";

console.log(post);