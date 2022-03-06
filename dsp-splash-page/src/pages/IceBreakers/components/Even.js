import React, { Component } from "react";
import YouTube from "react-youtube"
//import { Link } from "react-router-dom"

class Even extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const opts = {
            width: "100%"
        }
        var groupData = this.props.grp
        var videoId = this.props.grp.videoId;
        var hasVideo = false;
        if (videoId !== "") { hasVideo = true; }
        var videoInfo = ""
        if(hasVideo) videoInfo = <div className="video-container"><YouTube videoId={groupData.videoId} opts={opts} /></div>;

        return (
            <div className={groupData.end ? "groups" : "groups groups-ice"} data-aos="fade-up">
                <div className="grid-3 grid-3-ice">
                    <div className="img-container-ice">
                        <div className="ice-img">
                            <img className="ice-img-image" src={groupData.img} alt={groupData.imgAlt}></img>
                        </div>

                    </div>
                    <div className="content-panel content-panel-ice">
                        <div className="text-panel">
                            <div className="title">
                                <p>{groupData.title}</p>
                            </div>
                            <div className="subtitle">
                                {groupData.tagline}
                            </div>
                            <div className="panel-desc-ice">
                                {groupData.desc.map((d, idx) => {
                                    return idx + 1 === groupData.desc.length ? <p className="text">{d.data}</p> : <p>{d.data}</p>
                                })}
                                <ul>
                                    {groupData.lists.map(list => {
                                        return <li className="ice-list">{list.data}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ice-btn">
                        <a className="btn btn-block max-width-btn custom-btn cb-ice" href={groupData.calcLink} target="_blank" rel="noreferrer">Calculate Estimate</a>
                        <a className="btn btn-block max-width-btn custom-btn-2 cb-ice" href={groupData.serviceLink} target="_blank" rel="noreferrer">Request Service</a>
                    </div>


                </div>
                {
                    videoInfo
                }
                <div className="text-center">{groupData.endText}<a className="ared" href={groupData.refLink}>{groupData.refText}</a></div>
            </div>
        )
    }
}

export default Even;