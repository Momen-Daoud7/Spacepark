import { render, screen } from "@testing-library/react";
import Post from "./Post";

describe("Post compoennt", () => {
  it("Should render correctly", () => {
    render(
      <Post
        username="Momen Daoud"
        profilePic="./a.jpg"
        timestamp="13 hours"
        postImage="./a.jpg"
        postText="anything"
      />
    );

    const profilePic = screen.getByAltText("profile");
    const postPic = screen.getByAltText("postImage");
    const text = screen.getByText("anything");
    const timestamp = screen.getByText("13 hours");
    const username = screen.getByRole("heading", {
      level: 3,
    });
    expect(profilePic).toBeInTheDocument();
    expect(postPic).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(timestamp).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});
