// 인터페이스 : 객체로 구현되기 위한 틀
// key와 type을 미리 선언해놓고 가독성 및 재사용성을 향상시킨다
// type과 interface는 앞글자가 대문자인 파스칼 표기법 사용
export interface Animal {
  species : string;
  canSpeak : boolean;
  numberOfLegs ?: number;
}

// export type Animal2 {
//   species : string;
//   canSpeak : boolean;
//   numberOfLegs ?: number;
// }

const myAnimal : Animal = {
  species : "dog",
  canSpeak : true,
}

// 상속(extends)
// 기존의 인터페이스를 상속받아서 새로운 프로퍼티에 대한 추가적인 정의가 필요할 때 사용

interface NextHomeAnimal extends Animal {
  // species : string;
  // canSpeak : boolean;
  // numberOfLegs ?: number;
  fight : boolean;
}

const nextHomeAnimal : NextHomeAnimal = {
  species : "dog",
  canSpeak : true,
  fight : true,
}

// 포유류
// mammal
// Animal 상속
// 나이, 다리 수를 필수 사항으로 변경
export interface Mammal extends Animal {
  age : number;
  numberOfLegs : number;
}

const myHuman : Mammal = {
  species : "human",
  canSpeak : true,
  age : 23,
  numberOfLegs : 2,
}

// TypeAliases
// 인터페이스 이름을 타입으로 작성해야 하지만, 타입 이름을 다른 이름으로 설정하고 싶을 때 사용하는 문법
type AnimalAlias = Animal;
type StringAlias = string;

const myAliasAnimal : AnimalAlias = {
  species : "사람",
  canSpeak : true,
}

// fixed value
interface Machine {
  powerLevel : number;
  material : "metal" | "plastic";
}

const myMachine : Machine = {
  powerLevel : 10,
  material : "metal",
}

// type intersect
// & 연산자는 모든 타입의 속성을 합치고 싶을 때 사용
// 모든 타입의 속성들을 작성해야 함
type MyUnionType = Animal & Machine & Mammal;

let myUnionVar : MyUnionType = {
  age : 10,
  canSpeak : false,
  numberOfLegs : 4,
  material : "metal",
  powerLevel : 2,
  species : "인조인간",
}

// type union
// | 연산자는 여러 가지 타입을 유동적으로 변경하고 싶을 때 사용
// 단, 타입들 중에서 반드시 1가지 타입 이상은 만족해야 하며, 섞어서 사용 가능
type MyUnionType2 = Animal | Machine | Mammal;

let myUnionVar2 : MyUnionType2 = {
  species : "동물",
  canSpeak : false,
  age : 10,
  numberOfLegs : 10,
  powerLevel : 2,
}

// 일반 자료형도 유니온 타입 지정 가능
type StringOrNum = string | number;
let myStringOrNum : StringOrNum = "false";

// 함수의 타입도 유니온 타입으로 설정 가능
function myUnionFunc(param : StringOrNum) : StringOrNum  {
  return param;
}