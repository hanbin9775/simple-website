/* eslint-disable  no-nested-ternary, indent */

import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { SurveySliderProp } from "type";
import { interactColor, grayColor } from "theme";
import * as s from "./Content.styled";

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

const blackWhiteGradientStyle =
  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 27%, rgba(255,255,255,1) 100%)";

const rainbowGradientStyle =
  "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 16%, rgba(208,222,33,1) 33%, rgba(79,220,74,1) 50%, rgba(63,218,216,1) 66%, rgba(47,201,226,1) 83%, rgba(28,127,238,1) 100%)";

const oceanGradientStyle =
  "linear-gradient(90deg, rgb(0, 46, 127) 0%, rgb(0, 214, 186) 100%)";

const skyGradientStyle = "linear-gradient(to right, #82addb 0%,#ebb2b1 100%)";

const type2Style = makeStyles({
  root: {
    color: interactColor,
    height: 30,
    padding: "14px 0px !important",
  },
  thumb: (props: { value: number; railBackgroundStyle: string }) => ({
    width: 15,
    bottom: 8,
    height: 40,
    borderRadius: 15,
    backgroundColor: `rgb(${props.value},${props.value},${props.value})`,
    border: "1px solid white",
  }),
  track: {
    height: 30,
    borderRadius: 4,
    background: "none",
  },
  rail: (props: { value: number; railBackgroundStyle: string }) => ({
    height: 30,
    borderRadius: 4,
    opacity: 1,
    border: `1px solid ${grayColor}`,
    background:
      props.railBackgroundStyle === "blackWhite"
        ? blackWhiteGradientStyle
        : props.railBackgroundStyle === "rainbow"
        ? rainbowGradientStyle
        : props.railBackgroundStyle === "ocean"
        ? oceanGradientStyle
        : skyGradientStyle,
  }),
});

const SliderInput = ({
  type,
  gradientStyle,
  degreeStrings,
}: SurveySliderProp): JSX.Element => {
  const type1Class = type1Style();
  const [currentThumbValue, setCurrentThumbValue] = useState<number>(0);
  const type2Class = type2Style({
    value: currentThumbValue,
    railBackgroundStyle: gradientStyle as string,
  });

  const handleEvent = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number | number[]
  ) => {
    if (type === 2) {
      setCurrentThumbValue(255 * ((newValue as number) / 100));
    }
  };

  return (
    <s.SliderInputWrapper>
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
            onChange={handleEvent}
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
