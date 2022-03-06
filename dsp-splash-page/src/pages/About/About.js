import React, { Component } from "react";
import Cards from "../../components/Cards";
import HoverCards from "../../components/HoverCards/HoverCards";
import './about.css';
import People from '../People'
import HoverCards2 from "../../components/HoverCards2/HoverCards2";
import TriFold from "../People/Trifold/TriFold";
import HoverCards3 from "../../components/HoverCards3/HoverCards3";
import people from "../../JSON/People/people.json";
import founder from "../../JSON/People/founder.json";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, 
            height: 0,
            people,
            founder,
        };
        this.whoweare = React.createRef()
        this.wherewework = React.createRef()
        this.ourteam = React.createRef()
        this.ourapproach = React.createRef()
        this.whynow = React.createRef()
        this.ourstory = React.createRef()
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
        this.shuffleArray(this.state.people);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentDidUpdate() {
        if (this.props.location.sectionProps === "whoweare") {
            this.whoweare.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "wherewework") {
            this.wherewework.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "ourteam") {
            this.ourteam.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "ourapproach") {
            this.ourapproach.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "whynow") {
            this.whynow.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "ourstory") {
            this.ourstory.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
    };
    render() {
        return (
            <>
                <div className="container base-container container-large">
                    <div className="card-container">
                        <Cards enlarge={true} bg_color="bgBlack" icon="dspLogo-outline.png" cardTitle="Design Service Professionals" body="Bringing access, opportunity, and innovation to design and build professionals anywhere" hasButton={false} />
                    </div>
                </div>
                <div className="container-large">
                    <div className="groups groups-join">
                        <div className="about-heading">Design Service Professionals, PLLC</div>
                        <div className="cards-container">
                            <div className="box redBox  order-1"></div>
                            <div className="box blueBox order-2"></div>
                            <div className="box greenBox order-3"></div>
                            <div className="hovercard-heading order-1">All-Virtual Design<br /> Collaborative</div>
                            <div className="hovercard-heading order-2">Ecosystem of Design<br /> Professionals</div>
                            <div className="hovercard-heading order-3">Technology<br /> Company</div>
                            <div className="hovercard-body order-1">specializing in premium design services for the Design and Build communities</div>
                            <div className="hovercard-body order-2">with no front door, keeping overhead costs low to provide premium design services at competitive rates</div>
                            <div className="hovercard-body order-3">developing a cutting-edge process for building smart design teams, able to deliver premium services faster and better</div>
                        </div>
                    </div>
                </div>
                <div className="about-mainheader"><img className="about-mainheader-img" src="\images\aboutpage\About_MainHeader_01.png" alt="Main Header" /></div>
                <div className="container-large">
                    <div className="groups groups-join">
                        <div ref={this.whoweare} className="about-heading">Who we are</div>
                        <div className="cards-container">
                            <HoverCards tip="about-who-1" tipText="Our staff draws on backgrounds both in and out of the design industry, providing high-level cross-pollination between design disciplines and extra-industrial thinking that allows us to meet our clients right where they need us." tipColor="info" line="redBox" heading={[<p>Integrators</p>, <p>Collaborators</p>, <p>Visionaries</p>]} body="" />
                            <HoverCards line="blueBox" heading="Process Scientists" body="constantly pursuing and adapting to the most effective way forward" />
                            <HoverCards line="greenBox" heading={[<p>Connectors</p>, <p>Navigators</p>, <p>Artists</p>, <p>Design Thinkers</p>]} body="" />
                            <HoverCards line="redBox" heading="Entrepreneurs" body="developing design solutions to our most pressing problems" />
                            <HoverCards line="blueBox" heading="Digital Experts" body="leading the industry in digital process integration" />
                            <HoverCards line="greenBox" heading="Service Providers" body={"recognizing what 'service' means (it's not about us)"} />
                            <HoverCards heading={[<p>Makers</p>, <p>Textile Artisans</p>, <p>Wood Workers</p>, <p>Metalsmiths</p>, <p>Lovers of the Craft</p>]} body="" />
                            <HoverCards tip="about-who-2" tipColor="success" tipText="We're committed to providing the highest quality design and delivery services, including a deep bench of seasoned architects and technical staff prepared to facilitate a thorough quality assurance program." heading="High achievers" body="independently motivated, and deeply rooted in the process of design" />
                            <HoverCards tip="about-who-3" tipColor="error" tipText="We're all different. We have varied backgrounds with a broad range of skills and a wide variety of design lenses. Each lens helps us see a clearer and more vibrant picture of what is needed and how design can meets those needs." heading="The Next Generation of Design Professionals" body="" />
                        </div>
                    </div>
                </div>
                <div ref={this.ourteam} className="groups groups-people">
                    <div className="container-large">
                        <div className="about-heading people-headpadding">Meet Our Team</div>
                        <People people={this.state.people} />
                        <div className="flex-center">
                            {/* <Link id="triLink" className="link" to="/clients/contact">contact us</Link> */}
                            {/* <a className="btn btn-lg btn-block fit-content custom-btn-2 cb-ice-3" href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUOFpDTllKWFJZMlNOSUtXR0tXUjdUQkRONCQlQCN0PWcu" target="_blank" rel="noreferrer">Contact Us</a> */}
                            <a className="btn btn-lg btn-block fit-content custom-btn-2 cb-ice-3" href="/clients/contact">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="container-large">
                    <div ref={this.wherewework} className="groups groups-join">
                        <div className="about-heading">Where do we...</div>
                        <div className="cards2-container">
                            <HoverCards2 heading="Work?" body={[<span className="boldText">Out of the office</span>, " for starters, because there are no tethers we don't choose for ourselves, except maybe to our laptops"]} headingColor="redColor"></HoverCards2>
                            <HoverCards2 tip="create" heading="Create?" body={["Wherever we find the most ", <span className="boldText">inspiration</span>, " and a decent wifi connection"]} tipText="We have flexibility in our approach to time and people that enables work-life opportunities everyday." tipColor="success" headingColor="blueColor"></HoverCards2>
                            <HoverCards2 tip="collaborate" heading="Collaborate?" body={[<span className="boldText">In the cloud</span>, " just about every day but Sunday and in person as much as we need to"]} tipText="We are transparent in our process, candid and solution focused in our feedback, and intent on achieving goals that enrich the lives and experiences of each other, our families, and our clients." tipColor="error" headingColor="greenColor"></HoverCards2>
                            <HoverCards2 heading="Incubate?" body={["Our ideas percolate day and night and we have the tools to capture them ", <span className="boldText">when and where</span>, " they bubble up"]} headingColor="redColor"></HoverCards2>
                            <HoverCards2 heading="Play?" body={"Exactly where we love to play the most, and as often as possible"} headingColor="blueColor"></HoverCards2>
                            <HoverCards2 tip="live" heading="Live?" body="Exactly where we love to play the most, and as often as possible" tipText="Our 'Out-Of-Office' approach to staff augmentation allows us to get far more living done each and every day while optimizing our productivity for the benefit of our projects and clients." tipColor="info" headingColor="greenColor"></HoverCards2>
                        </div>
                    </div>
                </div>
                <div className="groups groups-people groups-map">
                    <div className="container-large">
                        <div className="grid-map">
                            <div className="map-container">
                                <div className="about-heading">
                                    <p>We are</p> <p className="redColor">virtually</p><p> everywhere</p>
                                </div>
                                <img src="\images\aboutpage\map-dots.png" alt="" className="map-img" />
                            </div>
                            <div className="map-list-container">
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">Atlanta, GA</div>
                                </div>
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">Austin, TX</div>
                                </div>
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">Chicago, IL</div>
                                </div>
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">Brooklyn, NY</div>
                                </div>
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">Minneapolis, MN</div>
                                </div>
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">Salt Lake City, UT</div>
                                </div>
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">San Francisco, CA</div>
                                </div>
                                <div className="map-list">
                                    <div className="box redBox box-map"></div>
                                    <div className="map-list-item">Phoenix, AZ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-large">
                    <div ref={this.ourapproach} className="groups groups-join">
                        <div className="about-heading">Our approach...</div>
                        <div className="cards-container">
                            <HoverCards3 tip="connect" tipColor="success" heading="Connect" body={[{ boxcolor: "green", text: ["Create a ", <span className="boldText">connected ecosystem of talented designers</span>] }, { boxcolor: "green", text: ["Leverage technology to ", <span className="boldText"> connect, collaborate, and create in the cloud</span>] }, { boxcolor: "green", text: ["Assemble ", <span className="boldText">the right teams</span>, " with the right skills at the right time"] }]} tipText="We nurture our clients and our process, keeping ourselves relevant while choosing progressive paths that lead to amazing outcomes."  ></HoverCards3>
                            <HoverCards3 tip="share" tipColor="error" heading="share" body={[{ boxcolor: "red", text: ["Provide ", <span className="boldText">access to shared resources</span>] }, { boxcolor: "red", text: ["Place ", <span className="boldText">people at the heart</span>, " of everything that matters"] }, { boxcolor: "red", text: ["We feed, and are fed by, a thriving symbiotic ", <span className="boldText">network of people, tools, and opportunities</span>] }]} tipText="We build relationships that are cultivated by shared ideals, mutual respect, and passion for progress."  ></HoverCards3>
                            <HoverCards3 tip="deliver" tipColor="info" heading="deliver" body={[{ boxcolor: "blue", text: ["Enable an ", <span className="boldText">innovative delivery process</span>] }, { boxcolor: "blue", text: ["Deliver ", <span className="boldText">high-quality design services</span>, " from start to finish"] }, { boxcolor: "blue", text: [<span className="boldText">Understand who we're serving</span>, " and what they care about most"] }]} tipText="We START SMART, so we can finish strong."  ></HoverCards3>
                        </div>
                        <TriFold />
                    </div>
                </div>
                <div className="groups-4c">
                    <div className="container-large">
                        <div className="groups groups-join groups-4c">
                            <div className="about-heading about-heading-no-top">
                                How we communicate
                            </div>
                            <img className="about-4c-img" src="\images\aboutpage\4CsDiagram.png" alt="4C Header" />
                        </div>
                    </div>
                </div>
                <div className="container-large">
                    <div ref={this.whynow} className="groups groups-join">
                        <div className="about-heading">Why now? because...</div>
                        <div className="cards2-container">
                            <HoverCards3 bar="greenBar" body2={[{ text: ["The ", <span className="boldText">world is shifting</span>, ". We want to facilitate a mode of collaborating that allows the best within us to emerge"] }, { text: ["There's amazing talent ", <span className="boldText">outside the typical design office</span>] }, { text: ["We can be even better ", <span className="boldText">'out of office'</span>] }]} ></HoverCards3>
                            <HoverCards3 bar="redBar" body2={[{ text: ["Design services for AEC partners means ", <span className="boldText">we all thrive together </span>] }, { text: ["We have the ", <span className="boldText">right tech,</span>, " the ", <span className="boldText">right talent,</span>, " and a ", <span className="boldText">game changing approach</span>, " to innovation in design and delivery"] }, { text: ["We ", <span className="boldText">finally</span>, " can"] }]} ></HoverCards3>
                        </div>
                    </div>
                </div>
                <div ref={this.ourstory} className="groups-4c">
                    <div className="container-large">
                        <div className="groups groups-join groups-4c">
                            <div className="about-heading">
                                A founder's story
                            </div>
                            <div className="grid-map">
                                <div className="founder">
                                    <p className="greenColor boldText">Devan Porter, Olivia Porter, Amy John and Adam Simmons</p>
                                    <p className="bigText">Did you know Design Service Professionals, PLLC has its roots in a well-known international architecture firm? That's right. in 2016, conceptual founders Devan Porter and Adam Simmons were collaborating with a firmwide resource team to develop a concept for an all-virtual design studio. This studio was to be an internal resource comprised of past firm cohorts who were no longer connected to the firm geographically, meaning life had pulled them away from the firm's physical office. Leveraging progressive technology, this virtual team would be distributed throughout the country, yet act as a single studio providing resources to the rest of the firm. The concept was well received but after 2 years of research didn't materialize within the company.</p>
                                    <p className="bigText">In late 2018, Devan, one of the firm's Northwest Regional Technical Directors, saw the opportunity to realize the concept beyond the firm's borders and provide premium design services to the broader AEC industry. Teaming with Adam, one of the firm's Southeast Regional BIM Leaders, along with In-House Counsel Olivia Porter and Brooklyn-based co-founder Amy John, a Service Designer out of Parsons School of Design, this team is empowering the design and build communities with access to shared resources, a connected ecosystem of talented design professionals, and an innovative process for helping small firms deliver big, but stay small.</p>
                                </div>
                                <People count={true} people={this.state.founder}></People>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
};

export default About;
