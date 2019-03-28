import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "./approach.css";

// Files
import ideas from "../../JSON/home.json";

class Approach extends Component {
    state = {
        ideas
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="slantBackground">

                <div className="slantTop darkBlue">
                    <div className="topSlantTitle">
                        design service professionals, pllc
                    </div>
                </div>
                <div id="topSlant" className="darkBlue"></div>

                <div>
                    <div className="darkSlantTitle slantTitle">dsp...</div>
                    <div className="slantInfoWrapper">
                        <div id="approachParagraph">...an
                        <Popup
                                trigger={<Link to="#" className="bold link"> all-virtual design collaborative </Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "110%"
                                }}
                            >
                                <div className="popupWords">{ideas[0].verbiage}</div>
                            </Popup>

                            specializing in design services for the AEC Industry.
                        </div>

                        <div id="approachParagraph">Leveraging a
                            <Popup
                                trigger={<Link to="#" className="bold link"> diverse reservoir </Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "110%"
                                }}
                            >
                                <div className="popupWords">{ideas[1].verbiage}</div>
                            </Popup>
                            of design professionals, our staff augmentation program, coupled with an
                            <Popup
                                trigger={<Link to="#" className="bold link"> eclectic mix of industry experts </Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "110%"
                                }}
                            >
                                <div className="popupWords">{ideas[2].verbiage}</div>
                            </Popup>
                            , allows us to assemble the right team at the right time for our clients & AEC partners.
                         </div>

                        <div id="approachParagraph">By tapping into the
                            <Popup
                                trigger={<Link to="#" className="bold link"> dsp ecosystem </Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "110%"
                                }}
                            >
                                <div className="popupWords">{ideas[3].verbiage}</div>
                            </Popup>
                            , our clients, design-build partners, large project teams, and boutique firms alike will benefit from our
                            <Popup
                                trigger={<Link to="#" className="bold link"> unparalleled delivery </Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "110%"
                                }}
                            >
                                <div className="popupWords">{ideas[4].verbiage}</div>
                            </Popup>
                            of
                            <Popup
                                trigger={<Link to="#" className="bold link"> high quality design </Link>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "120%"
                                }}
                            >
                                <div className="popupWords">{ideas[5].verbiage}</div>
                            </Popup>.
                        </div>
                    </div>
                </div>

                <div className="slantUp lightBlue">
                    <div className="unSkew">
                        <div className="whiteSlantTitle slantTitle">we are...</div>
                        <div className="slantInfoWrapper">
                            <div className="infoWords whiteInfoWords"><span className="bold">building an ecosystem</span> of design professionals that kicks butt for our clients</div>
                            <div className="infoWords whiteInfoWords"><span className="bold">creating a platform</span> for design services that will lead the industry within 3 years</div>
                            <div className="infoWords whiteInfoWords"><span className="bold">disrupting the status quo</span> for design & delivery</div>
                            <div className="infoWords whiteInfoWords"><span className="bold">offering a better value</span> for a superior design process</div>
                            <div className="infoWords whiteInfoWords"><span className="bold">providing a work-life opportunity</span> that can't be found anywhere else</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle slantTitle">where do we...</div>
                    <div className="slantInfoWrapper">
                        <div className="infoWords">...work? <span className="bold">Out of the office</span> for starters, because there are no tethers we don't choose for ourselves, except maybe to our laptops</div>
                        <div className="infoWords">...create? Wherever we find the most <span className="bold">inspiration</span> and a decent wifi connection</div>
                        <div className="infoWords">...collaborate? <span className="bold">In the cloud</span> just about every day but Sunday and in person as much as we need to</div>
                        <div className="infoWords">...incubate? Our ideas percolate day and night and we have the tools to capture them <span className="bold">when and where</span> they bubble up</div>
                        <div className="infoWords">...play? Exactly where we love to play most</div>
                        <div className="infoWords">...live? In the places that matter most</div>
                    </div>
                </div>

                <div className="slantDown charcoalish">
                    <div className="unSkewDown">
                        <div className="whiteSlantTitle slantTitle">why? because...</div>
                        <div className="slantInfoWrapper">
                            <div className="infoWords whiteInfoWords">...<span className="bold">we FINALLY can</span></div>
                            <div className="infoWords whiteInfoWords">...we've got the <span className="bold">right tech</span>, the <span className="bold">best talent</span>, and a <span className="bold">game changing</span> approach to design & delivery</div>
                            <div className="infoWords whiteInfoWords">...there's all kinds of <span className="bold">amazing talent outside</span> the typical design office</div>
                            <div className="infoWords whiteInfoWords">...design services for AEC partners means <span className="bold">we all thrive</span></div>
                            <div className="infoWords whiteInfoWords">...we can be <span className="bold">even better 'out of office'</span></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="darkSlantTitle slantTitle">who? we are...</div>
                    <div className="slantInfoWrapper">
                        <div className="infoWords">...connectors, navigators, artists and <span className="bold">design thinkers</span></div>
                        <div className="infoWords">...<span className="bold">process scientists</span>, constantly pursuing and adapting to the most effective way forward</div>
                        <div className="infoWords">...integrators, collaborators, and <span className="bold">visionaries</span></div>
                        <div className="infoWords">...<span className="bold">entrepreneurs</span>, developing design solutions to our most pressing problems</div>
                        <div className="infoWords">...<span className="bold">digital experts</span>, leading the industry in digital process integration</div>
                        <div className="infoWords">...design service professionals that <span className="bold">recognize what 'service' means</span>, and it's not about us</div>
                        <div className="infoWords">...makers, textile artisans, wood workers, metalsmiths, <span className="bold">lovers of the craft</span></div>
                        <div className="infoWords">...high achievers, <span className="bold">independently motivated</span>, and deeply rooted in the process of design</div>
                        <div className="infoWords">...the <span className="bold">next generation</span> of design service professionals</div>
                    </div>
                </div>

                <div className="slantUp lightBlue">
                    <div className="unSkew">
                        <div className="whiteSlantTitle slantTitle">how? by...</div>
                        <div className="slantInfoWrapper">
                            <div className="infoWords whiteInfoWords">...<span className="bold">leveraging technology</span> to connect, collaborate and create in the cloud</div>
                            <div className="infoWords whiteInfoWords">...assembling <span className="bold">the right teams</span> with the right skills <span className="bold">at the right time</span></div>
                            <div className="infoWords whiteInfoWords">...delivering <span className="bold">high quality</span> design services from <span className="bold">start to finish</span></div>
                            <div className="infoWords whiteInfoWords">...<span className="bold">understanding who we're serving</span> and what they care about most</div>
                            <div className="infoWords whiteInfoWords">...placing our <span className="bold">people at the heart</span> of everything that matters</div>
                            <div className="infoWords whiteInfoWords">...augmenting the best in our partners to <span className="bold">achieve more together</span></div>
                        </div>

                    </div>
                </div>

            </div >
        )
    };
};

export default Approach;