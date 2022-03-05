import React, { Component } from "react";
import "./assets/css/home.css";
import "./assets/css/mediaHome.css";

import logo from "./assets/images/dspLogo-outline-lightBlue.png";

// Files
import ideas from "../../JSON/home.json";

class Home extends Component {
    state = {
        ideas
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div id="homepage">

                <div id="homeSlant"></div>

                <div id="homeLogo" className="homeHalf nightBlue-background">
                    <img src={logo} alt="logo" id="homeLogoIcon" />
                </div>

                <div id="homeWords" className="homeHalf">
                    <div>
                        <div id="dspTag" className="homeTagline nightBlue-text">Design Service Professionals . . .</div>
                        <div className="homeTagline nightBlue-text">Design Services for the Design</div>
                        <div className="homeTagline nightBlue-text"> and Build Communities</div>
                    </div>
                </div>

            </div>
        )
    };
};

export default Home;