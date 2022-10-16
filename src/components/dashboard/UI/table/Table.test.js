import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table component", () => {
  const headers = ["ID", "Name", "Email"];
  const items = [
    { id: 1, user: "ahmed", email: "momen@mail.com" },
    { id: 2, user: "ahmed", email: "momen@mail.com" },
  ];
  it("should render correctly", () => {
    render(<Table headers={headers} data={items} />);

    const table = screen.getByRole("table");
    const tableHeaders = screen.getAllByTestId("header");
    const data = screen.getAllByTestId("data");

    expect(table).toBeInTheDocument();
    expect(tableHeaders).toHaveLength(3);
    expect(data).toHaveLength(2);
  });
});
