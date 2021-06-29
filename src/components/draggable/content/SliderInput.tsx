import React from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { SurveySliderProp } from "type";
import { interactColor, grayColor } from "theme";
import * as s from "./Content.styled";

const useStyles = makeStyles({
  root: {
    color: interactColor,
    height: 8,
  },
  thumb: {
    height: 15,
    width: 15,
    bottom: 12,
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
  const classes = useStyles();
  return (
    <s.SliderInputWrapper>
      <s.SliderInputLabels>
        <s.SliderInputLabel>{labelStrings[0]}</s.SliderInputLabel>
        <s.SliderInputLabel>{labelStrings[1]}</s.SliderInputLabel>
      </s.SliderInputLabels>
      {type === 0 && (
        <>
          <Slider
            step={25}
            classes={{
              root: classes.root,
              thumb: classes.thumb,
              track: classes.track,
              rail: classes.rail,
            }}
          />
          <s.SliderInputDegrees>
            {degreeStrings.map((degree) => (
              <s.SliderInputDegree>{degree}</s.SliderInputDegree>
            ))}
          </s.SliderInputDegrees>
        </>
      )}
      {type === 1 && <></>}
    </s.SliderInputWrapper>
  );
};

export default SliderInput;
