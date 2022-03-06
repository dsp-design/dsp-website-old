
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FlexStaff.css";

class FlexStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step1: false,
            step2: false,
            step3: false,
            step4: false,
            step5: false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate(previousProps, previousStates) {

    }
    render() {
        return (
            <>
                <div className="header-img header-img-exibits header-img-flexstaff">
                    <div className="header-main header-main-exibits">
                        <div className="flex-center">
                            <div className="header-text header-text-exibits" >
                                Your Flex Staff Specialist
                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="underline">

                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="header-text-description header-text-description-exibits text-center">
                                Staff Augmentation
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-large">
                    <div className="groups groups-join groups-fat">
                        <div className="header-desc">
                            <p className="text">Design Service Professionals, PLLC is an all-virtual design collective built on the premise that effective collaboration knows no geographic boundaries, and that every quality project deserves a team committed to a premium design process. Working primarily from home offices, we're able to keep our overhead costs low, allowing us to provide premium design services at competitive rates so we can pass along our savings to you.</p>
                            <p className="text">We also know the burden of running a design practice doesn't end with the design team, so we're providing a range of services that extend to virtual office, finance, and other admin related functions. With all of the challenges facing companies large and small today, doesn't it just make sense to leverage shared resources? Engage our distributed workforce and allow your team to fluctuate without compromising either projects or culture.</p>
                        </div>
                        <div className="boldText text text-center text-medium">
                            Our Method for Promoting Strong Outcomes
                        </div>
                        <div className="clip-container clip-container-4">
                            <div className={"clip-bg clip-bg-green"}>
                                <div className="clip-base">
                                    <div className="clip-head clip-head-4">
                                        <i className="fas fa-sliders-h"></i>
                                        <div className="text text-center white-text">OPTIMIZE ROLES & RESPONSIBILITIES</div>
                                    </div>
                                    <div className={"clip-body clip-body-green"}>
                                        <div className="clip-text">Our approach to Full-Time-Equivalent (FTE) employees is not exclusive to one person or one role. We believe various levels of expertise and a range of roles are needed to optimize both the work load and the work product. Successfully augmenting your team means amplifying the highest and best use of each member.</div>
                                    </div>
                                </div>
                            </div>
                            <div className={"clip-bg clip-bg-blue"}>
                                <div className="clip-base">
                                    <div className="clip-head clip-head-4">
                                        <i className="far fa-list-alt"></i>
                                        <div className="text text-center white-text">PROVIDE FLEXIBLE TIMEFRAMES</div>
                                    </div>

                                    <div className={"clip-body clip-body-blue"}>
                                        <div className="clip-text">Our approach to weekly contracted hours is flexible. We understand how projects ebb and flow so we’ve created a contract with minimum and maximum hours per week, allowing the team to ebb and flow along with the project. At the end of the day we don't want anyone on our team twiddling theirs thumbs on your dime.</div>
                                    </div>
                                </div>
                            </div>
                            <div className={"clip-bg clip-bg-red"}>
                                <div className="clip-base">
                                    <div className="clip-head clip-head-4">
                                        <i className="fas fa-link"></i>
                                        <div className="text text-center white-text">MAINTAIN STRONG CONNECTIONS</div>
                                    </div>
                                    <div className={"clip-body clip-body-red"}>
                                        <div className="clip-text">Our approach to quality management is key. We assign a team manager (client liaison) who is accountable for building and maintaining a strong client relationship, providing team oversight, monitoring schedules, and assuring quality deliverables. All made possible by careful communication.</div>
                                    </div>
                                </div>
                            </div>
                            <div className={"clip-bg clip-bg-yellow"}>
                                <div className="clip-base">
                                    <div className="clip-head clip-head-4">
                                        <i className="fas fa-piggy-bank"></i>
                                        <div className="text text-center"><p className="white-text">SHARE THE</p><p className="white-text"> SAVINGS</p></div>
                                    </div>
                                    <div className={"clip-body clip-body-yellow"}>
                                        <div className="clip-text">Our approach to savings allows our clients to benefit from discounted pricing in three primary ways. First, through a subscription-based monthly or yearly plan; second, with discounts for longer contract durations; and third by optimizing the number and distribution of FTE’s used on a given project.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="groups-people">
                    <div className="container-large">
                        <div className="groups groups-join no-bg">
                            <div className="boldText text text-center text-medium">Our Flex-Staff Process of Engagement</div>
                            <div className="grid-engagement">
                                <div className="steps pointer" onClick={() => this.setState({ step1: !this.state.step1 })}>
                                    {this.state.step1 ? <div className="circle-box-active"></div> : <div className="circle-box"></div>}
                                    <div className="step-text text-md">Step 1</div>
                                </div>
                                <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid calc-grid-step"} onClick={() => this.setState({ step1: !this.state.step1 })}>
                                    <div className="">Introduction and online contact</div>
                                    <div>{this.state.step1 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                                </div>
                                {this.state.step1 ?
                                    <>
                                        
                                        <div className={"whiteBg panel-body-2 steps-span-2"}>
                                            <div className="text text-md-2"><p>We want to get to know you, answer your questions, and hopeful gain your trust.</p><p>So, let's talk about your wants and needs to see how we might work together best.</p></div>
                                            {/* <div className="flex-right min-width mb-1"><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUOFpDTllKWFJZMlNOSUtXR0tXUjdUQkRONCQlQCN0PWcu" target="_blank" rel="noreferrer" className="btn custom-btn-2">Contact Us</a></div> */}
                                            <div className="flex-right min-width mb-1"><a href="/clients/contact" className="btn custom-btn-2">Contact Us</a></div>

                                        </div>
                                    </>
                                    : null}
                            </div>
                            <div className="grid-engagement">
                                <div className="steps pointer" onClick={() => this.setState({ step2: !this.state.step2 })}>
                                    {this.state.step2 ? <div className="circle-box-active"></div> : <div className="circle-box"></div>}
                                    <div className="step-text text-md">Step 2</div>
                                </div>
                                <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid calc-grid-step"} onClick={() => this.setState({ step2: !this.state.step2 })}>
                                    <div className="">Identify the what, the who, and the how long</div>
                                    <div>{this.state.step2 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                                </div>
                                {this.state.step2 ?
                                    <>
                                        
                                        <div className={"whiteBg panel-body-2 steps-span-2"}>
                                            <div className="text text-md-2"><p>We want to step in wherever you need us. So, let's talk a little bit about the following:</p>
                                                <ul>
                                                    <li className="join-us-list">design phases of work</li>
                                                    <li className="join-us-list">design services needed</li>
                                                    <li className="join-us-list">design deliverables anticipated</li>
                                                    <li className="join-us-list">design expertise needed</li>
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
                                <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid calc-grid-step"} onClick={() => this.setState({ step3: !this.state.step3 })}>
                                    <div className="">Down Payment and Set-up Fees</div>
                                    <div>{this.state.step3 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                                </div>
                                {this.state.step3 ?
                                    <>
                                        
                                        <div className={"whiteBg panel-body-2 steps-span-2"}>
                                            <div className="text text-md-2"><p>We want you to know we're in this together and we hope you feel the same way. So, let's talk about a few ways to get started:</p>
                                                <ul>
                                                    <li className="join-us-list">down payments vary between 20%-50% depending on the contract duration</li>
                                                    <li className="join-us-list">whether you retain a team or a single individual the set-up fees are the same</li>
                                                    <li className="join-us-list">when moving from one agreement into another the set-up fees are waived</li>
                                                    <li className="join-us-list">if you need a little time between agreements, remobilization fees are half-priced</li>
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
                                <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid calc-grid-step"} onClick={() => this.setState({ step4: !this.state.step4 })}>
                                    <div className="">Daily and Weekly Accountability</div>
                                    <div>{this.state.step4 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                                </div>
                                {this.state.step4 ?
                                    <>
                                        
                                        <div className={"whiteBg panel-body-2 steps-span-2"}>
                                            <div className="text text-md-2"><p>We have a plan to keep you in the loop and we're excited to share it.</p>
                                                <p>So, let's talk about what we're doing to keep you connected with our team:</p>
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
                                <div className={"text-md panel-calc panel-calc-3 whiteBg pointer calc-grid calc-grid-step"} onClick={() => this.setState({ step5: !this.state.step5 })}>
                                    <div className="">Payment & Opportunities for Saving</div>
                                    <div>{this.state.step5 ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div>
                                </div>
                                {this.state.step5 ?
                                    <>
                                        
                                        <div className={"whiteBg panel-body-2 steps-span-2"}>
                                            <div className="text text-md-2"><p>Bi-weekly is the goal, but we know that's not always feasible.</p>
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
                            {/* <div className="p1">
                                <div className="flex-center">
                                    <Link to="/flex-staff-estimator" className="btn btn-lg custom-btn-2">Calculate Estimate</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FlexStaff;
