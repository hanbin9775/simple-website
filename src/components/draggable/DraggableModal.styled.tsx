/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { modalColor } from "theme";

export const ModalContainer = styled.section`
  background-color: ${modalColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  z-index: 1;
`;

export const HandleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
`;

export const Handle = styled.div`
  background-color: #2b2b2b;
  border-radius: 10px;
  width: 42px;
  height: 6px;
`;

export const ContentWrapper = styled.div`
  padding: 26px 20px;
`;

export const Title = styled.h1``;

export const Describe = styled.p`
  margin-top: 8px;
  font-size: 18px;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

export const InputLabel = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
`;

export const InputBox = styled.input`
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  width: 88%;
  border: 1px solid #c4c4c4;
`;
