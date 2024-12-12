import { useState } from "react";
import { love_backend } from "declarations/love_backend";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
const CreateProfile = () => {
  const router = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [matchdescription, setMatchDescription] = useState("");
  const { isAuthenticated, login, principal, logout } = useAuth();

  const [image, setImage] = useState("");

  //get user
  

  const handleimage = (e) => {
    console.log(e.target.files);

    const data = new FileReader();
    data.addEventListener("load", () => setImage(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  console.log("img", image);

  const handlesubmit = (e) => {
    e.preventDefault();
  
    love_backend.create_user_profile(username,email,phonenumber,gender,location, description, image,matchdescription).then((result) => {
      console.log(result, "user1");
      alert("user profile created");
    });
  };
  return (
    <div className="">
      {isAuthenticated ? (
        <div className="border w-1/2 mx-auto p-4 rounded-md">
          <h1 className="text-center">create profile</h1>
          <form action="" onSubmit={handlesubmit}>
            <div className="flex flex-col my-3">
              <label htmlFor="">your username</label>
              <input
                type="text"
                value={username}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">your email</label>
              <input
                type="text"
                value={email}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">your phonenumber</label>
              <input
                type="text"
                value={phonenumber}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">your location</label>
              <input
                type="text"
                value={location}
                min={10}
                max={50}
                required
                className="border"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="">select your gender</label>
              <select required onChange={(e) => setGender(e.target.value)}>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="">Description of article</label>
              <textarea
                type="text"
                value={description}
                min={40}
                max={500}
                required
                className="border"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="">Image cover of article</label>
              <input type="file" required onChange={handleimage} />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="">Description of article</label>
              <textarea
                type="text"
                value={matchdescription}
                min={40}
                max={500}
                required
                className="border"
                onChange={(e) => setMatchDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="border rounded-md p-2 my-4 bg-blue-500"
              onClick={handlesubmit}
            >
              submit
            </button>
          </form>
        </div>
      ) : (
        <div className="">
          <h1 className="text-center text-sm font-bold">must be logged</h1>
        </div>
      )}
    </div>
  );
};

export default CreateProfile;
