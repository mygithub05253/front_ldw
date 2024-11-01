"use strict";
// enum이란?
// 상수
// 중간에 다른 값이 추가되어서 사용 중이던 enum 값의 인덱스 변경될 수 있음
// 결론 : 인덱스가 변경되는 것은 큰 문제이므로, 문자열 값을 등록해서 사용하는 것을 권장
var BasicDirection;
(function (BasicDirection) {
    BasicDirection["Up"] = "UP";
    BasicDirection["Down"] = "DOWN";
    BasicDirection["Left"] = "LEFT";
    BasicDirection["Right"] = "RIGHT";
})(BasicDirection || (BasicDirection = {}));
console.log("Basic Enums");
console.log(BasicDirection["Up"]);
console.log(BasicDirection.Down);
console.log(BasicDirection.Left);
console.log(BasicDirection.Right);
console.log(BasicDirection);
