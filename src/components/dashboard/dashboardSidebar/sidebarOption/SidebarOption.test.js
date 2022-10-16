import { render, screen } from "@testing-library/react";
import { Home } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

describe("Dashboard SidebarOption component", () => {
  it("Should render correctly", () => {
    render(<SidebarOption Icon={Home} title="Home" />);

    const icon = document.querySelector(".MuiSvgIcon-root");
    const title = screen.getByRole("heading", {
      level: 3,
    });

    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
