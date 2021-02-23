/**
 * @description home 화면
 */
import React from "react";
import * as s from "./Home.styled";

const Home = (): JSX.Element => (
  <s.HomeContainer>
    <s.ImageWrapper>
      <s.ImageWrapperRow>
        <s.HomeImage src="" alt="s.HomeImage1" />
        <s.HomeImage src="" alt="s.HomeImage2" />
        <s.HomeImage src="" alt="s.HomeImage3" />
      </s.ImageWrapperRow>
      <s.ImageWrapperRow>
        <s.HomeImage src="" alt="s.HomeImage4" />
        <s.HomeImage src="" alt="s.HomeImage5" />
      </s.ImageWrapperRow>
    </s.ImageWrapper>
  </s.HomeContainer>
);

export default Home;
