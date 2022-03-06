import React, { Component } from "react";

class Blocks extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="grid-items">
                <div className="flex-center">
                    <img className="grid-icon" src={"/images/servicepage/icebreakers/icons/" + this.props.img} alt={this.props.imgAlt}></img>
                </div>
                <div className="grid-headings text-center text-bold"><p>{this.props.heading}</p></div>
                <div className="grid-desc text-center">
                    <p>{this.props.desc}</p>
                    <p>{this.props.desc2}</p>
                </div>
            </div>
        )
    }
}

export default Blocks;