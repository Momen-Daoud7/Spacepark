import { rest } from "msw";

const handlers = [
  rest.get("http://localhost:5000/api/v1/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        posts: [
          {
            id: 1,
            content: "anythimg",
          },
          {
            id: 2,
            content: "walker",
          },
          {
            id: 3,
            content: "mello",
          },
        ],
      })
    );
  }),
];

export default handlers;
