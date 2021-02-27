/**
 * @description home 화면
 */
import React from "react";
import * as s from "./Header.styled";

const Header = (): JSX.Element => {
  // const [menuState, setMenuState] = useState<Array<boolean>>();

  return (
    <s.HeaderContainer>
      <s.HeaderTitle>Header</s.HeaderTitle>
      <s.MenuWrapper>
        <s.Menu active>menu1</s.Menu>
        <s.Menu active={false}>menu2</s.Menu>
        <s.Menu active={false}>menu3</s.Menu>
      </s.MenuWrapper>
    </s.HeaderContainer>
  );
};

export default Header;
