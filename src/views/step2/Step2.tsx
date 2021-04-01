/**
 * @description home 화면
 */
import React, { useState } from "react";
import DraggableModal from "components/draggable";
import StepModal from "components/step";
import * as s from "./Step2.styled";

const Step2 = (): JSX.Element => {
  const [isFullfilled, setFullfilled] = useState<boolean>(false);

  return (
    <s.InputContainer>
      <DraggableModal
        topBound={window.innerHeight - 376}
        bottomBound={window.innerHeight - 280}
        step={2}
        title="STEP #2"
        description="눈을 감고 인생을 돌아보세요"
        paragraph="한빈님의 인생에서 빛나는 순간과 어두운 순간을 모두 떠올려 보세요."
        setFullfilled={setFullfilled}
      />
      <StepModal isFullfilled={isFullfilled} moveTo="/" buttonText="설명보기" />
    </s.InputContainer>
  );
};

export default Step2;
