import React, { Component } from 'react';
import Slider from 'react-slick';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './css/photogallery.css';

import { Link } from "react-router-dom";

class PhotoGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    name: "dsp.architecture", projects: [
                        {
                            name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/A-1001-1001.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_RES_01_Porch.png').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_3D SECT_GRD 4.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_3D SECT_GRD 8.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_3D SECT_GRD F.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_3D Section_Grid 4.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_ELEV_SOUTH_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_EXP_MAIN ENTRY_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_EXP_MTR CRT_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_EXP_SE CORNER_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_EXP_SW CORNER_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_RES_00_Entrance.png').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_RES_11_SW.png').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_RES_12_Sculptures.png').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_RES_16_Pool.png').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_SSS_GROUND LVL_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_SSS_MAIN LVL_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1001-1001 (Bradley)/1001-1001_SSS_SITE_01.jpg').default,
                            ],
                            desc: `14,000 sf Single Family Residence
Expertise: #sitedesign #constructiondocs #BIM #FF&E #detailing #visualization
Recognition: Axelrod Architects`
                        },
                        {
                            name: 'Archiplex', id: 2, image: require('../../Images/PhotoMatrix/A-1004-1001.jpg').default,
                            images: [
                                require('../../Images/PhotoMatrix/A-1004-1001.jpg').default,
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_EXR_03.jpg').default,
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_FP_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_HBE_01.gif'),
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_HBE_02.jpg').default,
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_HBE_03.jpg').default,
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_HL_01.gif'),
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_HL_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_SBS_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1004-1001 (St Olaf)/1004-1001_SH_02.jpg').default
                            ],
                            desc: `14,400 sf Secondary School
Expertise: #BIM #constructiondocs
Recognition: Archiplex`
                        },
                        {
                            name: 'Bateman', id: 3, image: require('../../Images/PhotoMatrix/A-1013-1001.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/A - 1013-001 (Bateman)/1013-1001_FI_02.jpg').default,
                                require('../../Images/ProjectGallery/A - 1013-001 (Bateman)/1013-1001_EXR_02.jpg').default,
                                require('../../Images/ProjectGallery/A - 1013-001 (Bateman)/1013-1001_FI_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1013-001 (Bateman)/1013-1001_RBS 03.jpg').default,
                                require('../../Images/ProjectGallery/A - 1013-001 (Bateman)/1013-1001_RBS_02.jpg').default,
                                require('../../Images/ProjectGallery/A - 1013-001 (Bateman)/1013-1001_WF_01.jpg').default,
                                require('../../Images/ProjectGallery/A - 1013-001 (Bateman)/1013-1001_WF_02.jpg').default,
                            ],
                            desc: `300,000 sf Post-secondary Education Complex
Expertise: #Revit #BIM #existingconditions
Recognition: BWS Architects`
                        },
                    ]
                },
                {
                    name: "dsp.interiors", projects: [
                        {
                            name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/I-1001-1001.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_14_Lounge.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_02_Entry.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_03_Living.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_04_Master.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_05_Fire.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_06_Kitchen.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_07_Study.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_09_Kids.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_10_Guest.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_13_Breezeway.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1001 (Bradley)/1001-1001_RES_15_Office.png').default,
                            ],
                            desc: `14,000 sf Single Family Residence
Expertise: #constructiondocs #BIM #FF&E #detailing #visualization #finefinishes
Recognition: Axelrod Architects`
                        },
                        {
                            name: 'Axelrod', id: 2, image: require('../../Images/PhotoMatrix/I-1001-1002.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-03.jpg').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-3D AXON-GYM.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-3D-LockerRm.gif'),
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-00.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-01.jpg').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-04.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-05.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-07.png').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-09.jpg').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-SECT-01.jpg').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-SECT-02.jpg').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-IP-SECT-03.jpg').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-PLAN.jpg').default,
                                require('../../Images/ProjectGallery/I - 1001-1002 (Source P)/1001-1002-RCP.jpg').default
                            ],
                            desc: `2845 sf Fitness Center Prototype
Expertise: #constructiondocs #retail #fitness #designdevelopment
Recognition: Axelrod Architects`
                        },
                        {
                            name: 'Renovation', id: 3, image: require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-03-3rd_FL-Conf_01.png').default,
                            images: [
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-03-3rd_FL-Conf_01.png').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-BLDG SECT D.jpg').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-00-Bsmt_03.png').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-00-Bsmt_04.png').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-00-Bsmt_06.png').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-00_Bsmt_Conf.png').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-01-1st_Fl-Reception.jpg').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-01-1st_Fl-Rec_Lobby.jpg').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-03-3rd_Fl-Atrium_01.png').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-03-3rd_FL-Conf_02.jpg').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-03-3rd_Fl-Rec_01.jpg').default,
                                require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1012-1001-IP-00-Bsmt_02.png').default
                            ],
                            desc: `Office Renovation and Rebranding
Expertise: #schematic #experiencedesign #branding #hospitality #workplace
Recognition: Confidential Client`
                        },
                    ]
                },
                {
                    name: "dsp.digital", projects: [
                        {
                            name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/D-1001-1001.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_SITE_Process.jpg').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_00_Entrance.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_01_Porch.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_02_Entry.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_03_Living.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_04_Master.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_05_Fire.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_06_Kitchen.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_07_Study.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_09_Kids.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_10_Guest.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_11_SW.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_12_Sculptures.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_13_Breezeway.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_14_Lounge.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_15_Office.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1001 (Bradley)/1001-1001_RES_16_Pool.png').default,
                            ],
                            desc: `14,000 sf Single Family Residence
Expertise: #BIM #visualization #digitaldesign #unreal #immersive #flythru
Recognition: Axelrod Architects`
                        },
                        {
                            name: 'Renovation', id: 2, image: require('../../Images/PhotoMatrix/D-1012-1001.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/D - 1012-1001 (Big D)/1012-1001-SECT-PERSP-02.gif'),
                                require('../../Images/ProjectGallery/D - 1012-1001 (Big D)/1012-1001-IP-01-1st_Fl-Reception.jpg').default,
                                require('../../Images/ProjectGallery/D - 1012-1001 (Big D)/1012-1001-IP-01-1st_Fl-Rec_Lobby.jpg').default,
                                require('../../Images/ProjectGallery/D - 1012-1001 (Big D)/1012-1001-IP-03-3rd_FL-Conf_02.jpg').default,
                                require('../../Images/ProjectGallery/D - 1012-1001 (Big D)/1012-1001-IP-03-3rd_Fl-Rec_01.jpg').default,
                                require('../../Images/ProjectGallery/D - 1012-1001 (Big D)/1012-1001-SECT-PERSP.gif'),
                                require('../../Images/ProjectGallery/D - 1012-1001 (Big D)/1012-1001-SECT-PERSP.jpg').default,
                            ],
                            desc: `Office Renovation and Rebranding
Expertise: #schematic #experiencedesign #branding #generativedesign
Recognition: Confidential Client`
                        },
                        {
                            name: 'Bateman', id: 3, image: require('../../Images/PhotoMatrix/D-1013-1001.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/D - 1013-1001 (Bateman)/1013-1001_DIG MATRIX_01.jpg').default,
                                require('../../Images/ProjectGallery/D - 1013-1001 (Bateman)/1013-1001_HBE.gif'),
                                require('../../Images/ProjectGallery/D - 1013-1001 (Bateman)/1013-1001_RBS.gif'),
                            ],
                            desc: `300,000 sf Post-secondary Education Complex
Expertise: #Revit #BIM
Recognition: BWS Architects`
                        },

                        {
                            name: 'Axelrod', id: 4, image: require('../../Images/PhotoMatrix/D-1001-1002.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-3D AXON-GYM.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-3D-LockerRm.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-IP-00.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-IP-01.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-IP-03.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-IP-04.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-IP-05.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-IP-07.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-IP-09.gif'),
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-SH-IP-02.png').default,
                                require('../../Images/ProjectGallery/D - 1001-1002 (Source P)/1001-1002-SH-IP-06.jpg').default
                            ],
                            desc: `2845 sf Fitness Center Prototype
Expertise: #immersive #unreal #colorful
Recognition: Axelrod Architects`
                        },
                    ]
                },
                {
                    name: "dsp.graphics", projects: [
                        {
                            name: 'dsp design', id: 1, image: require('../../Images/PhotoMatrix/C-1000-1000.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/C-1000-1000 (Graphics)/C-1000-1000.jpg').default,
                                require('../../Images/ProjectGallery/C-1000-1000 (Graphics)/4 Cs Diagram All V3 Web Portfolio.png').default,
                                require('../../Images/ProjectGallery/C-1000-1000 (Graphics)/design process.png').default
                            ],
                            desc: `Printed materials, branded graphics
Expertise: #schematic #experiencedesign #branding #graphics`
                        },
                    ]
                },
                {
                    name: "dsp.brand", projects: [
                        {
                            name: 'Renovation', id: 1, image: require('../../Images/PhotoMatrix/B-1012-1001.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/B - 1012-1001 (BigD)/1012-1001-IP-01-1st_Fl-Rec_Lobby.jpg').default,
                                require('../../Images/ProjectGallery/B - 1012-1001 (BigD)/1012-1001-IP-01-1st_Fl-Reception.jpg').default,
                                require('../../Images/ProjectGallery/dsp-no-image.jpg').default

                            ],
                            desc: `61,500 sf Office Renovation and Rebranding
Expertise: #schematic #experiencedesign #branding
Recognition: Confidential Client`
                        },
                    ]
                },
                {
                    name: "dsp.service", projects: [
                        {
                            name: 'Lego Serious Play', id: 1, image: require('../../Images/PhotoMatrix/S- 1000-1015-1.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/S - 1000-1015-1 (LSP)/Lego_Serious_Play_2.jpg').default,
                                require('../../Images/ProjectGallery/S - 1000-1015-1 (LSP)/Lego_Serious_Play.jpg').default,
                                require('../../Images/ProjectGallery/S - 1000-1015-1 (LSP)/Lego_Serious_Play_3.jpg').default,
                                require('../../Images/ProjectGallery/S - 1000-1015-1 (LSP)/Lego_Serious_Play_4.jpg').default,
                                require('../../Images/ProjectGallery/S - 1000-1015-1 (LSP)/Lego_Serious_Play_5.jpg').default,
                            ],
                            desc: `LEGO® Serious Play® methodology is an innovative, experimental process designed to enhance innovation and business performance. (https://www.lego.com/en-us/seriousplay) DSP facilitated LEGO® Serious Play® sessions encourage inclusive team problem solving for all of your team’s toughest questions.
Expertise: #legoseriousplay #teambuilding #play #creativeproblemsolving`
                        },
                        {
                            name: 'Service Design Process', id: 2, image: require('../../Images/PhotoMatrix/S- 1000-1015-2.jpg').default,
                            images: [
                                require('../../Images/ProjectGallery/S- 1000-1015-2 (SDP)/SD_Service Mapping.jpg').default,
                                require('../../Images/ProjectGallery/S- 1000-1015-2 (SDP)/SD_Process Mapping.jpg').default,
                                require('../../Images/ProjectGallery/S- 1000-1015-2 (SDP)/SD_Journey mapping.jpg').default,
                                require('../../Images/ProjectGallery/S- 1000-1015-2 (SDP)/SD_Persona Building.jpg').default,
                                require('../../Images/ProjectGallery/S- 1000-1015-2 (SDP)/SD_Service Prototyping.jpg').default
                            ],
                            desc: `Service Design and Strategy
Work with the DSP team to take a collaborative deep dive into the planning and organization of the people, infrastructure, communication, and material components of your professional service. Use tools like journey mapping, persona building, process mapping, service mapping, and service prototyping to identify efficiencies, improve customer experience, and increase productivity.
Expertise: #servicedesign #journeymap #serviceprototype #persona #collaboration`
                        },
                    ]
                }
            ],
            selectedService: {},
            tabIndex: 0,
            selectedSilde: null,
        }
    }

    componentDidMount() {
        if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
            let selectedService = this.state.services.filter(elem => elem.name === this.props.match.params.id);
            let id = localStorage.getItem('entity-project');
            this.setState({ selectedService: selectedService.length ? selectedService[0] : this.state.services[0], tabIndex: id ? id - 1 : 0 });
        } else {
            this.setState({ selectedService: this.state.services[0] });
        }
    }

    updateSettings(settings) {
        this.state.selectedService.projects[this.state.tabIndex].images.length < settings.slidesToShow ? settings.slidesToShow = this.state.selectedService.projects[this.state.tabIndex].images.length : settings.slidesToShow = settings.slidesToShow
        return settings;
    }

    componentWillUnmount() {
        localStorage.removeItem('entity-project');
    }

    tabSelected(tabIndex) {
        if (tabIndex !== this.state.tabIndex) {
            localStorage.setItem('entity-project', tabIndex + 1);
            this.setState({ tabIndex, selectedSilde: null });
        }
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            focusOnSelect: true,
            speed: 500,
            slidesToShow: 4,
            lazyLoad: 'progressive',
            slidesToScroll: 1,
            initialSlide: 0,
            beforeChange: (current, next) => this.setState({ selectedSilde: next }),
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="container-large">
                <React.Fragment>
                    {Object.keys(this.state.selectedService).length ?
                        <React.Fragment>
                            <div className="row gallery-background m-0">
                                <div className="col-xs-12 col-md-11 panel-div">
                                    <Link to={`/exhibits`}>
                                        <p className="cat-head-21" style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 0, paddingRight: 0 }}> back to portfolio matrix</p>
                                    </Link>
                                    <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.tabSelected(tabIndex)}>
                                        <TabList>
                                            {
                                                this.state.selectedService.projects.map((project, index) => (
                                                    <Tab key={index}>
                                                        <div>
                                                            <img className="tab-res" src={project.image} alt={`${project.name}`} />
                                                        </div>
                                                        <div style={{ textAlign: 'right', color: 'white' }}>
                                                            <p className='f-sm'> {project.name} </p>
                                                        </div>
                                                    </Tab>
                                                ))
                                            }
                                        </TabList>
                                        {
                                            this.state.selectedService.projects.map((project, index) => (
                                                <TabPanel key={index}>
                                                    <div className="row" style={{ margin: "20px 0px" }}>
                                                        <div className="col-xs-12 col-sm-11 panel-div" style={{ textAlign: 'center' }}>
                                                            <img alt={`${project.name}`} className='main-img' src={this.state.selectedSilde === null ? project.image : this.state.selectedService.projects[this.state.tabIndex].images[this.state.selectedSilde]} />
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            ))
                                        }
                                    </Tabs>
                                </div>
                            </div>
                            <div className="row gallery-background m-0" style={{ paddingBottom: 100 }}>
                                <div className="col-xs-12 col-sm-6 col-sm-push-6 vcenter">
                                    <Slider style={{ padding: '16px' }} key={this.state.tabIndex} {...this.updateSettings(settings)}>
                                        {
                                            this.state.selectedService.projects[this.state.tabIndex].images.map((image, index) => (
                                                <div key={index} >
                                                    <div className="gallery-slider-image">
                                                        <img src={image} alt='' width="100%" />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-sm-pull-6 vcenter">
                                    <pre className='project-desc' style={{ overflowY: 'hidden', wordBreak: 'break-word' }}>
                                        Project Description: {this.state.selectedService.projects[this.state.tabIndex].desc}
                                    </pre>
                                </div>
                            </div>
                        </React.Fragment> : null}
                </React.Fragment>
            </div>
        );
    }
}

export default PhotoGallery;