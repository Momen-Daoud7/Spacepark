import { render, screen } from "@testing-library/react";
import Feed from "./Feed";
import { Provider } from "react-redux";
import store from "../../../store";

describe("Feed component", () => {
  it("Should render a list of posts", async () => {
    render(
      <Provider store={store}>
        <Feed />
      </Provider>
    );

    const posts = await screen.findAllByTestId("post");

    expect(posts).toHaveLength(3);
  });
});
