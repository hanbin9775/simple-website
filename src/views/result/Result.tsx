/**
 * @description home 화면
 */
import React from "react";
import Loading from "components/loading/Loading";
import Step3VideoSrc from "assets/video/step3.mp4";

import InputContainer from "./Result.styled";

const Result = (): JSX.Element => {
  return (
    <InputContainer>
      <Loading
        width={window.innerWidth < 468 ? window.innerWidth / 1.8 : 428}
        src={Step3VideoSrc}
      />
    </InputContainer>
  );
};

export default Result;
