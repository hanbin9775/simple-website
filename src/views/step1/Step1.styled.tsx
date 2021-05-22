/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { appColor, appWidth } from "theme";

const InputContainer = styled.section`
  width: ${appWidth}px;
  background-color: ${appColor};
  height: ${window.innerHeight}px;
`;

export default InputContainer;
