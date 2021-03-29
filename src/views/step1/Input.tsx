/**
 * @description home 화면
 */
import React, { useState, useEffect } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import * as s from "./Input.styled";

const Step1 = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [isFullfilled, setFullfilled] = useState<boolean>(false);

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

  return (
    <s.InputContainer>
      <DraggableModal
        title="STEP #1"
        description="당신에 대해 알려주세요"
        input1="이름"
        value1={name}
        input2="나이"
        value2={age}
        onChangeInput1={onChangeName}
        onChangeInput2={onChangeAge}
      />
      <StepModal isFullfilled={isFullfilled} moveTo="./step2" />
    </s.InputContainer>
  );
};

export default Step1;
