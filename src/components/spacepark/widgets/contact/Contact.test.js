import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact component", () => {
  it("Should render correctly", () => {
    render(<Contact profilePic="./img" name="momen" />);

    const img = screen.getByAltText("profile");
    const name = screen.getByRole("heading", {
      level: 3,
    });

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
