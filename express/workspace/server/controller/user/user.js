import User from "../../models/user_schema.js";
import path from 'path';
import bcrypt from 'bcrypt';

const registerUser = async (req, res) => {

  const { email, password } = req.body;
  //.lean() : 자바스크립트 객체로 바꿔준다.

  const findUser = await User.findOne({email : email}).lean();

  if(findUser){
    return res.status(409).json({
      registerSuccess : false,
      message : "이미 존재하는 이메일입니다."
    })
  }else{
    
    // 비밀번호 해시화
    const saltRounds = 10; // 해시 강도를 설정(높을 수록 안전);
    const plainPassword = req.body.password;
    console.log("현재 비밀번호", plainPassword);
    
    bcrypt.hash(plainPassword, saltRounds, async (err, hashPassword) => {
      if(err){
        console.error(err);
      }else{

        console.log("해쉬 비밀번호", hashPassword);
        let registerUser = {
          email : email,
          password : hashPassword
        }

        await User.create(registerUser);
        return res.status(201).json({
          message : "축하합니다. 회원가입이 완료되었습니다.",
          registerSuccess : true
        })

      }
    })

  }
}

const loginUser = async (req, res) => {

  const findUser = await User.findOne({email : req.body.email}).lean();

  if(!findUser){
    return res.status(401).json({
      loginSuccess : false,
      message : "존재하지 않는 이메일입니다."
    })
  }else {
    // 비밀번호를 검증
    const passwordMatch = req.body.password === findUser.password;
    if(!passwordMatch){
      return res.status(401).json({
        loginSuccess : false,
        message : "비밀번호가 일치하지 않습니다."
      })
    }

    // 민감한 정보를 제거
    const { password, ...user } = findUser;
    return res.status(200).json({
      user,
      loginSuccess : true,
      message : "로그인이 완료되었습니다."
    })

  }
}

const updateUser =  async (req, res) => {
  const findUser = await User.findOne({email : req.body.email })
  const updatedUser = await User.updateOne(findUser, {
    // email : req.body.email,
    // name : req.body.name
  })
}
const deleteUser = async (req, res) => {
  const user = await User.findOne({ email : req.body.email });
  const DeletedUser = await User.deleteOne(user);
}

const updatePicture = async (req, res) => {
  const uploadFolder = "uploads/profiles";
  const relativePath = path.join(uploadFolder, req.file.filename).replace(/\\/g, '/');

  const email = req.body.email;
  const currentUser = await User.findOne({email : email})
  const updatedUser = await User.updateOne(
    currentUser, 
    { picture : `/${relativePath}`}
  );
  
  res.status(200).json({
    message : "업로드 완료",
    filePath: `/${relativePath}`,
  })
}

export { loginUser, registerUser, updateUser, deleteUser, updatePicture }