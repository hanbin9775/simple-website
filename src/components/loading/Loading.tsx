import React from "react";
import { BackGroundVideoProp } from "type";
import * as s from "./Loading.styled";

const Loading = ({ width, src, poster }: BackGroundVideoProp): JSX.Element => {
  return (
    <>
      <s.LoadingSection>
        <video poster={poster} loop muted autoPlay playsInline width={width}>
          <source src={src} type="video/mp4" />
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
        </video>
        <s.LoadingTitle>거의 다 왔어요</s.LoadingTitle>
        <s.LoadingDescription>
          한빈 님의 미래의 인생 그래프는 어떤 모양일까요?
        </s.LoadingDescription>
      </s.LoadingSection>
    </>
  );
};

export default Loading;
