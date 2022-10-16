import { render, screen } from "@testing-library/react";
import { Home } from "@material-ui/icons";
import Button from "./Button";

describe("Dashboard button", () => {
  it("Should render correctly", () => {
    render(<Button Icon={Home} text="add" />);

    const icon = document.querySelector(".MuiSvgIcon-root");
    const text = screen.getByText("add");

    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
