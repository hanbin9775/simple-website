/**
 * @description step3 화면
 */
import React, { useState } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import BackGroundVideo from "components/bg_video/BackGroundVideo";
import Step3VideoSrc from "assets/video/step3.mp4";
import Poster3Src from "assets/image/step3_first_frame.png";
import Back from "components/back";
import userContext from "UserContext";
import { appWidth, appHeight } from "theme";

import * as s from "./Step4.styled";

const Step4 = (): JSX.Element => {
  const { state } = React.useContext(userContext);
  const [isFullfilled, setFullfilled] = useState<boolean>(false);
  const [raiseModalTrigger, setRaiseModalTrigger] = useState<boolean>(false);
  const onClickModalDown = () => {
    setRaiseModalTrigger(true);
  };

  return (
    <s.InputContainer>
      <Back path="/step3" />
      <BackGroundVideo
        width={appWidth - 120}
        src={Step3VideoSrc}
        poster={Poster3Src}
      />
      <DraggableModal
        topBound={appHeight - 629}
        bottomBound={appHeight - 280}
        step={4}
        title="STEP #4"
        description="인생 그래프를 그려보세요"
        paragraph={`${state.name}님의 최근 7년의 인생굴곡을 위아래로 움직여 표현하세요`}
        setFullfilled={setFullfilled}
        snapAvailable
        raiseModalTrigger={raiseModalTrigger}
        setRaiseModalTrigger={setRaiseModalTrigger}
      />
      <StepModal
        isFullfilled={isFullfilled}
        moveTo="/result"
        buttonText="설명보기"
        onClick={onClickModalDown}
      />
    </s.InputContainer>
  );
};

export default Step4;
