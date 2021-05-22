/**
 * @description home 화면
 */
import React from "react";
import Loading from "components/loading/Loading";
import LoadingVideoSrc from "assets/video/loading.mp4";
import Poster1Src from "assets/image/step1_first_frame.png";
import { appWidth } from "theme";
import InputContainer from "./Result.styled";

const Result = (): JSX.Element => {
  return (
    <InputContainer>
      <Loading
        width={appWidth - 80}
        src={LoadingVideoSrc}
        poster={Poster1Src}
      />
    </InputContainer>
  );
};

export default Result;
