import React, { useState, useEffect } from "react";
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
  const [pathInfo, setPathInfo] = useState<string>("");
  const [fillInfo, setFillInfo] = useState<string>("");

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

  useEffect(() => {
    let newPathInfo = thumbValues
      .map((value, index) => {
        if (index === 0) {
          return `M${21} ${200 - value * 2}`;
        }
        return `L${21 + index * 48.9} ${200 - value * 2}`;
      })
      .join("");
    setPathInfo(newPathInfo);
    newPathInfo += "L314.4 200 L21 200";
    setFillInfo(newPathInfo);
  }, [thumbValues]);

  return (
    <s.SliderWrapper>
      <s.SliderGraphCanvas
        width={window.innerWidth > 468 ? 428 : window.innerWidth - 40}
        height="200"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(85, 0, 255, 0.44)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgb(255,255,255)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path d={pathInfo} stroke="#5500FF" strokeWidth="3" fill="none" />
        <path d={fillInfo} stroke="none" fill="url(#grad1)" />
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
