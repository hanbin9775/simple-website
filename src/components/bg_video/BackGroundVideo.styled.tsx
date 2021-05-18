/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

const VideoSection = styled.section`
  position: fixed;
  width: 468px;
  text-align: center;
  top: 20px;

  @media only screen and (max-width: 468px) {
    width: 100%;
  }
`;

export default VideoSection;
