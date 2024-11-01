import mongoose, { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchema = new Schema({
  email : { type : String, required : true, unique : true },
  password : { type : String },
  name : String,
  age : { type : Number, default : 0 },
  phone : { type : String, default : "000-0000-0000" },
  picture : { type : String, default : "none_picture.jpg" },
  address : String,
  token : String, // refresh 토큰
  createAt : { type : String, default : getCurrentTime },
  updateAt : { type : String, default : getCurrentTime },
  snsId : { type : mongoose.Schema.Types.ObjectId, ref : "Sns" },
});

export default model("User", userSchema, "users");