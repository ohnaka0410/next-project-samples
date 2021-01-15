import { memo, useMemo, useState, useCallback, useEffect } from "react";
import type { Condition } from "@/components/blocks/UserInfoSearchCondition";
import type { Code } from "@/components/blocks/UserInfoSearchResult";
import { UserInfoSearchCondition } from "@/components/blocks/UserInfoSearchCondition";
import { UserInfoSearchResult } from "@/components/blocks/UserInfoSearchResult";
import { useUserInfoSearch } from "@/hooks/UserInfoSearch";

/**
 * Propsの型定義
 */
type Props = Readonly<{
  /*
   * Child Elements
   */
  children?: never;
}>;

const defaultCondition: Condition = {
  userName: "",
};

/**
 * Search Component
 */
export const UserInfoSearch: React.FC<Props> = memo(
  (_props: Props): JSX.Element => {
    console.info("render: UserInfoSearch Component");

    const [condition, setCondition] = useState<Condition>(defaultCondition);

    const { userInfo, searchUserInfo } = useUserInfoSearch();

    /**
     * 検索条件更新処理
     */
    const updateCondition = useCallback(
      (condition: Condition): void => {
        console.info("updateCondition:");
        setCondition(condition);
      },
      [setCondition]
    );

    /**
     * ユーザ情報検索処理
     */
    useEffect((): (() => void) => {
      console.log("useEffect: search user info");
      searchUserInfo({
        userId: condition.userName,
      }).catch((error) => console.error(error));
      return () => {
        console.log("useEffect: cleanup");
      };
    }, [condition]);

    /**
     * コード更新処理
     */
    const code: Code = useMemo((): string => {
      console.log("set code");
      return JSON.stringify(userInfo, null, 2);
    }, [userInfo]);

    return (
      <>
        <section>
          <UserInfoSearchCondition condition={condition} updateCondition={updateCondition} />
          <UserInfoSearchResult code={code} />
        </section>
      </>
    );
  }
);
