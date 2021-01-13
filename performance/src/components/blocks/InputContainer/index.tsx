import { memo } from "react";

import type { Props as InputProps } from "@/components/elements/Input";
import { Input, InputWithMemo } from "@/components/elements/Input";

/**
 * Propsの型定義
 */
type Props = InputProps;

/**
 * InputContainer Component
 */
export const InputContainer: React.FC<Props> = ({ text, onChange }: Props): JSX.Element => {
  console.info("render: InputContainer Component");
  return (
    <>
      <div>
        <Input text={text} onChange={onChange} />
      </div>
    </>
  );
};

/**
 * InputWithMemoContainer Component
 */
export const InputWithMemoContainer: React.FC<Props> = ({ text, onChange }: Props): JSX.Element => {
  console.info("render: InputWithMemoContainer Component");
  return (
    <>
      <div>
        <InputWithMemo text={text} onChange={onChange} />
      </div>
    </>
  );
};

/**
 * InputContainerWithMemo Component
 */
export const InputContainerWithMemo: React.FC<Props> = memo(
  ({ text, onChange }: Props): JSX.Element => {
    console.info("render: InputContainerWithMemo Component");
    return (
      <>
        <div>
          <Input text={text} onChange={onChange} />
        </div>
      </>
    );
  }
);

/**
 * InputWithMemoContainerWithMemo Component
 */
export const InputWithMemoContainerWithMemo: React.FC<Props> = memo(
  ({ text, onChange }: Props): JSX.Element => {
    console.info("render: InputWithMemoContainerWithMemo Component");
    return (
      <>
        <div>
          <InputWithMemo text={text} onChange={onChange} />
        </div>
      </>
    );
  }
);
