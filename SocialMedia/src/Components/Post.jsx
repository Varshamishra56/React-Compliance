import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListnew } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListnew);

  return (
    <>
      <div className="row mb-2">
        <div
          className="col-md-6 post-card"
          style={{ width: "79%", margin: "16px 8px" }}
        >
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">
                <span
                  className="badge text-bg-info"
                  style={{ fontSize: "15px" }}
                >
                  😀 Reactions: Likes: {post.reactions.likes}, Dislikes:{" "}
                  {post.reactions.dislikes}
                </span>
              </strong>
              <h3 className="mb-0">
                <a className="text-dark">
                  {post.title}
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    onClick={() => deletePost(post.id)}
                  >
                    <MdDelete />
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">{post.body}</p>
              <div style={{ display: "flex", flexWrap: "nowrap" }}>
                {post.tags.map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="hashtag"
                    style={{ textDecoration: "none", margin: "2px" }}
                  >
                    #{tag}
                  </a>
                ))}
              </div>
            </div>
            <img
              className="card-img-right flex-auto d-none d-lg-block"
              data-src="holder.js/200x250?theme=thumb"
              alt="Thumbnail [200x250]"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_190c58eab0f%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_190c58eab0f%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.20000076293945%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              data-holder-rendered="true"
              style={{ width: "200px", height: "250px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
