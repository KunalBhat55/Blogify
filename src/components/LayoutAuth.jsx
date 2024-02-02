/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LayoutAuth({children, authentication = true}) {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  console.log("Auth Status Layout: ", authStatus)

  useEffect(() => {
    // other way
    authStatus ? navigate('/home') : navigate('/signin')

    // if (authentication && authStatus != authentication) {
    //   navigate("/signin");
    // } else if (!authentication && authStatus != authentication) {
    //   navigate("/");
    // }
    setLoading(false);
  }, [authStatus, navigate, authentication]);

  return (
    <div>
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <div className="text-2xl">
            <span className="loading loading-bars w-14"></span>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}

export default LayoutAuth;
