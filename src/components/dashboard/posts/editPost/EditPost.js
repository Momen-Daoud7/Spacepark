import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updatePost, getPost } from "../../../../store/reducers/posts";
import PostForm from "../PostForm";

const EditPost = () => {
  const post = useSelector((state) => state.posts.posts);
  const param = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const submitHandler = (values) => {
    console.log(values);
    dispatch(updatePost({ id: param.id, data: values }))
      .then(unwrapResult)
      .then((data) => console.log(data));
    nav("/dashboard/posts");
  };
  useEffect(() => {
    const display = async () => {
      await dispatch(getPost(param.id)).unwrap();
    };

    display();
  }, [param.id, dispatch]);
  console.log(post[0]);
  return (
    <div>
      {post[0] && (
        <PostForm submitHandler={submitHandler} savedValues={post[0]} />
      )}
    </div>
  );
};

export default EditPost;
