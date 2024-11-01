// any type
// 어떤 타입이든 들어와도 상관없을 때 사용
// 하지만 TypeScript의 장점이 모두 사라지기 때문에 꼭 필요한 상황에서만 사용
let anyType : any = "a";
anyType = 21;
anyType = {
  a : false,
  b : [],
  c : [10, 20]
}
