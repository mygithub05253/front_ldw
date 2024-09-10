import React from 'react';
import BasicButton from '../../components/BasicButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import S from './style';

const Login = () => {
  return (
    <div>
      <form action="">
        <S.InputContainer>
          <div>
            <span>아이디<FontAwesomeIcon icon={faUser} /></span><input type="text" placeholder="아이디를 입력하세요" />
          </div>
          <div>
            <span>비밀번호<FontAwesomeIcon icon={faLock} /></span><input type="text" placeholder="비밀번호를 입력하세요" />
          </div>
          <BasicButton size={"large"} shape={"small"} variant={"primary"}>전송</BasicButton>
        </S.InputContainer>
      </form>
    </div>
  );
};

export default Login;