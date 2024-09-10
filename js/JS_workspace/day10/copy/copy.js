// const animals = {
//   cat : "야옹이",
//   dog : "누렁이",
//   cow : "얼룩이",
//   tiger : "어흥이",
//   rabbit : {
//     name : "토깽이",
//     age : 20
//   }
// }

// 얕은 복사
// const animals2 = animals;

// animals2.dog = "점박이";

// console.log(animals)
// console.log(animals2)

// console.log(animals2.dog)
// console.log(animals.dog)

// 깊은 복사(1depth)
// const animals3 = { ...animals };
// animals3.dog = "점박이";
// console.log(animals.dog)
// console.log(animals3.dog)

// animals3.rabbit.name = "토식이";

// console.log(animals3.rabbit.name)
// console.log(animals.rabbit.name)

// 깊은 복사(1depth)
// assign(target, source)
// const animals4 = Object.assign({}, animals);
// animals4.dog = "통통이";
// console.log(animals4.dog)
// console.log(animals.dog)

// lodash 모듈 사용하기
// 모듈 불러오기 require('모듈명);
const _ = require('lodash');

const obj = {
  id : 1,
  user : {
    name : "이동원",
    age : 23
  }
};

const deepCopyObj = _.cloneDeep(obj);
deepCopyObj.user.name = "홍길동";
console.log(obj.user.name)
console.log(deepCopyObj.user.name)

