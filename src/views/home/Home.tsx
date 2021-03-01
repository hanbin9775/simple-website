/**
 * @description home 화면
 */
import React from "react";
import * as s from "./Home.styled";

const Home = (): JSX.Element => {
  return (
    <s.HomeContainer>
      <s.HomeTitle>Life Graph</s.HomeTitle>
      <s.ButtonWrapper>
        <s.NextButton>Start</s.NextButton>
      </s.ButtonWrapper>
    </s.HomeContainer>
  );
};

export default Home;
