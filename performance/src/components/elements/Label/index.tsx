import { memo } from "react";

/**
 * Propsの型定義
 */
export type Props = Readonly<{
  /*
   * Child Elements
   */
  children?: never;
  /**
   * Text
   */
  text?: string;
}>;

/**
 * Label Component
 */
export const Label: React.FC<Props> = ({ text }: Props): JSX.Element => {
  console.info("render: Label Component");
  return (
    <>
      <p>{text}</p>
    </>
  );
};

/**
 * LabelWithMemo Component
 */
export const LabelWithMemo: React.FC<Props> = memo(
  ({ text }: Props): JSX.Element => {
    console.info("render: LabelWithMemo Component");
    return (
      <>
        <p>{text}</p>
      </>
    );
  }
);
