/**
 * @description home 화면
 */
import React from "react";
import * as s from "./Main.styled";
import { MainProp } from "./type";

const Main = ({
  title,
  description,
  buttonText,
  moveTo,
}: MainProp): JSX.Element => {
  return (
    <s.Container>
      <s.Gradient>
        <s.ContentWrapper>
          <s.Title>{title}</s.Title>
          <div>
            <s.Describe>{description}</s.Describe>
            <s.ButtonWrapper>
              <s.Button
                to={{
                  pathname: moveTo,
                }}
              >
                {buttonText}
              </s.Button>
            </s.ButtonWrapper>
          </div>
        </s.ContentWrapper>
      </s.Gradient>
    </s.Container>
  );
};

export default Main;
