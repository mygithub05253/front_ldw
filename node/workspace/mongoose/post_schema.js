import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";

// 작성자 필수 입력 사항
// type : MongoDB의 유저 ID(ObjectId), ref : 현재 참조해야하는 스키마
const postSchema = new Schema(
  {
    title : { type : String, required : true },
    content : { type : String, required : true },
    user : { type : ObjectId, ref : "User", required : true },
  },
  { timestamps : true }
)

export default model("Post", postSchema, "post");