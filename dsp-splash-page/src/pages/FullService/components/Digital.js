import React, { Component } from "react";
// import Description from "./Description";
// import Groups from "./Groups";
// import Freebies from "./Freebies";
import FullServiceNav from '../../../components/FullServiceNav'
import Header from "../../../components/Header";
import '../css/fullservice.css'
class Digital extends Component {
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
                    <p className="text">At DSP we offer a full range of architecture, interiors, digital and service design services.</p>
                    {/* <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ac odio tempor orci dapibus ultrices. Ac odio tempor orci dapibus ultrices. Facilisis sed odio morbi quis commodo. Consectetur libero id faucibus nisl tincidunt eget nullam.</p> */}
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
                <FullServiceNav dd={true} menu={this.state.menu} setMenu={this.setMenu}/>
                <div className="container-large" ref={this.ref}>
                    <div className="groups groups-join">
                        <img src="\images\servicepage\fullservice\D-FullService_SubHeader_04.jpg" alt="full-service-arc-subheading" className="hero-img"></img>
                        <div className="flex-center text boldText fs-heading">Digital Design</div>
                        <p className="text">Leading the industry, our team of Revit Specialists, Computational Design Experts, and Visualization Masters, is the pulse that brings life to teams and projects across the country. Providing rigorous BIM oversight, facilitating effective visualization processes and developing coordinated computational design solutions, dsp.digital leads the charge for a progressive design practice.</p>
                            <div className="grid-1-ice-max-3 fs-grid">
                                <div className="grid-items grid-items-fs fs-span">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\D-FullService_VR_Icon_01_ VR.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Virtual & Augmented Reality</p></div>
                                    <div className="grid-desc text-center"><p>Virtual and Augmented Reality are quickly becoming essential tools in the design decision-making process. Staying ahead of the technology curve necessarily means building AR and VR into our day-to-day methodology.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\D-FullService_Automation_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Digital Automation</p></div>
                                    <div className="grid-desc text-center"><p>A solid automation process can mean all the difference when it comes to rapid set-up and deployment of tasks, templates, and design exercises. Our team is equipped with the tools and experience to help you automate processes that will save you valuable time and money from project to project.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\D-FullService_Parametric_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Parametric & Generative Design</p></div>
                                    <div className="grid-desc text-center"><p>Multiple design parameters necessarily require an iterative process of optimization. By advancing the use of technology in the practice of space-making, our generative design team leverages the potential of the algorithm to evaluate various design solutions in rapid succession.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\D-FullService_Content_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>3D Content Development</p></div>
                                    <div className="grid-desc text-center"><p>From system families to custom component families, our team of digital experts can develop, enhance, review, and optimize your  3D content library for a fast, searchable, smart and accurate user experience.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\D-FullService_Standards_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Standards & Templates</p></div>
                                    <div className="grid-desc text-center"><p>Various projects and branded accounts may require specific drawing and documentation standards. We can assist your team by developing a comprehensive set of BIM standards, including naming conventions, execution plans, custom project templates, title blocks, content libraries, and sheet sets.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs fs-span">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\D-FullService_Rendering_Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Renderings</p></div>
                                    <div className="grid-desc text-center"><p>As the saying goes, a picture is worth a thousand words. When it comes to our commitment to the outcome, we also believe a picture is a promise. Working with our team of modelers and rendering artists you will begin to see things you've never before considered.</p></div>
                                </div>
                                <div className="grid-items grid-items-fs">
                                    <div className="flex-center">
                                        <img src="\images\servicepage\fullservice\icons\D-FullService_ BIM_ Icon_01.svg" alt="building" className="grid-icon-fs icon-margin-bot" />
                                    </div>
                                    <div className="grid-headings text-center text-bold"><p>Building Information Modeling (BIM)</p></div>
                                    <div className="grid-desc text-center"><p>BIM Deployment and integration can seem daunting. Our team of Revit experts can ease the transition into Building Information Modeling by leading, managing, training, and contributing to your BIM projects and teams.</p></div>
                                </div>
                            </div>
                        <div className="text text-center boldText">Deliverables</div>
                        <div className="text">Design deliverables include 2D drawings and 3D models used for careful design decision-making, communicating design intent, diagramming essential systems and key adjacencies, contract documents, and ultimately physical construction. Deliverables may also include strategies for project management including financial, organizational, quality control, and schedule driven documents and checklists used to assure outcomes that are clear, concise, correct, and complete.</div>
                        <div className="text text-center boldText">Design Fees & Terms</div>
                        <p className="text">Fees for Full-Service Design are generally negotiated as a lump sum fixed fee for a discrete scope of services. Each service contract includes a well-defined scope, assumptions, exclusions, schedule of deliverables, fee breakdown, payment schedule, reimbursables, and legal terms.</p>                        
                    </div>
                </div>
            </>
        )
    }
}

export default Digital;