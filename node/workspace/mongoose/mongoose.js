import connect from "./connect.js"; // 확장자 확인하기
import User from "./user_schema.js";
import Post from "./post_schema.js";

connect();

// 1개 추가 : 스키마.create();
// const user_inserted = await User.create({
//   email : "dongwon0525@naver.com",
//   name : "이동원",
//   age : 23
// });

// console.log(user_inserted)

// 여러 개 추가 : .create()
// await User.create(
//   {
//     email : "hong1234@naver.com",
//     name : "홍길동",
//     age : 50
//   },
//   {
//     email : "lss1234@naver.com",
//     name : "이순신",
//     age : 40
//   },
//   {
//     email : "jbg1234@naver.com",
//     name : "장보고",
//     age : 30
//   },
// )

// 전체 조회
// const users = await User.find();

// for(let user of users) {
//   console.log(user._doc)
// }

// 이메일에 "naver"이 포함된 회원들 조회
// const user = await User.find({ email : { $regex : "naver" } });
// console.log(user)

// 이메일에 "dongwon"이 포함된 회원들 조회
// const user = await User.find({ email : { $regex : "dongwon" } });
// console.log(user)

// 1개 조회 : findOne()
// const user = await User.findOne({ name : "이순신" });
// console.log(user)

// 1개 수정 : 1개를 찾아놓고, updateOne(찾은 객체, { key, 변경된 값 }) 사용
// const updatedUser = await User.updateOne(user, { age : 41 });
// console.log(updatedUser)

// 여러 개 수정
// const usersUpdated = await User.updateMany(
//   { email : { $regex : "naver" } },
//   { name : "네이버" }
// );
// console.log(usersUpdated)

// 1개 삭제
// 1개를 찾고, 지우는 데이터를 넘겨주기
// deleteOne(지우는 객체);
// const user = await User.findOne({ email : "dongwon0525@naver.com" });
// const userDeleted = await User.deleteOne(user);

// 전체 삭제
// await User.deleteMany();

// 게시글 추가(연관 관계 user)
// const user = await User.findOne({ email : "dongwon0525@naver.com" });
// console.log(user)

// const postCreated = await Post.create(
//   {
//     title : "테스트 1번",
//     content : "테스트 내용 1번",
//     user : user
//   }
// )

// console.log(postCreated)

// const user1 = await User.findOne({ email : "hong1234@naver.com" });
// const user2 = await User.findOne({ email : "lss1234@naver.com" });
// const user3 = await User.findOne({ email : "jbg1234@naver.com" });

// await Post.create(
//   {
//     title : "테스트 2번",
//     content : "테스트 내용 2번",
//     user : user1
//   },
//   {
//     title : "테스트 3번",
//     content : "테스트 내용 3번",
//     user : user2
//   },
//   {
//     title : "테스트 4번",
//     content : "테스트 내용 4번",
//     user : user3
//   },
// )

// 게시글 전체 조회(연관관계 user)
// 게시글 제목, 작성자의 이름
// const posts = await Post.find().populate("user");
// for(let post of posts) {
//   console.log(post.title, post.content)
// }

// 회원 탈퇴
// 해당 유저의 데이터 삭제
// const user = await User.findOne({ name : "홍길동" });
// const posts = await Post.find({}).populate("user");

// for(let post of posts) {
//   if(post.user.id === user.id) {
//     await Post.deleteOne(post);
//   }
// }

// 회원 정보 수정 후 게시글 전체 조회(연관 관계 user)
// 이름은 동명이인이 존재할 수 있기 때문에, 해당 유저를 id로 정확하게 찾고 전달하기
// const userUpdated = await User.updateOne(
//   { name : "이순신" },
//   { name : "신짱구" }
// )
// console.log(userUpdated)

// 실습
// 홍길동 프론트로 이름을 변경 후 전체 조회하기 (이메일로 조회)
// const hongUpdated = await User.updateOne(
//   { email : "hong1234@naver.com" },
//   { name : "프론트" }
// )
// console.log(hongUpdated)

// const user1 = await User.findOne({ email : "hong1234@naver.com" });
// const user1Updated = await User.updateOne(
//   user1,
//   { name : "프론트" }
// )
// console.log(user1Updated)

// const posts = await Post.find().populate("user");
// for(let post of posts) {
//   console.log(post.title, post.content, post.user.name)
// }

