/**
 * @description home 화면
 */
import React from "react";
import MainVideo from "assets/video/main.mp4";
import MainTitleImage from "assets/image/title_image.png";
import * as s from "./Main.styled";
import { MainProp } from "./type";

const Main = ({ description, buttonText, moveTo }: MainProp): JSX.Element => {
  return (
    <s.Container>
      <s.ContentWrapper>
        <s.SourceWrapper>
          <video
            loop
            muted
            autoPlay
            playsInline
            width={window.innerWidth < 468 ? window.innerWidth - 120 : 428}
          >
            <source src={MainVideo} type="video/mp4" />
            <track
              src="captions_en.vtt"
              kind="captions"
              srcLang="en"
              label="english_captions"
            />
          </video>
          <img
            src={MainTitleImage}
            alt="title_img"
            width={window.innerWidth < 468 ? window.innerWidth / 2 : 300}
          />
          <s.SubTitle>{description}</s.SubTitle>
        </s.SourceWrapper>

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
    </s.Container>
  );
};

export default Main;
