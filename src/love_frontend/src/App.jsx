import { useState } from "react";
import NavBar from "./components/navabar";
// import NavBar from "./components/navabar";
// //import { love_backend } from 'declarations/love_backend';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import Home from "./components/Home";
import HomePage from "./components/Loves";
import Profile from "./components/Profile";
import AboutUser from "./components/about";
import UpdateProfile from "./components/update-profile";
function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   love_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/aboutuser/:username" element={<AboutUser/>}/>
          <Route path="/updateuser" element={<UpdateProfile/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
