import React from "react";
import Draggable from "react-draggable";
import { ModalProp } from "type";
import * as s from "./DraggableModal.styled";

const DraggableModal = ({ input1, input2 }: ModalProp): JSX.Element => {
  return (
    <Draggable
      cancel=".not-draggable"
      axis="y"
      defaultPosition={{ x: 0, y: window.innerHeight - 280 }}
      bounds={{
        top: window.innerHeight - 480,
        bottom: window.innerHeight - 280,
      }}
    >
      <s.ModalContainer>
        <s.HandleWrapper>
          <s.Handle />
        </s.HandleWrapper>
        <s.ContentWrapper>
          <s.Title>STEP #1</s.Title>
          <s.Describe>당신에 대해 알려주세요</s.Describe>

          <s.InputWrapper>
            <s.InputLabel>{input1}</s.InputLabel>
            <s.InputBox className="not-draggable" placeholder={input1} />
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputLabel>{input2}</s.InputLabel>
            <s.InputBox className="not-draggable" placeholder={input2} />
          </s.InputWrapper>
        </s.ContentWrapper>
      </s.ModalContainer>
    </Draggable>
  );
};

export default DraggableModal;
