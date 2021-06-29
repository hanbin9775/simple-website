import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { SurveySliderProp } from "type";
import { interactColor, grayColor } from "theme";
import * as s from "./Content.styled";

const type1Style = makeStyles({
  root: {
    color: interactColor,
    height: 8,
  },
  thumb: {
    height: 15,
    width: 15,
    bottom: 11,
  },
  track: {
    height: 6,
    borderRadius: 4,
    backgroundColor: grayColor,
  },
  rail: {
    height: 6,
    borderRadius: 4,
    backgroundColor: grayColor,
  },
});

const type2Style = makeStyles({
  root: {
    color: interactColor,
    height: 8,
  },
  thumb: {
    height: 15,
    width: 15,
    bottom: 11,
  },
  track: {
    height: 6,
    borderRadius: 4,
    backgroundColor: grayColor,
  },
  rail: {
    height: 6,
    borderRadius: 4,
    backgroundColor: grayColor,
  },
});

const SliderInput = ({
  type,
  labelStrings,
  degreeStrings,
}: SurveySliderProp): JSX.Element => {
  const classes = type1Style();
  return (
    <s.SliderInputWrapper>
      <s.SliderInputLabels>
        <s.SliderInputLabel>{labelStrings[0]}</s.SliderInputLabel>
        <s.SliderInputLabel>{labelStrings[1]}</s.SliderInputLabel>
      </s.SliderInputLabels>
      {type === 0 && (
        <>
          <s.SliderInputDivParent>
            <s.SliderInputDiv>
              <Slider
                step={100 / (degreeStrings.length - 1)}
                className="not-draggable"
                classes={{
                  root: classes.root,
                  thumb: classes.thumb,
                  track: classes.track,
                  rail: classes.rail,
                }}
              />
            </s.SliderInputDiv>
          </s.SliderInputDivParent>
        </>
      )}
      {type === 1 && <></>}
      <s.SliderInputDegrees>
        {degreeStrings.map((degree) => (
          <s.SliderInputDegree>{degree}</s.SliderInputDegree>
        ))}
      </s.SliderInputDegrees>
    </s.SliderInputWrapper>
  );
};

export default SliderInput;
