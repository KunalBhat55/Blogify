import { useState, useEffect } from "react";
import { Postform, Container, Loader } from "../components/index"
import appwriteService from "../appwrite/services/service";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
 
  const [post, setPost] = useState([]);
  const {slug} = useParams();
  const navigate = useNavigate();
   
  useEffect(() => {

    if(slug){
     
        appwriteService.getPost(slug)
        .then((res) => {
            if(res) {
                setPost(res);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    
    }
    else {
        navigate('/');
    }

  }, [slug, navigate]);

  return (
    <div>
        {post ? (
          <div>
            <Container>
                <Postform post={post} />
            </Container>
          </div>
        
        ) :
          <Loader />
        }
    </div>
  )
}

export default EditPost