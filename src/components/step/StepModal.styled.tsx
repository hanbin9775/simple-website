/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { appWidth, modalColor, interactColor } from "theme";

export const ModalContainer = styled.section`
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: ${appWidth}px;
  height: 154px;
  background-color: ${modalColor};
`;

export const ContentWrapper = styled.div`
  padding: 0 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const StepButton = styled(Link)<{ isfullfilled: string }>`
  width: 100%;
  height: 44px;
  margin-top: 30px;
  background-color: ${(props) =>
    props.isfullfilled === "true" ? interactColor : "#555555"};
  font-size: 18px;
  color: #fff;
  border-radius: 8px;
  border: none;
  text-align: center;
  text-decoration: none;
  line-height: 2.4em;
  pointer-events: ${(props) =>
    props.isfullfilled === "true" ? "auto" : "none"};
`;
