import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import Login from "./loginuser";

const NavBar = () => {
  const { isAuthenticated, login, principal, logout } = useAuth();
  const router=useNavigate()
  return (
    <div className=" nav">
      <div className="div1">
        <h1 className="" onClick={()=>router("/")}>LoVeMeEt</h1>
        <div className="div">
        {isAuthenticated ? (
          <div className="div9">
            <Link to="/profile" className="">
              Profile
            </Link>
            <button onClick={logout} className="butt">
              Logout
            </button>
          </div>
        ) : (
          <Login />
        )}
      </div>
      </div>
    </div>
  );
};

export default NavBar;
