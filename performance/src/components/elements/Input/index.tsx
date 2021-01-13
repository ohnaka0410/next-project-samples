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
   * text
   */
  text?: string;
  /**
   * onChange
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>;

/**
 * Input Component
 */
export const Input: React.FC<Props> = ({ text, onChange }: Props): JSX.Element => {
  console.info("render: Input Component");
  return (
    <>
      <div>
        <input type="text" value={text} onChange={onChange} />
      </div>
    </>
  );
};

/**
 * InputWithMemo Component
 */
export const InputWithMemo: React.FC<Props> = memo(
  ({ text, onChange }: Props): JSX.Element => {
    console.info("render: InputWithMemo Component");
    return (
      <>
        <div>
          <input type="text" value={text} onChange={onChange} />
        </div>
      </>
    );
  }
);
