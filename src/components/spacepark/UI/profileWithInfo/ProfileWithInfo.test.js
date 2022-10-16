import { render, screen } from "@testing-library/react";
import ProfileWithInfo from "./ProfileWithInfo";

describe("ProfileWithInfo component", () => {
  it("Should render correctly", () => {
    render(<ProfileWithInfo profilePic="./img" name="momen" text="hi" />);

    const img = screen.getByAltText("profile");
    const name = screen.getByRole("heading", {
      level: 3,
    });
    const text = screen.getByText("hi");

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
