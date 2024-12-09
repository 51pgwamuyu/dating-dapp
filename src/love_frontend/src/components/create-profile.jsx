import { useState } from "react";
//import { articles_backend } from "declarations/articles_backend";
//import { useAuth } from "./use-auth";
const CreateProfile = () => {
  const [isAuthenticated, setAuth] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenuber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [matchdescriptioon, setMatchDescription] = useState("");
  //const { isAuthenticated, login, principal, logout } = useAuth();

  const [image, setImage] = useState("");
  const handleimage = (e) => {
    console.log(e.target.files);

    const data = new FileReader();
    data.addEventListener("load", () => setImage(data.result));
    data.readAsDataURL(e.target.files[0]);
  };
  console.log("img", image);

  const handlesubmit = (e) => {
    // e.preventDefault();
    // const data = {
    //   articleTitle: title,
    //   articledescription: description,
    //   articleAvatar: image,
    // };
    // articles_backend.writeArticle(title, description, image).then((result) => {
    //   console.log(result, "add article");
    //   alert("article added");
    // });
  };
  return (
    <div className="">
      {isAuthenticated ? (
        <div className="border w-1/2 mx-auto p-4 rounded-md">
          <h1 className="text-center">Add an article</h1>
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
                value={phonenuber}
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
                value={matchdescriptioon}
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
