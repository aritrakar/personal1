import React from "react";
//import "../bootstrap.css";
import "../index.css"

function Item(props) {
    return (
        <div id="itemWhole">
            {props.side === "right" ?
                <div className="featurette">
                    <div className="col-md-9"> {/* 12*/}
                        <h2 className="featurette-heading"><strong>{props.heading}</strong></h2>
                        <p className="lead">{props.text}</p>
                        <p className="lead">{props.moreText}</p>
                        <p className="lead">{props.evenMoreText}</p>
                    </div>
                    <div className="col-md-3">
                        <img src={props.img} alt="img" id="itemImage" /> {/* width="300" height="300"*/}
                        {console.log(props.img)}
                    </div>
                </div>
                :
                <div className="row featurette">
                    <div className="col-md-4">
                        <img src={props.img} alt="img" id="itemImage" /> {/* width="300" height="300"*/}
                    </div>
                    <div className="col-md-8"> {/* must add up to 12. 9+3=12 */}
                        <h2 className="featurette-heading"><strong>{props.heading}</strong></h2>
                        <p className="lead">{props.text}</p>
                        <p className="lead">{props.moreText}</p>
                        <p className="lead">{props.evenMoreText}</p>
                    </div>
                    {console.log(props.img)}
                </div>
            }
            <hr className="featurette-divider" />
        </div >
    )
}

export default Item;
