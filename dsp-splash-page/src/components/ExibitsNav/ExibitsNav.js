import React from "react";
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
//import { InView } from 'react-intersection-observer'
const ExibitsNav = props => (
    <div className="nav-ice nav-exibits hide-mobile-only">
                    <div className="nav-container-ice">
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="arc"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"} to={{ pathname: "/exhibits", sectionProps: "arc", key: uuid() }}>Architecture</Link>
                                {props.current==="arc" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="dd"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"}  to={{ pathname: "/exhibits", sectionProps: "dd", key: uuid() }}>Digital Design</Link>
                                {props.current==="dd" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="int"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"}  to={{ pathname: "/exhibits", sectionProps: "int", key: uuid() }}>Interiors</Link>
                                {props.current==="int" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="bnd"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"}  to={{ pathname: "/exhibits", sectionProps: "bnd", key: uuid() }}>Brand</Link>
                                {props.current==="bnd" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="gph"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"}  to={{ pathname: "/exhibits", sectionProps: "gph", key: uuid() }}>Graphics</Link>
                                {props.current==="gph" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="sd"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"}  to={{ pathname: "/exhibits", sectionProps: "sd", key: uuid() }}>Service Design</Link>
                                {props.current==="sd" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div>
                        {/* <div className="nav-items-ice">
                            <div className="btn-container">
                                <Link className={props.current==="ind"? "btn btn-link custom-btn-3-act" : "btn btn-link custom-btn-3"}  to={{ pathname: "/exhibits", sectionProps: "ind", key: uuid() }}>Industrial</Link>
                                {props.current==="ind" ? <div className="flex-center">
                                    <div className="underline-thin"></div>
                                </div>: null }
                            </div>
                        </div> */}


                    </div>
                </div>
);

export default ExibitsNav;