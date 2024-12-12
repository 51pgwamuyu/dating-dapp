import { useEffect, useState } from "react";
import { love_backend } from "declarations/love_backend";
import { useAuth } from "./auth";

import CreateProfile from "./create-profile";
const Profile = () => {
  const [created, setCreated] = useState(false);
  const[user,setUser]=useState("");
  const [data, setData] = useState("");
  const { isAuthenticated, login, principal,identity, logout } = useAuth();
  console.log("priffgfgfgfgfgfgfgfncipal",principal)
  useEffect(() => {
     
    love_backend. whoami().then((result) => {
      console.log(result, "resultsdata");
      setUser(result);
    });
        
    love_backend.check_user(user).then((result) => {
      console.log(result, "resultsdata");
      setData(result);
    });
  }, []);
  return (
    <div className="maz-w-[1300px] mx-auto">
      {data ? (
        <>
          <UpdateProfile />
        </>
      ) : (
        <>
          <CreateProfile />
        </>
      )}
    </div>
  );
};

export default Profile;
