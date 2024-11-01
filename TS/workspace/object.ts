// 함축형 문법 객체
const implicitObject = {
  attr1 : 4,
  attr2 : 10.5,
  attr3 : "some attr value",
  somefunc(){
    console.log("일반 함수!")
  },
  someArrowFunc: () => {
    console.log("함수!")
  },
}

console.log(implicitObject.somefunc())
console.log(implicitObject.someArrowFunc())

// 설명형 문법 객체

// 사용 형식1
// const explicitObject:{
//   attr1 : number,
//   attr2 : string,
//   someArrowFunc : () => boolean,
// } = {
//   attr1 : 123.567,
//   attr2 : "some value",
//   someArrowFunc: () => {
//     return 10 < 20;
//   }
// }

// 사용 형식2
type objectType = {
  attr1 : number,
  attr2 : string,
  someArrowFunc : () => boolean,
}

const explicitObject:objectType = {
  attr1 : 123.567,
  attr2 : "some value",
  someArrowFunc: () => {
    return 10 < 20;
  }
}

// 객체가 가진 값의 타입이 모두 같은 경우
const indexSigObject:{
  [index : string]:string
} = {
  attr1 : "attr1 value",
  attr2 : "attr2 value",
  attr3 : "attr3 value",
  attr4 : "attr4 value",
  attr5 : "attr5 value",
  attr6 : "attr6 value",
  attr7 : "attr7 value",
  attr8 : "attr8 value",
  attr9 : "attr9 value",
  attr10 : "attr10 value",
}

// key 값을 제한하기 위한 문법

type ExampleIndex = "a" | "b" | "c";

const limitedSigObject:{
  [index in ExampleIndex]:number
} = {
  a : 10,
  b : 20,
  c : 30,
}

// limitedSigObject.d = 10; // 추가 불가능
