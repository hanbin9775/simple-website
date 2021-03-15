/**
 * @description home 화면
 */
import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import DraggableModal from "components/draggable";
import * as s from "./Input.styled";

const Input = (): JSX.Element => {
  return (
    <s.InputContainer>
      <DraggableModal />
      <s.ButtonWrapper>
        <s.NextButton
          to={{
            pathname: "/",
          }}
        >
          Next
        </s.NextButton>
      </s.ButtonWrapper>
    </s.InputContainer>
  );
};

export default Input;
