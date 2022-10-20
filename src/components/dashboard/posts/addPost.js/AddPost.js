import PostForm from "../PostForm";

const AddPost = () => {
  const submitHandler = (values) => {
    console.log(values);
  };
  return (
    <div>
      <PostForm submitHandler={submitHandler} />
    </div>
  );
};

export default AddPost;
