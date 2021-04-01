import React, { useEffect } from "react";
import Draggable from "react-draggable";
import { ModalProp } from "type";
import TextInput from "./content/TextInput";
import Paragraph from "./content/Paragraph";
import * as s from "./DraggableModal.styled";

const DraggableModal = ({
  topBound,
  bottomBound,
  step,
  title,
  description,
  input1,
  value1,
  onChangeInput1,
  input2,
  value2,
  onChangeInput2,
  paragraph,
  setFullfilled,
}: ModalProp): JSX.Element => {
  const onStop = () => {
    const reactDraggable = document.querySelector(".react-draggable");
    if (reactDraggable) {
      const matrix = window.getComputedStyle(reactDraggable, null).transform;
      const parsedMatrix = matrix.substr(7, matrix.length - 8);
      const currentY = parseInt(parsedMatrix.split(",")[5].trim(), 10);
      if (setFullfilled) {
        if (currentY === 445) {
          setFullfilled(true);
        } else {
          setFullfilled(false);
        }
      }
    }
  };

  return (
    <Draggable
      cancel=".not-draggable"
      axis="y"
      defaultPosition={{ x: 0, y: window.innerHeight - 280 }}
      bounds={{
        top: topBound,
        bottom: bottomBound,
      }}
      onStop={onStop}
    >
      <s.ModalContainer>
        <s.HandleWrapper>
          <s.Handle />
        </s.HandleWrapper>
        <s.ContentWrapper>
          <s.Title>{title}</s.Title>
          <s.Describe>{description}</s.Describe>
          {step === 1 && (
            <TextInput
              input1={input1}
              value1={value1}
              input2={input2}
              value2={value2}
              onChangeInput1={onChangeInput1}
              onChangeInput2={onChangeInput2}
            />
          )}
          {step === 2 && <Paragraph content={paragraph} />}
        </s.ContentWrapper>
      </s.ModalContainer>
    </Draggable>
  );
};

export default DraggableModal;
