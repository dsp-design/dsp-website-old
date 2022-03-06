import React from "react";
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
const JoinNav = props => (
    
    <div className="nav-ice nav-exibits hide-mobile-only">
                    <div className="nav-container-ice">
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="eco"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/joinus", sectionProps: "eco", key: uuid() }}>dsp.ecosystem</Link>
                                {props.current==="eco" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="teams"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/joinus", sectionProps: "teams", key: uuid() }}>dsp.teams</Link>
                                {props.current==="teams" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="mem"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/joinus", sectionProps: "mem", key: uuid() }}>dsp.membership</Link>
                                {props.current==="mem" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="ben"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/joinus", sectionProps: "ben", key: uuid() }}>dsp.benefits</Link>
                                {props.current==="ben" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="val"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/joinus", sectionProps: "val", key: uuid() }}>dsp.values</Link>
                                {props.current==="val" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>


                    </div>
                </div>
);

export default JoinNav;