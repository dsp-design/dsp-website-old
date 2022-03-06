
import React, { Component } from "react";
import Clip from "../../components/Clip";
import { Link } from 'react-router-dom'
import JoinNav from "../../components/JoinNav";
import "./JoinUs.css";
import { InView } from 'react-intersection-observer'
class JoinUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "eco"
        }
        this.eco = React.createRef();
        this.teams = React.createRef();
        this.ben = React.createRef();
        this.mem = React.createRef();
        this.val = React.createRef();
        this.vet = React.createRef();
    }
    componentDidMount() {
        //Always undefined..?
        if (this.props.location.sectionProps === "eco") {
            this.eco.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "teams") {
            this.teams.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "ben") {
            this.ben.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "val") {
            this.val.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "mem") {
            this.mem.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
            window.scrollTo(0, 0)
        }
    }
    componentDidUpdate(previousProps, previousStates) {
        if (previousProps.location.sectionProps !== this.props.location.sectionProps) {
            if (this.props.location.sectionProps === "eco") {
                this.eco.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "teams") {
                this.teams.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "ben") {
                this.ben.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "val") {
                this.val.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "mem") {
                this.mem.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else {
                window.scrollTo(0, 0)
            }
            this.setState({ current: this.props.location.sectionProps })
        }
    }
    render() {
        return (
            <>
                <div className="header-img header-img-exibits header-img-joinus">
                    <div className="header-main header-main-exibits">
                        <div className="flex-center">
                            <div className="header-text header-text-exibits" >
                                Join Us
                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="underline">

                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="header-text-description header-text-description-exibits text-center">
                                Design Service Professionals
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-large">
                    <div className="groups groups-join">
                        <div className="about-heading join-heading text-center">Design Service Professionals, PLLC was conceived with three primary purposes in mind...</div>
                        <div className="cards-container-join">
                            <div className="list-container-join">
                                <div className="list-item-with-bulletred list-item-with-bullet-join text-align">Create work-life opportunities for talented individuals coast to coast</div>
                                <div className="list-item-with-bulletblue list-item-with-bullet-join text-align">Establish a mode of design that values collaboration above ego</div>
                                <div className="list-item-with-bulletgreen list-item-with-bullet-join text-align">Elevate the best in our people and the best in our partners, so we can achieve more together</div>
                            </div>
                        </div>
                        <div className="text-center greenColor text-large">TWO ENTITIES... ONE ECOSYSTEM</div>
                        <div className="grid-join-1 grid-auto">
                            <div className="grid-join-2">
                                <div className="large-text">
                                    1
                                </div>
                                <div className="join-title-1">
                                    <div className="join-title-head">
                                        dsp.network
                                    </div>
                                    <div className="join-title-body">
                                        a design web, acting in harmony from the outside
                                    </div>
                                </div>
                            </div>
                            <div className="grid-join-2">
                                <div className="large-text">
                                    2
                                </div>
                                <div className="join-title-1">
                                    <div className="join-title-head">
                                        dsp.nucleus
                                    </div>
                                    <div className="join-title-body">
                                        an all-virtual design pulse, beating from the inside
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <JoinNav current={this.state.current} />
                <InView as="div" threshold={0.2} onChange={(ele, entry) => ele ? this.setState({ current: "eco" }) : null}>
                    <div className="container-large" ref={this.eco}>
                        <div className="groups groups-join">
                            <div className="redColor text-large left-margin small-padding">dsp.ecosystem</div>
                            <div className="text">DSP is dedicated to creating an ecosystem of design professionals capable of procuring, designing, and delivering a broad range of projects, of any size, any complexity, and in any location. By tapping into our unique platform you can connect with a diverse body of design professionals, share project insights and opportunities, and deliver excellent work for clients anywhere.</div>
                            <div className="grid-join-1 grid-auto grid-gap-2">
                                <div className="join-card-2">
                                    <div>
                                        <div className="blueColor text-large left-margin small-padding">dsp.network</div>
                                        <p className="text">Join our network of individually contracted design professionals and independently recognized brands and thrive together.</p>
                                        <p className="text">Build your own design coop. Create a bespoke team of highly trained, talented, and award winning designers. Connect, share, and deliver your best work using our one-of-a-kind team building platform.</p>
                                    </div>
                                    <div className="grid-join-1 grid-auto vertical-center">
                                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNUtCTU1PUVJBQklOWk5LMlpTRUU4ODFOMCQlQCN0PWcu" className="btn btn-primary btn-block btn-large custom-btn-blue" target="_blank" rel="noreferrer">join our network</a>
                                        <div><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUOFVOQjAxQ0NQTVozRTBZRjNYWktVQjFUNSQlQCN0PWcu" className="ablue" target="_blank" rel="noreferrer">Remind me to apply later</a></div>
                                    </div>
                                </div>
                                <div className="join-card-2">
                                    <div>
                                        <div className="greenColor text-large left-margin small-padding">dsp.nucleus</div>
                                        <p className="text">Work with us to cultivate the heart and soul of a progressive design ecosystem.</p>
                                        <p className="text">Join our nucleus, an integrated core team of part-time and full-time interdisciplinary employees assembled to connect and support our growing ecosystem of design and build professionals, coast to coast.</p>
                                    </div>
                                    <div className="grid-join-1 grid-auto vertical-center">
                                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUMzMwNkdXN0c3OTlZMFg1U1VGWlRJTUQ0NSQlQCN0PWcu" className="btn btn-success btn-block btn-large custom-btn-green" target="_blank" rel="noreferrer">see available positions</a>
                                        <div><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUOFVOQjAxQ0NQTVozRTBZRjNYWktVQjFUNSQlQCN0PWcu" className="agreen" target="_blank" rel="noreferrer">Remind me to apply later</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </InView>
                <InView as="div" threshold={0.2} onChange={(ele, entry) => ele ? this.setState({ current: "teams" }) : null}>
                    <div className="groups-4c" ref={this.teams}>
                        <div className="container-large">
                            <div className="groups groups-join no-bg">
                                <div className="grid-join-1 grid-mobile">
                                    <div className="join-card">
                                        <div className="redColor text-large left-margin small-padding">dsp.teams</div>
                                        <p className="text">Teams are comprised of various interdisciplinary members, each fulfilling a key role specific to the needs of our clients and projects. Roles often fluctuate depending on the vetted expertise of the members, the range of billing rates, and the expectations of the work. Check out our <a onClick={() => this.vet.current.scrollIntoView({ behavior: "smooth", block: "center" })} className="ared pointer">vetting process</a> to learn more.</p>
                                        <p className="text">Teams are created, maintained, supported, and assessed using the DSP Team Builder web and mobile-based applications. <a href="/clients/contact" className="ared">Contact Us</a> to create a member account and get started building your own network of design service professionals.</p>
                                    </div>
                                    <div className="join-img">
                                        <img src="/images/JoinUs/Join_Teams Sign_01.svg" alt="alt-text" className="join-img-contain"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-large">
                        <div className="groups groups-join">
                            <div className="redColor text-large left-margin small-padding" >explore our teams</div>
                            <p className="text">The following sectors comprise groups of cohorts that are working together to develop efficient processes and technology driven tools relevant to the services we provide. Learn more about the purpose behind each sector then check out the <a href="/marketplace" className="ared">DSP Marketplace</a> to learn how the tools and processes we love most are impacting the design community.</p>
                            <div className="grid-join-3 grid-gap-2 grid-mobile">
                                <div className="join-img">
                                    <img src="\images\JoinUs\Join_Teams_01.svg" alt="alt-text" className="join-img-contain"></img>
                                </div>
                                <div className="join-card">
                                    <div className="greenColor text-large left-margin small-padding" >dsp.management</div>
                                    <p className="text">Work with us to assemble and support the right team for every project</p>
                                    <p className="text">Design Service Professionals, PLLC prides itself on creating efficient, effective teams for a variety of clients and across a wide range of projects. The key to our success is largely dependent on the stellar ability of our design management team. Guiding the design process, leading talented teams, and influencing a range of projects both inside and around the dsp ecosystem, dsp.management sets the pace for our teams and clients to thrive.</p>
                                </div>

                            </div>
                            <div className="grid-join-3 grid-gap-2 grid-mobile">
                                <div className="join-card">
                                    <div className="greenColor text-large left-margin small-padding" >dsp.marketing</div>
                                    <p className="text">Our key to leading the virtual-design marketplace into the next design revolution</p>
                                    <p className="text">Design Service Professionals, PLLC is driven to discover and engage the next big thing. Bringing a mix of local and global marketing expertise and business intelligence to the forefront of every pursuit, dsp.marketing provides a powerful conduit for promoting our design impact in the marketplace.</p>
                                </div>
                                <div className="join-card">
                                    <div className="greenColor text-large left-margin small-padding" >dsp.admin</div>
                                    <p className="text">Work with us to cultivate the heart and soul of our infant design ecosystem</p>
                                    <p className="text">A thriving administrative staff is at the very core of what we’re attempting to achieve. We are a people first company which means our people put people first. As such, dsp. admin constitutes the most competent people you’ve ever met, with off the chart self-motivation, a quick smile and an eagerness to make people feel loved and appreciated.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="groups-people">
                        <div className="container-large">
                            <div className="groups groups-join no-bg">
                                <div className="grid-join-3 grid-gap-2 grid-mobile">
                                    <div className="join-card">
                                        <div className="blueColor text-large left-margin small-padding" >dsp.architecture</div>
                                        <p className="text">We are a full-service architecture practice</p>
                                        <p className="text">Design Service Professionals, PLLC is driven by innovation and progressive design processes. We’re assembling a talented team of architects, designers, and technical staff dedicated to offering the highest quality design and delivery processes in the industry. By engaging dsp.architecture, our clients will have access to the best talent and most effective process the industry has to offer.</p>
                                    </div>
                                    <div className="join-card">
                                        <div className="blueColor text-large left-margin small-padding" >dsp.interiors</div>
                                        <p className="text">We are a full-service interior design practice</p>
                                        <p className="text">Design Service Professionals, PLLC is driven to create high functioning, immersive experiences. From the processes we engage to the spaces we envision, our team of interior design professionals has the expertise and acumen to achieve excellence for each of our clients and partners, from coast to coast.</p>
                                    </div>

                                </div>
                                <div className="grid-join-3 grid-gap-2 grid-mobile">
                                    <div className="join-card">
                                        <div className="blueColor text-large left-margin small-padding" >dsp.digital</div>
                                        <p className="text">Our digital design practice is second to none</p>
                                        <p className="text">Design Service Professionals, PLLC is driven by innovation and progressive design processes. We’re assembling a talented team of architects, designers, and technical staff dedicated to offering the highest quality design and delivery processes in the industry. By engaging dsp.architecture, our clients will have access to the best talent and most effective process the industry has to offer.</p>
                                    </div>
                                    <div className="join-card">
                                        <div className="blueColor text-large left-margin small-padding" >dsp.brand</div>
                                        <p className="text">Branded environments are the beating heart of our experiential design process</p>
                                        <p className="text">Design Service Professionals, PLLC thrives on bringing creative identity to each of our clients’ projects. Our team of brand and experience designers will lead the industry as thinkers and makers, bringing a mix of design expertise and business understanding to the market, while promoting the brand and reputation of our valued clients.</p>
                                    </div>

                                </div>
                                <div className="grid-join-3 grid-gap-2 grid-mobile">
                                    <div className="join-card">
                                        <div className="blueColor text-large left-margin small-padding" >dsp.graphics</div>
                                        <p className="text">Graphic communication is just the beginning</p>
                                        <p className="text">At Design Service Professionals, PLLC, we see graphic design as visual storytelling that engages, informs, and inspires. Our team of highly creative graphic designers, UX designers, videographers and web developers can take conceptual ideas and deploy them across a wide range of visual media, from hand-held print and screen, to the digital billboard, and beyond.</p>
                                    </div>
                                    <div className="join-card">
                                        <div className="blueColor text-large left-margin small-padding" >dsp.service</div>
                                        <p className="text">The expertise to design your processes and curate your services with precision and ease</p>
                                        <p className="text">Design Service Professionals, PLLC is driven to identify, develop and deploy your vision for a thriving company culture and highly sought-after employee experience. As a preeminent team of thinkers and doers, dsp.service brings a mix of marketing expertise, business understanding, and design strategy to the forefront of every design opportunity.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </InView>
                <InView as="div" threshold={0.2} onChange={(ele, entry) => ele ? this.setState({ current: "mem" }) : null}>
                    <div className="container-large" ref={this.mem}>
                        <div className="groups groups-join no-pad-bot">
                            <div className="redColor text-large left-margin small-padding" >dsp.membership</div>
                            <p className="text">At DSP our mission is to empower the design and build communities with access to shared resources, a connected ecosystem of talented design professionals, and an innovative process for delivering strong project outcomes.</p>
                            <div className="clip-container grid-mobile">
                                <Clip bgColor="green" icon="fas fa-link" heading="CONNECT" body="Your growing design practice deserves to be connected with a talented pool of design professionals, innovative project tools, and collaborative resources, so we're providing a platform to connect you to a thriving ecosystem of designers, tools, resources, and opportunities." />
                                <Clip bgColor="blue" icon="fas fa-share-alt" heading="SHARE" body={"The sharing economy (aka access economy, peer-to-peer economy, or gig economy) is rooted in the concept of \"feed and be fed\", so we're providing a platform for the design community to access and contribute to shared benefits, shared resources, and shared projects, cultivating a \"win-win\" environment for everyone."} />
                                <Clip bgColor="red" icon="fas fa-paper-plane" heading="DELIVER" body="Delivering premium design services tailored to the needs of each client and project requires an innovative process, so we're combining cutting edge technology with a platform for assembling high performing teams, to facilitate collaborative work environments and assure quality outcomes." />
                            </div>
                            <div className="grid-join-3 grid-gap-2 grid-start grid-line-v grid-mobile">
                                <div className="">
                                    <div className="text-medium boldText">
                                        Membership
                                    </div>
                                    <p className="text">
                                        DSP Members consist of Owners, Developers, Architects, Designers, Builders, Nucleus Employees, Network Affiliates, Network Partners, Marketplace Vendors, Administrative Professionals, and Design Consultants.
                                    </p>
                                    <p className="text">
                                        <span className="boldText">Create a free Member Account</span>, register your company, and initiate your DSP presence today. Build a DSP profile and start connecting with our community. Once you're settled in, we invite you to <span className="boldText">apply for professional membership.</span>
                                    </p>
                                    <div className="text-medium boldText" ref={this.vet}>
                                        Vetting
                                    </div>
                                    <p className="text">
                                        Design professionals interested in joining our community as either nucleus or network members may apply through a personal member account. Our careful selection and vetting process is intended to glean insights into your individual experience and aspirations, while giving you a closer look into our process and culture. Engaging the selection process is similar for both network and nucleus members and includes 5 phases.
                                    </p>
                                    <div className="flex-center text">
                                        <ul>
                                            <div>Phase 1: Initial Screening</div>
                                            <div>Phase 2: Self-Assessment</div>
                                            <div>Phase 3: Team Interview</div>
                                            <div>Phase 4: Skills Assessment</div>
                                            <div>Phase 5: Leadership Interview</div>
                                        </ul>
                                    </div>
                                    <div className="text-medium boldText">
                                        Participation
                                    </div>
                                    <p className="text">
                                        Building a shared practice requires a LOT of hands. <span className="italics">"Lifting where you stand"</span> is the best way to describe what it means to share in the building process. Active participation is key to creating a thriving community, so we ask a lot of our members. But, it's not just about asking; at DSP there is so much to give.
                                    </p>
                                    <p className="text">In our ecosystem anyone interested in learning a new skill or participating in a new professional activity can receive the opportunities they're looking for. When it comes to your activity in the DSP ecosystem, we have a pretty simple method: Connect, Share, Deliver.</p>
                                </div>
                                <div className="">
                                    <div className="text-medium boldText redColor">
                                        Connect
                                    </div>
                                    <p className="text">
                                        The DSP Ecosystem thrives on making and supporting strong connections. Peer to peer connections, vendor connections, consultant connections, client connections, community connections, and project connections.
                                    </p>
                                    <div className="text-medium boldText">
                                        Develop
                                    </div>
                                    <p className="text">
                                        Everyone at DSP is a Business Developer because it's part of our feed and be fed ethos. But, it's probably not as difficult as it sounds. We'll teach you a few basics and let you choose your preferred development method.
                                    </p>
                                    <div className="text-medium boldText blueColor">
                                        Share
                                    </div>
                                    <p className="text">Everyone has something to offer, whether its a ground-up project, a tool, skill, or simply a better way of working, we are in the business of improving. So, we share without restraint, and embrace the mantra "what goes around, comes around."</p>
                                    <div className="text-medium boldText">
                                        Mentor
                                    </div>
                                    <p className="text">
                                        Everyone is a learner, and we know the most effective way to learn involves teaching, whether it's educating yourself or someone else. So, we have a mentor incentive program we hope you'll be eager to participate in.
                                    </p>
                                    <div className="text-medium boldText greenColor">
                                        Deliver
                                    </div>
                                    <p className="text">
                                        At DSP we provide premium services in order to deliver excellent outcomes. From projects, to processes, to products, to our professionals themselves, we deliver the highest quality outcomes for our clients and for each other.
                                    </p>
                                    <p className="text boldText">Join DSP and deliver your best work, with the best teams, in the best way possible.</p>
                                </div>
                            </div>
                        </div>
                        <div className="groups groups-fat groups-join no-pad-top">
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
                                        <p className="savings-head blueColor">Partner</p>
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
                            {/* <div className="flex-center">
                                <button className="btn custom-btn-2" onClick={() => console.log("Clicked Create Account")}>Create Member Account</button>   
                            </div> */}
                            <div className="flex-center">
                                <span className="learn-more-block">Contact us for more information about our Customer Savings Program.</span>
                            </div>
                            <div className="flex-center">
                                {/* <Link className="btn custom-btn-2" to="/contact">Create Member Account</Link> */}
                                <Link className="btn custom-btn-2" to="/clients/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </InView>
                <InView as="div" threshold={0.2} onChange={(ele, entry) => ele ? this.setState({ current: "ben" }) : null}>
                    <div className="groups-people" ref={this.ben}>
                        <div className="container-large">
                            <div className="groups groups-join no-bg">
                                <div className="grid-join-1 grid-ben grid-gap-2 grid-mobile">
                                    <div className="join-img">
                                        <img src="\images\JoinUs\Join_Benefit_01.svg" alt="alt-text" className="join-img-contain"></img>
                                    </div>
                                    <div className="join-card">
                                        <div className="redColor text-large small-padding" >dsp.benefits</div>
                                        <div className="grid-join-2 grid-join-4 grid-gap-1 grid-gap-1-mobile grid-mobile">
                                            <img className="join-icon" src="/images/JoinUs/Icons/00_JoinUs_Virtual Practice_Icon_01.svg" alt="alt-text"></img>
                                            <div>
                                                <div className="text-medium boldText pl-4">Virtual Practice</div>

                                                <ul className="outside-list text pl-6">
                                                    <li>Work-Life Opportunities to support your individual lifestyle</li>
                                                    <li>Core Hours (8am - 1pm Pacific) for a balanced work day</li>
                                                    <li>Connected Technology for a fluid work environment</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="grid-join-2 grid-join-4 grid-gap-1 grid-gap-1-mobile grid-mobile">
                                            <img className="join-icon" src="/images/JoinUs/Icons/00_JoinUs_Ecosystem_Icon_01.svg" alt="alt-text"></img>
                                            <div>
                                                <div className="text-medium boldText pl-4">Connected Ecosystem</div>

                                                <ul className="outside-list text pl-6">
                                                    <li>Access to a vast network of professional resources</li>
                                                    <li>Access to projects, mentors, and professional opportunities</li>
                                                    <li>Access to interdisciplinary expertise and insights</li>
                                                    <li>Access to shared tools and progressive techniques</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="grid-join-2 grid-join-4 grid-gap-1 grid-gap-1-mobile grid-mobile">
                                            <img className="join-icon" src="/images/JoinUs/Icons/00_JoinUs_People First_Icon_01.svg" alt="alt-text"></img>
                                            <div>
                                                <div className="text-medium boldText pl-4">People First Company</div>

                                                <ul className="outside-list text pl-6">
                                                    <li>Who you are is more than just what you do at DSP.</li>
                                                    <li>The connections of a large practice coupled with the personal brand of a solo-practitioner</li>
                                                    <li>Competitive healthcare, profit sharing, and time-off programs</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="grid-join-2 grid-join-4 grid-gap-1 grid-gap-1-mobile grid-mobile">
                                            <img className="join-icon" src="/images/JoinUs/Icons/00_JoinUs_Awards_Icon_01.svg" alt="alt-text"></img>
                                            <div>
                                                <div className="text-medium boldText pl-4">Recognition & Awards Programs</div>

                                                <ul className="outside-list text pl-6">
                                                    <li>Professional Development program.</li>
                                                    <li>Annual design awards program.</li>
                                                    <li>Annual research and development awards program.</li>
                                                    <li>Annual BIM awards program.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </InView>
                <InView as="div" threshold={0.2} onChange={(ele, entry) => ele ? this.setState({ current: "val" }) : null}>
                    <div className="container-large" ref={this.val}>
                        <div className="groups groups-join no-pad-bot">
                            <div className="blueColor text-large left-margin small-padding" >dsp.values</div>
                        </div>
                        <div className="groups groups-fat">
                            <div className="grid-1-ice-max-3 fs-grid">
                                <div className="grid-items grid-items-fs fs-span value">
                                    <div className="flex-center">
                                        <img className="value-img" src="/images/JoinUs/Icons/00_JoinUs_Connected_Icon_01.svg" alt="alt-text"></img>
                                    </div>
                                    <div className="text-medium text-center">
                                        CAREFULLY CONNECTED
                                    </div>
                                    <p className="text italics text-center no-pad">We are carefully connected to our clients, our communities, our families, and each other.</p>
                                </div>
                                <div className="grid-items grid-items-fs value">
                                    <div className="flex-center">
                                        <img className="value-img" src="/images/JoinUs/Icons/00_JoinUs_Transparent_Icon_01.svg" alt="alt-text"></img>
                                    </div>
                                    <div className="text-medium text-center">
                                        DELIBERATELY TRANSPARENT
                                    </div>
                                    <p className="text italics text-center no-pad">We are deliberately transparent in our fiscal, organizational and project based processes</p>
                                </div>
                            </div>
                            <div className="grid-1-ice-max-3 fs-grid">
                                <div className="grid-items grid-items-fs value">
                                    <div className="flex-center">
                                        <img className="value-img" src="/images/JoinUs/Icons/00_JoinUs_Symbiotic_Icon_01.svg" alt="alt-text"></img>
                                    </div>
                                    <div className="text-medium text-center">
                                        MUTUALLY <br /> SYMBIOTIC
                                    </div>
                                    <p className="text italics text-center no-pad">We are benevolent in the way we engage our community.</p>
                                </div>
                                <div className="grid-items grid-items-fs value">
                                    <div className="flex-center">
                                        <img className="value-img" src="/images/JoinUs/Icons/00_JoinUs_Quality Driven_Icon_01.svg" alt="alt-text"></img>
                                    </div>
                                    <div className="text-medium text-center">
                                        QUALITY <br /> DRIVEN
                                    </div>
                                    <p className="text italics text-center no-pad">We are driven to achieve excellence in autonomy through quality process, products, and performance</p>
                                </div>
                                <div className="grid-items grid-items-fs value">
                                    <div className="flex-center">
                                        <img className="value-img" src="/images/JoinUs/Icons/00_JoinUs_Accountable_Icon_01.svg" alt="alt-text"></img>
                                    </div>
                                    <div className="text-medium text-center">
                                        PERSONALLY ACCOUNTABLE
                                    </div>
                                    <p className="text italics text-center no-pad">We are accountable for ourselves, our process, and our product</p>
                                </div>
                            </div>
                            <div className="grid-1-ice-max-3 fs-grid">
                                <div className="grid-items grid-items-fs fs-span value">
                                    <div className="flex-center">
                                        <img className="value-img" src="/images/JoinUs/Icons/00_JoinUs_Nurturing_Icon_01.svg" alt="alt-text"></img>
                                    </div>
                                    <div className="text-medium text-center">
                                        CONSISTENTLY NURTURING
                                    </div>
                                    <p className="text italics text-center no-pad">We are aware of where we stand, who we stand with, and what we stand for.</p>
                                </div>
                                <div className="grid-items grid-items-fs value">
                                    <div className="flex-center">
                                        <img className="value-img" src="/images/JoinUs/Icons/00_JoinUs_Effective_Icon_01.svg" alt="alt-text"></img>
                                    </div>
                                    <div className="text-medium text-center">
                                        RIGOROUSLY EFFECTIVE
                                    </div>
                                    <p className="text italics text-center no-pad">We are rigorously effective in our communication and interactions with others. We START SMART, so we can finish strong.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </InView>
            </>
        )
    }
}

export default JoinUs;
