import React, { Component } from "react";
import Description from "./Description";
import Groups from "./Groups";
import Freebies from "./Freebies";
//import { Link } from 'react-router-dom';
import IceBreakersNav from "../../../components/IceBreakerNav";
import Header from "../../../components/Header";
class InteriorDesign extends Component {
    constructor(props) {
        super(props);
        this.ref= React.createRef()
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
            descHead: ["In this series of ", <span className="boldText">interior design icebreakers</span>, " we've identified some ways DSP can support your design efforts with valuable third-party activities. Try us out with one of the following services, or suggest a bite-sized interior design service of your own that would provide value to your process or team."],
            blocks: [
                {
                    img: "I-Icebreakers_LookFeel_Icon_01.png",
                    imgAlt: "Look & Feel",
                    heading: "Look & Feel",
                    desc: "Visual references to describe and support your design vision",
                    desc2: "",
                },
                {
                    img: "I-Icebreakers_MaterialSourcing_Icon_01.png",
                    imgAlt: "Material Sourcing",
                    heading: "Material Sourcing",
                    desc: "Catalog your project materials and finish selections with ease",
                    desc2: "",
                },
                {
                    img: "I-Icebreaker_FinishBoard_Icon_01.png",
                    imgAlt: "Digital Finish Boards",
                    heading: "Digital Finish Boards",
                    desc: "Project finishes in digital format for easy sharing and quick decision making",
                    desc2: "",
                },
                {
                    img: "I-Icebreakers_HomeOffice_Icon_01.png",
                    imgAlt: "Home Office",
                    heading: "Home Office",
                    desc: "Enhance your daily productivity with our  home-office resources",
                    desc2: "",
                },
                {
                    img: "I-Icebreaker_Blocking_Icon_01.png",
                    imgAlt: "Digital Blocking Diagrams",
                    heading: "Digital Blocking Diagrams",
                    desc: "Step one toward your ideal space plan",
                    desc2: "",
                }

            ]
        }
        const groups = [
            {
                title: "Look & Feel",
                tagline: "Visual references to describe and support your design vision",
                desc: [
                    {
                        data: ["A mood board is a way to communicate a clear design vision to both the design team and the client. It is an array of images and color and material swatches that capture the general feel of the space. Simply fill out a brief project survey and we will create a digital presentation-ready file filled with curated imagery tailored specifically to your project. Or download the ", <a href="https://docs.google.com/presentation/d/1cRjhunzyHw9bljBq4QXp7LAP12r6ZWD4GGlf0mq7K5c/edit?usp=sharing" className="ared" target="_blank"  rel="noreferrer">DSP Digital Mood Board Template</a>, " to get started on your own."]
                    },
                ],
                lists: [
                    { data: "1 hour Virtual Kick-Off Meeting" },
                    { data: "1 Follow-Up Video Communication" },
                    { data: "1 Revision" },
                    { data: "1-2 Digital Mood Boards" },
                    { data: "2-3 Day Lead Time" },
                ],
                img: "/images/servicepage/icebreakers/section/I-Icebreakers_LookFeel_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Look & Feel",
                videoId: "kUyowAqqhec",
                endText: "Read more about Look & Feel on our ",
                refText: "blog",
                refLink: "https://dsp.design/blog?p=look-and-feel-interior-design-mood"
            },
            {
                title: "Material Sourcing",
                tagline: "Catalog your project materials and finish selections with ease",
                desc: [
                    {
                        data: ["Architectural finish sourcing for every project type, priced by the number of spaces and level of complexity. Want to try it out yourself first? Try using our complementary ", <a href="https://designserviceprofessionals.sharepoint.com/:b:/g/ERh27TZR-zFKhhbW4-ev8WcBC2JoRwa3FuQa9rYI5qL0HA?e=LNJdDB" className="ared" target="_blank" rel="noreferrer"> Finish Sourcing Schedule Template</a>, " to get you started."]
                    },
                ],
                lists: [
                    { data: "30 min. Virtual Kick-Off Meeting" },
                    { data: "1 Follow-Up Video Communication" },
                    { data: "1 Revision" },
                    { data: "up to 5 materials in spreadsheet or PDF format" },
                    { data: "2-3 Day Lead Time" },
                ],
                img: "/images/servicepage/icebreakers/section/I-Icebreakers_MaterialSourcing_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Material Sourcing",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Material Sourcing on our ",
                // refText: "blog",
                // refLink: "#"
            },
            {
                title: "Digital Finish Board",
                tagline: "Project finishes in digital format for easy sharing and quick decision making",
                desc: [
                    {
                        data: ["Our designers translate your project's finish selections into a beautifully composed, presentation ready, visual finish board. Or use our ", <a href="https://designserviceprofessionals.sharepoint.com/:b:/g/EeUOSB7iBFVOhONwdWnx1yQBoav6SYfY4ohaPsiYVVUWlQ?e=ObdPXp" target="_blank" rel="noreferrer" className="ared">Digital Finish Board Template</a>, "to begin your own finish board."]
                    },
                ],
                lists: [
                    { data: "1 hour Virtual Kick-Off Meeting" },
                    { data: "1 Follow-Up Video Communication" },
                    { data: "1 Revision" },
                    { data: "1Digital Finish Boards" },
                    { data: "2-3 Day Lead Time" },
                ],
                img: "/images/servicepage/icebreakers/section/I-Icebreaker_FinishBoard_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Digital Finish Board",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Digital Finish Board on our ",
                // refText: "blog",
                // refLink: "#"
            },
            {
                title: "Home Office",
                tagline: "Enhance your daily productivity with our  home-office resources",
                desc: [
                    {
                        //data: ["Every home office should promote physical comfort and positively engage at least three of the five senses: sight, sound, touch, smell or taste. With our Home Office services we will help you identify furniture, fixtures and an appropriate space plan to optimize your home office so you can get the most out of every workday. Check out our ", <a href="#" className="ared" target="_blank" rel="noreferrer"> sample list of resources</a>, " from economical to luxury products."]
                        data: ["Every home office should promote physical comfort and positively engage at least three of the five senses: sight, sound, touch, smell or taste. With our Home Office services we will help you identify furniture, fixtures and an appropriate space plan to optimize your home office so you can get the most out of every workday."]
                    },
                ],
                lists: [
                    { data: "30 minute consultation" },
                    { data: "Walk-thru of digital tools to guide the documentation" },
                    { data: "Furniture and Fixture schedule for easy procurement" },
                    { data: "Floor plan layout to fit the dimensions you provide" },
                ],
                img: "/images/servicepage/icebreakers/section/I-Icebreakers_HomeOffice_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Home Office",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Home Office on our ",
                // refText: "blog",
                // refLink: "#"
            },
            {
                title: "Digital Blocking Diagram",
                tagline: "Step one toward your ideal space plan",
                desc: [
                    {
                        //data: ["Space planning starts with a clear program and a great adjacency diagram. Tap into our team of interior designers for a rapid look into multiple blocking options. Then check out our space planning service bundle called ", <a href="#" target="_blank" rel="noreferrer" className="ared">Start Block</a>, " to see how we can help you elevate the blocking diagram to a full-fledged space plan."]
                        data: ["Space planning starts with a clear program and a great adjacency diagram. Tap into our team of interior designers for a rapid look into multiple blocking options."]
                    },
                ],
                lists: [
                    { data: "1 hour Virtual Kick-Off Meeting" },
                    { data: "1 Follow-Up Video Communication" },
                    { data: "1 Revision" },
                    { data: "Negotiated number of diagrams" },
                    { data: "2-3 Day Lead Time" },
                ],
                img: "/images/servicepage/icebreakers/section/I-Icebreaker_Blocking_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Digital Blocking Diagram",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Digital Blocking Diagram on our ",
                // refText: "blog",
                // refLink: "#"
            },
        ]
        const freebies = [
            {
                img: "/images/servicepage/icebreakers/freebies/I-Icebreakers__Look and Feel_Thumbnail_01.png",
                imgAlt: "Look & Feel",
                heading: "Look & Feel",
                dlLink: "https://docs.google.com/presentation/d/1cRjhunzyHw9bljBq4QXp7LAP12r6ZWD4GGlf0mq7K5c/edit?usp=sharing",
                desc: [
                    { data: "Digital Mood Board Template. This template eliminates the challenge of choosing an image layout. Simply plug in your images and off you go!" },
                ]
            },
            {
                img: "/images/servicepage/icebreakers/freebies/I-Icebreakers__Material Sourcing_Thumbnail_01.png",
                imgAlt: "Material Sourcing",
                heading: "Material Sourcing",
                dlLink: "https://designserviceprofessionals.sharepoint.com/:b:/g/ERh27TZR-zFKhhbW4-ev8WcBC2JoRwa3FuQa9rYI5qL0HA?e=LNJdDB",
                desc: [
                    { data: "Try using our complementary Finish Sourcing Schedule to get you started on your own material specifications." },
                ]
            },
            {
                img: "/images/servicepage/icebreakers/freebies/I-Icebreakers__Finish Board_Thumbnail_01.png",
                imgAlt: "Digital Finish Boards",
                heading: "Digital Finish Boards",
                dlLink: "https://designserviceprofessionals.sharepoint.com/:b:/g/EeUOSB7iBFVOhONwdWnx1yQBoav6SYfY4ohaPsiYVVUWlQ?e=ObdPXp",
                desc: [
                    { data: "Use our Digital Finish Board Template to begin your own finish board." },
                ]
            },
            // {
            //     img: "/images/servicepage/icebreakers/freebies/I-Icebreakers__Home Office_Thumbnail_01.png",
            //     imgAlt: "Home Office Resources",
            //     heading: "Home Office Resources",
            //     dlLink: "#",
            //     desc: [
            //         { data: "Check out our sample list of resources from economical to luxury products." },
            //     ]
            // },
            // {
            //     img: "/images/servicepage/icebreakers/freebies/I-Icebreakers__Blocking_Thumbnail_01.png",
            //     imgAlt: "Blocking Diagrams",
            //     heading: "Blocking Diagrams",
            //     dlLink: "#",
            //     desc: [
            //         { data: "Try our simplified blocking tool to begin planning your own interior space." },
            //     ]
            // },
        ]
        return (
            <>
                <Header title="Your Trusted Partner" subtitle="Design Service Icebreakers" text={[
                ]} />
                <div className="groups groups-header">
                    <p className="text">Design involves a complex and rigorous development process that can take weeks, months, or even years to undergo. But even the most complicated process can be broken down into bite-sized chunks with discrete sets of activities. Ease into the DSP community by engaging our Icebreaker Services. Whether a single activity or single deliverable we've identified minimal services that will help you gage our expertise, manage expectations for future services, and provide value in your daily design endeavors.</p>
                </div>
                <IceBreakersNav id={true} menu={this.state.menu} setMenu={this.setMenu}/>
                <div className="container-large" ref={this.ref}>
                    <Description description={description}  />
                    <Groups groups={groups} />
                    <Freebies freebies={freebies} />
                </div>
            </>
        )
    }
}

export default InteriorDesign;