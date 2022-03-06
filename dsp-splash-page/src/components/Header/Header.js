import React from "react";

const Header = props => (
    <>
        <div className={`groups groups-head-${props.color ? props.color : "blue"}`}>
        <div className="header-main header-main-ice">
                <div className="flex-center">
                    <div className="header-text header-text-ice" >
                        {props.title}
                            </div>
                </div>
                <div className="flex-center">
                    <div className="underline-header">

                    </div>
                </div>
                <div className="flex-center">
                    <div className="header-text-description header-text-description-ice text-center">
                        {props.subtitle}
                            </div>
                </div>
            </div>
            <div className="container-text">
            {props.text.map(paragraph => {
                return <p className="text">{paragraph}</p>
            })}
            </div>
        </div>
    </>
);

export default Header;