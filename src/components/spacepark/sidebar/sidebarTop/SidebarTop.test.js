import { render, screen } from "@testing-library/react";
import SidebarTop from "./SidebarTop";

describe("SidebarTop component", () => {
  it("Should render correctly", () => {
    render(<SidebarTop />);

    const img = screen.getByAltText("profile");
    const name = screen.getByRole("heading", {
      level: 3,
    });
    const text = screen.getByText("@momendaoud");

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
