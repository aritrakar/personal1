import React from "react";
import Item from "./Item.js";
import aritra from "../gallery/aritra.png";
import p1 from "../gallery/IMG_0115.JPG";
import gear from "../gallery/gear.png";
import "../index.css";
import Header from "./Header.js";

function Home() {
    return (
        <div>
            <Header text="Welcome" subText="You see, but you do not observe" quote={true} />
            <div id="item-container">
                <Item
                    side="right"
                    heading="Who am I?"
                    text="I am Aritra Kar, a young technology enthusiast. I’m an excellence and results-driven, proactive, decisive team player. 
          While naturally ambiverted, I enjoy taking on leadership roles as much as possible. I tend to observe people and situations 
          and also take strategic decisions, especially when under pressure. I’m ambitious about computer science, artificial intelligence, 
          and robotics and thus want to pursue the same in the future. In the past, I have dabbled in the field of Machine Learning and
          Data Science using Python. Currently, I'm building small projects using HTML, CSS, JavaScript, React.js, Node.js and Python."
                    img={aritra}
                />
                <Item
                    side="left"
                    heading="Fun facts about me"
                    text="My personality type is INTJ-T. I can type at an average speed of 75-80 WPM, with my highest speed being 85 WPM.
          I play the piano and the violin. I have been an avid quizzer for the past 5 years, and have tried my hand at photography too. 
          (Check out my gallery!) I also love dark chocolate. "
                    img={p1}
                />
                <Item
                    side="right"
                    heading="Projects"
                    text="Check out the Projects tab!"
                    img={gear}
                />
            </div>
        </div>

    )
}

export default Home;