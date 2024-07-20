import { useContext, useRef } from "react";
import { PostList as newPostList } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(newPostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            <strong>Enter you userId here.</strong>
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userId"
            placeholder="Your userId Here!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <strong>POST TITLE</strong>
          </label>
          <input
            type="text"
            className="form-control"
            ref={postTitleElement}
            id="title"
            placeholder="How are you feeling Today..!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            <strong>POST CONTENT</strong>
          </label>
          <textarea
            rows={9}
            type="text"
            className="form-control"
            ref={postBodyElement}
            id="body"
            placeholder="Tell Us more about it??"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            <strong>Number of Reactions😍</strong>
          </label>
          <input
            type="text"
            className="form-control"
            ref={reactionsElement}
            id="reactions"
            placeholder="How many people reacted to your post!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            <strong>Enter you HashTags</strong>
          </label>
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="tags"
            placeholder="Enter tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default CreatePost;
