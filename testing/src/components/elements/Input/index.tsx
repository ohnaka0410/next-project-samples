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
   * Code
   */
  text?: string;
  /**
   * Placeholder
   */
  placeholder?: string;
  /**
   * onChange
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>;

/**
 * Input Component
 */
export const Input: React.FC<Props> = memo(
  ({ text, placeholder, onChange }: Props): JSX.Element => {
    console.info("render: Input Component");

    return (
      <>
        <div>
          <input type="text" value={text} placeholder={placeholder} onChange={onChange} />
        </div>
      </>
    );
  }
);
