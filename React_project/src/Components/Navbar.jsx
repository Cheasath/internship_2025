import {Link} from 'react-router-dom'
import { useState } from 'react'
import '../css/Navbar.css';
const Navbar=()=>{
    var [dropdown,setdd]=useState(false)
    return(
        <header>
            <nav>
            <ol>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/about'>About</Link></li>
                    <li><Link className='link' to='/gallery'>Gallery</Link></li>
                    <li><Link className='link' to='/Contact'>Contact</Link></li>
                    <div onMouseOver={()=>setdd(true)} onMouseLeave={()=>setdd(false)}>
                        <span className='link'>Hooks</span>
                        {dropdown &&(
                        <ul>
                            <li><Link to='/use-state' className='link'>useState</Link></li>
                            <li><Link to='/use-effect' className='link'>useEffect</Link></li>
                            <li><Link to='/use-effect-api' className='link'>useEffectAPI</Link></li>
                            <li><Link to='/use-memo' className='link'>useMemo</Link></li>
                            <li><Link to='/use-ref' className='link'>useRef</Link></li>
                        </ul>
                    )}
                    </div>
                    <li><Link className='link' to='/signup'>SignUp</Link></li>
                </ol>
            </nav>
        </header>
        
    )
}

export default Navbar