import React, { Component } from "react";
import LocationMap from "./LocationMap";
import Trifold from "./Trifold"
import "./css/people.css";
import "./css/mediaPeople.css";
import { Popover, PopoverBody, UncontrolledPopover } from "reactstrap";

import people from "../../JSON/People/people.json";

class People extends Component {
	constructor(props) {
		super(props);
		this.state = {
			popoverOpen: [],
			people,
			pictures: []
		};
	}

	toggle = (id) => {
		let temp = this.state.popoverOpen;
		let x = temp[id]
		temp = temp.fill(false)
		temp[id] = x
		temp[id] = !temp[id]
		this.setState({popoverOpen: temp})
	}

	componentDidMount() {
		window.scrollTo(0, 0);

		this.shuffleArray(this.state.people);


		let popoverOpen = []
		this.state.people.forEach(p => {
			popoverOpen.push(false);
		});


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

	render() {
		return (
			<div id="peopleBackground">
				<div id="peopleTop" className="nightBlue-background">
					<div id="aboutUs" className="slateWhite-text">we are . . . <span id="aboutUsBreak">design service professionals</span></div>
				</div>

				<div id="peoplePicBox">
					{this.state.people.map((person, i) => (
						<React.Fragment >
							<div className="picContainer" id={`Popover${person.id}`} >
								<img src={process.env.PUBLIC_URL + this.state.pictures[i]}
									onMouseOver={() => { this.handleMouseOver(i, person.picture) }}
									onMouseOut={() => { this.handleMouseOver(i, person.sketch) }}
									className="peoplePic person" alt="Important Person" />
								<div className="peopleName">{person.name}</div>
								<div className="peopleTagline">{`"${person.title}"`}</div>
							</div>
							{(person.about.length > 0) ?
							<Popover placement="right" isOpen={this.state.popoverOpen[person.id]} target={`Popover${person.id}`} toggle={() => this.toggle(person.id)}>
								<PopoverBody><div dangerouslySetInnerHTML={{ __html: person.about }}></div></PopoverBody>
								</Popover > : <Popover placement="right" isOpen={this.state.popoverOpen[person.id]} target={`Popover${person.id}`} toggle={() => this.toggle(person.id)}></Popover>
							}
						</React.Fragment>
					))}
				</div>

				<LocationMap />
				<Trifold />
			</div>
		)
	};
};

export default People;