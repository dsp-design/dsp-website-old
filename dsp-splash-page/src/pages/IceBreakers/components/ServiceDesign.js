import React, { Component } from "react";
import Description from "./Description";
import Groups from "./Groups";
import Freebies from "./Freebies";
import IceBreakersNav from "../../../components/IceBreakerNav";
import Header from "../../../components/Header";

class ServiceDesign extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef()
        this.state = {
            menu: false,
        }
        this.setMenu = this.setMenu.bind(this);

    }
    setMenu(newState){
        this.setState({menu: newState})
    }
    componentDidMount() {
        this.ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    render() {
        const description = {
            descHead: ["In this series of ", <span className="boldText">service design icebreakers</span>, " we've identified some ways DSP can support your design practice with valuable consulting services. Try us out with one of the following services, or suggest a bite-sized service design activity of your own that would provide value to your practice."],
            desc: "",
            blocks: [
                {
                    img: "S-Icebreakers_Consultation_Icon_01.png",
                    imgAlt: "Service Consultation",
                    heading: "Service Consultation",
                    desc: "Designing your design practice with purpose",
                    desc2: "",
                },
                {
                    img: "S-Icebreakers_Process_Icon_01.png",
                    imgAlt: "Process Check-up",
                    heading: "Process Check-up",
                    desc: "People first service process deep dive",
                    desc2: "",
                },
            ]
        }
        const groups = [
            {
                title: "Service Consultation",
                tagline: "Strengthening your design practice through service design",
                desc: [
                    {
                        //data: ["A deep dive into the work you do, the time it takes, and the satisfaction you derive from the whole process. Together, we will begin to identify your \"highest and best use\", not just from the perspective of quality and efficiency, but also enjoyment. It is possible to do work you love and make a living doing it. Want to get a head start? Fill out our ", <a href="#" target="_blank" rel="noreferrer" className="ared"> pre-consultation survey</a>, " to see how we begin this exciting process!"]
                        data: ["A deep dive into the work you do, the time it takes, and the satisfaction you derive from the whole process. Together, we will begin to identify your \"highest and best use\", not just from the perspective of quality and efficiency, but also enjoyment. It is possible to do work you love and make a living doing it."]
                    },
                ],
                lists: [
                    { data: "30 min. pre-consultation survey" },
                    { data: "2 hours of guided discovery mapping" },
                    { data: "a consultation report" },
                ],
                img: "/images/servicepage/icebreakers/section/S-Icebreakers_Consultation_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Service Design Consulting",
                // videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Service Design Consulting on our ",
                // refText: "blog",
                // refLink: "#"
            },
            {
                title: "Process Check-up ",
                tagline: "When you design your process intentionally, success is steps away",
                desc: [
                    {
                        //data: ["Process really is everything. So when a process isn't working it can lead to time waste, frustration, missteps, and ultimately money lost. Our process check-up is a collaborative dive into a single business process. Together we use a people first mapping technique that will uncover process success and pain points. Or get started on your own with our ", <a href="#" className="ared" target="_blank" rel="noreferrer"> Process Map Template</a>, "."]
                        data: ["Process really is everything. So when a process isn't working it can lead to time waste, frustration, missteps, and ultimately money lost. Our process check-up is a collaborative dive into a single business process. Together we use a people first mapping technique that will uncover process success and pain points."]
                    },
                ],
                lists: [
                    { data: "30 min process plan meeting" },
                    { data: "2 hours of process observation" },
                    { data: "A map of the current process" },
                    { data: "1 hour collaborative process improvement prototyping" },
                    { data: "A process improvement plan" },
                ],
                img: "/images/servicepage/icebreakers/section/S-Icebreakers_Process_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Process Mapping",
                // videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Process Mapping on our ",
                // refText: "blog",
                // refLink: "#"
            },
        ]
        const freebies = [
            {
                img: "/images/servicepage/icebreakers/freebies/S-Icebreakers__Consultation_Thumbnail_01.png",
                imgAlt: "Service Consultation Survey",
                heading: "Service Consultation Survey",
                dlLink: "#",
                desc: [
                    { data: "Before we dive deeply into the satisfaction and effort of your design practice, we need to gather some info first." },
                ]
            },
            {
                img: "/images/servicepage/icebreakers/freebies/S-Icebreakers__Process_Thumbnail_01.png",
                imgAlt: "Process Map Template",
                heading: "Process Map Template",
                dlLink: "#",
                desc: [
                    { data: "A people first process mapping template." },
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
                <IceBreakersNav sd={true} menu={this.state.menu} setMenu={this.setMenu}/>
                <div className="container-large" ref={this.ref}>
                    <Description description={description} />
                    <Groups groups={groups} />
                    {/* <Freebies freebies={freebies} /> */}
                </div>
            </>
        )
    }
}

export default ServiceDesign;