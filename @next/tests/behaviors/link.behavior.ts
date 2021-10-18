import { render } from "test-utils";
import singletonRouter from "next/router";
import mockRouter from "next-router-mock";
import userEvent from "@testing-library/user-event";
jest.mock("next/dist/client/router", () => require("next-router-mock"));

/**
 * shouldBehaveLikeLink
 *
 * Features:
 * - Tests common link behaviors.
 */
export const shouldBehaveLikeLink = (
  setup: () => ReturnType<typeof render> & {
    link: HTMLElement;
    linkRoute: string;
  }
): void =>
  describe("a link", () => {
    beforeEach(() => mockRouter.setCurrentUrl("/some-random-route"));
    it("should render", () => {
      const { link } = setup();
      expect(link).toBeInTheDocument();
    });
    it("should have a href attribute", () => {
      const { link } = setup();
      expect(link).toHaveAttribute("href");
    });
    it("should change route on click", () => {
      const { link, linkRoute } = setup();
      userEvent.click(link);
      expect(singletonRouter).toMatchObject({ asPath: linkRoute });
    });
  });
