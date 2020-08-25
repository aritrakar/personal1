import React from "react";
import "../index.css"

function Header(props) {
    return (
        <div id="banner">
            <h1>{props.text}</h1>
            {props.quote ? <h2>"{props.subText}"</h2> : <h2>{props.subText}</h2>}
        </div>
    )
}

export default Header;