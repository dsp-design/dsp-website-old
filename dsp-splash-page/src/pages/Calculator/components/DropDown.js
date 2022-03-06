import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

class DropDown extends Component {
    
    render() { 
        const elements = ["Role", "Rate", "FTE", "Role", "Rate", "FTE"];
        return (
            <div className="my-1 text-center">
                <div className={"panel-calc nBlueBg white boldText pointer calc-grid"} onClick={() => this.props.updateDropDown(this.props.dropDownName, !this.props.showData)}> <div className="white">{this.props.title}</div>
                 <div>{this.props.showData ? <span className="white glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="white glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</div></div>
                {this.props.showData ?
                    <div className="text offWhite  table-text">
                        <div className="grid-container">
                            {elements.map((value, index) => {
                                return index > 2 ? <div  className="grid-item boldText row-head" data-tip="React-tooltip" data-for={value.toLowerCase()}>{value}  {(value==="FTE"? <i className="fas fa-question-circle blueColor"></i>:null)}</div> : <div className="grid-item-x boldText row-head" data-tip="React-tooltip" data-for={value.toLowerCase()}>{value} {(value==="FTE"? <i className="fas fa-question-circle blueColor"></i>:null)}</div>
                            })}
                            <ReactTooltip id="fte" place="top" type="light" effect="float">
                                <p>FTE = Full Time Equivalent</p>
                                <p>1 FTE = 40 Hours/Week</p>
                                <p>0.5 FTE = 20 Hours/Week</p>
                                <p>0.25 FTE = 10 Hours/Week</p> 
                            </ReactTooltip>
                            <ReactTooltip id="rate" place="top" type="light" effect="float" >
                                <p> Select FTE for Rates </p>
                            </ReactTooltip>
                        </div>
                        <div className="grid-container">
                            {this.props.data.map((value, index) => {
                                return (
                                    <>
                                        <p className={"pyforce border-2 " + (this.props.data[index].selected ? "border-green" :"greyBg")}>{value.role}</p>
                                        {/* <div className={"grid-item sr" + index}><p data-tip="React-tooltip" data-for={this.props.dropDownName+"rate"+index}  className={"border-2 p-1-4 greyBg " + (this.props.data[index].selected ? "selected" : "")}>{this.props.data[index].selected ? "$"+this.props.data[index].calculatedRate : "$0"}</p></div> */}
                                        <p  className={"pyforce border-2 " + (this.props.data[index].selected ? "border-green" :"greyBg")}>{this.props.data[index].selected ? "$"+this.props.data[index].calculatedRate : "$0"}</p>
                                        <select className={"pyforce " + (this.props.data[index].selected ? "border-green" : "border-blue")} defaultValue={this.props.data[index].FTE} onChange={(e) => this.props.updateFTECallback(this.props.dataTable, index, e.target.value)}>
                                            <option value="0">Select</option>
                                            <option value="0.25">0.25</option>
                                            <option value="0.5">0.5</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select>
                                    </>
                                )
                            })}
                        </div>

                    </div> :
                    null}
            </div>
        )
    }
}
export default DropDown;