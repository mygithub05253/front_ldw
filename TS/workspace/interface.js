"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export type Animal2 {
//   species : string;
//   canSpeak : boolean;
//   numberOfLegs ?: number;
// }
const myAnimal = {
    species: "dog",
    canSpeak: true,
};
const nextHomeAnimal = {
    species: "dog",
    canSpeak: true,
    fight: true,
};
const myHuman = {
    species: "human",
    canSpeak: true,
    age: 23,
    numberOfLegs: 2,
};
const myAliasAnimal = {
    species: "사람",
    canSpeak: true,
};
const myMachine = {
    powerLevel: 10,
    material: "metal",
};
let myUnionVar = {
    age: 10,
    canSpeak: false,
    numberOfLegs: 4,
    material: "metal",
    powerLevel: 2,
    species: "인조인간",
};
let myUnionVar2 = {
    species: "동물",
    canSpeak: false,
    age: 10,
    numberOfLegs: 10,
    powerLevel: 2,
};
let myStringOrNum = "false";
// 함수의 타입도 유니온 타입으로 설정 가능
function myUnionFunc(param) {
    return param;
}
