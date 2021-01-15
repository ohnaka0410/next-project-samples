import type { UserInfo, SearchUserInfoParameters } from "./index";
import { useUserInfoSearch } from "./index";
import "@testing-library/jest-dom";
import { typedFetch } from "@/libs/TypedFetch";
jest.mock("@/libs/TypedFetch");
import { renderHook, act } from "@testing-library/react-hooks";

describe("Input Component", () => {
  beforeAll(() => {
    // console.log("beforeAll");
  });
  beforeEach(() => {
    // console.log("beforeEach");
  });
  afterEach(() => {
    // console.log("afterEach");
    jest.resetModules();
  });
  afterAll(() => {
    // console.log("afterAll");
  });

  const defaultUserId = "ohnaka0410";
  const defaultParams: SearchUserInfoParameters = {
    userId: defaultUserId,
  };
  const defaultMockResult: UserInfo = {
    id: defaultUserId,
  };

  const setUp = () => {
    (typedFetch as jest.Mock).mockReturnValue({
      ...defaultMockResult,
    });

    const result = renderHook(() => {
      return useUserInfoSearch();
    });
    return {
      ...result,
    };
  };

  it("normal", async () => {
    const { result } = setUp();
    await act(
      async (): Promise<void> => {
        await result.current.searchUserInfo(defaultParams);
      }
    );
    expect(result.current.userInfo?.id).toBe(defaultUserId);
  });
});
