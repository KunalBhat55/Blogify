import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Welcome() {

  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
  
    setIsActivated(true);
  
  }, []);




  return isActivated ? (
    <div>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blog</h1>
          <p className="text-lg mb-8">
            Explore and share your thoughts with the world.
          </p>
          <Link to="/home"
            href="/posts" 
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-blue-500 hover:text-white"
          >
            Explore Posts
          </Link>
        </div>
      </div>
    </div>
  ) : "Loading...";
}

export default Welcome;
