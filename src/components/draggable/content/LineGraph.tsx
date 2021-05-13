import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import * as s from "./Content.styled";

const LineGraph = (): JSX.Element => {
  const [thumbValues, setThumbValues] = useState<number[]>([
    50,
    50,
    50,
    50,
    50,
    50,
    50,
  ]);

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number | number[],
    index: number
  ) => {
    const tempValues = [...thumbValues];
    if (typeof newValue === "number") {
      tempValues[index] = newValue;
    }
    setThumbValues(tempValues);
  };

  return (
    <s.SliderWrapper>
      <s.SliderGraphCanvas
        width={window.innerWidth > 468 ? 428 : window.innerWidth - 40}
        height="200"
      >
        <g className="argos">
          <title>ARGOS_logo</title>
          <g className="ldl-scale" id="svg_1" transform="rotate(-180 50 45)">
            <path
              d="m50,58.2c-20,0 -36.6,-15.4 -41.2,-20.1l-0.1,-0.1c-0.4,-0.4 -1,-1 -1.4,-1.9c-0.6,-1.3 0,-2.7 1.2,-3.3c1.3,-0.6 2.7,0 3.3,1.2c0,0.1 0.3,0.3 0.4,0.4l0.2,0.2c4.2,4.3 19.6,18.6 37.6,18.6s33.4,-14.2 37.6,-18.6l0.2,-0.2l0.5,-0.5c0.6,-1.3 2,-1.8 3.3,-1.3c1.3,0.6 1.8,2.1 1.3,3.3c-0.4,0.9 -1,1.5 -1.5,1.9l-0.1,0.1c-4.7,4.9 -21.3,20.3 -41.3,20.3z"
              fill="#0BB3E5"
              id="eye_line"
            />
          </g>
          <path
            d="M10,45 A53,55 0 0,1 90,45"
            stroke="transparent"
            fill="none"
            id="eye_text_line"
          />
          <text x="3" letterSpacing="13" fill="#0BB3E5" />
          <ellipse
            cx="50"
            cy="50"
            fill="#fff"
            stroke="#0BB3E5"
            strokeWidth="8"
            id="eye_ball"
            rx="8"
            ry="8"
          />
        </g>
      </s.SliderGraphCanvas>
      {thumbValues.map((value, index) => (
        <Slider
          track={false}
          className="not-draggable"
          orientation="vertical"
          value={value}
          onChange={(
            event: React.ChangeEvent<Record<string, unknown>>,
            newValue: number | number[]
          ) => handleChange(event, newValue, index)}
          aria-labelledby="vertical-slider"
        />
      ))}
    </s.SliderWrapper>
  );
};

export default LineGraph;
