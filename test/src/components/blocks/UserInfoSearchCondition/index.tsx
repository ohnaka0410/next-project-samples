import { memo, useCallback } from "react";

import { Input } from "@/components/elements/Input";

/**
 * 検索条件
 */
export type Condition = Readonly<{
  /**
   * ユーザ名
   */
  userName: string;
}>;

/**
 * Propsの型定義
 */
export type Props = Readonly<{
  /*
   * Child Elements
   */
  children?: never;
  /**
   * Condition
   */
  condition: Condition;
  /**
   * update Condition
   */
  updateCondition: (condition: Condition) => void;
}>;

/**
 * UserInfoSearchCondition Component
 */
export const UserInfoSearchCondition: React.FC<Props> = memo(
  ({ condition, updateCondition }: Props): JSX.Element => {
    console.info("render: UserInfoSearchCondition Component");

    const onChangeUserName = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.info("onChange");
        updateCondition({
          ...condition,
          userName: event.target.value,
        });
      },
      [updateCondition]
    );

    return (
      <>
        <div>
          <Input text={condition.userName} placeholder="user name" onChange={onChangeUserName} />
        </div>
      </>
    );
  }
);
