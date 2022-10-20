import PostForm from "../PostForm";
import { useDispatch } from "react-redux";
import { createPost } from "../../../../store/reducers/posts";
import { unwrapResult } from "@reduxjs/toolkit";

const AddPost = () => {
  const dispatch = useDispatch();
  const submitHandler = (values) => {
    dispatch(createPost(values))
      .then(unwrapResult)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    console.log(values);
  };
  return (
    <div>
      <PostForm submitHandler={submitHandler} />
    </div>
  );
};

export default AddPost;
