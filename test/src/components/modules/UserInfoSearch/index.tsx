import { useState, useCallback } from "react";

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

const defaultCode: Code = "";

/**
 * Search Component
 */
export const UserInfoSearch: React.FC<Props> = (_: Props): JSX.Element => {
  console.info("render: UserInfoSearch Component");

  const [condition, setCondition] = useState<Condition>(defaultCondition);
  const [code, setCode] = useState<Code>(defaultCode);

  const [getUserInfo] = useUserInfoSearch();

  const updateCondition = useCallback((dispatch: (prevCondition: Condition) => Condition): void => {
    console.info("updateCondition:");
    setCondition(
      (prevCondition: Condition): Condition => {
        console.info("setCondition");
        const nextCondition = dispatch(prevCondition);
        console.info(nextCondition);
        // TODO:できれば外に出したい
        getUserInfo(nextCondition.userName || "")
          .then((result) => {
            updateCode(JSON.stringify(result, null, 2));
          })
          .catch((error) => {
            console.error(error);
          });
        return nextCondition;
      }
    );
  }, []);

  const updateCode = (nextCode: Code): void => {
    setCode(nextCode);
  };

  return (
    <>
      <section>
        <UserInfoSearchCondition condition={condition} updateCondition={updateCondition} />
        <UserInfoSearchResult code={code} />
      </section>
    </>
  );
};
