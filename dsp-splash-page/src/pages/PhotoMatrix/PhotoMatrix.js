import React, { Component } from "react";

// Components
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

import "./css/photomatrix.css";

import { scroller } from 'react-scroll';
import { Link } from "react-router-dom";

class PhotoMatrix extends Component {
    state = {
      services:[
          {
            name: "dsp.architecture", projects: [
                { name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/A-1001-1001.jpg')},
                { name: 'Archiplex', id: 2, image: require('../../Images/PhotoMatrix/A-1004-1001.jpg')},
                { name: 'Bateman', id: 3, image: require('../../Images/PhotoMatrix/A-1013-1001.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
            ]
          },
          {
            name: "dsp.interiors", projects: [
                { name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/I-1001-1001.jpg')},
                { name: 'Axelrod', id: 2, image: require('../../Images/PhotoMatrix/I-1001-1002.jpg')},
                { name: 'Renovation', id: 3, image: require('../../Images/ProjectGallery/I - 1012-1001 (BigD)/1012-1001-IP-03-3rd_FL-Conf_01.png')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
            ]
          },
          {
            name: "dsp.digital", projects: [
                { name: 'Axelrod', id: 1, image: require('../../Images/PhotoMatrix/D-1001-1001.jpg')},
                { name: 'Renovation', id: 2, image: require('../../Images/PhotoMatrix/D-1012-1001.jpg')},
                { name: 'Bateman', id: 3, image: require('../../Images/PhotoMatrix/D-1013-1001.jpg')},            
                { name: 'Axelrod', id: 4, image: require('../../Images/PhotoMatrix/D-1001-1002.jpg')},
            ]
          },
          {
            name: "dsp.brand", projects: [
                { name: 'Renovation', id: 1, image: require('../../Images/PhotoMatrix/B-1012-1001.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
            ]
          },
          {
            name: "dsp.graphics", projects: [
                { name: 'dsp design', id: 1, image: require('../../Images/PhotoMatrix/C-1000-1000.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
            ]
          },
          {
            name: "dsp.service", projects: [
                { name: 'Lego Serious Play', id: 1, image: require('../../Images/PhotoMatrix/S- 1000-1015-1.jpg')},
                { name: 'Service Design Process', id: 2, image: require('../../Images/PhotoMatrix/S- 1000-1015-2.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')}, 
            ]
          },
          {
            name: "dsp.industrial", projects: [
                { name: '', image: require('../../Images/PhotoMatrix/dsp-no-image.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},
                { name: '', image: require('../../Images/PhotoMatrix/DSP-Empty-Watermark.jpg')},            
            ]
          },
      ]
    };

    componentDidMount() {
        if (this.props && this.props.match && this.props.match.params && this.props.match.params.id) {
            let selectedService = this.state.services.filter(elem => elem.name === this.props.match.params.id);
            if (selectedService.length) {
                    scroller.scrollTo(`${selectedService[0].name}`, {
                        duration: 1500,
                        delay: 0,
                        smooth: true,
                    });
                }
        }
    }; 

    moveToGallery(e, service, project) {
        e.preventDefault();
        localStorage.setItem('entity-project', project);
        this.props.history.push(`/photogallery/${service}`);
    }

    render() {
        const settings = {
            dots: false,
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
            <div className="charcoalish-background" style={{ paddingBottom: 60 }}>
                <Link to="/designservices">
                    <p className="cat-head"><span style={{ borderRadius: 25, background: 'black', marginRight: 5, padding: 2}}><i class="fas fa-arrow-left"></i></span>back to dsp.design services</p> 
                </Link>
                {
                    this.state.services.map((service, index) => (
                        <Row style={{ margin: 0}} key={index}>
                            <Col >
                                <div name={`${service.name}`} className="cat-head">
                                    { service.name }
                                </div>
                                <Slider key={index} style={{ padding: '1px' }} {...settings}>
                                    {
                                        service.projects.map((item, index) => (
                                            <div key={index} >
                                                <div  style={{ margin: '20px'}}>
                                                    <a className = { item.id ? `allow`: `not-allow` } onClick={(e) => item.id ? this.moveToGallery(e,service.name, item.id): () => e.preventDefault() } style={{  color: '#141415' }}>
                                                        <img src={item.image} alt="DSP" style={{ height: 'auto', maxWidth:"100%" }} />
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
                    ))
                }
            </div>
        )
    }
};

export default PhotoMatrix;