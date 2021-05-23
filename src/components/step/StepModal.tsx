import React from "react";
import { StepProp } from "type";
import * as s from "./StepModal.styled";

const StepModal = ({
  moveTo,
  isFullfilled,
  buttonText,
  onClick,
}: StepProp): JSX.Element => {
  return (
    <s.ModalContainer>
      <s.ContentWrapper>
        <s.ButtonWrapper onClick={onClick}>
          <s.StepButton
            to={{
              pathname: moveTo,
            }}
            isfullfilled={isFullfilled.toString()}
          >
            {isFullfilled ? "다음으로" : buttonText}
          </s.StepButton>
        </s.ButtonWrapper>
      </s.ContentWrapper>
    </s.ModalContainer>
  );
};

export default StepModal;
