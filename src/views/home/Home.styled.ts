/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.section`
  padding: 24px 20%;
  background-image: url("https://t1.daumcdn.net/cfile/tistory/2767C4455934E5003B");
  background-size: 100vw 100vh;
`;

export const HomeTitle = styled.h1`
  font-size: 176px;
  color: #22aa99;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
