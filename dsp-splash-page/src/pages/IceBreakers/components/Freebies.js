import React, { Component } from "react";

class Freebies extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        var freebies = this.props.freebies
        return (
            <div className="freebies" data-aos="fade-up">
                <div className="title flex-center"><p>Freebies (Starter Kit)</p></div>
                <div className={freebies.length === 4 ? "grid-1-ice-4" : "flex-container"}>
                    {freebies.map(freebie => {
                        return (
                            <div className="flex-items">
                                <img className="freebies-icon" src={freebie.img} alt={freebie.imgAlt}></img>
                                <div className="freebies-heading text-bold"><p>{freebie.heading}</p></div>
                                <div className="freebies-desc">
                                    {freebie.desc.map(d => {
                                        return <p>{d.data}</p>
                                    })}
                                </div>
                                <a className="ared" href={freebie.dlLink} target="_blank" rel="noreferrer">download</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Freebies;