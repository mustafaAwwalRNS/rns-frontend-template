import { render } from "test-utils";
import userEvent from "@testing-library/user-event";

export const shouldBehaveLikeTextInput = (
  setup: () => ReturnType<typeof render> & { textInput: HTMLInputElement }
): void =>
  describe("a text input ", () => {
    it("should accept user input", () => {
      const { textInput } = setup();
      const typedContent = "rnsSolutions";
      userEvent.type(textInput, typedContent);
      expect(textInput).toHaveValue(typedContent);
    });
  });
