// spread 문법(ES6 문법)
// 객체, 배열에서 사용 가능
// 1depth 깊은 복사
// 객체를 위한 문법

const animals = {
  cat : "야옹이",
  dog : "누렁이",
  cow : "얼룩이",
  tiger : "어흥이"
}

const animals2 = {
  camel : "낙타",
  cat : "발톱이",
  ...animals,
}

console.log(animals2)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// 배열을 합치기
// 배열의 메서드를 이용해서 arr1 배열을 모두 합치기
// .concat() 활용
console.log(arr1.concat(arr2).concat(arr3))
console.log([...arr1, ...arr2, ...arr3])

const newArray = [...arr1, ...arr2, ...arr3];


const min = Math.min(...newArray)
const max = Math.max(...newArray)
console.log(min, max)



