import React from "react";
import * as s from "./StepModal.styled";

const StepModal = (): JSX.Element => {
  return (
    <s.ModalContainer>
      <s.ContentWrapper>
        <s.StepButtpn>알려줄게요!</s.StepButtpn>
      </s.ContentWrapper>
    </s.ModalContainer>
  );
};

export default StepModal;
