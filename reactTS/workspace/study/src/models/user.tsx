// const user = {
//   name : "김세환",
//   age : 20,
//   address : "경기도 구리시",
//   hobby : {
//       main : "잠자기",
//       sub : "놀고 먹기"
//   },
//   phone : "01000000000",
//   recommender: [
//       {name: "홍길동", age: 30, address: "서울시 강남구"},
//       {name: "장보고", age: 17, address: "경기도 남양주시"},
//       {name: "김철수", age: 24, address: "서울시 중랑구"}
//   ]
// }

export type User = {
  name : string;
  age : number;
  address : string;
  hobby : {
    main : string;
    sub : string;
  }
  phone : string;
  recommender : {
    name : string;
    age : number;
    address : string;
  }[]
}

export type StateUser = {
  name : string;
  age : number;
  status : any[];
}