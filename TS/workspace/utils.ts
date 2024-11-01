// 1. Partial(파셜)
// 인터페이스에서 타입들을 Optional로 지정하는 속성
interface Address {
  email : string;
  address : string;
}

// interface Address {
//   email ?: string;
//   address ?: string;
// }
// 이것을 더 이상 사용하지 않아도 됨

type MyEmail = Partial<Address>;
const me:MyEmail = {};
const you:MyEmail = { email : "dongwon0525@naver.com" };
const all:MyEmail = { email : "dongwon0525@naver.com", address : "역삼" };

// 2. Omit (오밋)
// 특정 속성만 제거한 타입을 정의하고 싶을 때 사용하는 문법
interface Product {
  id : number;
  name : string;
  price : number;
  brand : string;
  stock : number;
}

// type LimitedProduct = Omit<Product, "stock">;
type LimitedProduct = Omit<Product, "stock" | "price">;

const myNoteBook : LimitedProduct = {
  id : 100,
  name : "최신형 AI 탑재 노트북 리미티드 에디션",
  brand : "삼성",
}

// 3. Pick (픽)
// 해당 속성만 가지고 와서 새로운 타입을 만드는 경우
type MyProduct = Pick<Product, "id" | "brand">;

const myPhone : MyProduct = {
  id : 10,
  brand : "(주)LG"
}