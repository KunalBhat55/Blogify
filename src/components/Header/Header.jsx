import { Container, Logout } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

function Header() {
  const [isAuth, setisAuth] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    setisAuth(authStatus);
  }, [authStatus]);

  console.log("Auth Status: ", authStatus);

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
          <div className="flex justify-center items-center flex-col m-2">
            <div className="text-3xl font-bold text-white ">
              <Link to="/">
                <img className="w-20 rounded-full" src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="flex justify-center">
              {navItems.map((item, index) =>
                item.active ? (
                  <div key={index} className="text-white p-2 m-2">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "underline underline-offset-8 font-bold transition-all"
                            : "text-gray-400 font-bold transition-all"
                        } hover:text-gray-200 transition-all`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div className="flex">
            {isAuth && <Logout /> }
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
