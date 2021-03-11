/**
 * @description home 화면
 */
import React from "react";
import Main from "views/template/main";

const Home = (): JSX.Element => {
  return (
    <Main
      title="Stock Wizard"
      description="당신의 인생은 기업의 주식과 닮아있어요"
      buttonText="시작하기"
      moveTo="/input"
    />
  );
};

export default Home;
