/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const InputContainer = styled.section`
  width: 468px;
  background-color: #5500ff;
`;

export const DescribeText = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 48px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 24px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.div`
  font-size: 24px;
`;

export const InputBox = styled.input`
  height: 50px;
  width: 33%;
  margin-left: 25px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

export const NextButton = styled(Link)`
  background-color: #00a3a3;
  border: 1px solid white;
  padding: 18px 60px;
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: #00a3a3;
  }
`;
