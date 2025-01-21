import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ClassCompEG from './Components/ClassCompEG.jsx'; 
import Contact from './Components/Contact.jsx';
import Gallery from './Components/Gallery.jsx';
import Home from './Components/Home.jsx';
import About from './About.jsx';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
       <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/gallery' element={< Gallery image="React LOGO" page="picture"/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>         
    </BrowserRouter>
       
    </div>
   
  );
}

export default App;
