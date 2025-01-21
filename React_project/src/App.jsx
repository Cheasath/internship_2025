import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ClassCompEG from './Components/ClassCompEG.jsx'; 
import Contact from './Components/Contact.jsx';
import Gallery from './Components/Gallery.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
       <ClassCompEG />
       <Contact/>
       <Gallery image="SECE Logo" />
    </div>
   
  );
}

export default App;
