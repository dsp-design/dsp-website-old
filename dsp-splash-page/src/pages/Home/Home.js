import React, { Component } from "react";
import "./assets/css/home.css";
import Cards from "../../components/Cards";
import Carousel from 'react-multi-carousel';
import { v4 as uuid } from 'uuid';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            <>
                <Carousel
                    additionalTransfrom={0}
                    autoPlay
                    autoPlaySpeed={6000}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    className="carousel"
                    containerClass="home"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    deviceType={this.props.deviceType}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1280
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 768,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1280,
                                min: 768
                            },
                            items: 1,
                            partialVisibilityGutter: 5
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <Cards bg_color="bgRed" icon="dspLogo-outline.png" cardTitle="Design Service Professionals" body="Designing a new process for connecting design professionals, sharing design opportunities, and delivering design service" hasButton={true} buttonText="View Our Services" buttonLink="/services-home"></Cards>
                    <Cards bg_color="bgGreen" icon="dspLogo-outline.png" cardTitle="Design Service Professionals" body="Bringing access, opportunity, and innovation to design and build professionals anywhere" hasButton={true} buttonText="View Our Marketplace" buttonLink="/marketplace"></Cards>
                    <Cards bg_color="bgBlue" icon="dspLogo-outline.png" cardTitle="Design Service Professionals" body="Building the industry's strongest back-of-house design team for the design and build communities" hasButton={true} buttonText="View Our Teams" buttonLink={{ pathname: "/about", sectionProps: "ourteam", key: uuid() }}></Cards>
                </Carousel>
            </>
        )
    };
};

export default Home;
