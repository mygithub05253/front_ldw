import { MongoClient } from "mongodb";

const connection_url = `mongodb+srv://app:1234@app.6nxt4.mongodb.net/`;

const client = await MongoClient.connect(connection_url);

// Database 가져오기, 없으면 생성 후 가져오기
const db = client.db("product");

// 컬렉션(테이블) 생성
await db.createCollection("product");

const collection = db.collection("product");

// 사과, 자두, 수박 데이터 생성
// await collection.insertMany([
//   {
//     name : "사과",
//     price : 3000,
//     stock : 30,
//     made_in : ["Korea", "America"],
//     mou : [
//       { name : "이마트", address : "역삼동"},
//       { name : "하이마트", address : "봉천동"},
//       { name : "홈플러스", address : "목동"},
//     ],
//     user : { name : "홍길동", position : "대리" }
//   },
//   {
//     name : "자두",
//     price : 1100,
//     stock : 800,
//     made_in : ["America", "China"],
//     mou : [
//       { name : "롯데마트", address : "방배동"},
//       { name : "신세계 백화점", address : "반포동"},
//       { name : "또와 슈퍼", address : "대성리"},
//     ],
//     user : { name : "이순신", position : "과장" }
//   },
//   {
//     name : "수박",
//     price : 8000,
//     stock : 223,
//     made_in : ["Korea", "Australia"],
//     mou : [
//       { name : "현대 백화점", address : "청담동"},
//       { name : "GS25", address : "역삼동"},
//       { name : "행복마트", address : "구로동"},
//     ],
//     user : { name : "김춘식", position : "과장" }
//   },
// ])

// 전체 조회
// const products = await collection.find().toArray();
// console.log(products)

// "사과" 정보 조회
// const apple = await collection.find({ name : { $eq : "사과" } }).toArray();
// console.log(apple)

// 재고가 100개 이상인 상품 조회
// const products = await collection.find({ stock : { $gte : 100 } }).toArray();
// console.log(products)

// 재고가 100개 이하인 상품 조회
// const products = await collection.find({ stock : { $not : { $gte : 100 } } }).toArray();
// console.log(products)

// 제조 국가가 Korea인 상품 조회
// const product = await collection.find({ made_in : "Korea" }).toArray();
// console.log(product)

// 등록자 중 "대리" 직급의 상품 조회
// const products = await collection.find({ "user.position" : "대리" }).toArray();
// console.log(products)

// 거래처 주소에 역삼동이 있는 상품 조회
// const products = await collection.find({
//   mou : { $elemMatch : { address : "역삼동" } }
// }).toArray();
// console.log(products)

// 상품 정보 중 _id, made_in만 전체 조회
// const products = await collection.find({}, { projection : { made_in : true } }).toArray();
// console.log(products)

// 상품 중, 거래처 이름에 백화점이 포함된 상품 조회
// const products = await collection.find(
//   { mou : { $elemMatch : { name : { $regex : "백화점" } } } }
// ).toArray();
// console.log(products)

// 상품 중, 등록자의 직급이 대리가 아닌 상품 모두 삭제
// await collection.deleteMany({ "user.position" : { $ne : "대리" } });
// const products = await collection.find().toArray();
// console.log(products)

// "사과" 1개 조회
const product = await collection.findOne({ name : "사과" });
console.log(product)

// "사과" 재고 1개 추가
// await collection.updateOne(
//   { _id : product._id },
//   { $set : { stock : product.stock + 1 } }
// );

// const updated_product = await collection.findOne({ name : "사과" });
// console.log(updated_product)

// 모두 삭제
await collection.deleteOne({ _id : product._id });

const products = await collection.find().toArray();
console.log(products)