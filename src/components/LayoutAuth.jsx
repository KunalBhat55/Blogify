/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

function LayoutAuth({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  console.log("Auth Status Layout: ", authStatus);

  useEffect(() => {
    // other way
    authStatus ? navigate("/home") : navigate("/signin");

    // if (authentication && authStatus != authentication) {
    //   navigate("/signin");
    // } else if (!authentication && authStatus != authentication) {
    //   navigate("/");
    // }
    setLoading(false);
  }, [authStatus, navigate]);

  return <div>{loading ? <Loader /> : <>{children}</>}</div>;
}

export default LayoutAuth;
