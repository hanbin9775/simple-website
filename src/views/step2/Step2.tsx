/**
 * @description step2 화면
 */
import React, { useState } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import BackGroundVideo from "components/bg_video/BackGroundVideo";
import Step2VideoSrc from "assets/video/step2.mp4";
import Poster2Src from "assets/image/step2_first_frame.png";
import Back from "components/back";
import userContext from "UserContext";
import { appWidth, appHeight } from "theme";
import * as s from "./Step2.styled";

const Step2 = (): JSX.Element => {
  const { state } = React.useContext(userContext);
  const [isFullfilled, setFullfilled] = useState<boolean>(false);
  const [raiseModalTrigger, setRaiseModalTrigger] = useState<boolean>(false);

  const onClickModalDown = () => {
    setRaiseModalTrigger(true);
  };

  return (
    <s.InputContainer>
      <Back path="/step1" />
      <BackGroundVideo
        width={appWidth - 120}
        src={Step2VideoSrc}
        poster={Poster2Src}
      />
      <DraggableModal
        topBound={appHeight - 376}
        bottomBound={appHeight - 280}
        step={2}
        title="STEP #2"
        description="눈을 감고 인생을 돌아보세요"
        paragraph={`${state.name}님의 인생에서 빛나는 순간과 어두운 순간을 모두 떠올려 보세요.`}
        setFullfilled={setFullfilled}
        snapAvailable
        raiseModalTrigger={raiseModalTrigger}
        setRaiseModalTrigger={setRaiseModalTrigger}
      />
      <StepModal
        isFullfilled={isFullfilled}
        moveTo="/step3"
        buttonText="설명보기"
        onClick={onClickModalDown}
      />
    </s.InputContainer>
  );
};

export default Step2;
