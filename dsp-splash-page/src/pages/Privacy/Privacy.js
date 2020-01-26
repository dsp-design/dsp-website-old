import React, { Component } from "react";
import "./css/people.css";
import "./css/mediaPeople.css";

class Privacy extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="peopleBackground">
				<div id="peopleTop" className="nightBlue-background">
					<div id="aboutUs" className="slateWhite-text">we are . . . <span id="aboutUsBreak">design service professionals</span></div>
				</div>
			</div>
		)
	};
};

export default Privacy;