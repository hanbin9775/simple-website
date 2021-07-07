import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { SurveySliderProp } from "type";
import { interactColor, grayColor } from "theme";
import * as s from "./Content.styled";

const percent = 0;

const type1Style = makeStyles({
  root: {
    color: interactColor,
    height: 8,
    padding: "14px 0px !important",
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
    height: 30,
    padding: "14px 0px !important",
  },
  thumb: {
    width: 15,
    bottom: 8,
    height: 40,
    borderRadius: 15,
    backgroundColor: `rgba(0,0,0,${percent})`,
    border: "1px solid white",
  },
  track: {
    height: 30,
    borderRadius: 4,
    background: "none",
  },
  rail: {
    height: 30,
    borderRadius: 4,
    opacity: 1,
    border: `1px solid ${grayColor}`,
    background:
      "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 27%, rgba(255,255,255,1) 100%)",
  },
});

const SliderInput = ({
  type,
  labelStrings,
  degreeStrings,
}: SurveySliderProp): JSX.Element => {
  const type1Class = type1Style();
  const type2Class = type2Style();
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <s.SliderInputWrapper>
      <s.SliderInputLabels>
        <s.SliderInputLabel>{labelStrings[0]}</s.SliderInputLabel>
        <s.SliderInputLabel>{labelStrings[1]}</s.SliderInputLabel>
      </s.SliderInputLabels>
      <s.SliderInputDivParent>
        <s.SliderInputDiv>
          <Slider
            step={100 / (degreeStrings.length - 1)}
            className="not-draggable"
            classes={{
              root: type === 1 ? type1Class.root : type2Class.root,
              thumb: type === 1 ? type1Class.thumb : type2Class.thumb,
              track: type === 1 ? type1Class.track : type2Class.track,
              rail: type === 1 ? type1Class.rail : type2Class.rail,
            }}
            onChange={(v) => {
              if (typeof v === "number" && type === 2) {
                setSliderValue(v);
              }
            }}
          />
        </s.SliderInputDiv>
      </s.SliderInputDivParent>
      <s.SliderInputDegrees>
        {degreeStrings.map((degree) => (
          <s.SliderInputDegree>
            <s.SliderInputScale>|</s.SliderInputScale>
            <div>{degree}</div>
          </s.SliderInputDegree>
        ))}
      </s.SliderInputDegrees>
    </s.SliderInputWrapper>
  );
};

export default SliderInput;
