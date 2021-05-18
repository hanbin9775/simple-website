import React from "react";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import * as s from "./Back.styled";

const Back = (): JSX.Element => {
  return (
    <s.ButtonWrapper>
      <s.Touchable to={{ pathname: "/" }}>
        <ArrowBackIosRoundedIcon style={{ color: "white", fontSize: "16px" }} />
        <s.BackText>이전으로</s.BackText>
      </s.Touchable>
    </s.ButtonWrapper>
  );
};

export default Back;
