import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const Cards = props => (
    <div className="card-main">
        <div className={"cardDsp " + (props.enlarge ? "enlarge" : "") + " " + props.bg_color}>
            <div className="cardHead">
                <img className="cardIcon" src="\images\servicepage\DSPLOGO-white-transparent.png" alt="Design Service Professionals - Logo" />
            </div>
            <div className="cardBody">
                {props.body}

            </div>
            <div className="flex-center">
                {props.hasButton ? <Link className="btn btn-custom cardLink" to={props.buttonLink}>{props.buttonText} </Link> : null}
            </div>
        </div>
    </div>
);

export default Cards;