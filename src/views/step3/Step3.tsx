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
        topBound={appHeight - 1580}
        bottomBound={appHeight - 280}
        step={3}
        title="STEP #3"
        description="간단한 심리검사를 진행해주세요"
        surverys={[
          {
            paragraph: `최근 1년의 당신의 감정이 현재 ‘0’이라면, 다음 1년의 당신의 감정은 몇 쯤 될 것이라고 생각하십니까?`,
            sliderInfo: {
              type: 1,
              degreeStrings: ["-3", "-2", "-1", "0", "+1", "+2", "+3"],
            },
          },
          {
            paragraph: `주말에 시간을 보낸다면 몇 명과 보내고 싶으십니까? (명)`,
            sliderInfo: {
              type: 1,
              degreeStrings: ["0", "1~3", "4~6", "7~9", "10 이상"],
            },
          },
          {
            paragraph: `이상과 현실 사이, 당신은 어디쯤 계십니까?`,
            sliderInfo: {
              type: 1,
              degreeStrings: ["이상", "", "", "", "현실"],
            },
          },
          {
            paragraph: `젊음과 늙음 사이, 당신은 어디쯤 계십니까?`,
            sliderInfo: {
              type: 1,
              degreeStrings: ["젊음", "", "", "", "", "", "늙음"],
            },
          },
          {
            paragraph: `당신의 과거와 가장 잘 어울리는 계절은 언제입니까?`,
            sliderInfo: {
              type: 1,
              degreeStrings: ["봄", "여름", "가을", "겨울"],
            },
          },
          {
            paragraph: `최근 1년의 당신의 감정과 가장 잘 어울리는 때는 언제입니까?`,
            sliderInfo: {
              type: 1,
              degreeStrings: [
                "아침",
                "오전",
                "점심",
                "오후",
                "저녁",
                "밤",
                "새벽",
              ],
            },
          },
          {
            paragraph: `'나’를 떠올렸을 때 가장 잘 어울리는 밝기는 무엇입니까?`,
            sliderInfo: {
              type: 2,
              degreeStrings: ["", "", "", "", "", "", ""],
            },
          },
          {
            paragraph: `당신이 추상 미술 작품을 구매한다면, 그 작품의 색은 어떤 색입니까?`,
            sliderInfo: {
              type: 2,
              degreeStrings: ["", "", "", "", "", "", ""],
            },
          },
          {
            paragraph: `바다를 떠올려 보십시오. 당신의 바다는 무슨 색입니까?`,
            sliderInfo: {
              type: 2,
              degreeStrings: ["", "", "", "", "", "", ""],
            },
          },
          {
            paragraph: `하늘을 떠올려 보십시오. 당신의 하늘은 무슨 색입니까?`,
            sliderInfo: {
              type: 2,
              degreeStrings: ["", "", "", "", "", "", ""],
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
