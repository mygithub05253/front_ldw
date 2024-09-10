import styled from "styled-components";
import { flexCenterColumn, inputBackground } from "../../styles/common";

const S = {};

S.Div = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  background-color: ${(props) => props && props.color};
`

S.Button = styled.button`
  background-color: orange;
  border: none;
`

S.P = styled.p`
  font-size: 30px;
  color: ${(props) => props && props.color};
`

S.InputBox = styled.div`
  ${flexCenterColumn}

  /* 자기 자신 선택자 "&" */
  & button {
    font-size: 40px;
    border: 1px solid #333;
    background-color: none;
  }
`

S.Input = styled.input`
  ${inputBackground}
`

// theme 적용
S.ThemeButton = styled.button`
  padding: 20px;
  background-color: ${({theme}) => theme.PALLETE.primary.main};
`

export default S;