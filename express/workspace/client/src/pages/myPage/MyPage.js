import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { setUser, setUserStatus } from '../../modules/user';
import S from './style';

const MyPage = () => {

  const [ searchParams ] = useSearchParams();
  const previousUrl = useSelector((state) => state.user.previousUrl);
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLogin = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  console.log(currentUser)
  console.log(isLogin)

  // oauth2 jwt
  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    console.log(accessToken)
    if(accessToken) {
      localStorage.setItem("accessToken", accessToken)
    }
  }, [searchParams, navigate])
  
  // 로그아웃
  const logoutHandle = () => {
    localStorage.removeItem("accessToken")
    dispatch(setUser(null));
    dispatch(setUserStatus(false));
    navigate("/")
  }
  
  // 프로필 이미지
  const pictureRef = useRef(null);
  const [selectFile, setSelectFile] = useState(null);
  const [picturePath, setPicturePath] = useState(`http://localhost:8000${currentUser.picture}`);
  console.log(picturePath)
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // 선택한 파일

    if(file){
      setSelectFile(file); // 서버로 전송시킬 저장 파일
      const fileUrl = URL.createObjectURL(file); // 브라우저에서 미리 보기용 URL
      setPicturePath(fileUrl); // 화면에 미리보기할 path
    }

  }

  const savePicture = async (e) => {

    if(!selectFile){
      alert("이미지를 등록해주세요");
      return;
    }
    
    const formData = new FormData();
    formData.append("picture", pictureRef.current.files[0]);
    formData.append("email", currentUser.email);

    const config = {
      method : "POST",
      header : {
        Authorization : `Bearer ${localStorage.getItem("accessToken")}`
      },
      body : formData
    }

    await fetch("http://localhost:8000/user/picture", config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        const newPicturePath = res.filePath;
        setPicturePath(`http://localhost:8000${newPicturePath}`)
      })
      .catch(console.error)
    
  }

  if(!isLogin){
    return <Navigate to={previousUrl ? previousUrl : "/"} replace={true} />
  }

  return (
    <>
      <S.Wrapper>
        <S.Label htmlFor='profile'>
          <S.Profile src={picturePath} alt='프로필 이미지' />
        </S.Label>
        <input 
          type="file" style={{display : "none"}} 
          ref={pictureRef} id="profile" name="picture"
          onChange={handleFileChange}
        />
        <S.Button onClick={savePicture}>프로필 이미지 변경</S.Button>
      </S.Wrapper>
      <button onClick={logoutHandle}>로그아웃</button>
    </>
  )
  
};

export default MyPage;