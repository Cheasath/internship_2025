import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    // Define the toggleDropdown function
    const toggleDropdown = () => {
        setDropdown((prevState) => !prevState);
    };

    return (
        <header>
            <nav>
                <ol>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/gallery">Gallery</Link></li>
                    <li><Link className="link" to="/Contact">Contact</Link></li>
                    
                    {/* Dropdown Menu for Hooks */}
                    <div
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                        style={{ position: 'relative', display: 'inline-block' }}
                    >
                        <span>Hooks</span>
                        {dropdown && (
                            <ul
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: '10px',
                                    color: 'black',
                                    backgroundColor: 'brown',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '5px',
                                    zIndex: 1,
                                }}
                            >
                                <li><Link to="/reactlm" className="link">ReactLifeCycleMethods</Link></li>
                                <li><Link to="/use-state" className="link">useState</Link></li>
                                <li><Link to="/use-effect" className="link">useEffect</Link></li>
                                <li><Link to="/use-effect-api" className="link">useEffectAPI</Link></li>
                                <li><Link to="/use-memo" className="link">useMemo</Link></li>
                                <li><Link to="/use-ref" className="link">useRef</Link></li>
                                <li><Link to="/use-call-back" className="link">useCallback</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* Dropdown Menu for Memoisation */}
                    <div
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                        style={{ position: 'relative', display: 'inline-block' }}
                    >
                        <span>Memoisation</span>
                        {dropdown && (
                            <ul
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: '10px',
                                    color: 'black',
                                    backgroundColor: 'brown',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '5px',
                                    zIndex: 1,
                                }}
                            >
                                <li><Link to="/memo" className="link">Memo</Link></li>
                                <li><Link to="/update-number" className="link">updatenumber</Link></li>
                                <li><Link to="/update-text" className="link">updatetext</Link></li>
                            </ul>
                        )}
                    </div>

                    <li><Link className="link" to="/signup">SignUp</Link></li>
                </ol>
            </nav>
        </header>
    );
};

export default Navbar;
