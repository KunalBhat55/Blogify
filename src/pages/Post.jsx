import { useState, useEffect } from "react";
import { Container, Loader } from "../components/index";
import appwriteService from "../appwrite/services/service";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

function Post() {
  const [post, setPost] = useState("null");
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.UserId === userData.$id : false; // check if the user is the author of the post
  console.log("isAuthor: ", userData);
  useEffect(() => {
    if (slug) {
      console.log("Post slug:", slug);
      appwriteService
        .getPost(slug)
        .then((res) => {
          if (res) {
            setPost(res);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);


  const deletePost = () => {
    appwriteService
      .deletePost(post.$id)
      .then((deleteStatus) => {
        if (deleteStatus) {
          appwriteService.deleteFile(post.featuredImage);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imgURL = post.featuredImage
    ? appwriteService.getFilePreview(post.featuredImage)
    : null;

  return post ? (
    <div className="py-8">
      <Container>
        <div>
          {imgURL ? (
            <img
              className="rounded-xl w-[25rem] "
              src={imgURL ? imgURL : <Loader />}
              alt={post.featuredImage ? post.Title : "No Image"}
            />
          ) : (
            <Loader />
          )}

          {isAuthor && (
            <div>
              <Link to={`/editpost/${post.$id}`}>
                <button className="btn btn-outline m-2">Edit</button>
              </Link>
              <button onClick={deletePost} className="btn btn-outline">
                Delete
              </button>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold">{post.Title}</h1>
          </div>
          <div>{post.content ? parse(post.content) : "No Content"}</div>
        </div>
      </Container>
    </div>
  ) : (
    "Loading..."
  );
}

export default Post;
