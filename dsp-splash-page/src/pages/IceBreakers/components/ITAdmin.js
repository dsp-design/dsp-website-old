import React, { Component } from "react";
import Description from "./Description";
import Groups from "./Groups";
import Freebies from "./Freebies";
import IceBreakersNav from "../../../components/IceBreakerNav";
import Header from "../../../components/Header";

class ITAdmin extends Component {
    constructor(props) {
        super(props);
        this.ref=React.createRef()
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
            descHead: ["In this series of ", <span className="boldText">IT and Admin icebreakers</span>, " we've identified a few ways DSP can support your design practice with valuable administrative and information technology services. Try us out with one of the following services, or suggest a bite-sized service of your own that would provide value to your office or practice."],
            desc: "",
            blocks: [
                {
                    img: "VO-Icebreaker_Bookkeeping_Icon_01.png",
                    imgAlt: "Bookkeeping",
                    heading: "Bookkeeping",
                    desc: "Accounts Payable and Accounts Receivable are just the beginning.",
                    desc2: "",
                },
                {
                    img: "VO-Icebreakers_Workstations_Icon_01.png",
                    imgAlt: "Virtual Workstations",
                    heading: "Virtual Workstations",
                    desc: "Allow our virtual workstations to flex along with your staff.",
                    desc2: "",
                },
                {
                    img: "VO-Icebreakers_CostAccounting_Icon_01.png",
                    imgAlt: "Cost Accounting",
                    heading: "Cost Accounting",
                    desc: "Quantities, materials, and bottom lines all need a sound tracking process.",
                    desc2: "",
                },
            ]
        }
        const groups = [
            {
                title: "Bookkeeping",
                tagline: "Accounts Payable and Accounts Receivable are just the beginning.",
                desc: [
                    {
                        data: ["When you need someone you can trust to help you develop or maintain your financial processes, DSP is here to help. Our bookkeeping services include payroll, accounts receivable, and accounts payable, as well as careful coordination with your Chart of Accounts. Check out our ", <a href="#" className="ared" target-="_blank" rel="noreferrer"> Chart of Accounts</a>, " to see how we manage the business side of things"]
                    },
                ],
                lists: [
                    { data: "1 hour service setup meeting" },
                    { data: "Biweekly or monthly accounting reports" },
                    { data: "Questions answered quickly via phone or email" },
                ],
                img: "/images/servicepage/icebreakers/section/VO-Icebreaker_Bookkeeping_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Bookkeeping",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Bookkeeping on our ",
                // refText: "blog",
                // refLink: "#"
            },
            {
                title: "Virtual Workstations",
                tagline: "Allow our virtual workstations to flex along with your staff.",
                desc: [
                    {
                        data: ["DSP's virtual desktops (VDI) allow short or long-term access to remote, high powered machines, fully equipped with the software and compute power your employee requires. We'll spin up a virtual machine for a summer intern, contractor, or visiting consultant and manage access to all the necessary software for smooth collaboration. Review our ", <a href="#" className="ared" target="_blank" rel="noreferrer"> VDI checklist</a>, " to better understand what's involved."]
                    },
                ],
                lists: [
                    { data: "30 minute intake meeting" },
                    { data: "VDI built to custom hardware and software configuration" },
                    { data: "VDI training" },
                    { data: "Questions answered via email or phone" },
                ],
                img: "/images/servicepage/icebreakers/section/VO-Icebreakers_Workstations_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Virtual Workstations",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Virtual Workstations on our ",
                // refText: "blog",
                // refLink: "#"
            },
            {
                title: "Cost Accounting",
                tagline: "Quantities, materials, and bottom lines all need a sound tracking process.",
                desc: [
                    {
                        data: "Projects that combine goods AND services require expert care. The setup and then daily accounting of the tasks and budgets of a construction project can seem daunting, but we're here to help. Check out our cost accounting template for a closer look at how we manage both services and materials."
                    },
                ],
                lists: [
                    { data: "1 HR Virtual Setup Meeting" },
                    { data: "Weekly accounting reports" },
                    { data: "Questions answered quickly via phone or email" },
                ],
                img: "/images/servicepage/icebreakers/section/VO-Icebreakers_CostAccounting_Icon_01.svg",
                calcLink: "#",
                serviceLink: "https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUNU5BOFNCNFc1REhKOVNTNVMyRTRJQVZONyQlQCN0PWcu",
                imgAlt: "Cost Accounting",
                //videoId: "ysz5S6PUM-U",
                videoId: "",
                // endText: "Read more about Cost Accounting on our ",
                // refText: "blog",
                // refLink: "#"
            }
        ]
        const freebies = [
            {
                img: "/images/servicepage/icebreakers/freebies/VO-Icebreakers__Bookkeeping_Thumbnail_01.png",
                imgAlt: "Chart of Accounts",
                heading: "Chart of Accounts",
                dlLink: "#",
                desc: [
                    { data: "The business of design can often seem a little mysterious. Check out our Chart of Accounts to help demystify the business side of things." },
                ]
            },
            {
                img: "/images/servicepage/icebreakers/freebies/VO-Icebreakers__Workstations_Thumbnail_01.png",
                imgAlt: "VDI Checklist",
                heading: "VDI Checklist",
                dlLink: "#",
                desc: [
                    { data: "Setting up a virtual workstation requires some input. Review our VDI checklist to better understand what's involved." },
                ]
            },
            {
                img: "/images/servicepage/icebreakers/freebies/VO-Icebreakers__Cost Accounting_Thumbnail_01.png",
                imgAlt: "Cost Accounting",
                heading: "Cost Accounting",
                dlLink: "#",
                desc: [
                    { data: "Projects that combine goods AND services require expert care. Check out our cost accounting template for a closer look at how we manage both." },
                ]
            }
        ]
        return (
            <>
                <Header title="Your Trusted Partner" subtitle="Design Service Icebreakers" text={[
                ]} />
                <div className="groups groups-header">
                    <p className="text">Design involves a complex and rigorous development process that can take weeks, months, or even years to undergo. But even the most complicated process can be broken down into bite-sized chunks with discrete sets of activities. Ease into the DSP community by engaging our Icebreaker Services. Whether a single activity or single deliverable we've identified minimal services that will help you gage our expertise, manage expectations for future services, and provide value in your daily design endeavors.</p>
                </div>
                <IceBreakersNav ia={true} menu={this.state.menu} setMenu={this.setMenu}/>
                <div className="container-large" ref={this.ref}>
                    <Description description={description} />
                    <Groups groups={groups} />
                    {/* <Freebies freebies={freebies} /> */}
                </div>
            </>
        )
    }
}

export default ITAdmin;