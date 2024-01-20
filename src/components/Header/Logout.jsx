import { useDispatch } from "react-redux";
import authService from "../../appwrite/services/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Logout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.status);

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };

  return isLoggedIn ? (
    <div>
      <button
        className="btn btn-primary btn-md text-gray-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  ): "Login to continue"
}

export default Logout;
