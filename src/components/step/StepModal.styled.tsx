/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalContainer = styled.section`
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 468px;
  height: 154px;
  background-color: #e8e8ed;

  @media only screen and (max-width: 468px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const StepButtpn = styled(Link)<{ isFullfilled: boolean }>`
  width: 100%;
  height: 44px;
  margin-top: 30px;
  background-color: ${(props) => (props.isFullfilled ? "#4400AA" : "#555555")};
  font-size: 18px;
  color: #fff;
  border-radius: 8px;
  border: none;
  text-align: center;
  text-decoration: none;
  line-height: 2.4em;
  pointer-events: ${(props) => (props.isFullfilled ? "auto" : "none")};
`;
