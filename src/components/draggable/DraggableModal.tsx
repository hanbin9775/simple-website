import React from "react";
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
}: // setFullfilled,
ModalProp): JSX.Element => {
  // useEffect(() => {}, []);

  return (
    <Draggable
      cancel=".not-draggable"
      axis="y"
      defaultPosition={{ x: 0, y: window.innerHeight - 280 }}
      bounds={{
        top: topBound,
        bottom: bottomBound,
      }}
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
