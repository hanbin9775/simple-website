import React from "react";
import { StepProp } from "type";
import * as s from "./StepModal.styled";

const StepModal = ({ moveTo, isFullfilled }: StepProp): JSX.Element => {
  return (
    <s.ModalContainer>
      <s.ContentWrapper>
        <s.ButtonWrapper>
          <s.StepButtpn
            to={{
              pathname: moveTo,
            }}
            isFullfilled={isFullfilled}
          >
            {isFullfilled ? "다음으로" : "알려줄게요!"}
          </s.StepButtpn>
        </s.ButtonWrapper>
      </s.ContentWrapper>
    </s.ModalContainer>
  );
};

export default StepModal;
