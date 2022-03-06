import React from "react";
import ReactTooltip from 'react-tooltip'
import "./HoverCards3.css";

const HoverCards3 = props => (
    <>
    <div className="hovercard">
        <div data-tip={props.tip? true:false} data-for={props.tip? props.tip:""}>
        <div className="hovercard-heading ">{props.heading? props.heading.toUpperCase(): null}</div>
        {props.body? props.body.map(line => {
            return <div className="list-container">
                    <div className={"list-item-text list-item-with-bullet"+ line.boxcolor}>{line.text}</div>
                </div>
            
        }): props.body2 ? <div className="barContainer">{props.body2.map(line => {
            return <div className={"list-container leftBar "+ props.bar}><div className="list-item-text list-item-with-bar">{line.text}</div></div>})}</div>: null}
        </div>
    </div>
    {props.tip?<ReactTooltip className="tooltip" id={props.tip} place="top" type={props.tipColor} textColor="#fefcfb" multiline={true} effect="float">{props.tipText}
    </ReactTooltip>: null}
    </>
);

export default HoverCards3;