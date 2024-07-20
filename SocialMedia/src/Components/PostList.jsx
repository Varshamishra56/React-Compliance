import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  // const [datafetched, setDataFetched] = useState(false);
  // if (!datafetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);
  return (
    <>
      {postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
