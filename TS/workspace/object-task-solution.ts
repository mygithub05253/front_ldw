// 1) 설명형 문법 타입 붙이기
// 유저의 타입 붙이기
const user : {
  id : number,
  name : string,
  username : string,
  email : string,
  address : {
    street : string,
    city : string
    zipcode : number,
    geo : {
      lat : number,
      func : () => number[]
    }
  }
} = {
  id: 1,
  name : "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
      street: "Kulas Light",
      city: "Gwenborough",
      zipcode: 92998-3874,
      geo: {
          lat: -37.3159,
          func: () => { return [1,2,3] }
      }
  }
}


// 2) 키 값을 강아지, 고양이, 누렁이로 고정하는 오브젝트 만들기
type ExampleKeys = "강아지" | "고양이" | "누렁이";
const animalsObject :{
  [k in ExampleKeys]:string
} = {
  강아지 : "퍼피",
  고양이 : "네로",
  "누렁이" : "누룽지",
}


