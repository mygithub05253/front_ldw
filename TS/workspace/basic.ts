// console.log("안녕하세요!")

// const data = 10 + "50";
// console.log(data)

// let price = 6_000;
// price = "6000원";
// console.log(price)

// 함축형 문법(implicit type assertion)
// 값을 통해 타입을 알려주는 문법
// 사용하는 것을 지양
// let strImpl = "string value"; // string
// let numImpl = 0.7; // number
// let boolImpl = false; // boolean
// let arrayImpl = [1, 2, 3, 4]; // number[]

// strImpl = false;
// numImpl = [];
// boolImpl = {};
// arrayImpl = 10;

// console.log(strImpl)
// console.log(numImpl)
// console.log(boolImpl)
// console.log(arrayImpl)

// 설명형 문법(explicit type annotation)
let srtExpl : string = "string value";
let numExpl : number = 52.10;
let boolExpl : boolean = true;
let arrayExpl : number[] = [1, 2, 3, 4];
let array2Expl : string[] = ["안녕", "타입스크립트"];