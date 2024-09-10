import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/input/style';

const SignUp = () => {
  
  // react-hook-form
  const { register, handleSubmit, getValues, formState: { isSubmitted, isSubmitting, errors } } = useForm({ mode : "onchange" });

  // 정규식 문법
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form className="form" onSubmit={handleSubmit(() => { console.log("전송") })}>

      {/* 이메일 검증 로직 */}
      <label className="label">
        <p className="title">이메일</p>
        <Input size={"full"} shape={"small"} variant={"gray"} color={"black"} 
          type="text" 
          className="BasicInput" 
          id="email" name="email" 
          placeholder="아이디를 입력하세요." 
          {...register("email", {
            required : true,
            pattern : {
              value : emailRegex,
            }
          })} />

        {errors?.email?.type === "required" && (
          <p className="confirmMessage">이메일을 입력해주세요.</p>
        )}  

        {errors?.email?.type === "pattern" && (
          <p className="confirmMessage">이메일 양식에 맞게 입력해주세요.</p>
        )}  
      </label>

      {/* 비밀번호 검증 로직 */}
      <label className="label">
        <p className="title">비밀번호</p>
        <Input size={"full"} shape={"small"} variant={"gray"} color={"black"} 
          type="password" 
          className="BasicInput" 
          id="password" name="password" 
          placeholder="비밀번호를 입력하세요." 
          {...register("password", {
            required : true,
            pattern : {
              value : passwordRegex,
            }
          })} />

        {errors?.password?.type === "required" && (
          <p className="confirmMessage">비밀번호를 입력해주세요.</p>
        )}  

        {errors?.password?.type === "pattern" && (
          <p className="confirmMessage">소문자, 숫자, 특수문자 각 하나씩 포함한 8자리 이상이어야 합니다. "!@#만 사용가능"</p>
        )}  
      </label>

      {/* 비밀번호 확인 로직 */}
      <label className="label">
        <p className="title">비밀번호 확인</p>
        <Input size={"full"} shape={"small"} variant={"gray"} color={"black"} 
          type="password" 
          className="BasicInput" 
          placeholder="비밀번호를 확인해주세요." 
          {...register("passwordConfirm", {
            required : true,
            validate : {
              matchPassword : (value) => {
                const { password } = getValues();
                let isMatch = password === value;
                // console.log(value, password, isMatch);
                return isMatch;
              }
            }
          })} />

        {errors?.passwordConfirm && (
          <p className="confirmMessage">비밀번호를 확인해주세요.</p>
        )}  

      </label>

      <button>회원가입</button>
    </form>
  );
};

export default SignUp;