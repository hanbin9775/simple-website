/**
 * @description home 화면
 */
import React from "react";
import * as s from "./Main.styled";

const Input = (): JSX.Element => {
  return (
    <s.MainContainer>
      <s.ButtonWrapper>
        <s.NextButton
          to={{
            pathname: "/",
          }}
        >
          Next
        </s.NextButton>
      </s.ButtonWrapper>
    </s.MainContainer>
  );
};

export default Input;
