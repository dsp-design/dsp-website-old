
import React, { Component } from "react";
import { scroller } from 'react-scroll';
import ExibitsNav from "../../components/ExibitsNav";
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "./Exibits.css";
import { InView } from 'react-intersection-observer'

class Exibits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "arc",
            services: [
                {
                    name: "dsp.architecture", ref: "arc", projects: [
                        { name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/A-1001-1001.jpg') },
                        { name: 'Archiplex', id: 2, image: require('../../Images/PhotoMatrix/A-1004-1001.jpg') },
                        { name: 'Bateman', id: 3, image: require('../../Images/PhotoMatrix/A-1013-1001.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                    ]
                },
                {
                    name: "dsp.digital", ref: "dd", projects: [
                        { name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/D-1001-1001.jpg') },
                        { name: 'Renovation', id: 2, image: require('../../Images/PhotoMatrix/D-1012-1001.jpg') },
                        { name: 'Bateman', id: 3, image: require('../../Images/PhotoMatrix/D-1013-1001.jpg') },
                        { name: 'Axelrod', id: 4, image: require('../../Images/PhotoMatrix/D-1001-1002.jpg') },
                    ]
                },
                {
                    name: "dsp.interiors", ref: "int", projects: [
                        { name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/I-1001-1001.jpg') },
                        { name: 'Axelrod', id: 2, image: require('../../Images/PhotoMatrix/I-1001-1002.jpg') },
                        { name: 'Renovation', id: 3, image: require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-03-3rd_FL-Conf_01.png') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                    ]
                },
                {
                    name: "dsp.brand", ref: "bnd", projects: [
                        { name: 'Renovation', id: 1, image: require('../../Images/PhotoMatrix/B-1012-1001.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                    ]
                },
                {
                    name: "dsp.graphics", ref: "gph", projects: [
                        { name: 'dsp design', id: 1, image: require('../../Images/PhotoMatrix/C-1000-1000.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                    ]
                },
                {
                    name: "dsp.service", ref: "sd", projects: [
                        { name: 'Lego Serious Play', id: 1, image: require('../../Images/PhotoMatrix/S- 1000-1015-1.jpg') },
                        { name: 'Service Design Process', id: 2, image: require('../../Images/PhotoMatrix/S- 1000-1015-2.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                        { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                    ]
                },
                // {
                //     name: "dsp.industrial", ref: "ind", projects: [
                //         { name: '', image: require('../../Images/PhotoMatrix/dsp-no-image.jpg') },
                //         { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                //         { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                //         { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg') },
                //     ]
                // },
            ]
        }
        this.arc = React.createRef();
        this.dd = React.createRef();
        this.int = React.createRef();
        this.bnd = React.createRef();
        this.gph = React.createRef();
        // this.ind = React.createRef();
        this.sd = React.createRef();
    }
    moveToGallery(e, service, project) {
        e.preventDefault();
        localStorage.setItem('entity-project', project);
        this.props.history.push(`/photogallery/${service}`);
    }
    componentDidMount() {
        //always undefined..?
        if (this.props.location.sectionProps === "arc") {
            this.arc.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "dd") {
            this.dd.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "int") {
            this.int.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "bnd") {
            this.bnd.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "gph") {
            this.gph.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else if (this.props.location.sectionProps === "sd") {
            this.sd.current.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
            window.scrollTo(0, 0)
        }
        // if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
        //     let selectedService = this.state.services.filter(elem => elem.name === this.props.match.params.id);
        //     if (selectedService.length) {
        //         scroller.scrollTo(`${selectedService[0].name}`, {
        //             duration: 1500,
        //             delay: 0,
        //             smooth: true,
        //         });
        //     }
        // }
    }
    componentDidUpdate(previousProps, previousStates) {
        // if (previousProps.location.sectionProps !== this.props.location.sectionProps) {
        //     if (this.props.location.sectionProps) {
        //         this[this.props.location.sectionProps].current.scrollIntoView({ behavior: "smooth", block: "start" })
        //     } else {
        //         window.scrollTo(0, 0)
        //     }
        //     this.setState({ current: this.props.location.sectionProps })
        // }
        if (previousProps.location.sectionProps !== this.props.location.sectionProps) {
            if (this.props.location.sectionProps === "arc") {
                this.arc.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "dd") {
                this.dd.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "int") {
                this.int.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "bnd") {
                this.bnd.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "gph") {
                this.gph.current.scrollIntoView({ behavior: "smooth", block: "start" })
            } else if (this.props.location.sectionProps === "sd") {
                this.sd.current.scrollIntoView({ behavior: "smooth", block: "start" })
            }else {
                window.scrollTo(0, 0)
            }
            this.setState({ current: this.props.location.sectionProps })
        }
    }
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <div className="header-img header-img-exibits hero-img">
                    <div className="header-main header-main-exibits">
                        <div className="flex-center">
                            <div className="header-text header-text-exibits" >
                                Selected Exibits
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
                <div className="groups groups-head">
                    <p>At DSP most of our work centers on the projects of our clients and partners. To help us illustrate some of the work we've executed, we've put together an exhibits matrix highlighting our work for others. In each case we've identified the client, along with our role in the work. In some cases we've altered the exhibits to protect confidential information. We want to keep ourselves as transparent as possible, while maintaining the confidentiality of our clients where requested.</p>
                </div>
                <ExibitsNav current={this.state.current} />
                <div className="container-large">
                    <div className="groups">
                        <>
                            {
                                this.state.services.map((service, index) => (
                                    

                                    // <InView as="div" threshold={0.2} onChange={(ele, entry) => 
                                    //     ele && entry.isIntersecting &&  entry.intersectionRect.x <260 ? this.setState({ current: service.ref }) : null
                                    //     // console.log(service.ref,ele,entry.isIntersecting, entry.intersectionRect.top, entry.intersectionRect.x)
                                    // }>
                                        // <InView as="div" threshold={1} onChange={(ele, entry) => ele ? this.setState({ current: service.ref }) : null}>
                                        <div className={service.ref} ref={this[service.ref]}>
                                            <Row style={{ margin: 0 }} key={index} >
                                                <Col >
                                                    <div name={`${service.name}`} className="cat-head" >
                                                        {service.name}
                                                    </div>
                                                    <Slider key={index} style={{ padding: '1px' }} {...settings}>
                                                        {
                                                            service.projects.map((item, index) => (
                                                                <div key={index} >
                                                                    <div style={{ margin: '20px' }}>
                                                                        <a className={item.id ? `allow` : `not-allow`} href={"/photogallery/" + service.name} style={{ color: '#141415' }}>
                                                                            {item.id ? <img src={item.image.default} alt="DSP" style={{ height: 'auto', maxWidth: "100%" }} /> : <img src="https://dummyimage.com/900x506/fffcf2/fff.png&text=+" alt="" style={{ height: 'auto', maxWidth: "100%" }} />}
                                                                            <div className="caption">
                                                                                <p className="slider-p">{item.name}</p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </Slider>
                                                </Col>
                                            </Row>
                                            </div>
                                    // </InView>
                                    

                                ))
                            }
                        </>
                    </div>

                </div>
            </>
        )
    }
}

export default Exibits;
