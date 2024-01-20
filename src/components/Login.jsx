import { useState } from "react";
import { Link } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/services/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Loader from "./Loader";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setError("");

    setLoading(true);

    setTimeout(() => {
     
      setLoading(false);
      
    }, 1000);

    try {
      const session = await authService.login(data);
      if (session) {

        const userData = await authService.getCurrentUser();
        console.log("User Data: ",userData)
        userData ? dispatch(authLogin(userData)) : setError("Error getting user data");
        if(userData){
          dispatch(authLogin(userData))
        }

        navigate("/");

      } else {
        setError("email or password is incorrect");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img className="w-24 rounded-full" src={logo} alt="logo" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-center ">
            Sign in to your account
          </h2>
        </div>
        {error && (
          <div className="text-red-500 text-xl font-medium text-center my-2">
            {error}
          </div>
        )}
        <div className="flex justify-center">
          {/*Form */}
          <form onSubmit={handleSubmit(login)}>
            <div className="m-1 p-1">
              {errors.email && (
                <span className="text-red-500 text-sm my-4">
                  {errors.email.message}
                </span>
              )}
              <Input
                className="mb-2 w-full"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm my-4">
                  {errors.password.message}
                </span>
              )}

              <Input
                autoComplete="on"
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <button type="submit" className="btn my-1  btn-primary w-full">
                {loading ? <Loader /> : "Sign In"}
              </button>
              <br />
              <p className="inline m-2">Don&apos;t have an account?</p>
              <Link
                to="/signup"
                className="font-medium text-primary transition-all hover:underline underline-offset-8"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
