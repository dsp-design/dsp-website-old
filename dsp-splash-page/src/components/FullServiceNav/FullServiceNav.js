import React from "react";
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const FullServiceNav = props => (

    <div className={"nav-ice nav-exibits " + (props.menu ? "remove-shadow" : "")}>
        <div className={"ham close flex-start " + (props.menu ? "mobile" : "desktop")} onClick={() => props.setMenu(!props.menu)}>
            {props.menu ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i>}
        </div>
        <div className={"nav-container-ice nav-container-full " + (props.menu ? "show-mobile-only" : "hide-mobile-only")}>
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.arc ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/full-service-architecture", sectionProps: "scroll", key: uuid() }}>Architecture</Link>
                    {props.arc ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>
            {/* <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.bgd? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/full-service-brand-graphics-design">Brand & Graphics Design</Link>
                                {props.bgd ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div> */}
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.dd ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/full-service-digital-design">Digital Design</Link>
                    {props.dd ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>
            {/* <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.ind? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/full-service-industrial-design">Industrial Design</Link>
                                {props.ind ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div> */}
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.int ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/full-service-interior-design">Interior Design</Link>
                    {props.int ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>
            <div className="nav-items-ice">
                <div className="btn-container">
                    <Link className={props.srv ? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to="/full-service-design-strategy">Service Design</Link>
                    {props.srv ? <div className="flex-center">
                        <div className="underline-thin"></div>
                    </div> : null}
                </div>
            </div>


        </div>
    </div>
);

export default FullServiceNav;