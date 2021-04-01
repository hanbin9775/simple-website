import React from "react";
import { ModalParagraphProp } from "type";
import * as s from "./Content.styled";

const Paragraph = ({ content }: ModalParagraphProp): JSX.Element => {
  return (
    <>
      <s.ParagraphWrapper>{content}</s.ParagraphWrapper>
    </>
  );
};

export default Paragraph;
