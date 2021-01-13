import { memo } from "react";
import { Code } from "@/components/elements/Code";

/**
 * 検索条件
 */
export type Code = Readonly<string | undefined>;

/**
 * Propsの型定義
 */
type Props = Readonly<{
  /*
   * Child Elements
   */
  children?: React.ReactNode;
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
