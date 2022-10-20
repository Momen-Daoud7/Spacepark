import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../../../store";
import PostBox from "./PostBox";

describe("PostBox component", () => {
  it("Should render correctly", () => {
    render(
      <Provider store={store}>
        <PostBox />
      </Provider>
    );

    const img = screen.getByAltText("profile");
    const textInput = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(img).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
