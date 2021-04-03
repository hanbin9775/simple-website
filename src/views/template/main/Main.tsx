/**
 * @description home 화면
 */
import React from "react";
import MainVideo from "assets/video/main.mp4";
import * as s from "./Main.styled";
import { MainProp } from "./type";

const Main = ({ buttonText, moveTo }: MainProp): JSX.Element => {
  return (
    <s.Container>
      <s.Gradient>
        <s.ContentWrapper>
          <video loop autoPlay width={300}>
            <source src={MainVideo} type="video/mp4" />
            <track
              src="captions_en.vtt"
              kind="captions"
              srcLang="en"
              label="english_captions"
            />
          </video>
          <div>
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
