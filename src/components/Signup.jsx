import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { Input } from "./index";
import authService from "../appwrite/services/auth";
import { useForm } from "react-hook-form";
import logo from "../assets/images/logo.png";
import Loader from "./Loader";
// import { useSelector } from "react-redux";


function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.auth.status);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signup = async (data) => {
    setError("");
    setLoading(true);

    setTimeout(() => {
     
      setLoading(false);
      
    }, 1000);

    try {
      const userData = await authService.createAccount(data);

      if (userData) {
        const currentUser = await authService.getCurrentUser();
        currentUser
          ? dispatch(login(currentUser))
          : setError("Error getting user data");
        navigate("/");
        console.log("User created successfully");
      } else {
        setError("Error creating user");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>

      <div className="mb-14">
        
        <div className="flex justify-center">
          <img className="w-24 rounded-full" src={logo} alt="logo" />
        </div>

        <div className="m-4">
          <h2 className="text-2xl font-bold text-center ">
            Sign Up to create an account
          </h2>
        </div>

        {error && (
          <div className="text-red-500 text-xl font-medium text-center my-2">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          {/*Form */}
          <form onSubmit={handleSubmit(signup)}>
            <div className="">
              {errors.name && (
                <span className="text-red-500 text-sm py-1">
                  {errors.name.message}
                </span>
              )}
      
              <Input
                className="mb-1 mt-1 w-[20rem]"
                placeholder="Name"
                type="text"
                {...register("name", {
                  //  connects the input field to the form state and validation rules
                  required: "Name is required",
                })}
              />

              {errors.email && (
                <span className="text-red-500 text-sm py-1">
                  {errors.email.message}
                </span>
              )}

              <Input
                className="mb-1 w-[20rem]"
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
                <span className="text-red-500 text-sm py-1">
                  {errors.password.message}
                </span>
              )}

              <Input
                autoComplete="on"
                placeholder="Password"
                type="password"
                className="mb-2 w-[20rem]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <button type="submit" className="btn my-2  btn-primary w-[20rem]">
                {loading ? <Loader /> : "Sign Up"}
              </button>
              <div className="flex ">
                <p className="mx-2">Already have an account?</p>
                <Link
                  to="/signin"
                  className="font-medium text-primary transition-all hover:underline underline-offset-8"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
