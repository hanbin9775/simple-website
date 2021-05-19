import React from "react";
import { BackGroundVideoProp } from "type";
import VideoSection from "./BackGroundVideo.styled";

const BackGroundVideo = ({
  width,
  src,
  poster,
}: BackGroundVideoProp): JSX.Element => {
  return (
    <VideoSection>
      <video poster={poster} loop muted autoPlay playsInline width={width}>
        <source src={src} type="video/mp4" />
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </video>
    </VideoSection>
  );
};

export default BackGroundVideo;
