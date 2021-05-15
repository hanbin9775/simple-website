/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

export const LoadingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  position: fixed;
  width: 468px;
  height: 100vh;
  z-index: 1000;
  padding-top: 5%;
  background-color: #5500ff;
  text-align: center;

  @media only screen and (max-width: 468px) {
    width: 100%;
    padding-top: 15%;
  }
`;

export const LoadingTitle = styled.h1`
  color: white;
  font-size: 24px;
`;

export const LoadingDescription = styled.div`
  color: white;
  font-size: 18px;
  width: 75%;
  text-align: center;
`;
