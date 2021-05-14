/**
 * @description home 화면
 */
import React, { useState, useEffect } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import BackGroundVideo from "components/bg_video/BackGroundVideo";
import Step3VideoSrc from "assets/video/step3.mp4";

import * as s from "./Step3.styled";

const Step3 = (): JSX.Element => {
  const [isFullfilled, setFullfilled] = useState<boolean>(false);
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  return (
    <s.InputContainer>
      <BackGroundVideo
        width={window.innerWidth < 468 ? window.innerWidth / 1.8 : 428}
        src={Step3VideoSrc}
      />
      <DraggableModal
        topBound={viewportHeight - 629}
        bottomBound={viewportHeight - 280}
        step={3}
        title="STEP #3"
        description="인생 그래프를 그려보세요"
        paragraph="한빈님의 최근 7년의 인생굴곡을 위아래로 움직여 표현하세요"
        setFullfilled={setFullfilled}
      />
      <StepModal isFullfilled={isFullfilled} moveTo="/" buttonText="설명보기" />
    </s.InputContainer>
  );
};

export default Step3;
