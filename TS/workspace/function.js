"use strict";
// 함축형 함수 문법
// 정적 바인딩
function implicitReturnFunction() {
    return 1234;
}
const implicitReturnFunction2 = () => {
    return 1 + 1;
};
let implicitFuncValue = implicitReturnFunction();
let implicitFuncValue2 = implicitReturnFunction2();
// 설명형 함수 문법
function explicitReturnFunction() {
    return false;
}
const explicitReturnFunction2 = () => {
    return [1, 2, 3, 4];
};
// 매개변수
function funcWithParams(x, y, z) {
    return x + y + z;
}
const funcWithParams2 = (x, y, z) => {
    return (x + y + z).toString();
};
// Optional Parameter
function funcWithOptional(x, y, z) {
    if (y === undefined) {
        return x;
    }
    if (z === undefined) {
        return x + y;
    }
    return x + y + z;
}
console.log(funcWithOptional(10));
console.log(funcWithOptional(10, 20));
console.log(funcWithOptional(10, 20, 30));
// Rest Parameter
const funcWithParams3 = (...numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};
console.log(funcWithParams3(7, 30, 40, 50, 200));
