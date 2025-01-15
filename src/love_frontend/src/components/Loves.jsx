import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { love_backend } from "declarations/love_backend";
import { useAuth } from "./auth";
const HomePage = () => {
  const router = useNavigate();
  const [data, setData] = useState([]);
  const { isAuthenticated, login, principal, logout } = useAuth();
  if (!isAuthenticated) {
    router("/");
  }
  useEffect(() => {
    love_backend.get_all_users().then((result) => {
      console.log(result, "results");
      setData(result);
    });
  }, []);
  console.log("data", data);
  return (
    <div className="love">
     
      <div className="div1">
        {data.length == 0 ? (
          <div className="ft">
            <h1 >No users available</h1>
            <button>
              navigate to create profile to create your profile for others to
              see you
            </button>
          </div>
        ) : (
          <div className="div3">
            {data.map((val, _index) => (
              <div className="" key={_index}>
                <div className="div2">
                  <h1 className="">
                    name<span className="span">{val.username}</span>
                  </h1>

                  <img
                    src={val?.image}
                    alt={val.username}
                   
                  />
                  <p>
                    gender<span className="span" >{val.gender}</span>
                  </p>

                  <button
                    className="buton"
                    onClick={() => router(`/aboutuser/${val.username}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
