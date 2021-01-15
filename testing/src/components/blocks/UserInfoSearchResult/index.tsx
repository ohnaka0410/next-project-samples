import { memo } from "react";
import { Code } from "@/components/elements/Code";

/**
 * 結果結果
 */
export type Code = Readonly<string | undefined>;

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
  code: Code;
}>;

/**
 * UserInfoSearchResult Component
 */
export const UserInfoSearchResult: React.FC<Props> = memo(
  ({ code }: Props): JSX.Element => {
    console.info("render: UserInfoSearchResult Component");
    return (
      <>
        <div>
          <Code code={code} />
        </div>
      </>
    );
  }
);
