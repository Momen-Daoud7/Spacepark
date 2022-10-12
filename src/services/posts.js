import spacepark from "../apis/spacepark";

export const getAll = () => {
  spacepark.get("/posts");
};

export const get = (id) => {
  spacepark.get(`/posts/${id}`);
};

export const update = (id, data) => {
  spacepark.put(`/posts/${id}`, data);
};

export const deleteData = (id) => {
  spacepark.delete(`/posts/${id}`);
};

export const create = (data) => {
  spacepark.post("/posts/create", data);
};
