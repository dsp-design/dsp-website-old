import React, { Component } from "react";
import Clip from "../../components/Clip";
//import { Link } from 'react-router-dom'
//import JoinNav from "../../components/JoinNav";
import "./marketplace.css";
//import { InView } from 'react-intersection-observer';

class MarketPlace extends Component {
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
    }
    componentDidMount() {
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
                <div className="header-img header-img-exibits header-img-marketplace">
                    <div className="header-main header-main-exibits">
                        <div className="flex-center">
                            <div className="header-text header-text-exibits" >
                                Innovation Marketplace
                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="underline">

                            </div>
                        </div>
                        <div className="flex-center">
                            <div className="header-text-description header-text-description-exibits text-center capitalize">
                                FOR DESIGN SERVICE PROFESSIONALS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-large">
                    <div className="groups groups-join">
                        <div className="header-desc">
                            <p className="text">At DSP our mission is to empower the design and build communities with access to shared resources, a connected ecosystem of talented design professionals, and an innovative process for delivering strong project outcomes.</p>
                        </div>
                        <div className="clip-container grid-mobile">
                            <Clip bgColor="green" icon="fas opacity50 fa-link" heading="CONNECT" body="Your growing design practice deserves to be connected with a talented pool of design professionals, innovative project tools, and collaborative resources, so we're providing a platform to connect you to a thriving ecosystem of designers, tools, resources, and opportunities." />
                            <Clip bgColor="blue" icon="fas opacity50 fa-share-alt" heading="SHARE" body={"The sharing economy (aka access economy, peer-to-peer economy, or gig economy) is rooted in the concept of \"feed and be fed\", so we're providing a platform for the design community to access and contribute to shared benefits, shared resources, and shared projects, cultivating a \"win-win\" environment for everyone."} />
                            <Clip bgColor="red" icon="fas opacity50 fa-paper-plane" heading="DELIVER" body="Delivering premium design services tailored to the needs of each client and project requires an innovative process, so we're combining cutting edge technology with a platform for assembling high performing teams, to facilitate collaborative work environments and assure quality outcomes." />
                        </div>
                        <div className=" text text-center">WE'RE BUILDING OUR MARKETPLACE NOW. INTERESTED? CLICK BELOW TO GET IN TOUCH.</div>
                        <div className="flex-center">
                            {/* <a className="btn btn-primary btn-large x-btn-container custom-btn-blue" target="_blank" rel="noreferrer" href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUOFpDTllKWFJZMlNOSUtXR0tXUjdUQkRONCQlQCN0PWcu">Contact Us</a> */}
                            <a className="btn btn-primary btn-large x-btn-container custom-btn-blue" href="/clients/contact">Contact Us</a>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MarketPlace;
