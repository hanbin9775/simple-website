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
            paragraph: `눈을 감고 인생을 돌아 보세요. 그리고 가장 좋았던 해와 안좋았던 해를 눌러주세요.`,
            sliderInfo: {
              type: 0,
              labelStrings: ["작음", "큼"],
              degreeStrings: ["매우 작음", "작음", "보통", "큼", "매우 큼"],
            },
          },
          {
            paragraph: `탄생과 죽음 사이, 당신은 어디쯤 계십니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["탄생", "죽음"],
              degreeStrings: [
                "탄생",
                "탄생에 가까움",
                "보통",
                "죽음에 가까움",
                "죽음",
              ],
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
