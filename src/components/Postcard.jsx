/* eslint-disable react/prop-types */
import appwriteService from "../appwrite/services/service";
import { Link } from "react-router-dom";
// preview post
function Postcard({ $id, title, featuredImage }) {

  const imgUrl = appwriteService.getFilePreview(featuredImage);

  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="card-normal w-96 bg-base-100 shadow-xl border ">
          <figure className="px-10 pt-10">
            <img
              src={imgUrl}
              alt={title}   
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
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
