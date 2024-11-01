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

type userTypeObject = {
  id : number,
  name : string,
  username : string,
  email : string,
  address : {
    street : string,
    city : string,
    zipcode : number,
    geo : {
      lat : number,
      func: () => number[]
    }
  }
}

const userObject:userTypeObject = {
  id : 1,
  name : "Leanne Graham",
  username : "Bret",
  email : "Sincere@april.biz",
  address : {
    street : "Kulas Light",
    city : "Gwenborough",
    zipcode : 92998-3874,
    geo : {
      lat : -37.3159,
      func: () => { return [1,2,3] }
    }
  }
}

console.log(userObject)
console.log(userObject.address.geo.func())

// 2) 키 값을 강아지, 고양이, 누렁이로 고정하는 오브젝트 만들기
type animalIndex = "강아지" | "고양이" | "누렁이";

const animalObject:{
  [key in animalIndex]:string
} = {
  강아지 : "강아지",
  고양이 : "고양이",
  누렁이 : "누렁이"
}

console.log(animalObject)