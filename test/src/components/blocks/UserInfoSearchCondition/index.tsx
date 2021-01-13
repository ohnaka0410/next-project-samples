import { memo, useCallback } from "react";

import { Input } from "@/components/elements/Input";

/**
 * 検索条件
 */
export type Condition = Readonly<{
  /**
   * ユーザ名
   */
  userName?: string;
}>;

/**
 * Propsの型定義
 */
type Props = Readonly<{
  /*
   * Child Elements
   */
  children?: Node;
  /**
   * Condition
   */
  condition: Condition;
  /**
   * update Condition
   */
  updateCondition: (dispatch: (prevCondition: Condition) => Condition) => void;
}>;

/**
 * UserInfoSearchCondition Component
 */
export const UserInfoSearchCondition: React.FC<Props> = memo(
  ({ condition, updateCondition }: Props): JSX.Element => {
    console.info("render: UserInfoSearchCondition Component");

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
      console.info("onChange");
      updateCondition((prevCondition) => {
        console.info(prevCondition);
        return {
          ...prevCondition,
          userName: event.target.value,
        };
      });
    }, []);

    return (
      <>
        <div>
          <Input text={condition.userName} placeholder="user name" onChange={onChange} />
        </div>
      </>
    );
  }
);
