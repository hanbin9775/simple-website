/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

const InputContainer = styled.section`
  width: 468px;
  background-color: #5500ff;
  height: ${window.innerHeight}px;

  @media only screen and (max-width: 468px) {
    width: 100%;
  }
`;

export default InputContainer;
