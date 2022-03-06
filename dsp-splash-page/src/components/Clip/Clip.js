import React from "react";
import "./clip.css"
const Clip = props => (
    <>
        <div className={"clip-bg clip-bg-" + props.bgColor}>
            <div className="clip-base">
                <div className="clip-head">
                    <i className={props.icon}></i>
                    <div className="white-text">{props.heading}</div>
                </div>
                <div className={"clip-body clip-body-" + props.bgColor}>
                    <div className="clip-text">{props.body}</div>
                </div>
            </div>
        </div>
    </>
);

export default Clip;