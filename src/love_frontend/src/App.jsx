import { useState } from 'react';
import NavBar from './components/navabar';
//import { love_backend } from 'declarations/love_backend';
import {Routes,BrowserRouter, Route} from "react-router-dom"
import Home from './components/Home';
import HomePage from './components/Loves';
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
   <NavBar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
