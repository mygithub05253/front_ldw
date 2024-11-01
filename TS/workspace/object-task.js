"use strict";
// 1) 설명형 문법 타입 붙이기
// 유저의 타입 붙이기
// id: 1,
// name: "Leanne Graham",
// username: "Bret",
// email: "Sincere@april.biz",
// address: {
//     street: "Kulas Light",
//     city: "Gwenborough",
//     zipcode: 92998-3874,
//     geo: {
//         lat: -37.3159,
//         func: () => { return [1,2,3] }
//     }
// }
const userObject = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: 92998 - 3874,
        geo: {
            lat: -37.3159,
            func: () => { return [1, 2, 3]; }
        }
    }
};
console.log(userObject);
console.log(userObject.address.geo.func());
const animalObject = {
    강아지: "강아지",
    고양이: "고양이",
    누렁이: "누렁이"
};
console.log(animalObject);
