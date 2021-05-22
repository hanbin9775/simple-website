/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appWidth } from "theme";

export const ButtonWrapper = styled.div`
  position: fixed;
  width: ${appWidth}px;
  top: 20px;
  z-index: 1000;
`;

export const Touchable = styled(Link)`
  height: 100%;
  display: flex;
  gap: 0.5em;
  align-items: center;
  text-decoration: none;
  z-index: 1000;
  margin-left: 20px;
`;

export const BackText = styled.div`
  font-size: 16px;
  color: white;
`;
