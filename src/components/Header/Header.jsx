import { Container, Logout } from "../index";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo.png";
import { useMemo } from "react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = useMemo(() => [
    { name: "Home", url: "/home", active: true },
    { name: "Signup", url: "/signup", active: !authStatus },
    { name: "Login", url: "/signin", active: !authStatus },
    { name: "All Posts", url: "/allposts", active: authStatus },
    { name: "Add Post", url: "/addpost", active: authStatus },
  ], [authStatus]);

  return (
    <div className="w-full">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex flex-col items-center m-2">
            <Link to="/">
              <img className="w-20 rounded-full" src={Logo} alt="logo" />
            </Link>
            <div className="flex">
              {navItems.map((item, index) => 
                item.active && (
                  <NavLink
                    key={index}
                    to={item.url}
                    className={({ isActive }) =>
                      `text-white p-2 m-2 ${
                        isActive
                          ? "underline underline-offset-8 font-bold"
                          : "text-gray-400 font-bold"
                      } hover:text-gray-200 transition-all`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </div>
          {authStatus && <Logout />}
        </nav>
      </Container>
    </div>
  );
}

export default Header;
