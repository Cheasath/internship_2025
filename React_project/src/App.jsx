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
import Signup from './Components/Signup.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseState from './Components/UseState.jsx';
import UseEffect from './Components/UseEffect.jsx';
import UseEffectApi from './Components/UseEffectApi.jsx';
import UseReducer from './Components/UseReducer.jsx';
import UseMemo from './Components/UseMemo.jsx';
import UseRef from './Components/UseRef.jsx';
import UseCallback from './Components/UseCallBack.jsx';
import ReactLifecycleMethods from './Components/ReactLifeCycleMethods.jsx';
import Memo from './Memoization/Memo.jsx';
import UpdateNumber from './Memoization/UpdateNumber.jsx';
import UpdateText from './Memoization/UpdateText.jsx';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
       <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/gallery' element={< Gallery image="React LOGO" page="picture"/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/use-state' element={<UseState/>}> </Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/use-effect' element={<UseEffect/>}> </Route>
          <Route path='/use-effect-api' element={<UseEffectApi/>}> </Route>
          <Route path='/use-reducer' element={<UseReducer/>}> </Route>
          <Route path='/use-ref' element={<UseRef/>}> </Route>
          <Route path='/use-memo' element={<UseMemo/>}></Route> 
          <Route path='/use-call-back' element={<UseCallback/>}> </Route>
          <Route path='/reactlm' element={<ReactLifecycleMethods/>}> </Route>
          <Route path="/memo" element={<Memo />} />
          <Route path="/update-number" element={<UpdateNumber />} />
          <Route path="/update-text" element={<UpdateText />} />
        </Routes>         
    </BrowserRouter>
       
    </div>
   
  );
}

export default App;
