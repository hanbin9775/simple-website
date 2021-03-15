/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  background-color: #5500ff;
  width: 468px;
  height: 100%;
`;

export const Gradient = styled.div`
  height: 100%;
  padding: 0 30px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.66) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const ContentWrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Irish Grover", cursive;
  font-size: 72px;
  font-weight: 400;
  color: #fff;
  margin: 0 auto;
  margin-top: 40%;
`;

export const Describe = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

export const Button = styled(Link)`
  width: 100%;
  text-align: center;
  padding: 8px 0;
  background-color: #e8e8ed;
  border-radius: 5px;
  text-decoration: none;
`;
