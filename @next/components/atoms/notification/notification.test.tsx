import { render, screen } from "test-utils";
import { Notification } from "./notification.atom";

const setup = () => {
  const text = "Notification";
  render(<Notification notification={text} />);
  const notification = screen.getByText(text);
  return { notification };
};

describe("<Notification />", () => {
  it("should render proper given text", () => {
    const { notification } = setup();
    expect(notification).toBeInTheDocument();
  });
});
