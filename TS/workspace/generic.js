"use strict";
// 제네릭(generic)이란?
// 재사용성 높은 컴포넌트를 만들 때 사용되며, 한 가지 타입보다 여러 타입에서 동작하는 컴포넌트를 생성하는 데 사용
const anyText = (text) => {
    console.log(text);
    return text;
};
// let num:string = anyText("10");
// 제네릭 사용법
// <T> : 어떤 타입을 받을 지 정의
// (value : T) : 매개 변수의 타입
// ():T : 리턴 타입 정의
function genericText(value) {
    console.log(value);
    return value;
}
const genericText2 = (value) => {
    console.log(value);
    return value;
};
genericText("a");
genericText2(10);
genericText(false);
// 타입 가드
const genericFunc = (value) => {
    if (typeof value === "string") {
        console.log(value.length);
    }
    return value;
};
genericFunc("안녕");
console.log(genericFunc(false));
let myFuncReturnValue = genericFunc;
const getProductItems = (item) => {
    return item;
};
console.log(getProductItems("name"));
console.log(getProductItems("price"));
console.log(getProductItems("stock"));
// 일반적인 사용 예시
const item = {
    name: "상품",
    price: 20000,
    stock: 200,
};
const getProductItems2 = (item) => {
    return item;
};
// const getProductItems2 = <T extends ProductItems>(item:ProductItems):ProductItems => {
//   return item;
// }
console.log(getProductItems2(item));
