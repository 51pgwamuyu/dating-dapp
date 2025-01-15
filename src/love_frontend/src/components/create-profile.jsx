import { useState } from "react";
import { love_backend } from "declarations/love_backend";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
const CreateProfile = () => {
  const router = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
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

    love_backend
      .create_user_profile(
        username,
        email,
        phonenumber,
        gender,
        location,
        description,
        image,
        matchdescription
      )
      .then((result) => {
        console.log(result, "user1");
        alert(result.ok);
      });
  };
  return (
    <div className="">
      {isAuthenticated ? (
        <div className="create">
          <div className="">
            <h1 className="">create profile</h1>
            <p className="">or already registered </p>

            <button
              className=""
              onClick={() => router(`/updateuser`)}
            >
              update your details
            </button>
          </div>
          <form action="" onSubmit={handlesubmit} className="form1">
            <div className="">
              <label htmlFor="">your username</label>
              <input
                type="text"
                value={username}
                min={10}
                max={50}
                required
                className=""
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">your email</label>
              <input
                type="text"
                value={email}
                min={10}
                max={50}
                required
                className=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">your phonenumber</label>
              <input
                type="text"
                value={phonenumber}
                min={10}
                max={50}
                required
                className=""
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">your location</label>
              <input
                type="text"
                value={location}
                min={10}
                max={50}
                required
                className=""
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="">
              <label htmlFor="">select your gender</label>
              <select required onChange={(e) => setGender(e.target.value)} value={gender}>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="">Description of Yoourself</label>
              <textarea
                type="text"
                value={description}
                min={40}
                max={500}
                required
                className=""
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="">Image cover of yourself</label>
              <input type="file" required onChange={handleimage} />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="">Description of your match</label>
              <textarea
                type="text"
                value={matchdescription}
                min={40}
                max={500}
                required
                className=""
                onChange={(e) => setMatchDescription(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="submit"
              onClick={handlesubmit}
            >
              submit
            </button>
          </form>
        </div>
      ) : (
        <div className="">
          <h1 className="not">must be logged</h1>
        </div>
      )}
    </div>
  );
};

export default CreateProfile;
