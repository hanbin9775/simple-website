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

  useEffect(() => {
    if (name && age) {
      setFullfilled(true);
    } else {
      setFullfilled(false);
    }
  }, [name, age]);

  return (
    <s.InputContainer>
      <DraggableModal
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
