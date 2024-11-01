import React from 'react';
import { faBell, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviousUrl } from '../../modules/user';

const Layout = () => {

  // 비로그인 회원이 마이 페이지 접근을 제한시켜야 함
  const location = useLocation();
  const dispatch = useDispatch();

  const previousUrl = useSelector((state) => state.user.previousUrl);

  const path = location.pathname + location.search;

  if(path !== "/my") {
    dispatch(setPreviousUrl(path))
    console.log("리덕스 이전 경로", previousUrl)
    console.log("현재 경로", path)
  }


  return (
    <S.Background>
      <S.Wrapper>
        <S.Header>
          <Link to={"/"}>Dongwon's Todo</Link>
        </S.Header>
        <S.Main>
          <Outlet />
        </S.Main>
        <S.Nav>
          {/* NavLink : 현재 URL에 있는 링크를 관찰하는 태그 */}
          <NavLink to={"/todo"}>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            <p>피드</p>
          </NavLink>
          <NavLink to={"/search"}>
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <p>검색</p>
          </NavLink>
          <NavLink to={"/notice"}>
            <FontAwesomeIcon icon={faBell} className="icon" />
            <p>알림</p>
          </NavLink>
          <NavLink to={"/my"}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <p>My</p>
          </NavLink>
        </S.Nav>
      </S.Wrapper>
    </S.Background>
  );
};

export default Layout;