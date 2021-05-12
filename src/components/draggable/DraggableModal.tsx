import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { ModalProp } from "type";
import Slider from "@material-ui/core/Slider";
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
  const [ypos, setYpos] = useState<number>(bottomBound);

  const getCurrentY = (element: Element) => {
    let currentY = 0;
    if (element) {
      const matrix = window.getComputedStyle(element, null).transform;
      const parsedMatrix = matrix.substr(7, matrix.length - 8);
      currentY = parseInt(parsedMatrix.split(",")[5].trim(), 10);
    }
    return currentY;
  };

  const onDrag = () => {
    const reactDraggable = document.querySelector(".react-draggable");
    if (reactDraggable) {
      if (getCurrentY(reactDraggable) > (topBound + bottomBound) / 2) {
        setYpos(bottomBound);
      } else {
        setYpos(topBound);
      }
    }
  };

  useEffect(() => {
    if (setFullfilled) {
      if (ypos === topBound) {
        setFullfilled(true);
      } else {
        setFullfilled(false);
      }
    }
  });

  return (
    <Draggable
      cancel=".not-draggable"
      axis="y"
      defaultPosition={{ x: 0, y: bottomBound }}
      bounds={{
        top: topBound,
        bottom: bottomBound,
      }}
      position={{ x: 0, y: ypos }}
      onDrag={onDrag}
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
          {step === 3 && (
            <>
              <Paragraph content={paragraph} />
              <s.SliderWrapper>
                <Slider
                  className="not-draggable"
                  orientation="vertical"
                  defaultValue={30}
                  aria-labelledby="vertical-slider"
                />
              </s.SliderWrapper>
            </>
          )}
        </s.ContentWrapper>
      </s.ModalContainer>
    </Draggable>
  );
};

export default DraggableModal;
