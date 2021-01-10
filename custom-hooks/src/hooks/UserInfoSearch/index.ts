import { useCallback } from "react";
import { typedFetch } from "@/libs/TypedFetch";

export type UserInfo = {};

type GetUserInfo = (userId: string) => Promise<UserInfo>;

export const useUserInfoSearch = (): [GetUserInfo] => {
  const getUserInfo: GetUserInfo = useCallback(async (userId: string): Promise<UserInfo> => {
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
    return result;
  }, []);

  return [getUserInfo];
};
