import React, { Component } from "react";
import Header from "../../../components/Header";
import '../css/bundles.css'
class Bundle extends Component {
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
    setMenu(menuState) {
        this.setState({ menu: menuState });
    }
    componentDidMount() {
        if (this.props.location.sectionProps === "scroll") {
            this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
            window.scrollTo(0, 0);
        }
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <>
                <Header title="Your Trusted Partner" subtitle="Design Service Bundles" color="green" text={[

                ]} />
                <div className="groups groups-header">
                    <p className="text">Service Bundles consist of two to five Icebreaker services that are complementary in nature. For example, building an existing conditions model coupled with a test fit, or running a permit set through the AHJ coupled with a peer review. These services are intended to tread lightly on your process, while providing valuable expertise along the way. Check out some examples of Service Bundles below, including a close look at how you can create a custom bundle suited to your company, brand, team, or project. Why bundle? So we can both benefit from the savings that occurs from one-time start-up costs.</p>
                </div>
                <div className="container-large" ref={this.ref}>
                    <div className="whitebg groups-bundle groups-top">
                        <div className="bundle-image-aor"></div>
                    </div>
                    <div className="groups group-join">
                        <div className="text darkGreenText boldText fs-heading">AOR - Architect of Record</div>
                        <p className="text">Having "responsible control" over the design and documentation of an architectural project varies from state to state. At DSP we're helping to connect design leaders with technical delivery partners while sharing liability and responsible control according to state requirements. We're also helping to connect builders with architects having integrated design-build expertise. Where states support the Design-Build delivery process, we want to pair highly qualified design teams with compatible builders who share the Design-Build philosophy promoted by DBIA.</p>
                        <div className="grid-join-3 grid-gap-2 grid-start grid-mobile">
                            <div className="">
                                <div className="text boldText">What's in the Basic bundle: </div>
                                <div className="text">Where jurisdictions allow, you may be taking design documents through CDs and need a licensed architect to provide high level oversight and periodic reviews of the work in order to achieve an architectural seal. Where this is the case we're here to facilitate the quality review program necessary to achieve an architectural seal.</div>
                                <ul className="text">
                                    <li className="ml-1 list-inside">Quality Management including QA Checklists and QC Reviews</li>
                                    <li className="ml-1 list-inside">Permit Running including agency coordination and comments resolution.</li>
                                </ul>
                            </div>
                            <img className="bundle-img" src="/images/servicepage/bundles/02-ServicesBundled_Bundle_AOR_Image_02.jpg" alt="service-bundle" />

                        </div>
                        <div className="grid-join-3 grid-gap-2 grid-start grid-mobile">
                            <img className="bundle-img order-2" src="/images/servicepage/bundles/02-ServicesBundled_Bundle_AOR_Image_3.png" alt="service-bundle" />
                            <div className="order-1">
                                <div className="text boldText">What's in the Median bundle:  </div>
                                <div className="text">Where you've developed the design and documents through Schematic Design and are looking for a partner to help deliver a Permit Set, we're here to collaborate, share scopes of work, and/or provide the necessary oversight, quality management and documentation to qualify as your Architect of Record.</div>
                                <ul className="text">
                                    <li className="ml-1 list-inside">Occupancy & Egress Plans, including Noted Drawings, Room Schedules and Area Legends</li>
                                    <li className="ml-1 list-inside">Quality Management including QA Checklists and QC Reviews</li>
                                    <li className="ml-1 list-inside">Permit Running including agency coordination and comments resolution.</li>
                                </ul>
                            </div>

                        </div>
                        <div className="text boldText">What's in the Premium bundle: </div>
                        <div className="text">Where your primary focus is conceptual design, we're here to carry your project through to completion, protecting your design intent, assuring quality documentation, coordinating design consultants, managing interactions with AHJs, and shepherding your project through the permitting process. While these services extend beyond a "Service Bundle" we're here to bring your concept to reality. Check out our <a href="/full-service-architecture" className="ared boldText">Full-Services</a> to learn more.</div>
                        {/* <div className="flex-center">
                            <a className="btn btn-lg btn-block fit-content custom-btn cb-ice-2" href="/flex-staff-estimator" target="_blank" rel="noreferrer" >Calculate Estimate</a>
                        </div> */}
                        {/* <div className="bundle-splitter"></div> */}
                        <div className="flex-center ">
                            <a className="btn btn-lg btn-block fit-content custom-btn-2 cb-ice-3" href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu" target="_blank" rel="noreferrer">Request Service</a>
                        </div>
                    </div>
                </div>
                <div className="container-large" ref={this.ref}>
                    <div className="whitebg groups-bundle groups-top">
                    <div className="bundle-image-startblock"></div>
                    </div>
                    <div className="groups group-join">
                        <div className="text blueColor boldText fs-heading">Startblock</div>
                        <p className="text">Take the risk out of real estate and design decision making with a proprietary design solution that puts industry, market and project information in one place so you get your project right from the start.</p>
                        <div className="grid-join-3 grid-gap-2 grid-start grid-mobile">
                            <img className="bundle-img" src="/images/servicepage/bundles/02-ServicesBundled_Bundle_Startblock_Image_02.jpg" alt="service-bundle" />
                            <div className="">
                                <div className="text">THE RIGHT SPACE FROM THE START </div>
                                <div className="text">Ensure spaces function for the people and teams that use them by uploading departmental spatial requirements & adjacencies so every design considers your business and teams first. Startblock strategically partners with designers & architects from commercial office, retail, hospitality, residential, healthcare and more to provide the right design approach to any project.</div>
                                <ul className="text">
                                    <li className="ml-1 list-inside">Programming</li>
                                    <li className="ml-1 list-inside">Space Blocking</li>
                                    <li className="ml-1 list-inside">Test Fitting</li>
                                    <li className="ml-1 list-inside">Existing Conditions Modeling</li>
                                </ul>
                            </div>

                        </div>
                        <div className="grid-join-3 grid-gap-2 grid-start grid-mobile">
                            <div className="order-2">
                                <div className="text boldText">FULLY UNDERSTAND DESIGN INTENT</div>
                                <div className="text">Start off in 3D: we allow you to visualize the project in an immersive environment at any project phase quickly. Traditionally rendering and VR are costly and time intensive, but the Startblock approach provides you the opportunity to begin a project with these comprehensive visual tools. You can make decisions around your design, budget, FF&E selections confidently from the onset.</div>
                                <ul className="text">
                                    <li className="ml-1 list-inside">Space Blocking</li>
                                    <li className="ml-1 list-inside">Test Fitting</li>
                                    <li className="ml-1 list-inside">Existing Conditions Modeling</li>
                                    <li className="ml-1 list-inside">Space Plan</li>
                                    <li className="ml-1 list-inside">FF&E Selection</li>
                                </ul>
                            </div>
                            <img className="bundle-img order-1" src="/images/servicepage/bundles/02-ServicesBundled_Bundle_Startblock_Image_03.jpg" alt="service-bundle" />

                        </div>
                        <div className="text">
                            <p>COVID 19 Response:</p>
                            <p>Need help planning the future of your Real Estate portfolio? Startblock is an agile, data driven process that is space and industry agnostic. Let us help your organization consider strategic solutions that help open doors sooner and get business back to normal.</p>
                        </div>
                        {/* <div className="flex-center">
                            <a className="btn btn-lg btn-block fit-content custom-btn cb-ice-2" href="/flex-staff-estimator" target="_blank" rel="noreferrer" >Calculate Estimate</a>
                        </div>
                        <div className="bundle-splitter"></div> */}
                        <div className="flex-center ">
                            <a className="btn btn-lg btn-block fit-content custom-btn-2 cb-ice-3" href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu" target="_blank" rel="noreferrer">Request Service</a>
                        </div>
                    </div>
                </div>
                <div className="container-large" ref={this.ref}>
                    <div className="groups group-join">
                        <img src="/images/servicepage/Design-timeline.png" alt="full-service-arc-subheading" className="full-width"></img>

                        <div className="text boldText fs-heading text-center">Choose Your Own Bundle</div>
                        <p className="text text-center">Select any combination of complementary services from the list of single services below. The range of services corresponds to the the design phase diagram above.</p>

                        <div className="grid-bundle-3 grid-bundle">
                            <div className="grid-bundle-gap-2">
                                <div className="bundle-radio green-radio text-center">PRE-DESIGN</div>
                                <div className="grid-subbundle-4">
                                    <div className="grid-bundle-gap">
                                        <div className="green-radio p2 xs-text">02-11-Proposals & Quals</div>
                                        <div className="green-radio p2 xs-text">02-12-Work Plans</div>
                                        <div className="green-radio p2 xs-text">02-22-Team Coordination</div>
                                    </div>
                                    <div className="grid-bundle-gap">
                                        <div className="green-radio p2 xs-text">03-23-Preliminary Due Diligence</div>
                                        <div className="green-radio p2 xs-text">03-30-Proposal Development</div>
                                        <div className="green-radio p2 xs-text">03-31-Preliminary Diagramming</div>
                                        <div className="green-radio p2 xs-text">03-32-Content Development</div>
                                        <div className="green-radio p2 xs-text">03-33-Rendering & Visualization</div>
                                        <div className="green-radio p2 xs-text">03-34-Presentation</div>
                                    </div>
                                    <div className="grid-bundle-gap">
                                        <div className="green-radio p2 xs-text">04-21-BIM Execution Plan</div>
                                        <div className="green-radio p2 xs-text">04-23-Model Checklist</div>
                                        <div className="green-radio p2 xs-text">04-24-Model Set-up</div>
                                        <div className="green-radio p2 xs-text">04-25-Design Document Set-Up</div>
                                        <div className="green-radio p2 xs-text">04-36-Navisworks Coordination</div>
                                        <div className="green-radio p2 xs-text">04-42-Model Development</div>
                                        <div className="green-radio p2 xs-text">04-43-Family Creation</div>
                                        <div className="green-radio p2 xs-text">04-45-Quantity Schedules</div>
                                        <div className="green-radio p2 xs-text">04-51-Revit Help Desk</div>
                                        <div className="green-radio p2 xs-text">04-52-Model Maintenance</div>
                                        <div className="green-radio p2 xs-text">04-53-Project Team Training</div>
                                        <div className="green-radio p2 xs-text">04-61-Rendering</div>
                                        <div className="green-radio p2 xs-text">04-62-Animations & Walk-thrus</div>
                                        <div className="green-radio p2 xs-text">04-65-Post Production / Presentations</div>
                                        <div className="green-radio p2 xs-text">04-71-Thermal Analysis</div>
                                        <div className="green-radio p2 xs-text">04-72-Daylighting Analysis</div>
                                        <div className="green-radio p2 xs-text">04-73-Computational Design</div>
                                        <div className="green-radio p2 xs-text">04-74-Parametric Design</div>
                                        <div className="green-radio p2 xs-text">04-75-Generative Design</div>
                                        <div className="green-radio p2 xs-text">04-76-Motion Graphics</div>
                                        <div className="green-radio p2 xs-text">04-77-Digital Environments</div>
                                        <div className="green-radio p2 xs-text">04-78-Design Presentations</div>
                                        <div className="green-radio p2 xs-text">04-79-Dynamo Scripting</div>
                                    </div>
                                    <div className="grid-bundle-gap">
                                        <div className="green-radio p2 xs-text">05-22-Due Diligence</div>
                                        <div className="green-radio p2 xs-text">05-23-Site Analysis</div>
                                        <div className="green-radio p2 xs-text">05-31-Workplace Observation</div>
                                        <div className="green-radio p2 xs-text">05-32-System Mapping</div>
                                        <div className="green-radio p2 xs-text">05-42-Preliminary LEED Checklist</div>
                                        <div className="green-radio p2 xs-text">05-52-Programming Docs</div>
                                        <div className="green-radio p2 xs-text">05-53-Workplace Standards</div>
                                        <div className="green-radio p2 xs-text">05-60-Design Presentation</div>

                                    </div>
                                </div>
                            </div>
                            <div className="grid-bundle-gap-2">
                                <div className="bundle-radio yellow-radio text-center">DESIGN</div>
                                <div className="grid-subbundle-4">
                                    <div className="grid-bundle-gap">
                                        <div className="yellow-radio p2 xs-text">06-20-Visioning</div>
                                        <div className="yellow-radio p2 xs-text">06-22-Story boarding</div>
                                        <div className="yellow-radio p2 xs-text">06-23-Product & Material Research</div>
                                        <div className="yellow-radio p2 xs-text">06-24-Look & Feel</div>
                                        <div className="yellow-radio p2 xs-text">06-31-Diagramming</div>
                                        <div className="yellow-radio p2 xs-text">06-33-Test Fitting</div>
                                        <div className="yellow-radio p2 xs-text">06-40-Concept Modeling</div>
                                        <div className="yellow-radio p2 xs-text">06-41-Massing</div>
                                        <div className="yellow-radio p2 xs-text">06-42-Solar Studies</div>
                                        <div className="yellow-radio p2 xs-text">06-51-Wire-frame Perspectives</div>
                                        <div className="yellow-radio p2 xs-text">06-52-Rendered Perspectives</div>
                                        <div className="yellow-radio p2 xs-text">06-53-Animations</div>
                                        <div className="yellow-radio p2 xs-text">06-62-Concept Book</div>
                                    </div>
                                    <div className="grid-bundle-gap">
                                        <div className="yellow-radio p2 xs-text">07-21-Product & Material Research</div>
                                        <div className="yellow-radio p2 xs-text">07-22-Existing Conditions Survey</div>
                                        <div className="yellow-radio p2 xs-text">07-23-Preliminary Finish Selection</div>
                                        <div className="yellow-radio p2 xs-text">07-42-Massing Studies</div>
                                        <div className="yellow-radio p2 xs-text">07-43-Facade Studies</div>
                                        <div className="yellow-radio p2 xs-text">07-44-Solar Studies</div>
                                        <div className="yellow-radio p2 xs-text">07-45-Acoustic Studies</div>
                                        <div className="yellow-radio p2 xs-text">07-51-Wire-frame Perspectives</div>
                                        <div className="yellow-radio p2 xs-text">07-52-Rendered Perspectives</div>
                                        <div className="yellow-radio p2 xs-text">07-53-Animations</div>
                                        <div className="yellow-radio p2 xs-text">07-61-SD Cartoon Set</div>
                                        <div className="yellow-radio p2 xs-text">07-63-Site Plan</div>
                                        <div className="yellow-radio p2 xs-text">07-65-Interior Layout</div>
                                        <div className="yellow-radio p2 xs-text">07-66-SD Elevations</div>
                                        <div className="yellow-radio p2 xs-text">07-67-SD Sections</div>
                                        <div className="yellow-radio p2 xs-text">07-70-SD Quality Management</div>
                                        <div className="yellow-radio p2 xs-text">07-71-SD QC Checklist</div>
                                        <div className="yellow-radio p2 xs-text">07-72-SD QA Review</div>
                                    </div>
                                    <div className="grid-bundle-gap">
                                        <div className="yellow-radio p2 xs-text">08-21-Code Review & Analysis</div>
                                        <div className="yellow-radio p2 xs-text">08-22-Product & Material Research</div>
                                        <div className="yellow-radio p2 xs-text">08-23-Outline Specification</div>
                                        <div className="yellow-radio p2 xs-text">08-24-LEED Checklist Updates</div>
                                        <div className="yellow-radio p2 xs-text">08-25-FF&E Selection</div>
                                        <div className="yellow-radio p2 xs-text">08-51-Wire-frame Perspectives</div>
                                        <div className="yellow-radio p2 xs-text">08-52-Rendered Perspectives</div>
                                        <div className="yellow-radio p2 xs-text">08-53-Animations</div>
                                        <div className="yellow-radio p2 xs-text">08-61-DD Cartoon Set & Sheet Creation</div>
                                        <div className="yellow-radio p2 xs-text">08-62-DD Site Plan</div>
                                        <div className="yellow-radio p2 xs-text">08-63-DD Floor Plans</div>
                                        <div className="yellow-radio p2 xs-text">08-64-DD Roof Plans</div>
                                        <div className="yellow-radio p2 xs-text">08-65-DD Ceiling Plans</div>
                                        <div className="yellow-radio p2 xs-text">08-66-DD Core & Vert Circulation</div>
                                        <div className="yellow-radio p2 xs-text">08-67-DD Elevations</div>
                                        <div className="yellow-radio p2 xs-text">08-68-DD Sections</div>
                                        <div className="yellow-radio p2 xs-text">08-69-DD Details</div>
                                        <div className="yellow-radio p2 xs-text">08-70-Quality Management</div>
                                        <div className="yellow-radio p2 xs-text">08-71-DD QC Checklist</div>
                                        <div className="yellow-radio p2 xs-text">08-72-DD QA Review</div>
                                    </div>
                                    <div className="grid-bundle-gap">
                                        <div className="yellow-radio p2 xs-text">09-21-Look & Feel</div>
                                        <div className="yellow-radio p2 xs-text">09-22-Furniture Program</div>
                                        <div className="yellow-radio p2 xs-text">09-23-Preliminary Furniture Selection</div>
                                        <div className="yellow-radio p2 xs-text">09-24-Furniture Layout</div>
                                        <div className="yellow-radio p2 xs-text">09-25-Furniture Documentation</div>
                                        <div className="yellow-radio p2 xs-text">09-26-Code Review</div>
                                        <div className="yellow-radio p2 xs-text">09-31-Fixture Program</div>
                                        <div className="yellow-radio p2 xs-text">09-32-Preliminary Fixture Selection</div>
                                        <div className="yellow-radio p2 xs-text">09-33-Fixture Documentation</div>
                                        <div className="yellow-radio p2 xs-text">09-41-Equipment Program</div>
                                        <div className="yellow-radio p2 xs-text">09-42-Preliminary Equipment Selection</div>
                                        <div className="yellow-radio p2 xs-text">09-43-Equipment Documentation</div>
                                        <div className="yellow-radio p2 xs-text">09-45-Preliminary Equipment Schedule</div>
                                        <div className="yellow-radio p2 xs-text">09-51-Furniture Modeling</div>
                                        <div className="yellow-radio p2 xs-text">09-54-FF&E Presentation</div>

                                    </div>
                                </div>
                            </div>
                            <div className="grid-subbundle-3">
                                <div className="grid-bundle-gap-2">
                                    <div className="bundle-radio blue-radio text-center">DOCUMENT</div>
                                    <div className="grid-bundle-gap">
                                        <div className="blue-radio p2 xs-text width75 mauto">10-20-Design Research & Specs</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-21-Code Review & Validation</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-22-Product & Material Research</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-23-Project Manual & Spec Dev</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-24-Cartoon Set & Sheet Index</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-30-CD Coordination</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-61-General Project Info & Index</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-62-Occ & Egress & Access Plans</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-63-Site Plans</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-64-Demo Plans</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-71-Building Elevations</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-72-Building Sections</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-73-Wall Sections</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-74-Interior Elevations</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-75-Enlarged Plans & Elev</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-76-Schedules</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-77-Details</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-78-Sheet Specs</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-79-Key Noting</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-80-Quality Management</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-83-CD QA Checklist</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-84-CD QC Review</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-86-CD Sign & Seal</div>
                                        <div className="blue-radio p2 xs-text width75 mauto">10-94-Project Manual</div>
                                    </div>
                                </div>
                                <div className="grid-bundle-gap-2">
                                    <div className="bundle-radio red-radio text-center">CONSTRUCTION</div>
                                    <div className="grid-bundle-gap">
                                        <div className="red-radio p2 xs-text width75 mauto">11-21-Pre-Application Meeting</div>
                                        <div className="red-radio p2 xs-text width75 mauto">11-23-Permit Running</div>
                                        <div className="red-radio p2 xs-text width75 mauto">11-24-Consultant Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">11-50-Legal Oversight</div>
                                        <div className="red-radio p2 xs-text width75 mauto">11-52-Legal Representation</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-23-On Site Meetings/ Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-31-Design Issues Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-32-Civil/Site Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-33-Landscape Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-34-Structural Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-35-MPE Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-36-Lighting Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-37-AV,IT & Acoustics Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-38-FF&E Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-39-Fire Protection Coordination</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-40-CA Design Revisions</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-52-RFI Response</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-53-Shop Drawing Review</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-54-Submittal Review</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-56-Field Observation Reports</div>
                                        <div className="red-radio p2 xs-text width75 mauto">12-57-LEED Documentation</div>
                                    </div>
                                </div>
                                <div className="grid-bundle-gap-2">
                                    <div className="bundle-radio gray-radio text-center">MOVE-IN</div>
                                    <div className="grid-bundle-gap">
                                        <div className="gray-radio p2 xs-text width75 mauto">15-20-Observe Research & Map Existing Service</div>
                                        <div className="gray-radio p2 xs-text width75 mauto">15-22-Collab Service Improvement Ideation</div>
                                        <div className="gray-radio p2 xs-text width75 mauto">15-23-Collab Service Prototyping</div>
                                        <div className="gray-radio p2 xs-text width75 mauto">15-24-Service Implementation Observation</div>
                                        <div className="gray-radio p2 xs-text width75 mauto">15-25-Coaching</div>
                                        <div className="gray-radio p2 xs-text width75 mauto">15-26-Workshop Facilitation</div>
                                        <div className="gray-radio p2 xs-text width75 mauto">15-27-Sustainability Consultation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex-center">
                            <a className="btn btn-lg btn-block fit-content custom-btn cb-ice-2" href="/flex-staff-estimator" target="_blank" rel="noreferrer" >Calculate Estimate</a>
                        </div> */}
                        <div className="flex-center ">
                            <a className="btn btn-lg btn-block fit-content custom-btn-2 cb-ice-3" href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu" target="_blank" rel="noreferrer">Request Service</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Bundle;