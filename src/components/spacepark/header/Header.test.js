import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header compoenent", () => {
  it("Should render correctly", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", {
      level: 3,
    });
    const icons = document.querySelectorAll(".MuiSvgIcon-root");
    const img = screen.getByAltText("profile");

    expect(heading).toBeInTheDocument();
    expect(icons).toHaveLength(4);
    expect(img).toBeInTheDocument();
  });
});
