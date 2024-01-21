/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "./appwrite/services/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer, Loader } from "./components";
import Postcard from "./components/Postcard";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }));
  //       } else {
  //         dispatch(logout());
  //       }
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     })

  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  if (!loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="text-2xl">
          <Loader width={14} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[55rem] h-screen">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
