/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LayoutAuth({ authentication = true }) {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth);

  useEffect(() => {
    // other way
    // authStatus ? navigate('/') : navigate('/login')

    if (authentication && authStatus != authentication) {
      navigate("/login");
    } else if (!authentication && authStatus != authentication) {
      navigate("/");
    }
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
        <h1>Something</h1>
      )}
    </div>
  );
}

export default LayoutAuth;
