/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { modalColor, grayText, grayColor } from "theme";

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

export const ParagraphWrapper = styled.div`
  background-color: #dbdbdb;
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 16px;
`;

export const SliderWrapper = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  height: 200px;
`;

export const SliderUnit = styled.div`
  margin-top: 5%;
  text-align: right;
  font-size: 14px;
`;

export const SliderGraphCanvas = styled.svg`
  background-color: ${modalColor};
  position: fixed;
`;

export const SliderLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 10px 0 10px;
`;

export const SliderLabel = styled.div`
  font-size: 14px;
`;

export const SliderInputWrapper = styled.div`
  margin: 16px 0 72px 0;
`;

export const SliderInputLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const SliderInputLabel = styled.div``;

export const SliderInputDivParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderInputDiv = styled.div`
  width: 95%;
`;

export const SliderInputDegrees = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SliderInputScale = styled.div`
  font-size: 8px;
  color: ${grayColor};
  text-align: center;
  margin-bottom: 4px;
  font-weight: 800;
`;

export const SliderInputDegree = styled.div`
  font-size: 12px;
  color: ${grayText};
`;
