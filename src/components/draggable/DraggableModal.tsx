import React from "react";
import Draggable from "react-draggable";
import { ModalProp } from "type";
import * as s from "./DraggableModal.styled";

const DraggableModal = ({
  title,
  description,
  input1,
  value1,
  onChangeInput1,
  input2,
  value2,
  onChangeInput2,
}: ModalProp): JSX.Element => {
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
          <s.Title>{title}</s.Title>
          <s.Describe>{description}</s.Describe>

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
        </s.ContentWrapper>
      </s.ModalContainer>
    </Draggable>
  );
};

export default DraggableModal;
