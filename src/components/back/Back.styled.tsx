/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.div`
  position: fixed;
  width: 468px;
  top: 20px;
  z-index: 1000;

  @media only screen and (max-width: 468px) {
    width: 100%;
  }
`;

export const Touchable = styled(Link)`
  height: 100%;
  display: flex;
  gap: 0.5em;
  align-items: center;
  text-decoration: none;
  z-index: 1000;
  margin-left: 2%;
`;

export const BackText = styled.div`
  font-size: 16px;
  color: white;
`;
