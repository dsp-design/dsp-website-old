import React, { Component } from "react";
// import Description from "./Description";
// import Groups from "./Groups";
// import Freebies from "./Freebies";
import FullServiceNav from '../../../components/FullServiceNav'
import Header from "../../../components/Header";
import '../css/fullservice.css'
class Brand extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            step1: false,
            step2: false,
            step3: false,
            step4: false,
            step5: false,
            menu: false,
        }
        this.setMenu = this.setMenu.bind(this)

    }
    setMenu(menuState){
        this.setState({menu: menuState});
    }
    componentDidMount() {
        this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <>
                <Header title="Your Trusted Partner" subtitle="Full Service Design" color="yellow" text={[

                ]} />
                <div className="groups groups-header">
                    <p className="text">Design Service Professionals, PLLC offers a full range of architecture, interiors, digital and service design services. We are an all-virtual design collective built on the premise that effective collaboration knows no geographic boundaries and that a sound understanding of local codes is 100% essential.</p>
                    <p className="text">At DSP we work hard to keep our fees competitive. Working primarily from home offices we leverage co-working facilities to provide settings for individual work, small meetings, and team conferences as needed. This keeps our overhead costs low, allowing us to provide premium design services at competitive rates.</p>
                    <p className="text">Check out our full-service menu and experiment with our cost estimating calculators, then schedule a consultation to learn more about how DSP can deliver full or partial-scope design services to support your clients, projects, and teams.</p>
                </div>
                <div className="container-large">
                    <div className="groups groups-join no-bg">
                        <div className="boldText text text-center text-medium">Our Full-Service Process of Engagement</div>
                        <div className="grid-engagement">
                            <div className="steps pointer" onClick={() => this.setState({ step1: !this.state.step1 })}>
                                {this.state.step1 ? <div className="circle-box-active"></div> : <div className="circle-box"></div>}
                                <div className="step-text text-md">Step 1</div>
                            </div>
                            <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid"} onClick={() => this.setState({ step1: !this.state.step1 })}>
                                <div className="">Introduction and online contact</div>
                                <div>{this.state.step1 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                            </div>
                            {this.state.step1 ?
                                <>
                                    <div></div>
                                    <div className={"whiteBg panel-body-2"}>
                                        <div className="text"><p>We want to get to know you, answer your questions, and hopeful gain your trust.</p><p>So, let's talk about your wants and needs to see how we might work together best.</p></div>
                                        <div className="flex-right min-width mb-1"><div className="btn custom-btn-2">Contact Us</div></div>
                                    </div>
                                </>
                                : null}
                        </div>
                        <div className="grid-engagement">
                            <div className="steps pointer" onClick={() => this.setState({ step2: !this.state.step2 })}>
                                {this.state.step2 ? <div className="circle-box-active"></div> : <div className="circle-box"></div>}
                                <div className="step-text text-md">Step 2</div>
                            </div>
                            <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid"} onClick={() => this.setState({ step2: !this.state.step2 })}>
                                <div className="">Establish a contractual scope of work</div>
                                <div>{this.state.step2 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                            </div>
                            {this.state.step2 ?
                                <>
                                    <div></div>
                                    <div className={"whiteBg panel-body-2"}>
                                        <div className="text"><p>We want to step in wherever you need us. So, let's talk a little bit about the following:</p>
                                            <ul>
                                                <li className="join-us-list">project typology</li>
                                                <li className="join-us-list">design phases of work</li>
                                                <li className="join-us-list">design services</li>
                                                <li className="join-us-list">administrative services</li>
                                                <li className="join-us-list">proposal writing services</li>
                                                <li className="join-us-list">design deliverables</li>
                                                <li className="join-us-list">design timeframe</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>
                        <div className="grid-engagement">
                            <div className="steps pointer" onClick={() => this.setState({ step3: !this.state.step3 })}>
                                {this.state.step3 ? <div className="circle-box-active"></div> : <div className="circle-box"></div>}
                                <div className="step-text text-md">Step 3</div>
                            </div>
                            <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid"} onClick={() => this.setState({ step3: !this.state.step3 })}>
                                <div className="">Retainer and Set-up Fees</div>
                                <div>{this.state.step3 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                            </div>
                            {this.state.step3 ?
                                <>
                                    <div></div>
                                    <div className={"whiteBg panel-body-2"}>
                                        <div className="text"><p>We want you to know we're in this together and we hope you feel the same way. So, let's talk about a few ways to get started:</p>
                                            <ul>
                                                <li className="join-us-list">retained team with flexible scope</li>
                                                <li className="join-us-list">full-time with fixed scope</li>
                                                <li className="join-us-list">part-time with fixed scope</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>
                        <div className="grid-engagement">
                            <div className="steps pointer" onClick={() => this.setState({ step4: !this.state.step4 })}>
                                {this.state.step4 ? <div className="circle-box-active"></div> : <div className="circle-box"></div>}
                                <div className="step-text text-md">Step 4</div>
                            </div>
                            <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid"} onClick={() => this.setState({ step4: !this.state.step4 })}>
                                <div className="">Daily and Weekly Accountability</div>
                                <div>{this.state.step4 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                            </div>
                            {this.state.step4 ?
                                <>
                                    <div></div>
                                    <div className={"whiteBg panel-body-2"}>
                                        <div className="text"><p>We have a plan to keep you in the loop and we're excited to share it.</p>
                                            <p>So, let's discuss the payment terms that make sense for each of us.</p>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>
                        <div className="grid-engagement">
                            <div className="steps pointer" onClick={() => this.setState({ step5: !this.state.step5 })}>
                                {this.state.step5 ? <div className="circle-box-active"></div> : <div className="circle-box"></div>}
                                <div className="step-text text-md">Step 5</div>
                            </div>
                            <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid"} onClick={() => this.setState({ step5: !this.state.step5 })}>
                                <div className="">Getting Paid</div>
                                <div>{this.state.step5 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                            </div>
                            {this.state.step5 ?
                                <>
                                    <div></div>
                                    <div className={"whiteBg panel-body-2"}>
                                        <div className="text"><p>Bi-weekly is the goal, but we know that's not always feasible.</p>
                                            <p>So, let's talk logistics.</p>
                                            <ul>
                                                <li className="join-us-list">We can work with a weekly or bi-weekly payment schedule.</li>
                                                <li className="join-us-list">Payments on or before Thursday EOD usually guarantee a Monday start date.</li>
                                                <li className="join-us-list">We offer up to 7-days grace period between agreements.</li>
                                                <li className="join-us-list">Savings is determined by 3 factors: Subscription, Team Size, and Duration.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>
                    </div>
                </div>
                <FullServiceNav bgd={true} menu={this.state.menu} setMenu={this.setMenu}/>
                <div className="container-large" ref={this.ref}>
                    <div className="groups groups-join">
                        <img src="\images\servicepage\fullservice\A-FullService_SubHeader_02.png" alt="full-service-arc-subheading" className="hero-img"></img>
                        <div className="flex-center text boldText fs-heading">Architecture</div>
                        <p className="text">We are committed to delivering premium architectural design services at value added rates. Our design team is supported by seasoned architects and a technical design staff prepared to facilitate a thorough quality assurance program, tailored to each of your projects.</p>
                            <div className="grid-1-ice-max-3 fs-grid">
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_SiteDesign_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Site Design</p></div>
                                    <div className="grid-desc text-center"><p>Site design is one of our core competencies. Tap into our planning expertise and optimize the performance of your entire site.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_Buildings_Icon_01.png" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Buildings</p></div>
                                    <div className="grid-desc text-center"><p>We LOVE helping our clients express their brand in the city scape. Let us help you deliver a building that captures your authentic brand while contributing to the context around it.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_Campuses_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Campuses</p></div>
                                    <div className="grid-desc text-center"><p>Feeling the excitement, and burden, of implementing multiple facilities in one location? Let's work together to develop an integrated solution for smart building management and effective sequencing of your entire campus design.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs fs-span">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_QAQC_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Quality Management</p></div>
                                    <div className="grid-desc text-center"><p>At DSP we're committed to providing only the highest quality design and delivery services, including a deep bench of seasoned architects and technical staff prepared to facilitate a thorough quality assurance program.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_Permit_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Permit Running</p></div>
                                    <div className="grid-desc text-center"><p>Navigating the building and planning departments can be a labor intensive process. We're here to help ease the burden by fulfilling the necessary interactions required by local jurisdictions. This means reviewing and delivering drawings, facilitating paperwork, logging revisions and interfacing with building officials to help get your building permit as quickly as possible.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_Sustainability_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Sustainable Design</p></div>
                                    <div className="grid-desc text-center"><p>Along with human health, safety, and welfare, we also are deeply committed to issues impacting the environment. Let's work together to increase awareness of those practices that are a win-win for everyone.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_Landscape_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Landscape Design</p></div>
                                    <div className="grid-desc text-center"><p>Along with human health, safety, and welfare, we also are deeply committed to issues impacting the environment. Let's work together to increase awareness of those practices that are a win-win for everyone.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\A-FullService_AOR_Icon_01_ AOR.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>AOR</p></div>
                                    <div className="grid-desc text-center"><p>Finding the right delivery partner means teaming with a local Architect who understands the issues relevant to a given locale. As your Architect of Record (AOR), DSP has the qualifications required to protect the health, safety, and welfare of your building project, while meeting local zoning and building codes.</p></div>
                                </div>
                            </div>
                        <div className="text text-center boldText">Deliverables</div>
                        <div className="text">Design deliverables include 2D drawings and 3D models used for careful design decision-making, communicating design intent, diagramming essential systems and key adjacencies, contract documents, and ultimately physical construction. Deliverables may also include strategies for project management including financial, organizational, quality control, and schedule driven documents and checklists used to assure outcomes that are clear, concise, correct, and complete.</div>
                        <div className="text text-center boldText">Design Fees & Terms</div>
                        <p className="text">Fees for Full-Service Design are generally negotiated as a lump sum fixed fee for a discrete scope of services. Each service contract includes a well-defined scope, assumptions, exclusions, schedule of deliverables, fee breakdown, payment schedule, reimbursables, and legal terms.</p>
                        <p className="text">The following calculator may be used for estimating design fees for some commonly requested scopes.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Brand;
