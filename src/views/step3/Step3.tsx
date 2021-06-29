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
import { appWidth, appHeight } from "theme";

import * as s from "./Step3.styled";

const Step3 = (): JSX.Element => {
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
        topBound={appHeight - 1329}
        bottomBound={appHeight - 280}
        step={3}
        title="STEP #3"
        description="간단한 심리검사를 진행해주세요"
        surverys={[
          {
            paragraph: `주말에 시간을 보낸다면 몇 명과 보내고 싶으십니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["혼자", "여려명"],
              degreeStrings: ["0명", "1~3명", "4~6명", "7~9명", "10명이상"],
            },
          },
          {
            paragraph: `최근 1년의 당신의 감정이 현재 ‘0’이라면, 다음 1년의 당신의 감정은 몇 쯤 될 것이라고 생각하십니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["나쁨", "좋음"],
              degreeStrings: ["-3", "-2", "-1", "0", "+1", "+2", "+3"],
            },
          },
          {
            paragraph: `눈을 감고 당신이 살고 싶은 집을 상상해 보십시오. 그 집의 문의 크기는 전체 집과 비교할 때 어느 정도로 큽니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["작음", "큼"],
              degreeStrings: ["매우", "조금", "보통", "조금", "매우"],
            },
          },
          {
            paragraph: `젊음과 늙음 사이, 당신은 어디쯤 계십니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["젊음", "늙음"],
              degreeStrings: [
                "매우",
                "조금",
                "적당히",
                "보통",
                "적당히",
                "조금",
                "매우",
              ],
            },
          },
          {
            paragraph: `'나’를 떠올렸을 때 가장 잘 어울리는 밝기는 무엇입니까?`,
            sliderInfo: {
              type: 0,
              labelStrings: ["어두움", "빛남"],
              degreeStrings: [
                "매우",
                "조금",
                "적당히",
                "보통",
                "적당히",
                "조금",
                "매우",
              ],
            },
          },
        ]}
        setFullfilled={setFullfilled}
        snapAvailable={false}
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
