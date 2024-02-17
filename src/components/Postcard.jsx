/* eslint-disable react/prop-types */
import appwriteService from "../appwrite/services/service";
import { Link } from "react-router-dom";
// preview post
function Postcard({ $id, Title, featuredImage }) {
  const imgUrl = appwriteService.getFilePreview(featuredImage);

  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="card-normal m-2 bg-base-100 shadow-xl border ">
          <figure className="px-10 pt-10">
            <img src={imgUrl} alt={Title} className="rounded-lg" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{Title}</h2>
            <p>Click To view full Blog</p>
            <div className="card-actions">
              <button className="btn btn-primary">View Post</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Postcard;
