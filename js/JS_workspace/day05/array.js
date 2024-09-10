// 배열 : 각 타입이 프로퍼티로 가지고 있는 내장 함수를 사용하는 방법들을 정의

// 배열의 생성
// const array = [];
// const arrray2 = new Array();

// .of("초기값1", "초기값2", ...)
// const array3 = Array.of(1, 2, 3);

// const array4 = [1, 2, 3, 4];

// .fill("초기값")으로 방을 모두 채움
// array4.fill("초기값", 2, 4);
// console.log(array4);

// length
// console.log(array4.length);

// string 메서드, split("")
// 전달된 매개변수를 기준으로 자라서 배열로 리턴해주는 메서드
// 아무것도 전달하지 않으면 모두 자름

// const phoneNumber = "010-9999-5555";
// console.log(phoneNumber.split("-"));
// const result = phoneNumber.split("-");

// .join()
// 전달된 매개변수를 기준으로 붙여서 새로운 문자열로 리턴

// console.log(result.join("-"));

// string 메서드, replace("바꾸고 싶은 값", "바꿀 값")
// 전달된 매개변수 중 제일 먼저 만나는 값을 찾아서 치환
// 모두 바꾸려면 replaceAll 사용

// const result1 = phoneNumber.replace("-", "");
// const result2 = phoneNumber.replaceAll("-", "");
// console.log(result1);

// 추가
// .push() 기존 배열에 값을 맨 뒤에 추가
// const arr = ["이동원", "홍길동", "장보고"];
// arr.push("이순신");

// .concat() 2개의 배열을 [새로운 배열]로 리턴
// 특정 배열에 인자로 들어온 배열을 합칠 때 사용
// const arr1 = ["이동원", "홍길동"];
// const arr2 = ["김철수", "김영희"];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// .pop()
// 마지막 요소를 제거하며, 그 값을 반환
// const arr6 = [1, 2, 3, 4, 5, "말티푸"];
// const deleteEl = arr6.pop();
// console.log(arr6);
// console.log(deleteEl);

// .unshift()
// 맨 앞에 있는 요소를 추가하는 메서드
// .shift()
// 맨 앞에 있는 요소를 제거하며, 그 값을 반환
// const arr7 = [1, 2, 3];
// arr7.unshift(10);
// console.log(arr7);
// console.log(arr7.shift(10));

// .slice()
// start부터 end 직전 인덱스 번호까지 요소를 복사해서 [새로운 배열]로 반환
// 얕은 복사 진행
// 단, 매개변수를 1개만 전달하면 끝까지 가져옴
// 즉, 마지막 index는 -1로 표기
// const arr8 = [1, 2, 3, 4, 5, 6];
// console.log(arr8.slice(2, 5));
// console.log(arr8.slice(3));
// console.log(arr8.slice(-3));
// console.log(arr8.slice(-4, -1));

// .splice(start, deleteCount, addItem);

// const arr9 = [1, 2, 3, 4, 5, 6];
// arr9.splice(1, 4, ["가나", "다라", "마바"]);
// console.log(arr9);

// 정렬
// .sort()
// 무작위로 들어간 데이터 값을 정렬하는 메서드
// const arr10 = [100, 150, 15, 200, 600, 700, 20, 40];
// console.log(arr10.sort((a, b) => a - b));

// .reverse()
// result3 = arr10.sort((a, b) => a - b).reverse();
// console.log(result3);

// string 메서드, .includes()

// const str1 = "말티푸는 푸들과 말티즈가 합쳐진 견종입니다.";
// str1.includes("푸들") ? console.log("있음") : console.log("없음");

// -----------------------------------------------------------------------------------

// 배열의 고차함수
// .forEach(callback(data, index, datas) => {}) : 반복문
// data : 현재 처리해야 할 값
// index : 해당 인덱스
// datas : 배열
// 즉, i를 활용하여 iterable(순서가 있는)한 key 값에 접근 가능
// const datas = ["이동원", "홍길동", "장보고", "이순신"];
// datas.forEach((data, i, datas) => {
//   console.log(i, data, datas);
// })

// data에 접근해서 제곱으로 만들어주는 함수
// const arrData1 = [10, 20, 30, 40, 50, 60];
// console.log(arrData1);
// arrData1.forEach((data, i, datas) => {
//   datas[i] = data * data;
// })
// console.log(arrData1);

// .map(callback(data, index, datas) => {}) : 반복문
// [새로운 배열]을 리턴

// const arrData2 = Array.of(5, 6, 7, 8, 9, 10);

// 값을 2배로 바꿔주는 map 함수 구현
// console.log(arrData2);
// arrData2.map((data, i, datas) => {
//   datas[i] = data * 2;
// })
// console.log(arrData2);

//. filter()
// 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 진행
// 조건이 true인 값을 새로운 복사본으로 생성

const arrData5 = [3, 10, 17, 21, 40, 2, 27];
const result = arrData5.filter(function(data) { return data % 2 == 0 });
console.log(result);

// .indexOf()
// 값을 해당하는 Array에서 찾은 뒤 인덱스 번호를 리턴, 못 찾을 경우 -1을 리턴
// console.log(arrData5[arrData5.indexOf(40)]);
// console.log(arrData5[arrData5.indexOf(4000000)]);

// .find(callback)
// 조건식에 만족하는 첫 번째 값을 반환
// 마지막 값을 반환하려면 findLast() 사용
const result4 = arrData5.find((data) => {
  return data < 30;
})
console.log(result4);

// .from()
// 유사 배열 객체를 배열로 바꿔주는 함수

const obj = {
  0 : "1번 값",
  1 : "2번 값",
  2 : "3번 값",
  3 : "4번 값",
  length : 4
}

const arrData6 = Array.from(obj);
console.log(arrData6);



