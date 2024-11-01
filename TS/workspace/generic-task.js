"use strict";
// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// 1. fetching 후 전체 console.log로 출력
// 2. fetching 후 unknown 오류 생기는 것을 해결하는 실습
// 3. 데이터 중에 post.title만 출력하기
// .then(), .catch() 사용하여 출력
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const getData = yield fetchData("https://jsonplaceholder.typicode.com/posts");
    return getData;
});
getPosts()
    .then((data) => console.log(data))
    .catch((error) => {
    console.error(error);
});
