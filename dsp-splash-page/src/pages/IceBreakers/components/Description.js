import React, { Component } from "react";
import Blocks from "./Blocks";

class Description extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        var desc = this.props.description;
        return (
            <div className="groups groups-ice" data-aos="fade-up">
                <div className="header-desc">
                    <p>{desc.descHead}</p>
                    <p>{desc.desc}</p>
                </div>
                <div className={desc.blocks.length === 4 ? "grid-1-ice-4" : "grid-1-ice-max-3"}>
                    {desc.blocks.map(block => {
                        return <Blocks img={block.img} imgAlt={block.imgAlt} heading={block.heading} desc={block.desc} desc2={block.desc2} />
                    })}
                </div>
            </div>
        )
    }
}

export default Description;