/**
 * @description home 화면
 */
import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import * as s from "./Input.styled";

const Input = (): JSX.Element => {
  return (
    <s.InputContainer>
      <s.DescribeText>당신의 이름과 나이를 입력하세요</s.DescribeText>
      <s.InputWrapper>
        <BsPerson size={48} />
        <s.InputLabel>나이</s.InputLabel>
        <s.InputBox />
      </s.InputWrapper>
      <s.InputWrapper>
        <BiTime size={48} />
        <s.InputLabel>이름</s.InputLabel>
        <s.InputBox />
      </s.InputWrapper>
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
