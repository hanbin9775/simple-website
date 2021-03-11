/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  background-color: #5500ff;
  height: 100vh;
`;

export const Gradient = styled.div`
  padding: 0 30px;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.66) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const Title = styled.h1`
  font-size: 72px;
  color: #fff;
  margin: 0 auto;
`;

export const Describe = styled.p`
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-bottom: 48px;
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
  overflow: visible;
  border-radius: 5px;
  text-decoration: none;
`;
