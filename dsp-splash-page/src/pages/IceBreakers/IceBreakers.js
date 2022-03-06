import React, { Component } from "react";
import { Link } from "react-router-dom";
import Architecture from "./components/Architecture"
import DigitalDesign from "./components/DigitalDesign"
import InteriorDesign from "./components/InteriorDesign";
import ITAdmin from "./components/ITAdmin";
import ServiceDesign from "./components/ServiceDesign";
import "./css/icebreakers.css";

class IceBreakers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arc: true,
            digdsg: false,
            intdsg: false,
            itadmin: false,
            srvdsg: false,
        };
        this.gridRef = React.createRef();

    }
    handleMenu(stateName) {
        var newState = {
            arc: false,
            digdsg: false,
            intdsg: false,
            itadmin: false,
            srvdsg: false,
        }
        newState[stateName] = true;
        this.setState(newState)
    }
    

    render() {
        return (
            <>
                
                {this.state.arc? <Architecture/>:null}
                {this.state.digdsg? <DigitalDesign/>:null}
                {this.state.intdsg? <InteriorDesign/>:null}
                {this.state.itadmin? <ITAdmin/>:null}
                {this.state.srvdsg? <ServiceDesign/>:null}
            </>
        )
    }
}
export default IceBreakers;