import { useState, useEffect } from "react";
import { Postcard, Container } from "../components/index";
import appwriteService from "../appwrite/services/service";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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

  if (posts.length === 0) {
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
  return (
    <div>
      <Container>
        <div>
          <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => (
              <Postcard key={post.$id} {...post} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
