import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

class DropDown extends Component {
    
    render() { 
        const elements = ["Role", "Rate", "FTE", "Role", "Rate", "FTE"];
        return (
            <div className="my-1 text-center">
                <button className={" text-uppercase btn btn-block " + this.props.titleColor + " my-1 border"} onClick={() => this.props.updateDropDown(this.props.dropDownName, !this.props.showData)}> {this.props.title} {this.props.showData ? <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</button>
                {this.props.showData ?
                    <div className={this.props.colorScheme + " text-center border"}>
                        <div className="grid-container">
                            {elements.map((value, index) => {
                                return index > 2 ? <div  className="grid-item row-head" data-tip="React-tooltip" data-for={value.toLowerCase()}>{value}</div> : <div className="grid-item-x row-head" data-tip="React-tooltip" data-for={value.toLowerCase()}>{value}</div>
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
                                        <div className={"grid-item sr" + index}><p className={"border p-1-4 " + this.props.colorScheme + " " + (this.props.data[index].selected ? "selected" : "")}>{value.role}</p></div>
                                        <div className={"grid-item sr" + index}><p data-tip="React-tooltip" data-for={this.props.dropDownName+"rate"+index}  className={"border p-1-4 " + this.props.colorScheme + " " + (this.props.data[index].selected ? "selected" : "")}>{this.props.data[index].selected ? this.props.data[index].calculatedRate+"$" : "RATE"}</p></div>
                                        <div className={"grid-item sr" + index}><select className={"border pyforce " + this.props.colorScheme + " " + (this.props.data[index].selected ? "selected" : "")} defaultValue={this.props.data[index].FTE} onChange={(e) => this.props.updateFTECallback(this.props.dataTable, index, e.target.value)}>
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
                                        
                                        </div>
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