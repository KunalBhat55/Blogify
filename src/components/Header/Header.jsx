import { Container, Logout } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import { useEffect, useState } from "react";

function Header() {

  const [isAuth, setisAuth] = useState(false); 
  const authStatus = useSelector((state) => state.auth.status);
  
  useEffect(() => {
  
    
    setisAuth(authStatus)
  
  }, [authStatus])


  console.log("Auth Status: ", authStatus)

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      url: "/home",
      active: true,
    },
    {
      name: "signup",
      url: "/signup",
      active: !isAuth,
    },
    {
      name: "login",
      url: "/signin",
      active: !authStatus,
    },
    {
      name: "All Post",
      url: "/allposts",
      active: authStatus,
    },
    {
      name: "Add Post",
      url: "/addpost",
      active: authStatus,
    },
  ];

  return (

    <div className="w-full">
      <Container>
        <nav className="flex justify-between items-center">

          <div className="flex justify-center items-center flex-col mt-1">
            <div className="text-3xl font-bold text-white mr-4">
              <Link to="/"><img className="w-20 rounded-full" src={Logo} alt="logo" /></Link>
            </div>
            <div className="flex m-1">
              {navItems.map((item, index) =>
                item.active ? (
                  <div key={index} className="text-white mr-4 p-2">
                    <button onClick={() => navigate(item.url)}>
                      {item.name}
                    </button> 
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div className="flex">{isAuth ? <Logout /> : "Login to continue"}</div>
        </nav>  
      </Container>
    </div>

  );
}

export default Header;
