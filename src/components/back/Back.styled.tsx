/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.div`
  position: fixed;
  width: 468px;
  height: 10%;
  @media only screen and (max-width: 468px) {
    width: 100%;
  }
`;

export const Touchable = styled(Link)`
  height: 100%;
  display: flex;
  gap: 0.5em;
  align-items: center;
  z-index: 1000;
  margin-left: 2%;
`;

export const BackText = styled.div`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;
