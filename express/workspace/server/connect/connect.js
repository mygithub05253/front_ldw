import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connection_url = process.env.CONNECT_URL;
console.log(connection_url)
// const connection_url = `mongodb+srv://app:1234@app.f5kp2.mongodb.net/`;

const connect = async () => {
  // 배포환경이 아니라면,
  if ( process.env.NODE_ENV !== "production" ){
    // 디버그 true로 설정, SQL문이 콘솔에 출력된다.
    mongoose.set("debug", true);
  }

  mongoose
    .connect(connection_url, {
      dbName : "todo", // 컬렉션을 관리하는 datebase의 이름 설정
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected To MongoDB"); // 연결 성공
    })
    .catch((err) => {
      console.error("Connected faild to MongoDB")
      console.error(err)
    })

}

export default connect;