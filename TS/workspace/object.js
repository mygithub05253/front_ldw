"use strict";
// 함축형 문법 객체
const implicitObject = {
    attr1: 4,
    attr2: 10.5,
    attr3: "some attr value",
    somefunc() {
        console.log("일반 함수!");
    },
    someArrowFunc: () => {
        console.log("함수!");
    },
};
console.log(implicitObject.somefunc());
console.log(implicitObject.someArrowFunc());
const explicitObject = {
    attr1: 123.567,
    attr2: "some value",
    someArrowFunc: () => {
        return 10 < 20;
    }
};
// 객체가 가진 값의 타입이 모두 같은 경우
const indexSigObject = {
    attr1: "attr1 value",
    attr2: "attr2 value",
    attr3: "attr3 value",
    attr4: "attr4 value",
    attr5: "attr5 value",
    attr6: "attr6 value",
    attr7: "attr7 value",
    attr8: "attr8 value",
    attr9: "attr9 value",
    attr10: "attr10 value",
};
const limitedSigObject = {
    a: 10,
    b: 20,
    c: 30,
};
// limitedSigObject.d = 10; // 추가 불가능
