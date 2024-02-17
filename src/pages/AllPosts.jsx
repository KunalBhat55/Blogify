import { useState, useEffect } from "react";
import { Postcard, Container } from "../components/index";
import appwriteService from "../appwrite/services/service";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getAllPosts([]) // we can pass query params in the array
      .then((res) => {
        if (res) {
          setPosts(res.documents);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <div className="grid gap-2 sm:grid-cols-2">
          {posts.map((post) => (
            <Postcard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
