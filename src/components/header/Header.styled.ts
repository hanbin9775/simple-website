/* eslint-disable @typescript-eslint/explicit-function-return-type */

import styled from "styled-components";

export const HeaderContainer = styled.section`
  padding: 12px;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
`;

export const Menu = styled.div<{ active: boolean }>`
  cursor: pointer;
  color: ${(props) => (props.active ? "black" : "gray")};
`;
