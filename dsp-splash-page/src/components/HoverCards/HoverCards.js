import React from "react";
import ReactTooltip from 'react-tooltip'
import "./HoverCards.css";

const HoverCards = props => (
    <>
        <div className={props.line? "hovercard-flex" : "hovercard"}>
            {props.boxcolor ? <div className={"box " + props.boxcolor}></div> : null}
            <div className data-tip={props.tip ? true : false} data-for={props.tip ? props.tip : ""}>
                <div className="hovercard-heading">{props.heading}</div>
                <div className="hovercard-body">{props.body}</div>
            </div>

            {props.line ?
                <div className="line-holder">
                    <div className={"underline " + props.line}></div>
                </div>
                : null}
        </div>
        {props.tip ? <ReactTooltip className="tooltip" id={props.tip} place="top" type={props.tipColor} textColor="#fefcfb" multiline={true} effect="float">{props.tipText}
        </ReactTooltip> : null}
    </>
);

export default HoverCards;