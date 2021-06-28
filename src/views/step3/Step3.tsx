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

import * as s from "./Step3.styled";

const Step3 = (): JSX.Element => {
  const { state } = React.useContext(userContext);
  const [isFullfilled, setFullfilled] = useState<boolean>(false);
  const [raiseModalTrigger, setRaiseModalTrigger] = useState<boolean>(false);
  const onClickModalDown = () => {
    setRaiseModalTrigger(true);
  };

  return (
    <s.InputContainer>
      <Back path="/step2" />
      <BackGroundVideo
        width={appWidth - 120}
        src={Step3VideoSrc}
        poster={Poster3Src}
      />
      <DraggableModal
        topBound={appHeight - 829}
        bottomBound={appHeight - 280}
        step={3}
        title="STEP #3"
        description="간단한 심리검사를 진행해주세요"
        surverys={[
          {
            paragraph: `${state.name}님의 과거보다 미래가 어느정도 더 빛날 것이라고 생각하십니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["어두움", "밝음"],
              degreeStrings: ["암흑", "어둠", "보통", "빛남", "눈부심"],
            },
          },
          {
            paragraph: `${state.name}님의 과거보다 미래가 어느정도 더 빛날 것이라고 생각하십니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["어두움", "밝음"],
              degreeStrings: ["암흑", "어둠", "보통", "빛남", "눈부심"],
            },
          },
        ]}
        setFullfilled={setFullfilled}
        raiseModalTrigger={raiseModalTrigger}
        setRaiseModalTrigger={setRaiseModalTrigger}
      />
      <StepModal
        isFullfilled={isFullfilled}
        moveTo="/step4"
        buttonText="설명보기"
        onClick={onClickModalDown}
      />
    </s.InputContainer>
  );
};

export default Step3;
