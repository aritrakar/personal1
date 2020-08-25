import React from "react";
//import "../bootstrap.css";
import "../index.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function NavBar2() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top"> {/* bg-dark */}
            <a className="navbar-brand" href="/">AK</a> {/* Done */}
            <div className="navbar-collapse"> {/* collapse */}
                <ul className="navbar-nav mr-auto"> {/* Done */}
                    <Link to="/"><li className="nav-item active">Home</li></Link> {/* Done */}
                    <Link to="/Projects"><li className="nav-item active">Projects</li></Link>
                    <Link to="/Pictures"><li className="nav-item active">Pictures</li></Link>
                </ul>
                <div id="social_media">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100014012589848" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aritra-kar-a792751a6/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/aritrakar" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </div>
            </div>
        </nav>
    )
}
export default NavBar2