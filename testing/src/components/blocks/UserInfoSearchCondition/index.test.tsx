import type { Condition, Props } from "./index";
import { UserInfoSearchCondition } from "./index";
import "@testing-library/jest-dom";
import type { RenderResult } from "@testing-library/react";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("UserInfoSearchCondition Component", () => {
  beforeAll(() => {
    // console.log("beforeAll");
  });
  beforeEach(() => {
    // console.log("beforeEach");
    jest.resetAllMocks();
  });
  afterEach(() => {
    // console.log("afterEach");
    cleanup();
  });
  afterAll(() => {
    // console.log("afterAll");
  });
  describe("render", () => {
    const mockUpdateCondition = jest.fn();
    const defaultUserName = "userName";
    const defaultCondition: Condition = {
      userName: defaultUserName,
    };
    const defaultProps: Props = {
      condition: defaultCondition,
      updateCondition: mockUpdateCondition,
    };

    const setUp = (props: Props) => {
      const renderResult: RenderResult = render(<UserInfoSearchCondition {...props} />);
      return {
        ...renderResult,
      };
    };

    it("props condition.userName", () => {
      const { getByDisplayValue } = setUp(defaultProps);
      expect(getByDisplayValue(defaultUserName)).toBeInTheDocument();
    });

    it("props updateCondition", () => {
      const userName = "userName2";

      const { getByDisplayValue } = setUp({
        ...defaultProps,
      });
      fireEvent.change(getByDisplayValue(defaultUserName), { target: { value: userName } });
      expect(mockUpdateCondition).toHaveBeenCalledTimes(1);
      expect(mockUpdateCondition).toHaveBeenCalledWith({
        ...defaultCondition,
        userName,
      });
    });
  });
});
