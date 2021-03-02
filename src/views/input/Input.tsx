/**
 * @description home 화면
 */
import React from "react";
import * as s from "./Input.styled";

const Input = (): JSX.Element => {
  return (
    <s.InputContainer>
      <s.DescribeText>당신의 이름과 나이를 입력하세요</s.DescribeText>
    </s.InputContainer>
  );
};

export default Input;
