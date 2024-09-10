import styled from "styled-components";

const S = {};

S.InputContainer = styled.div`

  @media screen and (max-width:400px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width:800px) {
    display: flex;
    flex-direction: row;
  }

`;

export default S;