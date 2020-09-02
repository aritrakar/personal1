import React from "react";
import Header from "./Header";
import { pictures } from "./picturePaths";
import "../index.css";

export default class Pictures extends React.Component {
  render() {
    const temp = pictures.sort(() => Math.random() - 0.5);
    const images = temp.map((picture, i) => (
      //<div key={i}>
      <a key={i} href={picture} target="_blank" rel="noopener noreferrer">
        <img src={picture} alt="img" border="0" id="pictures" />
      </a>
      //</div>
    ));
    return (
      <div>
        <Header
          text="Pictures"
          subText={"Beauty lies in the eyes of the beholder"}
          quote={true}
        />
        <div id="">{images}</div> {/*picture-container */}
      </div>
    );
  }
}
