import type { Props } from "./index";
import { Code } from "./index";
import "@testing-library/jest-dom";
import type { RenderResult } from "@testing-library/react";
import { render, cleanup } from "@testing-library/react";

describe("Code Component", () => {
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
    const defaultCode = "code";
    const defaultProps: Props = {
      code: defaultCode,
    };

    const setUp = (props: Props) => {
      const renderResult: RenderResult = render(<Code {...props} />);
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
