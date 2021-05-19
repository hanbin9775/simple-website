/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

const VideoSection = styled.section`
  display: flex;
  position: fixed;
  width: 468px;
  height: ${window.innerHeight - 280}px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 468px) {
    width: 100%;
  }
`;

export default VideoSection;
