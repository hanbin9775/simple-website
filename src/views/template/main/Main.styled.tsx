/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  background-color: #5500ff;
  height: ${window.innerHeight}px;
  width: 468px;

  @media only screen and (max-width: 468px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  height: ${window.innerHeight - 80}px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 500;
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
  padding: 12px 0;
  background-color: #e8e8ed;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
`;
