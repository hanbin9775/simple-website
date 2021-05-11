/**
 * @description home 화면
 */
import React, { useState, useEffect } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import BackGroundVideo from "components/bg_video/BackGroundVideo";
import Step1VideoSrc from "assets/video/step1.mp4";
import InputContainer from "./Step1.styled";

const Step1 = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [isFullfilled, setFullfilled] = useState<boolean>(false);
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );

  const onChangeName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };

  const onChangeAge = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(ev.target.value);
    if (Number.isInteger(input)) {
      setAge(input);
    }
  };

  useEffect(() => (name && age ? setFullfilled(true) : setFullfilled(false)), [
    name,
    age,
  ]);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  return (
    <InputContainer>
      <BackGroundVideo
        width={window.innerWidth < 468 ? window.innerWidth / 1.8 : 428}
        src={Step1VideoSrc}
      />
      <DraggableModal
        topBound={viewportHeight - 480}
        bottomBound={viewportHeight - 280}
        step={1}
        title="STEP #1"
        description="당신에 대해 알려주세요"
        input1="이름"
        value1={name}
        input2="나이"
        value2={age}
        onChangeInput1={onChangeName}
        onChangeInput2={onChangeAge}
      />
      <StepModal
        isFullfilled={isFullfilled}
        moveTo="./step2"
        buttonText="알려줄게요!"
      />
    </InputContainer>
  );
};

export default Step1;
