/**
 * @description home 화면
 */
import React, { useState, useEffect } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import BackGroundVideo from "components/bg_video/BackGroundVideo";
import Step1VideoSrc from "assets/video/step1.mp4";
import Poster1Src from "assets/image/step1_first_frame.png";
import Back from "components/back";
import userContext from "UserContext";
import { appWidth } from "theme";
import InputContainer from "./Step1.styled";

const Step1 = (): JSX.Element => {
  const { state } = React.useContext(userContext);
  const [name, setName] = useState<string>(state.name);
  const [age, setAge] = useState<number>(state.age);
  const [isFullfilled, setFullfilled] = useState<boolean>(false);
  const [raiseModalTrigger, setRaiseModalTrigger] = useState<boolean>(false);
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );

  const onClickModalDown = () => {
    setRaiseModalTrigger(true);
  };

  const onChangeName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    state.name = ev.target.value;
    setName(ev.target.value);
  };

  const onChangeAge = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const input = Number(ev.target.value);
    if (Number.isInteger(input)) {
      state.age = input;
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
      <Back path="/" />
      <BackGroundVideo
        width={appWidth - 80}
        src={Step1VideoSrc}
        poster={Poster1Src}
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
        raiseModalTrigger={raiseModalTrigger}
        setRaiseModalTrigger={setRaiseModalTrigger}
      />
      <StepModal
        isFullfilled={isFullfilled}
        moveTo="./step2"
        buttonText="알려줄게요!"
        onClick={onClickModalDown}
      />
    </InputContainer>
  );
};

export default Step1;
