export interface ModalProp {
  topBound: number;
  bottomBound: number;
  step: number;
  title: string;
  description: string;
  // Step1
  input1?: string;
  value1?: string;
  input2?: string;
  value2?: number;
  onChangeInput1?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInput2?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  // Step2
  paragraph?: string;
  setFullfilled?: (isFullfilled: boolean) => void;
}

export interface ModalTextInputProp {
  input1?: string;
  value1?: string;
  input2?: string;
  value2?: number;
  onChangeInput1?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInput2?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ModalParagraphProp {
  content?: string;
}

export interface StepProp {
  moveTo: string;
  isFullfilled: boolean;
  buttonText: string;
}

export interface BackGroundVideoProp {
  width: number;
  src: string;
  poster: string;
}

export interface BackArrowProp {
  path: string;
}
