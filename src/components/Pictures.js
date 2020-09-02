import React from "react";
import Header from "./Header";
import { pictures } from "./picturePaths";
import "../index.css";

export default class Pictures extends React.Component {
  render() {
    const images = pictures.map((picture, i) => (
      //<div key={i}>
      <a key={i} href={picture} target="_blank" rel="noopener noreferrer">
        <img src={picture} alt="img" border="0" id="pictures" />
      </a>
      //</div>
    ));
    return (
      <div>
        <Header text="Pictures" />
        <div id="">{images}</div> {/*picture-container */}
      </div>
    );
  }
}
