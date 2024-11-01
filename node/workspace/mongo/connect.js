// mongodb+srv://app:1234@app.6nxt4.mongodb.net/

import { MongoClient } from "mongodb";

const connection_url = `mongodb+srv://app:1234@app.6nxt4.mongodb.net/`;

const client = await MongoClient.connect(connection_url);

// Database 가져오기, 없으면 생성 후 가져오기
const db = client.db("member");

// 컬렉션(테이블) 생성
await db.createCollection("member");

const collection = db.collection("member");

// 데이터 추가(CRUD)
// 추가 insertOne(obj)
// await collection.insertOne({
//   name : "이동원",
//   age : 23,
//   address : "서울특별시 성동구"
// })

// 추가 insertMany([{}, {}, {}])
// await collection.insertMany([
//   { name : "kim" },
//   { name : "rora" },
//   { name : "lucas" },
// ])

// 데이터 조회
// 총 개수
// const count = await collection.countDocuments();

// 전체 데이터 조회
// const members = await collection.find().toArray();

// console.log(count)
// console.log(members)

// $eq : 일치하는 값 조회
// const member = await collection.find({name : { $eq : "rora" }}).toArray();
// console.log(member)

// $ne : 일치하지 않는 모든 값
// const members = await collection.find({name : { $ne : "kim" }}).toArray();
// console.log(members)

// $in : 여러 값 중 하나의 값과 일치하는 값을 조회
// const members = await collection.find({ name : { $in : ["kim", "rora"] } }).toArray();
// console.log(members)

// $nin : 여러 값 중 일치하지 않는 값을 조회
// const members = await collection.find({ name : { $nin : ["kim", "rora"] } }).toArray();
// console.log(members)

// 내용 전체 삭제
// await collection.deleteMany();

// await collection.insertMany([
//   { name : "kim", age : 23 },
//   { name : "lucas", age : 25 },
//   { name : "dong", age : 37 },
//   { name : "ju", age : 46 },
// ])

// $gt : 지정한 값보다 큰 값을 조회
// const members = await collection.find({ age : { $gt : 25 } }).toArray();
// console.log(members)

// $gte : 지정한 값보다 크거나 같은 값을 조회
// const members = await collection.find({ age : { $gte : 25 } }).toArray();
// console.log(members)

// $lt : 지정한 값보다 작은 값을 조회
// const members = await collection.find({ age : { $lt : 30 } }).toArray();
// console.log(members)

// $lte : 지정한 값보다 작거나 같은 값을 조회
// const members = await collection.find({ age : { $lte : 25 } }).toArray();
// console.log(members)

// $or, $and, $nor
// $or : 하나라도 true이면 true
// const members = await collection.find({ $or : [{ name : "rora" }, { name : "kim" }] }).toArray();
// console.log(members)

// $and : 모두 true라면 true
// const members = await collection.find({ $and : [{ name : "kim" }, { age : 23 }] }).toArray();
// console.log(members)

// $nor : 모두 false이면 true
// const members = await collection.find({ $nor : [{ name : "dong" }, { name : "ju" }] }).toArray();
// console.log(members)

// await collection.deleteMany();

// await collection.insertMany([
//   {
//     name : "kim",
//     age : 17,
//     address : [
//       { main : "서울", detail : "강남" },
//       { main : "경기", detail : "구리" },
//     ],
//     hobby : ["eat", "sleep"],
//     company : { name : "google", department : "개발" }
//   },
//   {
//     name : "rora",
//     age : 25,
//     address : [
//       { main : "강원", detail : "춘천" },
//       { main : "서울", detail : "용산" },
//     ],
//     hobby : ["미술", "음악"],
//     company : { name : "LG", department : "고객서비스" }
//   },
//   {
//     name : "lindy",
//     age : 30,
//     address : [
//       { main : "경북", detail : "대구" },
//       { main : "전북", detail : "전주" },
//     ],
//     hobby : ["무용", "댄스"],
//     company : { name : "naver", department : "클라우드" }
//   },
// ])

// Embeeded Data : value에 여러 정보(객체)가 있는 경우
// const members = await collection.find({ "company.name" : "google" }).toArray();
// console.log(members)

// $elemMath : value에 여러 값이 list의 형태로 들어가 있는 경우
// const members = await collection.find({ address : { $elemMatch : { main : "서울" } } }).toArray();
// console.log(members)

// projection : 원하는 정보를 가져오고 싶은 경우
// const members = await collection.find({}, { projection : { name : "kim" } }).toArray();
// console.log(members)

// await collection.deleteMany();

// 내용 간단하게 추가
// await collection.insertMany([
//   { name : "kim", age : 20 },
//   { name : "pool", age : 35 },
//   { name : "lindy", age : 25 },
// ]);

// 수정 : 수정할 객체 조회 -> updateOne()
const member = await collection.findOne({name : "kim"});
console.log(member)

// 수정
// await collection.updateOne({_id : member._id}, {$set : {key : value}})
await collection.updateOne({_id : member._id}, {$set : {age: 10}})
const update_member = await collection.findOne({name : "kim"});
console.log(update_member)

// 삭제
await collection.deleteOne({_id : member._id});
const members = await collection.find().toArray();
console.log(members)