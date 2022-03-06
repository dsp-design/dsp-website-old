import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./css/servicepage.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from "../../components/Cards";
import "../IceBreakers/components/Blocks"
import Blocks from "../IceBreakers/components/Blocks";
import ReactTooltip from 'react-tooltip'
class ServicePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, height: 0,
            partners: true,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    handlePartner(val) {
        this.setState({ partners: val })
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


    render() {
        const blocks = {
            blocks: [
                {
                    img: "00_ServicesMain_Quality_Icon_01.svg",
                    imgAlt: "quality",
                    heading: "Quality",
                    desc: "Quality Delivery & Culture of Professionalism",
                    desc2: "",
                },
                {
                    img: "00-ServicesMain_Value_Icon_01.svg",
                    imgAlt: "value",
                    heading: "Value",
                    desc: "Premium Design Services at value added billing rates",
                    desc2: "",
                },
                {
                    img: "00-ServicesMain_Experience_Icon_01.svg",
                    imgAlt: "broad_experience",
                    heading: "Broad Experience",
                    desc: "Depth of experience in target market sectors",
                    desc2: "",
                },
                {
                    img: "00-ServicesMain_Process_Icon_01.svg",
                    imgAlt: "distributed_netowrk",
                    heading: "Distributed Network",
                    desc: "Experts in the process of virtual collaboration",
                    desc2: "",
                },
                {
                    img: "00-ServicesMain_Transparent_Icon_01.svg",
                    imgAlt: "transparency",
                    heading: "Transparency",
                    desc: "Transparent interactions of design team and daily work-product",
                    desc2: "",
                },
                {
                    img: "00-ServicesMain_Collaborative_Icon_01.svg",
                    imgAlt: "collaborative_teams",
                    heading: "Collaborative Teams",
                    desc: "A strategic approach to team building and work-sharing",
                    desc2: "",
                },
                {
                    img: "00-ServicesMain_Progressive_Icon_01.svg",
                    imgAlt: "progressive_tools",
                    heading: "Progressive Tools",
                    desc: "Dynamic visualization for rapid decision-making",
                    desc2: "",
                },
            ]
        }
        return (
            <>
                <Carousel
                    additionalTransfrom={0}
                    autoPlay
                    autoPlaySpeed={6000}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    className=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    deviceType={this.props.deviceType}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1280
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 768,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1280,
                                min: 768
                            },
                            items: 1,
                            partialVisibilityGutter: 5
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <Cards bg_color="bgRed" icon="dspLogo-outline.png" cardTitle="Design Service Professionals" body="Designing a new process for connecting design professionals, sharing design opportunity, and delivering design service" hasButton={false}></Cards>
                    <Cards bg_color="bgGreen" icon="dspLogo-outline.png" cardTitle="Design Service Professionals" body="Bringing access, opportunity, and innovation to design and build professionals anywhere" hasButton={false}></Cards>
                    <Cards bg_color="bgBlue" icon="dspLogo-outline.png" cardTitle="Design Service Professionals" body="Building the industry's strongest back-of-house design team for the design and build communities" hasButton={false}></Cards>
                </Carousel>
                <div className="container-large">

                    <div className="groups">

                        <div className="text-panel">
                            <div className="title" >
                                <p>Design & Delivery Services</p>
                            </div>
                            <div className="underline">

                            </div>
                            <div className="header-desc-top hide-mobile">
                                <p className="text">Design Service Professionals, PLLC (DSP) is an all-virtual design practice uniquely positioned at the intersection of design and delivery. As a full-service architecture & interior design practice, we leverage the skills of our design talent right where they live in order to support teams and projects throughout the country. Having a decentralized network of design professionals ready and able to provide a wide range of architecture, interiors and digital design services allows us to assemble the right teams at the right time for our clients & AEC partners.</p>
                                <p className="text">DSP connects design professionals from coast to coast to provide services in two primary ways; first, with <span className="greenText">Discrete Scopes of Services called "Trusted Partnerships,"</span> and second, through <span className="redText"> Staff Augmentation Services referred to as "Flex Staff Specialists."</span> By tapping into the DSP Ecosystem, our partners will benefit from:</p>
                            </div>
                        </div>
                        <div className={blocks.blocks.length === 4 ? "grid-1-ice-4" : "grid-1-ice-max-4"}>
                            {blocks.blocks.map(block => {
                                return <Blocks img={block.img} imgAlt={block.imgAlt} heading={block.heading} desc={block.desc} desc2={block.desc2}></Blocks>
                            })}
                        </div>
                        <div className="text text-center">DSP connects design professionals from coast to coast to <span className="boldText">provide services in two primary ways:</span></div>
                        <div className="flex-center">
                            <div className="text">
                                <div className="grid-service-1">
                                    <div className="large-text-container">
                                        <p className="large-text">1</p>
                                    </div>
                                    <p><span className="boldText">Trusted Partnerships </span> for Discrete Scopes of Services </p>
                                    <div className="large-text-container">
                                        <p className="large-text">2</p>
                                    </div>
                                    <p><span className="boldText">Flex Staff Specialists</span> for Staff Augmentation Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="groups" >
                        <div className="grid-1">
                            <div className="content-panel">
                                <div className="text-panel">
                                    <div className="title" >
                                        <p>Your Trusted Partner</p>
                                    </div>
                                    <div className="underline">

                                    </div>
                                    <div className="subtitle" >
                                        <p>Is partnering outside your comfort zone? Engage our services a little-bit at a time.</p>
                                    </div>
                                    <div className=" mobile-font mobile-font">
                                        <p>Partnering on a project with someone new can be a risky experiment, so we provide as many ways as possible for you to build a trusted network within our ecosystem. Start small with one of our Icebreakers, take advantage of our Design Service Bundles, and team up with our Full-Service Design Scope when you're ready.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="img-container">
                                <img src="/images/servicepage/TrustedPartner_Image_01.jpg" alt=""></img>
                            </div>

                        </div>
                        <div className="heading-2">
                            Design Service Icebreakers
                        </div>
                        <div className="header-desc mobile-font">
                            <p>Ease into the DSP community by engaging our Icebreaker Services. These services are usually a single activity within the broader design process or a single deliverable to supplement the work you've already done. Whether a single activity or single deliverable we've identified minimal services that will help you gage our expertise and manage expectations for future services.</p>
                        </div>
                        <div className="grid-2">
                            <div className="text-block mobile-font">
                                <div className="bold-text">
                                    What's Included
                            </div>
                                <ul className="text-padding">
                                    <li className="join-us-list">Set-Up and Designer Intro</li>
                                    <li className="join-us-list">Description of Specific Deliverables</li>
                                    <li className="join-us-list">Regular Check-ins</li>
                                </ul>
                            </div>
                            <div className="button-holder">
                                <Link className="btn btn-block custom-btn" to="/icebreakers-architecture" >Learn More</Link>
                            </div>
                        </div>
                        <div className="heading-2">
                            Design Service Bundles
                        </div>
                        <div className="header-desc mobile-font">
                            <p>Service Bundles consist of two or more Icebreaker services that are complementary in nature. For example, building an existing conditions model coupled with a test fit, or running a permit set through the AHJ coupled with a peer review. These services are intended to tread lightly on your process, while providing valuable expertise along the way.</p>
                        </div>
                        <div className="grid-2">
                            <div className="text-block mobile-font">
                                <div className="bold-text">
                                    What's Included
                            </div>
                                <ul className="text-padding">
                                    <li className="join-us-list">Set Up and Team Management</li>
                                    <li className="join-us-list">Description of Specific Deliverables</li>
                                    <li className="join-us-list">Customer Liaison</li>
                                    <li className="join-us-list">Regular Check-ins</li>
                                </ul>
                            </div>
                            <div className="button-holder">
                                {/* <Link className="btn btn-block custom-btn" to="/contact" >Learn More</Link> */}
                                <Link className="btn btn-block custom-btn" to="/service-bundles" >Learn More</Link>
                            </div>
                        </div>
                        <div className="heading-2">
                            Full-Service Design Scope
                        </div>
                        <div className="header-desc mobile-font">
                            <p>Once you're familiar with the process and are comfortable with our community we'd love to share the responsibility for delivering your best work. As a Full-Service Design Practice, Design Service Professionals, PLLC is equipped with the design resources, expertise, and experience to deliver a broad range of projects, of any size, any complexity, and in any location.</p>
                        </div>
                        <div className="grid-2">
                            <div className="text-block mobile-font">
                                <div className="bold-text">
                                    What's Included
                            </div>
                                <ul className="text-padding">
                                    <li className="join-us-list">Project Management</li>
                                    <li className="join-us-list">Customer Liaison</li>
                                    <li className="join-us-list">Design Deliverables</li>
                                    <li className="join-us-list">DSP Project Portal</li>
                                    <li className="join-us-list">Flexible Services & Deliverables</li>
                                    <li className="join-us-list">Quality Management Program</li>
                                </ul>
                            </div>
                            <div className="button-holder">
                                <Link className="btn btn-block custom-btn" to="/full-service-architecture" >Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="groups" >
                        <div className="grid-3">
                            <div className="img-container">
                                <img src="/images/servicepage/FlexStaff_Image_01.png" alt=""></img>
                            </div>
                            <div className="content-panel">
                                <div className="text-panel">
                                    <div className="title" >
                                        <p>Your Flex Staff Specialist</p>
                                    </div>
                                    <div className="underline">

                                    </div>
                                    <div className="subtitle" >
                                        <p>extend your reach  while preserving your company culture</p>
                                    </div>
                                    <div className="panel-desc mobile-font">
                                        <p>We know that a company’s culture is rooted deeply in the stability of its staff, and that fluctuations in project needs can place undue burdens on companies, as well as individuals and project teams. DSP was conceived as an answer to these challenges.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="heading-2">
                            Answering the Challenge of Staff Fluctuations
                        </div>
                        <div className="header-desc mobile-font">
                            <p>At Design Service Professionals, PLLC we are intimately acquainted with the staffing challenges that occur for even the best and brightest design firms. We understand how economic cycles and project needs can fluctuate without warning, causing a ripple effect that can undermine decades of skillful preparation and carefully nurtured culture. The next time you want to broaden your reach, partner with the DSP Flex Staff and take advantage of all the benefits of a large firm while staying true to your brand, your size, and your strengths.</p>
                        </div>
                        <div className="grid-2">
                            <div className="text-block">
                                <div className="bold-text">
                                    What's Included
                            </div>
                                <ul className="text-padding">
                                    <li className="join-us-list">Highly Vetted and Trained Design and Admin Professionals</li>
                                    <li className="join-us-list">Dedicated Customer Liaison</li>
                                    <li className="join-us-list">Team Management Portal</li>
                                    <li className="join-us-list">Regular Check-ins & Process for Tracking Progress</li>
                                </ul>
                            </div>
                            <div className="button-holder">
                                <Link className="btn btn-block custom-btn" to="/flex-staff" >Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="groups groups-fat">
                        <div className="flex-center">
                            <div className="text-panel">
                                <div className="title" >
                                    <p>Customer Savings Program</p>
                                </div>
                                <div className="flex-center">
                                    <div className="underline">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="header-desc mobile-font">
                            <p>At Design Service Professionals, PLLC we are intimately acquainted with the staffing challenges that occur for even the best and brightest design firms. We understand how economic cycles and project needs can fluctuate without warning, causing a ripple effect that can undermine decades of skillful preparation and carefully nurtured culture. The next time you want to broaden your reach, partner with the DSP Flex Staff and take advantage of all the benefits of a large firm while staying true to your brand, your size, and your strengths.</p>
                        </div>
                        <div className="flex-3">
                            <div className="saving-card">
                                <div className="lower-border">
                                    <p className="savings-head redColor">Friend</p>
                                    <p className="savings-note">Friends* of DSP are essentially guests to our community. Friends are individuals or companies interested in visiting our community and requesting services. Friends may review our Marketplace, get to know the contributors, request services …<Link className="redColor ared" to="#">see more</Link>.</p>

                                </div>
                                <div className="lower-border">
                                    <p className="rates "><span className="redColor">free</span></p>
                                    <p className="rates-desc">Free Membership for all Friends of DSP.</p>
                                </div>
                                <ul className="plan-features">
                                    <li className="plan-feature join-us-list">Create a Professional Network</li>
                                    <li className="plan-feature join-us-list">Visit our Marketplace</li>
                                    <li className="plan-feature join-us-list">Review Opportunities</li>
                                    <li className="plan-feature join-us-list">Request Services</li>
                                    <li className="plan-feature join-us-list">Apply for Affiliate or Partner Membership</li>
                                </ul>

                            </div>
                            <div className="saving-card">
                                <div className="lower-border">
                                    <p className="savings-head greenColor">Affiliate</p>
                                    <p className="savings-note">Affiliates* are members of a nation-wide, vetted community of design professionals and preferred providers of design services within the DSP ecosystem. Access products and services at discounted rates, interact with the community ... <Link to="#" className="agreen">see more</Link>.</p>

                                </div>
                                <div className="lower-border">
                                    <p className="rates"><span className="greenColor cross">$30 </span>/month  <span className="greenColor cross">$300 </span>/year</p>
                                    <p className="rates-desc">Affiliate Membership is contingent on successfully completing the candidate vetting process, but free to the first 300 members.</p>
                                </div>
                                <ul className="plan-features">
                                    <li className="plan-feature join-us-list">Create a Professional Virtual Network</li>
                                    <li className="plan-feature join-us-list">Create a DSP Resume for Shared Proposals</li>
                                    <li className="plan-feature join-us-list">Assess your skills and develop new ones</li>
                                    <li className="plan-feature join-us-list">Review, Share, and Request Opportunities</li>
                                    <li className="plan-feature join-us-list">Collaborate with experts</li>
                                    <li className="plan-feature join-us-list">Deliver your best work with</li>
                                    <li className="plan-feature join-us-list">Track your Progress & Productivity</li>
                                    <li className="plan-feature join-us-list">Request Marketplace Services</li>
                                    <li className="plan-feature join-us-list">Access Shared Marketplace Tools</li>
                                </ul>

                            </div>
                            <div className="saving-card">
                                <div className="lower-border">
                                    <p className="savings-head">Partner</p>
                                    <p className="savings-note">Partners* are members of a nation-wide, vetted community of design companies and preferred providers of design services within the DSP ecosystem. Build a team, manage a coop, submit a proposal, leverage a deep reservoir of professionals ... <Link to="#" className="ablue">see more</Link>.</p>

                                </div>
                                <div className="lower-border">
                                    <p className="rates"><span className="blueColor cross">$300 </span>/month  <span className="blueColor cross">$3000 </span>/year</p>
                                    <p className="rates-desc">Partner Memberships vary by company size and participation level, but are free to the first 200 studios.</p>
                                </div>
                                <ul className="plan-features">
                                    <li className="plan-feature join-us-list">Create a Professional Virtual Practice</li>
                                    <li className="plan-feature join-us-list">Connect with a diverse community</li>
                                    <li className="plan-feature join-us-list">Create a DSP Resume for Shared Proposals</li>
                                    <li className="plan-feature join-us-list">Access expertise for your next project</li>
                                    <li className="plan-feature join-us-list">Track company Progress & Productivity</li>
                                    <li className="plan-feature join-us-list">Request and Provide Marketplace Services</li>
                                    <li className="plan-feature join-us-list">Promote your brand and expert services</li>
                                    <li className="plan-feature join-us-list">Build a Support Team of Professionals</li>
                                    <li className="plan-feature join-us-list">Create and manage your own  Design Coop</li>
                                </ul>

                            </div>
                        </div>
                        <div className="flex-center">
                        <span className="learn-more-block">Contact us for more information about our Customer Savings Program.</span>
                        </div>
                        <div className="flex-center">
                            {/* <Link className="btn custom-btn-2" to="/contact">Create Member Account</Link> */}
                            <Link className="btn custom-btn-2" to="/clients/contact">Contact Us</Link>
                        </div>
                    </div>
                    <div className="groups groups-fat">
                        <div className="flex-center">
                            <div className="text-panel">
                                <div className="title" >
                                    <p>Collaborators</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="underline">
                            </div>
                        </div>
                        <div className={"flex-5"}>
                            <img className="client-img" data-tip={true} data-for="img-1" src="/images/servicepage/clients/Axelrod_Logo_200x200_Black.png" alt=""></img>
                            <img className="client-img" data-tip={true} data-for="img-2" src="/images/servicepage/clients/BWS_Logo_200x200_Black.png" alt=""></img>
                            <img className="client-img" data-tip={true} data-for="img-3" src="/images/servicepage/clients/Jokake_Logo.jpg" alt=""></img>
                            <img className="client-img" data-tip={true} data-for="img-4" src="/images/servicepage/clients/Lightvox_Logo_200x200.png" alt=""></img>
                            <img className="client-img" data-tip={true} data-for="img-5" src="/images/servicepage/clients/OptimizedLED_Logo_200x200_Color.png" alt=""></img>
                            <ReactTooltip className="tooltip" id="img-1" place="top" type="dark" textColor="#fefcfb" multiline={true} effect="float">Axelrod Architects is a design-oriented, comprehensive architectural firm that creates distinctive residences, institutional and commercial buildings and interiors, in the modernist style. The firm is known for its attentiveness to fine detailing, honest expression of materials, and clean, simple forms.
    </ReactTooltip>
                            <ReactTooltip className="tooltip" id="img-2" place="top" type="light" backgroundColor="lightblue" textColor="gray" multiline={true} effect="float">BWS | Architects
    </ReactTooltip>
                            <ReactTooltip className="tooltip" id="img-3" place="top" type="info" textColor="#fefcfb" multiline={true} effect="float">Jokake is a full-service provider for real estate development services, new construction, and tenant improvements. Jokake delivers a better experience to its clients through our full real estate cycle services, expertise, and partnership.
    </ReactTooltip>
                            <ReactTooltip className="tooltip" id="img-4" place="top" type="info" textColor="#fefcfb" multiline={true} effect="float">Lightvox Studio is a collaborative architecture and interior design studio with the goal of using design to learn and to discover, to originate and innovate.
    </ReactTooltip>
                            <ReactTooltip className="tooltip" id="img-5" place="top" type="info" textColor="#fefcfb" multiline={true} effect="float">OptimizedLED
    </ReactTooltip>
                        </div>
                        <div className="flex-center">
                            {/* <button className="btn btn-link custom-btn-3" onClick={() => this.handlePartner(!this.state.partners)}>{this.state.partners ? "expand to see more" : "collapse"}</button> */}
                        </div>

                    </div>

                </div>
            </>

        )
    }
}

export default ServicePage;
