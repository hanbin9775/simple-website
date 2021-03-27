/**
 * @description home 화면
 */
import React from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import * as s from "./Input.styled";

const Input = (): JSX.Element => {
  return (
    <s.InputContainer>
      <DraggableModal input1="이름" input2="나이" />
      <StepModal />
    </s.InputContainer>
  );
};

export default Input;
