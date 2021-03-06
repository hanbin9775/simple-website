import React from "react";
import Draggable from "react-draggable";
import * as s from "./DraggableModal.styled";

const DraggableModal = (): JSX.Element => {
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
            <s.InputLabel>이름</s.InputLabel>
            <s.InputBox
              className="not-draggable"
              placeholder="이름을 입력하세요"
            />
          </s.InputWrapper>
          <s.InputWrapper>
            <s.InputLabel>나이</s.InputLabel>
            <s.InputBox
              className="not-draggable"
              placeholder="나이를 입력하세요"
            />
          </s.InputWrapper>
        </s.ContentWrapper>
      </s.ModalContainer>
    </Draggable>
  );
};

export default DraggableModal;
