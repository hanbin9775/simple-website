export interface ModalProp {
  title: string;
  description: string;
  input1: string;
  value1: string | undefined;
  input2: string;
  value2: number | undefined;
  onChangeInput1: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeInput2: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface StepProp {
  moveTo: string;
  isFullfilled: boolean;
}
