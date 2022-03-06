import React, { Component } from "react";
import './contacts.css';
var axios = require("axios");
class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, height: 0,
            contactMethod: "email",
            contactTime: "Morning",
            contactMessage: "",
            contactAbout: "",
            contactCity: "",
            contactSite: "",
            contactCompany: "",
            contactTitle: "",
            contactEmail: "",
            contactPhone: "",
            contactName: "",
        };
        this.submit = this.submit.bind(this);
    }
    submit(){
        console.log(this.state);
        let serviceData = this.state;
        axios({
            method: "POST",
            url: "http://dspbackend-env.eba-f2x4dee4.us-east-1.elasticbeanstalk.com/contact",
            data: serviceData
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>
                <div className="container-large">
                    <div className="max-width-form">
                        <div className="groups">
                            <div className="side-grid">
                                <div className="grid-items-calc">
                                    <div className="panel-body">
                                        <div className="grid-service table-text">
                                            <div className="">Name</div>
                                            <input placeholder="First Name Last Name" type="text" value={this.state.contactName} onChange={(e) => { this.setState({ contactName: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">E-mail address</div>
                                            <input type="email" value={this.state.contactEmail} required={this.state.contactMethod === "email" ? true : false} onChange={(e) => { this.setState({ contactEmail: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Phone Number</div>
                                            <input type="tel" value={this.state.contactPhone} required={this.state.contactMethod === "phone" ? true : false} onChange={(e) => { this.setState({ contactPhone: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Title</div>
                                            <input type="text" value={this.state.contactTitle} onChange={(e) => { this.setState({ contactTitle: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Company</div>
                                            <input type="text" value={this.state.contactCompany} onChange={(e) => { this.setState({ contactCompany: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Company Website</div>
                                            <input type="text" value={this.state.contactSite} onChange={(e) => { this.setState({ contactSite: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Nearest Core City</div>
                                            <input type="text" value={this.state.contactCity} onChange={(e) => { this.setState({ contactCity: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Tell us a little about yourself. What brought you to our website?</div>
                                            <input type="text" placeholder="I am a..." value={this.state.contactAbout} onChange={(e) => { this.setState({ contactAbout: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Message for our team</div>
                                            <textarea value={this.state.contactMessage} onChange={(e) => { this.setState({ contactMessage: e.target.value }) }} className="border-blue py-1 whiteBg pyforce my-1" />
                                        </div>
                                         <div className="grid-service table-text">
                                            <div className="">Best time to connect</div>
                                            <select className={"border-blue py-1 whiteBg pyforce my-1"} defaultValue={this.state.contactTime} onChange={(e) => this.setState({ contactTime: e.target.value })}>
                                                <option value="Morning">Morning</option>
                                                <option value="Afternoon">Afternoon</option>
                                                <option value="Evening">Evening</option>
                                            </select>
                                        </div>
                                        <div className="grid-service table-text">
                                            <div className="">Preferred Contact method</div>
                                            <select className={"pyforce my-1 py-1 whiteBg border-blue"} defaultValue={this.state.contactMethod} onChange={(e) => this.setState({ contactMethod: e.target.value })}>
                                                <option value="email">E-mail</option>
                                                <option value="phone">Phone</option>

                                            </select>

                                        </div>
                                        <div className={"text-center panel-calc panel-calc-2 redBg white boldText pointer"} onClick={this.submit}> <div className="white">Submit</div></div>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
};

export default Contacts;
