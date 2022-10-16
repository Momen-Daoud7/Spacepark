import { render, screen } from "@testing-library/react";
import StoryReel from "./StoryReel";

describe("StoryReel component", () => {
  it("Should render correctly", () => {
    render(
      <StoryReel
        profilePic="./m.jppg"
        username="Momen"
        backgroundImage="./img.jpg"
      />
    );

    const username = screen.getByRole("heading", {
      level: 5,
    });
    const profilePic = screen.getByAltText("profile");
    expect(username).toBeInTheDocument();
    expect(profilePic).toBeInTheDocument();
  });
});
