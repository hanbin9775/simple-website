/**
 * @description home 화면
 */
import React, { useState, useEffect } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import BackGroundVideo from "components/bg_video/BackGroundVideo";
import Step2VideoSrc from "assets/video/step2.mp4";
import Poster2Src from "assets/image/step2_first_frame.png";
import Back from "components/back";
import * as s from "./Step2.styled";

const Step2 = (): JSX.Element => {
  const [isFullfilled, setFullfilled] = useState<boolean>(false);
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  return (
    <s.InputContainer>
      <Back path="/step1" />
      <BackGroundVideo
        width={window.innerWidth < 468 ? window.innerWidth - 80 : 428}
        src={Step2VideoSrc}
        poster={Poster2Src}
      />
      <DraggableModal
        topBound={viewportHeight - 376}
        bottomBound={viewportHeight - 280}
        step={2}
        title="STEP #2"
        description="눈을 감고 인생을 돌아보세요"
        paragraph="한빈님의 인생에서 빛나는 순간과 어두운 순간을 모두 떠올려 보세요."
        setFullfilled={setFullfilled}
      />
      <StepModal
        isFullfilled={isFullfilled}
        moveTo="/step3"
        buttonText="설명보기"
      />
    </s.InputContainer>
  );
};

export default Step2;
