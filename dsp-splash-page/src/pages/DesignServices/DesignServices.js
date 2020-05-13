import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./css/designServices.css";
import "./css/mediaDesignServices.css";

// Components
import SlantTop from "../../components/SlantTop";
import SlantUp from "../../components/SlantInfo/SlantUp";
import SlantDown from "../../components/SlantInfo/SlantDown";
import NoSlant from "../../components/SlantInfo/NoSlant";

//JSON
import services from "../../JSON/designServices.json";
import interiors from "../../JSON/DesignServices/interior.json";
import arch from "../../JSON/DesignServices/arch.json";
import digital from "../../JSON/DesignServices/digital.json";
import service from "../../JSON/DesignServices/service.json";

class DesignServices extends Component {
    state = {
        services,
        interiors,
        arch,
        digital,
        service,
        graphics: ["product design", "web design", "UI/UX", "app design", "graphic design"],
        brand: ["digital experience", "event environments", "signage and wayfinding", "pop-ups"],
        industrial: ["industrial design", "furniture design", "mass market", "consumer electronics", "sustainability"]
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    };

    render() {
        return (
            <div className="dsBackground">

                <SlantTop
                    color="charcoalish-background"
                    title="dsp.design services"
                />

                <NoSlant
                    title="dsp.architecture"
                    image={require("../../Images/ServicePage/dsp-architecture.png")}
                    link={true}
                >   
                    {this.state.arch.map(arch => (
                        <div className="dsInfoColumn">
                            <Popup
                                trigger={<p style={{cursor: "pointer"}} className="darkDSInfoTrigger centeredPopup">{arch.leftIdea}</p>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "10px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{arch.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                    
                </NoSlant>

                <SlantUp
                    background="green-background"
                    titleColor="slateWhite-text"
                    title="dsp.interiors"
                    image={require("../../Images/ServicePage/dsp-interiors.png")}
                    link={true}
                >
                    {this.state.interiors.map((interior,i) => (
                        <div className="dsInfoColumn" key={i}>
                            <Popup
                                trigger={<p style={{ cursor: "pointer" }} className="whiteDSInfoTrigger centeredPopup">{interior.leftIdea}</p>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "20px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{interior.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                </SlantUp>

                <NoSlant
                    title="dsp.graphics"
                    image={require("../../Images/ServicePage/dsp-graphics.png")}
                    link={true}
                >
                    {this.state.graphics.map(graphic => (
                        <div className="dsInfoColumn">
                            <div className="charcoalish-text">{graphic}</div>
                        </div>
                    ))}
                </NoSlant>

                <SlantDown
                    background="nightBlue-background"
                    titleColor="slateWhite-text"
                    title="dsp.digital"
                    image={require("../../Images/ServicePage/dsp-digital.png")}
                    link={true}
                >
                    {this.state.digital.map(digit => (
                        <div className="dsInfoColumn">
                            <Popup
                                trigger={<p style={{ cursor: "pointer" }} className="whiteDSInfoTrigger centeredPopup">{digit.leftIdea}</p>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "10px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{digit.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                </SlantDown>

                <NoSlant
                    title="dsp.brand"
                    image={require("../../Images/ServicePage/dsp-brand.png")}
                    link={true}
                >
                    {this.state.brand.map(brand => (
                        <div className="dsInfoColumn">
                            <div className="charcoalish-text">{brand}</div>
                        </div>
                    ))}
                </NoSlant>

                <SlantUp
                    background="green-background"
                    titleColor="slateWhite-text"
                    link={true}
                    title="dsp.service"
                    image={require("../../Images/ServicePage/dsp-service.png")}
                >
                    {this.state.service.map(service => (
                        <div className="dsInfoColumn">
                            <Popup
                                trigger={<p style={{ cursor: "pointer" }} className="whiteDSInfoTrigger centeredPopup">{service.leftIdea}</p>}
                                position="top center"
                                closeOnDocumentClick
                                contentStyle={{
                                    "border": "none",
                                    "border-radius": "2%",
                                    "background-color": "#f4f7fc",
                                    "padding": "10px",
                                    "font-size": "110%",
                                    "color": "#757579"
                                }}
                            >
                                <div className="popupWords nightBlue-text">{service.rightVerbiage}</div>
                            </Popup>
                        </div>
                    ))}
                </SlantUp>

                <NoSlant
                    title="dsp.industrial"
                    image={require("../../Images/ServicePage/dsp-industrial.png")}
                    link={true}
                >
                    {this.state.industrial.map(industrial => (
                        <div className="dsInfoColumn">
                            <div className="charcoalish-text">{industrial}</div>
                        </div>
                    ))}
                </NoSlant>
            </div >

        )
    }
};

export default DesignServices;