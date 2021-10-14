import React from "react";
import { render, screen } from "test-utils";
import { UserAvatarProps } from "./user-avatar.types";
import { UserAvatar } from "./user-avatar.molecule";

const props: UserAvatarProps = {
  username: "tester",
  imageSrc: "http://test-image",
  imageAlt: "test",
};
const setup = () => {
  render(<UserAvatar {...props} />);
  const userAvatar = screen.getByText(props.username);
  const image = screen.getByRole("img");
  return { userAvatar, image };
};

describe("<UserAvatar />", () => {
  it("should render text and image", () => {
    const { userAvatar, image } = setup();
    expect(userAvatar).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
