/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";
import { appWidth } from "theme";

const VideoSection = styled.section`
  display: flex;
  position: fixed;
  width: ${appWidth}px;
  height: ${window.innerHeight - 280}px;
  justify-content: center;
  align-items: center;
`;

export default VideoSection;
