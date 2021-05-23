/* eslint-disable  react/no-array-index-key */
import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import userContext from "UserContext";
import { appWidth, interactColor } from "theme";

import * as s from "./Content.styled";

const useStyles = makeStyles({
  root: {
    color: interactColor,
    padding: "0 18px !important",
  },
  thumb: {
    width: "10px",
    height: "10px",
    marginLeft: "-4px !important",
    marginBottom: "-5px !important",
  },
  active: {
    transform: "scale(2,2)",
  },
  rail: {
    backgroundColor: "#DBDBDB",
    width: "1px",
  },
});

const LineGraph = (): JSX.Element => {
  const { state } = React.useContext(userContext);
  const [thumbValues, setThumbValues] = useState<number[]>(state.graphValues);
  const [pathInfo, setPathInfo] = useState<string>("");
  const [fillInfo, setFillInfo] = useState<string>("");
  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number | number[],
    index: number
  ) => {
    // console.log(index);
    const tempValues = [...thumbValues];
    if (typeof newValue === "number") {
      tempValues[index] = newValue;
    }
    state.graphValues = tempValues;
    setThumbValues(tempValues);
  };

  useEffect(() => {
    let newPathInfo = thumbValues
      .map((value, index) => {
        if (index === 0) {
          return `M${19} ${200 - value * 2}`;
        }
        return `L${19 + (index * (appWidth - 78)) / 6} ${200 - value * 2}`;
      })
      .join("");
    setPathInfo(newPathInfo);
    newPathInfo += `L${18 + appWidth - 76} 200 L18 200`;
    setFillInfo(newPathInfo);
  }, [thumbValues]);

  return (
    <>
      <s.SliderUnit> 단위/나이 </s.SliderUnit>
      <s.SliderWrapper>
        <s.SliderGraphCanvas width={appWidth - 40} height="200">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(85, 0, 255, 0.2)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(85, 0, 255, 0)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d={pathInfo}
            stroke={interactColor}
            strokeWidth="3"
            fill="none"
          />
          <path d={fillInfo} stroke="none" fill="url(#grad1)" />
        </s.SliderGraphCanvas>
        {thumbValues.map((value, index) => (
          <Slider
            key={index}
            track={false}
            classes={{
              root: classes.root,
              thumb: classes.thumb,
              active: classes.active,
              rail: classes.rail,
            }}
            step={25}
            className="not-draggable"
            orientation="vertical"
            value={value}
            onChange={(
              event: React.ChangeEvent<Record<string, unknown>>,
              newValue: number | number[]
            ) => handleChange(event, newValue, index)}
          />
        ))}
      </s.SliderWrapper>
      <s.SliderLabelWrapper>
        {thumbValues.map((value, index) => (
          <s.SliderLabel key={index}>{state.age - 6 + index}</s.SliderLabel>
        ))}
      </s.SliderLabelWrapper>
    </>
  );
};

export default LineGraph;
