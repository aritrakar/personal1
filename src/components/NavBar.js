import React from 'react';
import "../index.css"

function NavBar() {
    return (
        <div>
            <ul className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </div>
    )
}

export default NavBar;