import { useState, useEffect } from "react";
import { Postcard, Container } from "../components/index"
import appwriteService from "../appwrite/services/service";


function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    appwriteService.getAllPosts() // we can pass query params in the array
    .then((res) => {
        if(res) {
            setPosts(res.documents);
        }
    })
    .catch((error) => {
        console.log(error);
    });

  }, []);

  if(posts.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl">
            No Post Available
          </h1>
          <p className="text-xl text-gray-400">
            Login to Create or View Posts
          </p>
        </div>
      </div>
    )
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
  )
}

export default Home