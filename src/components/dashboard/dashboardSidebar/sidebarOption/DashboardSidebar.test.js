import { render, screen } from "@testing-library/react";
import DashboardSidebar from "../DashboardSidebar";

describe("DashboardSidebar", () => {
  it("Should render correctly", () => {
    render(<DashboardSidebar />);

    const heading = screen.getByRole("heading", {
      level: 1,
    });

    expect(heading).toBeInTheDocument();
  });
});
