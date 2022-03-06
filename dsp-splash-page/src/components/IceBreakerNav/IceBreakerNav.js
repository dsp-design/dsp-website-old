import React from "react";
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const IceBreakersNav = props => (
    <div className={"nav-ice " + (props.menu ? "remove-shadow" : "")}>
        <div className={"ham close flex-start " + (props.menu ? "mobile" : "desktop")} onClick={() => props.setMenu(!props.menu)}>
            {props.menu ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
        </div>
        <div className={"nav-container-ice " + (props.menu ? "show-mobile-only" : "hide-mobile-only")}>
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.arc ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/icebreakers-architecture", sectionProps: "scroll", key: uuid() }}>Architecture</Link>
                    {props.arc ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.dd ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/icebreakers-digital-design">Digital Design</Link>
                    {props.dd ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.id ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/icebreakers-interior-design">Interior Design</Link>
                    {props.id ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.ia ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/icebreakers-admin-design">IT | Admin</Link>
                    {props.ia ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.sd ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/icebreakers-service-design">Service Design</Link>
                    {props.sd ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>


        </div>
    </div>
);

export default IceBreakersNav;