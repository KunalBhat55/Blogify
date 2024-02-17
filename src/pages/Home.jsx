import { useState, useEffect } from "react";
import { Postcard, Container } from "../components/index";
import appwriteService from "../appwrite/services/service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const isAuthor = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService
      .getAllPosts() // we can pass query params in the array
      .then((res) => {
        if (res) {
          setPosts(res.documents);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!isAuthor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No Post Available</h1>
          <p className="mb-8">Login to Create or View Posts</p>

          <button
            onClick={() => navigate("/signin")}
            className=" text-white btn btn-primary"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
  return posts ? (
    <div>
      <Container>
        <div>
          <div className="grid grid-cols-2">
            {posts?.map((post) => (
              <Postcard key={post.$id} {...post} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  ): "Loading...";
}

export default Home;
