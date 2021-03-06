import React from "react";
import Item from "./Item.js";
import aritra from "../gallery/aritra.png";
import me from "../gallery/me.jpeg";
//import gear from "../gallery/gear.png";
import "../index.css";
import Header from "./Header.js";

export default function Home() {
  return (
    <div>
      <Header
        text="Welcome"
        subText="You see, but you do not observe"
        quote={true}
      />
      <div id="item-container">
        <Item
          side="right"
          heading="Who am I?"
          text="I am Aritra Kar, a 1st year Honors Computer Science Co-op student at the University of Waterloo. A young technology enthusiast, I’m an excellence and results-driven, proactive, decisive team player. I’m ambitious about computer science, artificial intelligence, and robotics and want to pursue the same in the future. In the past, I have dabbled in the field of Machine Learning and Data Science using Python. Currently, I'm building small projects using JavaScript, Python, HTML5/CSS3, React.js and Node.js."
          img={me}
        />
        <Item
          side="left"
          heading="Fun facts about me"
          text="My personality type is INTJ-T. I can type at an average speed of 75-80 WPM, with my highest speed being 91 WPM.
          I play the piano and the violin. I have been an avid quizzer for the past 5 years, and have tried my hand at photography too. 
          (Check out my gallery!) I also love dark chocolate. "
          img="https://i.ibb.co/rs8LLkw/IMG-0074.jpg"
        />
        {/*<Item
          side="right"
          heading="Projects"
          text="Check out the Projects tab!"
          img={gear}
        /> */}
      </div>
    </div>
  );
}
