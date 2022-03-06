import React, { Component } from "react";
import Description from "./Description";
import Groups from "./Groups";
import Freebies from "./Freebies";
import IceBreakersNav from "../../../components/IceBreakerNav";
import Header from "../../../components/Header";

class DigitalDesign extends Component {
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
            descHead: ["In this series of ", <span className="boldText">digital design icebreakers</span>, " we've identified a few ways DSP can support your design efforts with valuable modeling and visualization services. Try us out with one of the following services, or suggest a bite-sized digital design service of your own that would provide value to your process or team."],
            desc: "",
            blocks: [
                {
                    img: "D_Icebreakers_Rendering_Icon_01_19 Rendering.png",
                    imgAlt: "rendering",
                    heading: "Rendering",
                    desc: "Realtime rendering with smart materials",
                    desc2: "",
                },
                {
                    img: "D_Icebreakers_ExistingConditions_Icon_01.png",
                    imgAlt: "existing_conditions",
                    heading: "Modeling Existing Conditions",
                    desc: "Every existing building deserves a digital twin",
                    desc2: "",
                },
                {
                    img: "D-Icebreakers_Virtual Staging_Icon_01.png",
                    imgAlt: "virtual_staging",
                    heading: "Virtual Staging",
                    desc: "Bring a layer of reality to your virtual model",
                    desc2: "",
                },
            ]
        }
        const groups = [
            {
                title: "Existing Conditions Modeling",
                tagline: "Every existing building deserves a digital twin",
                desc: [
                    {
                        data: ["We create a Revit model that is built ready for architectural project work. We are able to identify and embed information about drawing discrepancies and ensure the model is built in a way that is suitable for producing Architectural Documentation. ", <a href="https://designserviceprofessionals.sharepoint.com/:x:/g/EQGB4Z611ppBsw55-sjgwnkBAPUmudtBihdn3z0H_vS2Iw?e=ClJWBs" className="ared" target="_blank" rel="noreferrer"> Here's a checklist you can use</a>, " that we've found to be extremely helpful."]
                    },
                ],
                lists: [
                    { data: "1 HR Virtual Kick-Off Meeting" },
                    { data: "Regular follow-up video mail" },
                    { data: "BIM 360 collaboration" },
                    { data: "1-Wk lead time" },
                ],
                img: "/images/servicepage/icebreakers/section/D_Icebreakers_ExistingConditions_Icon_01_Existing Conditions.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Existing Conditions Modeling",
                videoId: "Rp65CII0vSM",
                //endText: "Read more about Existing ConditionsModeling on our ",
                //refText: "blog",
                //refLink: "#"
            },
            {
                title: "Virtual Staging",
                tagline: "Bring a layer of reality to your virtual model",
                desc: [
                    {
                        data: ["Enliven your space inventory, sparking the imagination of a personalized interior. Let us stage your virtual space, and make it even more vivid with well-executed entourage. Feel free to download and experiment with this ", <a href="https://designserviceprofessionals.sharepoint.com/:f:/g/EoJ-i-czW8dPoDKpsXGetnABK3ctnSbGMGIRrsTBlrqGhQ?e=bYiFbq" className="ared" target="_blank" rel="noreferrer">starter entourage set.</a>]
                    }
                ],
                lists: [
                    { data: "1 Virtual Kick-Off Meeting to discuss content" },
                    { data: "1 Follow-up Video Communication showing progress" },
                    { data: "1 Revision per space" },
                    { data: "Development of single or multiple staged spaces with model entourage" },
                ],
                img: "/images/servicepage/icebreakers/section/D-Icebreakers_Virtual Staging_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Virtual Staging",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                endText: "Read more about Virtual Staging Entourage on our ",
                refText: "blog",
                refLink: "https://dsp.design/blog?p=revit-staging-entourage"
            },
            {
                title: "Revit Model Rendering",
                tagline: "Realtime rendering with smart materials",
                desc: [
                    {
                        //data: ["The world of Revit has longed for push button technologies that allow for real-time rendering. At DSP we use Unreal Engine and Enscape to develop fully immersive models, complete with smart materials and entourage. In this icebreaker we will take your Revit model, enhance the materials, and utilize Enscape to create still or panoramic images of the spaces you choose. Check out our ", <a href="#" className="ared" target="_blank" rel="noreferrer"> material block.rvt </a>, "to see how we apply smart finishes to every model."]
                        data: ["The world of Revit has longed for push button technologies that allow for real-time rendering. At DSP we use Unreal Engine and Enscape to develop fully immersive models, complete with smart materials and entourage. In this icebreaker we will take your Revit model, enhance the materials, and utilize Enscape to create still or panoramic images of the spaces you choose."]
                    }
                ],
                lists: [
                    { data: "1 HR Virtual Kick-Off Meeting" },
                    { data: "Assessment of Model Level of Development (LOD)" },
                    { data: "1 Design team meetings" },
                    { data: "1 Revision per space" },
                    { data: "1 Week lead time" },
                    { data: "Negotiated turn-around time" },
                ],
                img: "/images/servicepage/icebreakers/section/D_Icebreakers_ExistingConditions_Icon_01_Existing Conditions.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Revit Model Rendering",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                //endText: "Read more about Look and Feel on our ",
                //refText: "blog",
                //refLink: ""
            },
        ]
        const freebies = [
            {
                img: "images/servicepage/icebreakers/freebies/D-Icebreakers__Virtual Staging_Thumbnail_01.png",
                imgAlt: "Entourage Sampler",
                heading: "Entourage Sampler",
                dlLink: "https://designserviceprofessionals.sharepoint.com/:f:/g/EoJ-i-czW8dPoDKpsXGetnABK3ctnSbGMGIRrsTBlrqGhQ?e=bYiFbq",
                desc: [
                    { data: "Need to augment your library of entourage? Download and experiment with this starter entourage set by DSP." },
                ]
            },
            // {
            //     img: "/images/servicepage/icebreakers/freebies/D-Icebreakers__Virtual Staging_Thumbnail_01.png",
            //     imgAlt: "Material Block",
            //     heading: "Material Block",
            //     dlLink: "#",
            //     desc: [
            //         { data: "Check out our materialblock.rvt to see how we apply smart finishes to every model." },
            //     ]
            // },
            {
                img: "/images/servicepage/icebreakers/freebies/D-Icebreakers__Virtual Staging_Thumbnail_01.png",
                imgAlt: "Modeling Checklist",
                heading: "Modeling Checklist",
                dlLink: "https://designserviceprofessionals.sharepoint.com/:x:/g/EQGB4Z611ppBsw55-sjgwnkBAPUmudtBihdn3z0H_vS2Iw?e=ClJWBs",
                desc: [
                    { data: "Ensure your model is built sufficient for Architectural Documentation. Here's a checklist to help." },
                ]
            }
        ]
        return (
            <>
                <Header title="Your Trusted Partner" subtitle="Design Service Icebreakers" text={[]} />
                <div className="groups groups-header">
                    <p className="text">Design involves a complex and rigorous development process that can take weeks, months, or even years to undergo. But even the most complicated process can be broken down into bite-sized chunks with discrete sets of activities. Ease into the DSP community by engaging our Icebreaker Services. Whether a single activity or single deliverable we've identified minimal services that will help you gage our expertise, manage expectations for future services, and provide value in your daily design endeavors.</p>
                </div>
                <IceBreakersNav dd={true} menu={this.state.menu} setMenu={this.setMenu} />
                <div className="container-large" ref={this.ref}>
                    <Description description={description} />
                    <Groups groups={groups} />
                    <Freebies freebies={freebies} />
                </div>
            </>
        )
    }
}

export default DigitalDesign;
