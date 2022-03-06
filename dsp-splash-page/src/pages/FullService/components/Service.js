import React, { Component } from "react";
// import Description from "./Description";
// import Groups from "./Groups";
// import Freebies from "./Freebies";
import FullServiceNav from '../../../components/FullServiceNav'
import Header from "../../../components/Header";
import '../css/fullservice.css'
class Service extends Component {
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
                                        {/* <div className="flex-right min-width mb-1"><div className="btn custom-btn-2">Contact Us</div></div> */}
                                        <div className="flex-right min-width mb-1"><a className="btn custom-btn-2" href="/clients/contact">Contact Us</a></div>
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
                                            <ul>
                                                <li className="join-us-list">design team portal</li>
                                                <li className="join-us-list">active video communication</li>
                                                <li className="join-us-list">sample work product</li>
                                                <li className="join-us-list">on-site collaboration</li>
                                            </ul>
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
                                        <div className="text"><p> Bi-weekly is the goal, but we know that's not always feasible.</p>
                                            <p> So, let's discuss the payment terms that make sense for each of us.</p>
                                        </div>
                                    </div>
                                </>
                                : null}
                        </div>
                    </div>
                </div>
                <FullServiceNav srv={true} menu={this.state.menu} setMenu={this.setMenu}/>
                <div className="container-large" ref={this.ref}>
                    <div className="groups groups-join">
                        <img src="\images\servicepage\fullservice\SS-FullService_SubHeader_06.jpg" alt="full-service-arc-subheading" className="hero-img"></img>
                        <div className="flex-center text boldText fs-heading">Service Design & Strategy</div>
                        <p className="text">Collectively, we've been fortunate enough to work with some of the world's most successful companies. Along the way we've developed methods for conducting first-hand research, processes for evaluating our finding, and tools for communicating actionable items back to our clients. With a structured, performance based approach to people and space utilization, our design strategy team will discover what works best, when, and why.</p>
                        <div className="grid-1-ice-max-3 fs-grid">
                            <div className="grid-items grid-items-fs">
                                <div className="flex-center">
                                    <img src="\images\servicepage\fullservice\icons\SS-FullService_Service_ Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                </div>
                                <div className="grid-headings text-center text-bold"><p>Service Design</p></div>
                                <div className="grid-desc text-center"><p>When a service is working, it is almost invisible. When it is not, it brings a wave of employee frustrations and customer complaints. Our service design team uses holistic, evidence-based blueprinting and ecology mapping to tear down silos and re-sequence all human touchpoints for a well-crafted, nearly imperceptible, people-centered service.</p></div>
                            </div>
                            <div className="grid-items grid-items-fs">
                                <div className="flex-center">
                                    <img src="\images\servicepage\fullservice\icons\SS-FullService_Mapping_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                </div>
                                <div className="grid-headings text-center text-bold"><p>System Mapping</p></div>
                                <div className="grid-desc text-center"><p>Sometimes all we need to do to conquer our challenges is to change our perspective. Our system mapping experts work with you to create a detailed visual of your whole organization, bringing clarity to challenges and successes within your system.</p></div>
                            </div>
                            <div className="grid-items grid-items-fs">
                                <div className="flex-center">
                                    <img src="\images\servicepage\fullservice\icons\SS-FullService_Research_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                </div>
                                <div className="grid-headings text-center text-bold"><p>Ethnographic Research</p></div>
                                <div className="grid-desc text-center"><p>Creating something for others is far easier when you know who they are and what they do. Our team of ethnographic researchers plans and executes research studies, analyzes data, gleans actionable insights and clearly identifies opportunities for design intervention.</p></div>
                            </div>
                            <div className="grid-items grid-items-fs">
                                <div className="flex-center">
                                    <img src="\images\servicepage\fullservice\icons\SS-FullService_Sustainability_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                </div>
                                <div className="grid-headings text-center text-bold"><p>Sustainability</p></div>
                                <div className="grid-desc text-center"><p>Sustainable building can be a challenging world to navigate. We have LEED and WELL certified experts ready to advise in selection of healthy building materials and practices, whether you are working toward a specific certification, or simply trying to leave the world (and the people in it) a little better.</p></div>
                            </div>
                            <div className="grid-items grid-items-fs">
                                <div className="flex-center">
                                    <img src="\images\servicepage\fullservice\icons\SS-FullService_Visioning_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                </div>
                                <div className="grid-headings text-center text-bold"><p>Visioning</p></div>
                                <div className="grid-desc text-center"><p>Imagining what 'can be' is hard. Our visioning experts will guide your team through a focused, meaningful discussion around long-term goals, conceptual ideation, and strategic planning, utilizing user-first storytelling with a future-focused lens.</p></div>
                            </div>
                            <div className="grid-items grid-items-fs">
                                <div className="flex-center">
                                    <img src="\images\servicepage\fullservice\icons\SS-FullService_Strategy_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                </div>
                                <div className="grid-headings text-center text-bold"><p>Design Strategy</p></div>
                                <div className="grid-desc text-center"><p>Collectively, we've been fortunate enough to work with some of the world's most successful companies. Along the way we've developed methods for conducting first-hand research, processes for evaluating our finding, and tools for communicating actionable items back to our clients. With a structured, performance based approach to people and space utilization, our design strategy team will discover what works best, when, and why.</p></div>
                            </div>
                        </div>
                        <div className="text text-center boldText">Deliverables</div>
                        <div className="text">Design deliverables include 2D drawings and 3D models used for careful design decision-making, communicating design intent, diagramming essential systems and key adjacencies, contract documents, and ultimately physical construction. Deliverables may also include strategies for project management including financial, organizational, quality control, and schedule driven documents and checklists used to assure outcomes that are clear, concise, correct, and complete.</div>
                        <div className="text text-center boldText">Design Fees & Terms</div>
                        <p className="text">Fees for Full-Service Design are generally negotiated as a lump sum fixed fee for a discrete scope of services. Each service contract includes a well-defined scope, assumptions, exclusions, schedule of deliverables, fee breakdown, payment schedule, reimbursables, and legal terms.</p>
                    </div>
                    {/* <Description description={description} />
                    <Groups groups={groups} />
                    <Freebies freebies={freebies} /> */}
                </div>
            </>
        )
    }
}

export default Service;
