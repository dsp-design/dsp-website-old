import React, { Component } from "react";
import Papa from 'papaparse';
import "./css/calculator.css";
import DropDown from "./components/DropDown"
const buttonRef = React.createRef()
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { showTotalDetails: false,
            showLocationAndMemberShip: false,
            showSR:false,
            showIM:false,
            showJR:false,
            showAdmin: false,
            showOffShore: false,
            showDuration:false,
            showMeeting:false,
            data:[],
            duration:2,
            totalCost:0,
            baseCost:0,
            totalHours:0,
            membership:"3",
            meetingsDuration:0.5,
            weeklyMeetings:1,
            Subscription:[],
            DurationSavings:[],
            showMembershipSavings:false,
            showDurationSavings:false,
            showFTEDiscount:false,
            locationFactor:1,
            cityFactor:1,
            officeFactor:1,
        };
        this.updateFTE = this.updateFTE.bind(this)
        this.updateDropDown = this.updateDropDown.bind(this)
        this.getData = this.getData.bind(this);
    }
    RoundTo(number, roundto){
        return roundto * Math.round(number/roundto);
      }
    componentWillMount() {
        this.getCsvData();
    }
    fetchCsv() {
        return fetch('/data/subs.csv').then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result) {
        this.setState({data: result.data});
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();

        Papa.parse(csvData, {
            complete: this.getData
        });
        this.getFormData();
    }
    genTable(parsedData,tableName){
        let role=[]
        let  i = 0
        if(tableName=="Subscription"){
            for (;i<parsedData.length;i++){
                if(parsedData[i][0]!==tableName){
                    if(parsedData[i][0].length===0){
                        break
                    }                    
                    role.push({name:parsedData[i][0],tier:parsedData[i][1],discount: parsedData[i][2], mobilization: parsedData[i][3]})
                    
                }
            }
            
            this.setState({[tableName]: role})
            return parsedData.slice(i+1)
        }
        else if(tableName=="Savings" || tableName=="DurationSavings"){
            let savings={}
            for (;i<parsedData.length;i++){
                if(parsedData[i][0]!==tableName){
                    if(parsedData[i][0].length===0){
                        break
                    }                    
                    savings[parsedData[i][0]] = parseFloat(parsedData[i][1])
                    
                }
            }
            console.log(savings)
            this.setState({[tableName]:savings})
            return parsedData.slice(i+1)
        }else if(tableName=="BaseRates"){
            let baseRate={}
            for (;i<parsedData.length;i++){
                if(parsedData[i][0]!==tableName){
                    if(parsedData[i][0].length===0){
                        break
                    }                    
                    baseRate[parsedData[i][0]] = {rate: parseFloat(parsedData[i][1]), mul: parseInt(parsedData[i][2])}
                    
                }
            }
            console.log(baseRate)
            this.setState({BaseRates:baseRate})
            return parsedData.slice(i+1)
        }else if(tableName=="Location"){
            for (;i<parsedData.length;i++){
                if(parsedData[i][0]!==tableName){
                    if(parsedData[i][0].length===0){
                        break
                    }
                    role.push({location:parsedData[i][0],indicator:parsedData[i][1],factor: parsedData[i][2]})
                }
            }
            let table = {}
            table[tableName] = role
            this.setState(table)
            return parsedData.slice(i+1)
        }else {
            for (;i<parsedData.length;i++){
                if(parsedData[i][0]!==tableName){
                    if(parsedData[i][0].length===0){
                        break
                    }
                    role.push({role:parsedData[i][0],rate:parsedData[i][1],FTE: 0, selected:false,calculatedRate:0})
                }
            }
            let table = {}
            table[tableName] = role
            this.setState(table)
            return parsedData.slice(i+1)
        }        
    }
    updateDropDown(table,show){
        console.log(this.state[table])
        this.setState({[table]: show})
    }
    updateFTE(role,index,val){
        let valStr=val
        val = parseFloat(val)
        let roleData= this.state[role]
        if (val!=0){
            roleData[index].selected=true
        }
        else{
            roleData[index].selected=false
        }
        let totalHours = this.state.totalHours
        let totalCost = this.state.totalCost
        let baseCost = this.state.baseCost
        totalHours-=roleData[index].FTE*40
        totalCost-=roleData[index].FTE*40*roleData[index].calculatedRate
        baseCost-=roleData[index].FTE*40*roleData[index].rate
        roleData[index].calculatedRate = this.RoundTo(roleData[index].rate*this.state.Savings[valStr],this.state.BaseRates[role].mul)
        totalHours+=val*40
        totalCost+=val*40*roleData[index].calculatedRate
        baseCost+=val*40*roleData[index].rate
        roleData[index].FTE=val
        this.setState({[role]: roleData, totalCost:totalCost, totalHours:totalHours, baseCost: baseCost})
    }
    changeDuration(val){
        this.setState({duration:val})
    }
    getFormData() {
        let parsedData=this.state.data
        parsedData=this.genTable(parsedData,"SeniorRole")
        parsedData=this.genTable(parsedData,"IntermediateRole")
        parsedData=this.genTable(parsedData,"JuniorRole")
        parsedData=this.genTable(parsedData,"Admin")
        parsedData=this.genTable(parsedData,"Offshore")
        parsedData=this.genTable(parsedData,"Location")
        parsedData=this.genTable(parsedData,"CityDensity")
        parsedData=this.genTable(parsedData,"Subscription")
        parsedData=this.genTable(parsedData,"OfficeSize")
        parsedData=this.genTable(parsedData,"Savings")
        parsedData=this.genTable(parsedData,"DurationSavings")
        parsedData=this.genTable(parsedData,"BaseRates")
    }

    
    render() {
        const elements = ["Role", "Rate", "FTE", "Role", "Rate", "FTE"];
        return (
            <>
                <div className="container">
                    <div class="calculator col-sm-12 col-md-8 col-lg-9">
                        <div class="my-1 text-center">
                            <button className="my-1 btn btn-block text-uppercase blue-title border" onClick={() => this.setState({showLocationAndMemberShip: !this.state.showLocationAndMemberShip})}> Location Factor & Membership Plan {this.state.showLocationAndMemberShip ? <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>:<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</button>
                            {this.state.showLocationAndMemberShip ?
                            <form class="form-horizontal ">
                                <div class="form-group">
                                    <label for="corecity" class="col-xs-4 control-label">Core City</label>
                                    <div class="col-xs-8 col-md-4 dropdown-select">
                                        <select class="form-control" onChange={(e) => {console.log(this.state.cityFactor); this.setState({cityFactor:e.target.value})}}>
                                            {this.state.Location.map((value) => {
                                                return <option value={value.factor}>{value.location}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="location" class="col-xs-4 control-label">Location</label>
                                    <div class="col-xs-8 col-md-4 dropdown-select">
                                        <select class="form-control" onChange={(e) => this.setState({locationFactor:e.target.value})}>
                                            {this.state.CityDensity.map((value) => {
                                                return <option value={value.rate}>{value.role}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="location" class="col-xs-4 control-label">Membership</label>
                                    <div class="col-xs-8 col-md-4 dropdown-select">
                                        <select class="form-control" defaultValue={this.state.membership} onChange={(e) => this.setState({membership:e.target.value})}>
                                            {this.state.Subscription.map((value) => {
                                                return <option value={value.tier}>{value.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="location" class="col-xs-4 control-label">Office Size</label>
                                    <div class="col-xs-8 col-md-4 dropdown-select">
                                        <select class="form-control" defaultValue={this.state.officeFactor} onChange={(e) => this.setState({officeFactor:e.target.value})}>
                                            {this.state.OfficeSize.map((value) => {
                                                return <option value={parseFloat(value.rate)}>{value.role}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>

                            </form>
                            : null}                            
                            <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Senior Level Designers" dropDownName="showSR" dataTable="SeniorRole" colorScheme="green-content" titleColor="green-title" showData={this.state.showSR} data={this.state.SeniorRole} ></DropDown>
                            <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Intermediate Level Designers" dropDownName="showIM" dataTable="IntermediateRole" colorScheme="yellow-content" titleColor="yellow-title" showData={this.state.showIM} data={this.state.IntermediateRole} ></DropDown>
                            <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Junior Level Designers" dropDownName="showJR" dataTable="JuniorRole" colorScheme="red-content" titleColor="red-title" showData={this.state.showJR} data={this.state.JuniorRole} ></DropDown>
                            <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Administrative Stuff" dropDownName="showAdmin" dataTable="Admin" colorScheme="orange-content" titleColor="orange-title" showData={this.state.showAdmin} data={this.state.Admin} ></DropDown>
                            <DropDown updateFTECallback={this.updateFTE} updateDropDown={this.updateDropDown} title="Off-Shore Stuff" dropDownName="showOffShore" dataTable="Offshore" colorScheme="dark-yellow-content" titleColor="dark-yellow-title" showData={this.state.showOffShore} data={this.state.Offshore} ></DropDown>
                            <div className="my-1 text-center">
                                <button className="btn teal-title border btn-block text-uppercase" onClick={() => this.setState({showDuration: !this.state.showDuration})}> Duration In Weeks {this.state.showDuration ? <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>:<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</button>
                                {this.state.showDuration ? 
                                <>
                                <div class="slidecontainer my-1">
                                    <input type="range" min="2" max="16" step="2" class="slider" id="durationinweek" list="tickmarks" defaultValue={this.state.duration} onChange={(e)=> this.changeDuration(e.target.value)}/>
                                    <div className="testLabels">
                                    <div className="labelers">2</div>
                                    <div className="labelers">4</div>
                                    <div className="labelers">6</div>
                                    <div className="labelers">8</div>
                                    <div className="labelers">10</div>
                                    <div className="labelers">12</div>
                                    <div className="labelers">14</div>
                                    <div className="labelers">16</div>
                                    </div>
                                </div>
                                </>
                                :
                                null
                                }
                            </div>
                                <div className="my-1 text-center">
                                    <button className="text-uppercase  btn-block btn blue-title border" onClick={() => this.setState({showMeeting: !this.state.showMeeting})}> Meeting Calculator {this.state.showMeeting ? <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>:<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</button>
                                    {this.state.showMeeting ? 
                                    <div className="m-1">
                                    <div className="row">
                                        <div className="col-md-6">                           
                                                <p className="m1 text-center text-uppercase blue-title border panel-sub-title border heading-block"> Weekly Meetings</p>
                                            <div class="slidecontainer">
                                                <input type="range" min="0" max="3" step="1" class="slider" id="durationinweek" list="durationTickmarks" defaultValue={this.state.weeklyMeetings} onChange={(e)=> this.setState({weeklyMeetings:e.target.value})} />
                                                <datalist id="durationTickmarks">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                </datalist>
                                                <div className="testLabels">
                                                <div className="labelers">0</div>
                                                <div className="labelers">1</div>
                                                <div className="labelers">2</div>
                                                <div className="labelers">3</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">                            
                                            <p className="m1 text-center text-uppercase blue-title border panel-sub-title border heading-block"> Meeting Durations (Hrs)</p>
                                            <div class="slidecontainer">
                                                <input type="range" min="0.5" max="2" step="0.5" class="slider" id="durationinweek" list="meetingsTickmarks" defaultValue={this.state.meetingsDuration} onChange={(e)=> this.setState({meetingsDuration:e.target.value})}/>
                                                <datalist id="meetingsTickmarks">
                                                <option>.5</option>
                                                <option>1</option>
                                                <option>1.5</option>
                                                <option>2</option>
                                                </datalist>
                                                <div className="testLabels">
                                                <div className="labelers">0.5</div>
                                                <div className="labelers">1.0</div>
                                                <div className="labelers">1.5</div>
                                                <div className="labelers">2.0</div>
                                            </div>
                                                                        
                                                                        
                                            </div>
                                        
                                        </div>
                                    </div>
                                    <p className="text-center text-uppercase blue-title border panel-sub-title border heading-block"> Cost Per Meeting</p>                              
                                    <p className="text-center text-uppercase blue-title border panel-sub-title border heading-block"> ${Math.ceil(this.state.meetingsDuration*this.state.totalCost*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()}</p>
                                </div>
                                    
                                    : null }
                            </div>
                        </div>
                    </div>
                    <div class="sidenav lightGrey-background col-sm-12 col-md-4 col-lg-3">
                        <div class="panel panel-info">
                            <div class="blue-title panel-sub-title-2 border">
                                <h1 className="text-center text-uppercase panel-title panel-title-color"> Total Hours & Costs</h1>
                            </div>
                            <div class="panel-body">
                                <div className="p-1">
                                    <form class="form-horizontal ">
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Total Hours</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">{(this.state.totalHours*this.state.duration).toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="totalCost" class="col-xs-4 side-label">Total Cost</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">${Math.ceil((this.state.totalCost*this.state.duration + parseInt(this.state.Subscription.filter(subs => subs.tier==this.state.membership).map(value =>  value.mobilization))+ parseInt(this.state.meetingsDuration*this.state.totalCost*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor*this.state.weeklyMeetings*this.state.duration))).toLocaleString()}</p>
                                            </div>
                                        </div>


                                        <div className={this.state.showTotalDetails ? "dropup" : "dropdown"}>
                                            <a class="btn btn-link" onClick={() => this.setState({ showTotalDetails: !this.state.showTotalDetails })}>
                                                Click for Cost Breakdown <span class="caret"></span>
                                            </a>
                                        </div>
                                        {this.state.showTotalDetails ?
                                            <>
                                                <div class="form-group">
                                                    <label for="totalCost" class="col-xs-4 side-label">Mobilization Fee</label>
                                                    <div class="col-xs-8">
                                                        <p class="form-control-static border">${this.state.Subscription.filter(subs => subs.tier==this.state.membership).map(value =>  {
                                                            console.log(value)
                                                            return Math.ceil(value.mobilization*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()
                                                            }) }</p>
                                                    </div>
                                                </div><div class="form-group">
                                                    <label for="totalCost" class="col-xs-4 side-label">Cost of Meetings</label>
                                                    <div class="col-xs-8">
                                                        <p class="form-control-static border">${Math.ceil(this.state.meetingsDuration*this.state.totalCost*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor*this.state.weeklyMeetings*this.state.duration).toLocaleString()}</p>
                                                    </div>
                                                </div><div class="form-group">
                                                    <label for="totalCost" class="col-xs-4 side-label">Weekly Cost</label>
                                                    <div class="col-xs-8">
                                                        <p class="form-control-static border">${Math.ceil(this.state.totalCost*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()}</p>
                                                    </div>
                                                </div><div class="form-group">
                                                    <label for="totalCost" class="col-xs-4 side-label">Min Weekly Burn Rate</label>
                                                    <div class="col-xs-8">
                                                        <p class="form-control-static border">${Math.ceil(this.state.totalCost/2*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()}</p>
                                                    </div>
                                                </div><div class="form-group">
                                                    <label for="totalCost" class="col-xs-4 side-label">Min Hours Per Week</label>
                                                    <div class="col-xs-8">
                                                        <p class="form-control-static border">{(this.state.totalHours/2).toLocaleString()} Hrs</p>
                                                    </div>
                                                </div><div class="form-group">
                                                    <label for="totalCost" class="col-xs-4 side-label">Min Weekly Burn Rate</label>
                                                    <div class="col-xs-8">
                                                        <p class="form-control-static border">${Math.ceil(this.state.totalCost*2*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()}</p>
                                                    </div>
                                                </div><div class="form-group">
                                                    <label for="totalCost" class="col-xs-4 side-label">Max Hours Per Week</label>
                                                    <div class="col-xs-8">
                                                        <p class="form-control-static border">{(this.state.totalHours*2).toLocaleString()} Hrs</p>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            null}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-info">
                            <div class="blue-title panel-sub-title-2 border">
                                <h1 className="text-center text-uppercase panel-title panel-title-color"> Savings</h1>
                            </div>
                            <div class="panel-body">
                                    <div className="grid">
                                        <button className="text-uppercase btn green-title  left-text panel-sub-title-2 border"  onClick={() => this.setState({showMembershipSavings: !this.state.showMembershipSavings})}> Membership Plan {this.state.showMembershipSavings ? <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>:<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</button>
                                        <p class="text-uppercase green-title panel-sub-title-2 border">${this.state.Subscription.filter(subs => subs.tier==this.state.membership).map(value =>  Math.ceil(parseInt(value.discount)*this.state.totalCost*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor/100).toLocaleString() ) }</p>
                                    </div>
                                    {this.state.showMembershipSavings ? 
                                    <form class="form-horizontal ">
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Member Plan</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">{this.state.Subscription.filter(subs => subs.tier==this.state.membership).map(value =>  value.name.toLocaleString() ) }</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Discount</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">{this.state.Subscription.filter(subs => subs.tier==this.state.membership).map(value =>  value.discount.toLocaleString() ) }%</p>
                                            </div>
                                        </div>
                                    </form>
                                    : null }
                                    <div className="grid">
                                    <button className="text-uppercase btn green-title left-text panel-sub-title-2 border"  onClick={() => this.setState({showDurationSavings: !this.state.showDurationSavings})}> Duration Discount {this.state.showDurationSavings ? <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>:<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</button>
                                        <p class="text-uppercase green-title panel-sub-title-2 border">${this.state.totalCost===0?0:Math.ceil((1-this.state.DurationSavings[this.state.duration.toLocaleString()]) * this.state.totalCost*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()}</p>

                                    </div>
                                    {this.state.showDurationSavings? 
                                    <form class="form-horizontal ">
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Duration </label>
                                            <div class="col-xs-8">
                                                        <p class="form-control-static border">{this.state.duration} week{this.state.duration>1?"s":null}</p>
                                                        
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Discount</label>
                                            <div class="col-xs-8">
                                                        <p class="form-control-static border">{Math.round((1-this.state.DurationSavings[this.state.duration.toLocaleString()])*100)}%</p>
                                            </div>
                                        </div>
                                    </form>
                                    : null }
                                    <div className="grid">
                                    <button className="text-uppercase btn green-title  left-text panel-sub-title-2 border"  onClick={() => this.setState({showFTEDiscount: !this.state.showFTEDiscount})}> FTE Discount {this.state.showFTEDiscount ? <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>:<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>}</button>
                                        <p class="text-uppercase green-title panel-sub-title-2 border">${Math.ceil((this.state.baseCost-this.state.totalCost)*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()}</p>
                                    </div>
                                    {this.state.showFTEDiscount?
                                    <form class="form-horizontal ">
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Base Billing Rate</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">${this.state.totalHours===0?0:Math.round(this.state.baseCost*this.state.cityFactor*this.state.locationFactor/this.state.totalHours).toLocaleString()} per hour</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Adjusted Billing Rate</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">${this.state.totalHours===0?0:Math.round(this.state.totalCost*this.state.cityFactor*this.state.locationFactor/this.state.totalHours).toLocaleString()} per hour</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Base Cost</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">${Math.round(this.state.baseCost*this.state.cityFactor*this.state.locationFactor).toLocaleString()}</p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="totalHours" class="col-xs-4 side-label">Adjusted Cost</label>
                                            <div class="col-xs-8">
                                                <p class="form-control-static border">${Math.round(this.state.totalCost*this.state.cityFactor*this.state.locationFactor).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </form>
                                    : null }
                                    <div className="grid">
                                        <p className="text-uppercase green-title panel-sub-title-2 border"> Total Savings</p>
                                        <p class="text-uppercase green-title panel-sub-title-2 border">${Math.ceil((this.state.baseCost-this.state.totalCost)*this.state.cityFactor*this.state.locationFactor*this.state.officeFactor).toLocaleString()}</p>
                                    </div>
                                    <div className="grid">
                                        <div className="block"></div>
                                        <p class="text-uppercase green-title panel-sub-title-2 border">{this.state.baseCost===0? 0: Math.round((this.state.baseCost-this.state.totalCost)/this.state.baseCost*100).toLocaleString()}%</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="margin-bot"></div>
            </>

        )
    }
}

export default Calculator;