/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

export const ModalContainer = styled.section`
  position: absolute;
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

export const StepButtpn = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 30px;
  background-color: #555555;
  font-size: 18px;
  color: #fff;
  border-radius: 8px;
  border: none;
`;
