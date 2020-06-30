import React, { Component } from "react";
import LocationMap from "./LocationMap";
import Trifold from "./Trifold"
import "./css/people.css";
import "./css/mediaPeople.css";
import { Popover,OverlayTrigger } from "react-bootstrap";

import people from "../../JSON/People/people.json";



class People extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people,
			pictures: []
		};
	}


	componentDidMount() {
		window.scrollTo(0, 0);

		this.shuffleArray(this.state.people);



		let picArr = [];

		this.state.people.map(person => (
			picArr.push(person.sketch)
		));

		this.setState({
			pictures: picArr
		})
	};

	shuffleArray = array => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		};
	};

	handleMouseOver = (i, pic) => {
		let arr = this.state.pictures.slice();
		arr[i] = pic;
		this.setState({
			pictures: arr
		})
	};

	renderData = (data) =>{
		return (
			<p>{data}</p>
		)
	}

	popoverClickRootClose = (data) => {
		const popover = (
			<Popover id="popover-trigger-click-root-close">
				<div dangerouslySetInnerHTML={{ __html: data }}></div>
			</Popover>
		);

		const empty = (<React.Fragment/>)
		if(data === ''){
			return empty
		}
		return(popover)
	};

	render() {
		// var left = calculateMyOwnLeftPosition()
		return (

			<div id="peopleBackground">
				<div id="peopleTop" className="nightBlue-background">
					<div id="aboutUs" className="slateWhite-text">we are . . . <span id="aboutUsBreak">design service professionals</span></div>
<div id="aboutUsPara" className="aboutUsPara">
					...an all-virtual design collaborative specializing in design services for the AEC Industry.
Leveraging a diverse reservoir of design professionals, our staff augmentation program, coupled with an eclectic mix of industry experts, allows us to assemble the right team at the right time for our clients & AEC partners.</div>
				</div>
				<div id="peoplePicBox">
					{this.state.people.map((person, i) => (
						<OverlayTrigger key={i} trigger="click" rootClose placement={(window.innerWidth > '768') ? "right"  : "bottom"}  overlay={this.popoverClickRootClose(person.about)}>
							<div className="picContainer" id={`Popover${person.id}`}>
								<img src={process.env.PUBLIC_URL + this.state.pictures[i]}
									onMouseOver={() => { this.handleMouseOver(i, person.picture) }}
									onMouseOut={() => { this.handleMouseOver(i, person.sketch) }}
									className="peoplePic person" alt="Important Person" />
								<div className="peopleName">{person.name}</div>
								<div className="peopleTagline">{`"${person.title}"`}</div>
							</div>
						</OverlayTrigger>
					))}
				</div>

				<LocationMap />
				<Trifold />
			</div>
		)
	};
};

export default People;