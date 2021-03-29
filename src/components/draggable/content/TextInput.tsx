import React from "react";
import { ModalTextInputProp } from "type";
import * as s from "./Content.styled";

const TextInput = ({
  input1,
  value1,
  onChangeInput1,
  input2,
  value2,
  onChangeInput2,
}: ModalTextInputProp): JSX.Element => {
  return (
    <>
      <s.InputWrapper>
        <s.InputLabel>{input1}</s.InputLabel>
        <s.InputBox
          className="not-draggable"
          placeholder={input1}
          onChange={onChangeInput1}
          value={value1}
        />
      </s.InputWrapper>
      <s.InputWrapper>
        <s.InputLabel>{input2}</s.InputLabel>
        <s.InputBox
          className="not-draggable"
          placeholder={input2}
          onChange={onChangeInput2}
          value={value2}
        />
      </s.InputWrapper>
    </>
  );
};

export default TextInput;
