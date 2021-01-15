import { useState, useCallback } from "react";
import { typedFetch } from "@/libs/TypedFetch";

export type UserInfo = Readonly<{
  id: string;
}> | null;

export type SearchUserInfoParameters = Readonly<{ userId: string }>;

export type SearchUserInfo = (parameters: SearchUserInfoParameters) => Promise<void>;

/**
 * UserInfoSearch hook
 */
export const useUserInfoSearch = (): { userInfo: UserInfo; searchUserInfo: SearchUserInfo } => {
  const [userInfo, setUserInfo] = useState<UserInfo>(null);

  const searchUserInfo: SearchUserInfo = useCallback(
    async ({ userId }: SearchUserInfoParameters): Promise<void> => {
      try {
        const result: UserInfo = await typedFetch<UserInfo>(`https://qiita.com/api/v2/users/${userId}`, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        });
        setUserInfo(result);
      } catch (error) {
        setUserInfo(null);
      }
    },
    [setUserInfo]
  );

  return { userInfo, searchUserInfo };
};
