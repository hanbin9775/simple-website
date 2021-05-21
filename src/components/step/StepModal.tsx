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
          <s.StepButtpn
            to={{
              pathname: moveTo,
            }}
            isFullfilled={isFullfilled}
          >
            {isFullfilled ? "다음으로" : buttonText}
          </s.StepButtpn>
        </s.ButtonWrapper>
      </s.ContentWrapper>
    </s.ModalContainer>
  );
};

export default StepModal;
