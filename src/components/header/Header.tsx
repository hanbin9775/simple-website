/**
 * @description home 화면
 */
import React from "react";
import * as s from "./Header.styled";

const Header = (): JSX.Element => (
  <s.HeaderContainer>
    <s.HeaderTitle>Header</s.HeaderTitle>
    <s.MenuWrapper>
      <s.Menu>menu1</s.Menu>
      <s.Menu>menu2</s.Menu>
      <s.Menu>menu3</s.Menu>
    </s.MenuWrapper>
  </s.HeaderContainer>
);

export default Header;
