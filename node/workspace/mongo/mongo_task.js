import { MongoClient } from "mongodb";

const connection_url = `mongodb+srv://app:1234@app.6nxt4.mongodb.net/`;

const client = await MongoClient.connect(connection_url);

// Database 가져오기, 없으면 생성 후 가져오기
const db = client.db("product");

// 컬렉션(테이블) 생성
await db.createCollection("product");

const collection = db.collection("product");

// 상품 3개(사과, 자두, 수박) 추가하기
// 상품명(name), 가격(price), 재고(stock), 제조국가(made_in), 거래처(mou), 등록인(user)

// 상품 1개
// {
//   name : "사과",
//   price : 3000,
//   stock : 30,
//   made_in : ["Korea", "America"],
//   mou : [
//     { name : "이마트", address : "역삼동"},
//     { name : "하이마트", address : "봉천동"},
//     { name : "홈플러스", address : "목동"},
//   ],
//   user : { name : "홍길동", position : "대리" }
// }

// 전체 조회
// "사과" 정보 조회
// 재고가 100개 이상인 상품 조회
// 제조 국가가 Korea인 상품 조회
// 등록자 중 "대리" 직급의 상품 조회
// 거래처 주소에 역삼동이 있는 상품 조회
// 상품 정보 중 _id, made_in만 전체 조회
// 상품 중, 거래처 이름에 백화점이 포함된 상품 조회
// 상품 중, 등록자의 직급이 대리가 아닌 상품 모두 삭제
// "사과" 1개 조회
// "사과" 재고 1개 추가
// 모두 삭제

// 사과, 자두, 수박 항목 3개 추가
// await collection.insertOne({
//   name : "사과",
//   price : 3000,
//   stock : 30,
//   made_in : ["Korea", "America"],
//   mou : [
//     { name : "이마트", address : "역삼동"},
//     { name : "하이마트", address : "봉천동"},
//     { name : "백화점", address : "압구정동"},
//   ],
//   user : { name : "홍길동", position : "대리" }
// })

// await collection.insertOne({
//   name : "자두",
//   price : 5000,
//   stock : 140,
//   made_in : ["Japan", "China"],
//   mou : [
//     { name : "이마트", address : "성수동"},
//     { name : "하이마트", address : "행당동"},
//     { name : "홈플러스", address : "목동"},
//   ],
//   user : { name : "홍당무", position : "사원" }
// })

// await collection.insertOne({
//   name : "수박",
//   price : 8500,
//   stock : 54,
//   made_in : ["Korea", "England"],
//   mou : [
//     { name : "이마트", address : "역삼동"},
//     { name : "하이마트", address : "봉천동"},
//     { name : "홈플러스", address : "목동"},
//   ],
//   user : { name : "이순신", position : "과장" }
// })

// 전체 데이터 조회
// const products = await collection.find().toArray();
// console.log(products)

// 재고가 100개 이상인 상품 조회
// const products = await collection.find({ stock : {$gte : 100} }).toArray();
// console.log(products)

// 제조 국가가 Korea인 상품 조회
// const products = await collection.find({ made_in : {$eq : "Korea"} }).toArray();
// console.log(products)

// 등록자 중 "대리" 직급의 상품 조회
// const products = await collection.find({"user.position" : "대리"}).toArray();
// console.log(products)

// 거래처 주소에 역삼동이 있는 상품 조회
// const products = await collection.find({"mou.address" : "역삼동"}).toArray();
// console.log(products)

// 상품 정보 중 _id, made_in만 전체 조회
// const products = await collection.find().project({ _id : 1, made_in : 1 }).toArray();
// console.log(products)

// 상품 중, 거래처 이름에 백화점이 포함된 상품 조회
// const products = await collection.find({"mou.name" : "백화점"}).toArray();
// console.log(products)

// 상품 중, 등록자의 직급이 대리가 아닌 상품 모두 삭제
// await collection.deleteMany({"user.position" : {$ne : "대리"}});

// "사과" 1개 조회
// const products = await collection.find({name : {$eq : "사과"}}).toArray();
// console.log(products)

// "사과" 재고 1개 추가
// await collection.updateOne({_id : products._id}, {$set : {stock : 32}})
// const update_product = await collection.findOne({name : "사과"});
// console.log(update_product)

// 모두 삭제
await collection.deleteMany();