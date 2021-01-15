import type { Code, Props } from "./index";
import { UserInfoSearchResult } from "./index";
import "@testing-library/jest-dom";
import type { RenderResult } from "@testing-library/react";
import { render, cleanup } from "@testing-library/react";

describe("UserInfoSearchResult Component", () => {
  beforeAll(() => {
    // console.log("beforeAll");
  });
  beforeEach(() => {
    // console.log("beforeEach");
  });
  afterEach(() => {
    // console.log("afterEach");
    cleanup();
  });
  afterAll(() => {
    // console.log("afterAll");
  });
  describe("render", () => {
    const defaultCode: Code = "code";
    const defaultProps: Props = {
      code: defaultCode,
    };

    const setUp = (props: Props) => {
      const renderResult: RenderResult = render(<UserInfoSearchResult {...props} />);
      return {
        ...renderResult,
      };
    };

    it("props code", () => {
      const { getByText } = setUp(defaultProps);
      expect(getByText(defaultCode)).toBeInTheDocument();
    });
  });
});
