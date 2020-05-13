import React from "react";

import "./css/slantinfo.css";
import "./css/mediaSlantinfo.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


const NoSlant = props => {

    function moveToPhotoMatrix (title) {
        props.history.push(`/photomatrix/${title}`);
    }

    return (
        <div className="row" style={{ margin: 0, marginBottom: 55 }}>
            <div className="col-xs-0 col-sm-2"></div>
            <div className="col-xs-12 col-sm-2 slantTitle almostBlack-text dsp-h" style={{ paddingRight: 0, paddingLeft: 0}}>
                <div className="row slantPad" style={{ margin: 0, textAlign: "center" }}>
                    <div className={props.link ? `col-xs-8 col-sm-12 vcenter allow` : `col-xs-8 col-sm-12 vcenter`} onClick={() => props.link ? moveToPhotoMatrix(props.title): () => false }>
                        {props.title}
                    </div>
                    {   props.image ? 
                        <div className="col-xs-4 col-sm-12 vcenter" style={{ paddingTop: 10 }}>
                            <Link to={`/photomatrix/${props.title}`}>
                                <img className="slantImage" alt={`${props.title}`} src={props.image} />
                            </Link>
                        </div> : null
                    }
                    { props.link ? 
                        <div className="col-xs-12 col-sm-12 dsp">
                            <Link to={`/photomatrix/${props.title}`} className="almostBlack-text" style={{ fontSize: "16px" }}>Click for exhibits</Link>
                        </div>
                        : null
                    }
                </div>
            </div>
            <div className="col-xs-0 col-sm-1"></div>
            <div className="col-xs-12 col-sm-7 slantInfoWrapper almostBlack-text dsp-p" style={{ paddingRight: 0, paddingLeft: 0}}>
                <div className="col-xs-offset-4 col-sm-offset-0">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

export default  withRouter(NoSlant);