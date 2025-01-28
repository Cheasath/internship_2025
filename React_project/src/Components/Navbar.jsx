import { Link } from "react-router-dom"
import "../css/Navbar.css"
const NavBar=()=>{
    return (
            <header>
                <nav>
                    <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/gallery">Gallery</Link></li>
                    <li><Link className="link" to="/Contact">Contact</Link></li>

                        <li className="dropdown">
                            <li><span className="link">Hooks</span></li>
                            <div className="dropDownContent">
                            <li><Link to="/reactlm" className="link">ReactLifeCycleMethods</Link></li>
                                <li><Link to="/use-state" className="link">useState</Link></li>
                                <li><Link to="/use-effect" className="link">useEffect</Link></li>
                                <li><Link to="/use-effect-api" className="link">useEffectAPI</Link></li>
                                <li><Link to="/use-memo" className="link">useMemo</Link></li>
                                <li><Link to="/use-ref" className="link">useRef</Link></li>
                                <li><Link to="/use-call-back" className="link">useCallback</Link></li>
                            </div>
                        </li>
                        <li className="dropdown">
                            <li><span className="link">Memoization</span></li>
                            <div className="dropDownContent">
                            <li><Link to="/memo" className="link">Memo</Link></li>
                                <li><Link to="/update-number" className="link">updatenumber</Link></li>
                                <li><Link to="/update-text" className="link">updatetext</Link></li>
                                <li><Link to='/lazy' className="link">Lazy,Suspense</Link></li>
                            </div>
                        </li>
                        <li><Link to='/' className="link" >SignUp</Link></li>
                        
                    </ul>
                </nav>
            </header>
    
    )
}
export default NavBar