/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from "styled-components";

export const HomeContainer = styled.section`
  padding: 24px 20%;
`;

export const ImageWrapper = styled.div``;

export const ImageWrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  margin-top: 24px;
`;

export const HomeImage = styled.img`
  background: gray;
  border: 1px solid white;
  flex-grow: 1;
  height: 300px;
`;

export const imageTest = styled.div<{ uri: string }>`
  background-image: url(${(props) => props.uri});
`;
