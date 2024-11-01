import { faBell, faCreditCard, faHouse, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet, NavLink, useLocation } from 'react-router-dom';
import S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setPreviousUrl } from '../../modules/user';

const AdminLayout = () => {

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

export default AdminLayout;