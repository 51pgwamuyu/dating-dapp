import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import Login from "./loginuser";

const NavBar = () => {
  const { isAuthenticated, login, principal, logout } = useAuth();
  const router=useNavigate()
  return (
    <div className=" w-full h-[100vh">
      <div className="flex justify-between items-center px-2 pt-3">
        <h1 className="font-bold cursor-pointer" onClick={()=>router("/")}>LoVeMeEt</h1>
        <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="hover:text-blue-300 transition-colors duration-200">
              Profile
            </Link>
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </>
        ) : (
          <Login />
        )}
      </div>
      </div>
    </div>
  );
};

export default NavBar;
