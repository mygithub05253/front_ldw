import mongoose from "mongoose";

const connection_url = `mongodb+srv://app:1234@app.6nxt4.mongodb.net/`;

const connect = () => {
  // 배포 환경이 아닐 경우
  if(process.env.NODE_ENV !== "production") {
    // 디버그를 true로 설정, SQL문이 콘솔에 출력
    mongoose.set("debug", true);
  }

  mongoose
  .connect(connection_url, {
    dbName : "users", // 컬렉션을 관리하는 database의 이름 설정
  })
  .then(() => {
    console.log("Connected To MongoDB") // 연결 성공
  })
  .catch((error) => {
    console.error("Connected failed to MongoDB")
    console.error(error)
  })
}

export default connect;