import { memo } from "react";

import type { Props as LabelProps } from "@/components/elements/Label";
import { Label, LabelWithMemo } from "@/components/elements/Label";

/**
 * Propsの型定義
 */
type Props = LabelProps;

/**
 * LabelContainer Component
 */
export const LabelContainer: React.FC<Props> = ({ text }: Props): JSX.Element => {
  console.info("render: LabelContainer Component");
  return (
    <>
      <div>
        <Label text={text} />
      </div>
    </>
  );
};

/**
 * LabelWithMemoContainer Component
 */
export const LabelWithMemoContainer: React.FC<Props> = ({ text }: Props): JSX.Element => {
  console.info("render: LabelWithMemoContainer Component");
  return (
    <>
      <div>
        <LabelWithMemo text={text} />
      </div>
    </>
  );
};

/**
 * LabelContainerWithMemo Component
 */
export const LabelContainerWithMemo: React.FC<Props> = memo(
  ({ text }: Props): JSX.Element => {
    console.info("render: LabelContainerWithMemo Component");
    return (
      <>
        <div>
          <Label text={text} />
        </div>
      </>
    );
  }
);

/**
 * LabelWithMemoContainerWithMemo Component
 */
export const LabelWithMemoContainerWithMemo: React.FC<Props> = memo(
  ({ text }: Props): JSX.Element => {
    console.info("render: LabelWithMemoContainerWithMemo Component");
    return (
      <>
        <div>
          <LabelWithMemo text={text} />
        </div>
      </>
    );
  }
);
