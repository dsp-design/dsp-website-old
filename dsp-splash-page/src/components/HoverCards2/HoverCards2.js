import React from "react";
import ReactTooltip from 'react-tooltip'
import "./HoverCards2.css";

const HoverCards2 = props => (
    <>
    <div className="hovercard">
        <div data-tip={props.tip? true:false} data-for={props.tip? props.tip:""}>
        <div className={"hovercard-heading "+props.headingColor}>{props.heading}</div>
        <div className="hovercard-body">{props.body}</div>
        </div>
    </div>
    {props.tip?<ReactTooltip className="tooltip" id={props.tip} place="top" type={props.tipColor} textColor="#fefcfb" multiline={true} effect="float">{props.tipText}
    </ReactTooltip>: null}
    </>
);

export default HoverCards2;