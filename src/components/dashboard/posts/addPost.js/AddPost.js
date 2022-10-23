import PostForm from "../PostForm";
import { useDispatch } from "react-redux";
import { createPost } from "../../../../store/reducers/posts";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

const AddPost = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const submitHandler = (values) => {
    dispatch(createPost(values))
      .then(unwrapResult)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    console.log(values);
    nav("/dashboard/posts");
  };
  return (
    <div>
      <PostForm submitHandler={submitHandler} />
    </div>
  );
};

export default AddPost;
