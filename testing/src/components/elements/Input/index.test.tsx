import type { Props } from "./index";
import { Input } from "./index";
import "@testing-library/jest-dom";
import type { RenderResult } from "@testing-library/react";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("Input Component", () => {
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
    const mockOnChange = jest.fn();
    const defaultText = "text";
    const defaultPlaceholder = "placeholder";
    const defaultProps: Props = {
      text: defaultText,
      placeholder: defaultPlaceholder,
      onChange: mockOnChange,
    };

    const setUp = (props: Props) => {
      const renderResult: RenderResult = render(<Input {...props} />);
      const input: HTMLInputElement = renderResult.container.querySelector("input") as HTMLInputElement;
      return {
        ...renderResult,
        input,
      };
    };

    it("props text", () => {
      const { input } = setUp({ ...defaultProps });
      expect(input.value).toBe(defaultText);
    });

    it("props placeholder", () => {
      const { input } = setUp({ ...defaultProps });
      expect(input.placeholder).toBe(defaultPlaceholder);
    });

    it("props onChange", () => {
      const newText = "huga";
      const { input } = setUp({
        ...defaultProps,
      });
      fireEvent.change(input, { target: { value: newText } });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
  });
});
