// 제네릭(generic)이란?
// 재사용성 높은 컴포넌트를 만들 때 사용되며, 한 가지 타입보다 여러 타입에서 동작하는 컴포넌트를 생성하는 데 사용
const anyText = ( text:any ):any => {
  console.log(text)
  return text;
}

// let num:string = anyText("10");

// 제네릭 사용법
// <T> : 어떤 타입을 받을 지 정의
// (value : T) : 매개 변수의 타입
// ():T : 리턴 타입 정의
function genericText<T>(value : T):T {
  console.log(value)
  return value;
}

const genericText2 = <T>( value:T ):T => {
  console.log(value)
  return value;
}

genericText<string>("a");
genericText2<number>(10);
genericText<boolean>(false);

// 타입 가드
const genericFunc = <T>(value:T):T => {
  if(typeof value === "string") {
    console.log(value.length)
  }
  return value;
}

genericFunc<string>("안녕");
console.log(genericFunc<boolean>(false))

interface GenericLogTextFn {
  <T>(text:T):T
}

let myFuncReturnValue : GenericLogTextFn = genericFunc;

// 제네릭으로 들어온 타입을 정의한 키 타입으로만 사용하도록 제한하고 싶은 경우
interface ProductItems {
  name : string;
  price : number;
  stock : number;
}

const getProductItems = <T extends keyof ProductItems>(item:T):T => {
  return item;
}

console.log(getProductItems("name"))
console.log(getProductItems("price"))
console.log(getProductItems("stock"))

// 일반적인 사용 예시
const item:ProductItems = {
  name : "상품",
  price : 20000,
  stock : 200,
}

const getProductItems2 = <T extends ProductItems>(item:T):T => {
  return item;
}

// const getProductItems2 = <T extends ProductItems>(item:ProductItems):ProductItems => {
//   return item;
// }

console.log(getProductItems2(item))