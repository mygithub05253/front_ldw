import { faBell, faCreditCard, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, Outlet, NavLink, useLocation } from 'react-router-dom';
import S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviousUrl } from '../../modules/user';

const Layout = () => {

  // 비로그인 회원이 My페이지 접근을 못하게 한다.
  const location = useLocation();
  const dispatch = useDispatch();

  const previousUrl = useSelector((state) => state.user.previousUrl);

  const path = location.pathname + location.search;

  useEffect(() => {
    if(path !== "/my"){
      dispatch(setPreviousUrl(path))
      console.log("리덕스 이전경로", previousUrl)
      console.log("현재 경로", path)
    }
  }, [path, dispatch])

  return (
    <S.Background>
      <S.Wrapper>
        <S.Header>
          <Link to={"/"}>Sehwan Todo</Link>
        </S.Header>
        <S.Main>
          <Outlet />
        </S.Main>
        <S.Nav>
          <NavLink to={"/todo"}>
            <FontAwesomeIcon icon={faHouse} className='icon' />
            <p>피드</p>
          </NavLink>
          <NavLink to={"/payment"}>
            <FontAwesomeIcon icon={faCreditCard} className='icon' />
            <p>결제</p>
          </NavLink>
          <NavLink to={"/notice"}>
            <FontAwesomeIcon icon={faBell} className='icon' />
            <p>알림</p>
          </NavLink>
          <NavLink to={"/my"}>
            <FontAwesomeIcon icon={faUser} className='icon' />
            <p>My</p>
          </NavLink>
        </S.Nav>
      </S.Wrapper>
    </S.Background>
  );
};

export default Layout;