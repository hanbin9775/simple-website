import React, { useState, useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import * as s from "./Content.styled";

const useStyles = makeStyles({
  root: {
    color: "#4400AA",
    padding: "0 18px !important",
  },
  thumb: {
    width: "10px",
    height: "10px",
    marginLeft: "-4px",
    marginBottom: "-5px",
  },
  active: {
    transform: "scale(1.5,1.5)",
  },
  rail: {
    backgroundColor: "#DBDBDB",
    width: "1px",
  },
});

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
    // console.log(tempValues);
    setThumbValues(tempValues);
  };

  useEffect(() => {
    let newPathInfo = thumbValues
      .map((value, index) => {
        if (index === 0) {
          return `M${18} ${200 - value * 2}`;
        }
        return `L${18 + (index * (window.innerWidth - 76)) / 6} ${
          200 - value * 2
        }`;
      })
      .join("");
    setPathInfo(newPathInfo);
    newPathInfo += `L${21 + window.innerWidth - 82} 200 L21 200`;
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
              style={{ stopColor: "rgba(85, 0, 255, 0.2)", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(85, 0, 255, 0)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path d={pathInfo} stroke="#4400AA" strokeWidth="3" fill="none" />
        <path d={fillInfo} stroke="none" fill="url(#grad1)" />
      </s.SliderGraphCanvas>
      {thumbValues.map((value, index) => (
        <Slider
          track={false}
          classes={{
            root: classes.root,
            thumb: classes.thumb,
            active: classes.active,
            rail: classes.rail,
          }}
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
