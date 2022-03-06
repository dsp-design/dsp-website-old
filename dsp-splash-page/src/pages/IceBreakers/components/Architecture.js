import React, { Component } from "react";
import Description from "./Description";
import Groups from "./Groups";
import Freebies from "./Freebies";
import IceBreakerNav from '../../../components/IceBreakerNav'
import Header from "../../../components/Header";
import '../css/icebreakers.css'
class Architecture extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            menu: false,
        }
        this.setMenu = this.setMenu.bind(this);

    }
    setMenu(newState){
        this.setState({menu: newState})
    }
    componentDidMount() {
        if (this.props.location.sectionProps === "scroll") {
            this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }else{
            window.scrollTo(0,0);
        }
    }
    componentDidUpdate() {
    }
    render() {
        const description = {
            descHead: ["In this series of ", <span className="boldText">architectural icebreakers</span>, " we've identified a few ways DSP can support your design efforts with expert third-party activities. Try us out with one of the following services, or suggest a bite-sized architectural service of your own that would provide value to your process or team."],
            desc: "",
            blocks: [
                {
                    img: "A-Icebreakers_PeerReview_Icon_01.png",
                    imgAlt: "peer_review",
                    heading: "Peer Review",
                    desc: "When quality management requires a second set of eyes",
                    desc2: "",
                },
                {
                    img: "A-Icebreakers_Site_Icon_01.png",
                    imgAlt: "site_design",
                    heading: "Site Blocking",
                    desc: "Rapid visual ideation for the development of your site",
                    desc2: "",
                },
                {
                    img: "A-Icebreakers_Occupancy_Icon_01.png",
                    imgAlt: "occupancy_plans",
                    heading: "Occupancy Plans",
                    desc: "Validate your design with a smart approach to occupancy planning",
                    desc2: "",
                },
                {
                    img: "A-Icebreakers_Envelope_Icon_01.png",
                    imgAlt: "site_design",
                    heading: "Building Envelope Design Review",
                    desc: "A proactive approach to assuring a strong building envelope design",
                    desc2: "",
                }

            ]
        }
        const groups = [
            {
                title: "Peer Review",
                tagline: "When quality management requires a second set of eyes",
                desc: [
                    {
                        data: ["3rd party quality control driven by technology and performed by licensed professionals. Try out our free ", <a href="https://dropinblog.com/uploaded/blogs/34235796/files/QA-QC_Schematic_Design.pdf" target="_blank" rel="noreferrer" className="ablue">QA checklist</a>, " to see how we manage quality on each design phase of a project."]
                    }
                ],
                lists: [
                    { data: "2-3 Days lead time to get started" },
                    { data: "1 HR Virtual intro and page-turn" },
                    { data: "Bluebeam Revu Session" },
                    { data: "Real-time PDF mark-ups" },
                    { data: "Video recorded page-turn overview" },
                    { data: "Turn-around varies based on size of set" },
                ],
                img: "/images/servicepage/icebreakers/section/A-Icebreakers_PeerReview_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Peer Review",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                endText: "Read more about Peer Review on our ",
                refText: "blog",
                refLink: "https://dsp.design/blog?p=architecture-peer-review"
            },
            {
                title: "Site Blocking",
                tagline: "Rapid visual ideation for the development of your site",
                desc: [
                    {
                        // data: ["Tap into our site design team to access rapid massing and site studies. Provide your site program, software of choice, and some initial parameters and we'll turn around a massing model you can use to guide an informed conversation with your client. Check out our simplified ", <a href="#" className="ared" >FormIt template</a>, " to get started on your own site model."]
                        data: ["Tap into our site design team to access rapid massing and site studies. Provide your site program, software of choice, and some initial parameters and we'll turn around a massing model you can use to guide an informed conversation with your client."]
                    }
                ],
                lists: [
                    { data: "2-3 Days lead time to get started" },
                    { data: "30 minute Virtual intro and program review" },
                    { data: "Options vary based on your input and requirements" },
                    { data: "Massing model in FormIt or Revit" },
                    { data: "Video recorded run through of the options" },
                    { data: "Turn-around varies based on project parameters" },
                ],
                img: "/images/servicepage/icebreakers/section/A-Icebreakers_Site_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Peer Review",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                //endText: "Read more about Site Design on our ",
                // refText: "blog",
                // refLink: "https://dsp.design/blog?p=architecture-peer-review"
            },
            {
                title: "Building Envelope Design Review",
                tagline: "A proactive approach to assuring a strong building envelope design",
                desc: [
                    {
                        data: ["Our experienced building envelope professionals will quickly but thoroughly review design documents, whether at the schematic, design development, tender or issued for construction stage. Each report will assist you going forward with confirmation about what’s working and recommendations about what’s missing or may be improved. Check out our ", <a href="https://designserviceprofessionals.sharepoint.com/:b:/g/EfIgic6Wd3VAnCi0l6SXpvUBi3tZr0stXcYAQShipfeWLg?e=ETPu8E" target="_blank" rel="noreferrer" className="ablue"> BEE checklist</a>, " and get a glimpse at just how thorough we can be."]
                    }
                ],
                lists: [
                    { data: "Questionnaire" },
                    { data: "Fee based on # and type of documents" },
                    { data: "You provide your scheduling preferences" },
                ],
                img: "/images/servicepage/icebreakers/section/A-Icebreakers_Envelope_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Envelope Design Review",
                // videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Envelope Review on our ",
                // refText: "blog",
                // refLink: "#"
            },
            {
                title: "Occupancy Plans",
                tagline: "Validate your design with a smart approach to occupancy planning",
                desc: [
                    {
                        //data: ["Our technical design staff are well versed in occupancy planning and code compliance. We build smart area plans in Revit to help coordinate, calculate, and document building occupancy. Check out our ", <a href="#" className="ared"> occupancy planning .rvt </a>, " to get started on your own smart plan"]
                        data: ["Our technical design staff are well versed in occupancy planning and code compliance. We build smart area plans in Revit to help coordinate, calculate, and document building occupancy."]
                    }
                ],
                lists: [
                    { data: "2-3 Days lead time to get started" },
                    { data: "30 minute Virtual intro and program review" },
                    { data: "Area Plan with calculated occupancy values" },
                    { data: "Graphic Legend" },
                    { data: "Video recorded run through of the options" },
                    { data: "Turn-around varies based on size and level of development" },
                ],
                img: "/images/servicepage/icebreakers/section/A-Icebreakers_Occupancy_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Occupancy Plans",
                // videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Site Design on our ",
                // refText: "blog",
                // refLink: "#"
            }
        ]
        const freebies = [
            {
                img: "/images/servicepage/icebreakers/freebies/A-Icebreakers__Peer%20Review_Thumbnail_01.png",
                imgAlt: "Peer Review Freebie",
                heading: "Peer Review Freebie",
                dlLink: "https://dropinblog.com/uploaded/blogs/34235796/files/QA-QC_Schematic_Design.pdf",
                desc: [
                    { data: "We have a QA/QC Checklist for each phase of design. Check out our Schematic Design checklist here." },
                ]
            },
            // {
            //     img: "/images/servicepage/icebreakers/freebies/A-Icebreakers__Occupancy_Thumbnail_01.png",
            //     imgAlt: "Occupancy Freebie",
            //     heading: "Occupancy Freebie",
            //     dlLink: "#",
            //     desc: [
            //         { data: "Occupancy plans can get pretty complicated in Revit. Check out our egress and occupancy template to see how we approach smart occupancy plans." },
            //     ]
            // },
            // {
            //     img: "/images/servicepage/icebreakers/freebies/A-Icebreakers__Site_Thumbnail_01.png",
            //     imgAlt: "Site Blocking Freebie",
            //     heading: "Site Blocking Freebie",
            //     dlLink: "#",
            //     desc: [
            //         { data: "Site Blocking tools are on the rise. Check out our simplified FormIt template to get started on your own site model." },
            //     ]
            // },
            {
                img: "/images/servicepage/icebreakers/freebies/A-Icebreakers__Envelope_Thumbnail_01.png",
                imgAlt: "Building Envelope Freebie",
                heading: "Building Envelope Freebie",
                dlLink: "https://designserviceprofessionals.sharepoint.com/:b:/g/EfIgic6Wd3VAnCi0l6SXpvUBi3tZr0stXcYAQShipfeWLg?e=ETPu8E",
                desc: [
                    { data: "Our envelope evaluation is pretty thorough. Check out our partial BEE checklist and get a glimpse at just how deep we go." },
                ]
            },
        ]
        return (
            <>
                <Header title="Your Trusted Partner" subtitle="Design Service Icebreakers" text={[
                ]} />
                <div className="groups groups-header">
                    <p className="text">Design involves a complex and rigorous development process that can take weeks, months, or even years to undergo. But even the most complicated process can be broken down into bite-sized chunks with discrete sets of activities. Ease into the DSP community by engaging our Icebreaker Services. Whether a single activity or single deliverable we've identified minimal services that will help you gage our expertise, manage expectations for future services, and provide value in your daily design endeavors.</p>
                </div>
                <IceBreakerNav arc={true} menu={this.state.menu} setMenu={this.setMenu}/>
                <div className="container-large" ref={this.ref}>
                    <Description description={description} />
                    <Groups groups={groups} />
                    <Freebies freebies={freebies} />
                </div>
            </>
        )
    }
}

export default Architecture;