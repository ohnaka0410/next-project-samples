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
  code?: string;
}>;

/**
 * Code Component
 */
export const Code: React.FC<Props> = memo(
  ({ code }: Props): JSX.Element => {
    console.info("render: Code Component");
    return (
      <>
        <pre>
          <code>{code}</code>
        </pre>
      </>
    );
  }
);
