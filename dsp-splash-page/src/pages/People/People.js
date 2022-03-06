import React, { Component } from "react";
import "./css/people.css";
import ReactTooltip from 'react-tooltip';
//import { v4 as uuid } from 'uuid';


class People extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: this.props.people,
		};
	}


	componentDidMount() {
		window.scrollTo(0, 0);
	};

	

	handleMouseOver = (i, pic) => {
		let arr = this.props.people.slice();
		arr[i].current = pic;
		this.setState({
			people:arr
		})
	};


	render() {
		// var left = calculateMyOwnLeftPosition()
		return (

			<div className={this.props.count? "peopleHolder2":"peopleHolder"}>
				{this.state.people.map((person, i) => (
					<>
						<div className="picContainer" id={`Popover${person.id}`} data-tip data-for={person.id.toString()}>
							<img src={person.current}
								onMouseOver={() => { this.handleMouseOver(i, person.picture) }}
								onMouseOut={() => { this.handleMouseOver(i, person.sketch) }}
								className="peoplePic person" alt="Important Person" />
							<div className="peopleName">{person.name}</div>
							<div className="peopleTagline">{`"${person.title}"`}</div>
						</div>
						<ReactTooltip className="tooltip" id={person.id.toString()} place="top" type="success" textColor="#fefcfb" html={true} effect="float" event="click" eventOff="mouseleave">{person.about}
						</ReactTooltip>
					</>
				))}
			</div>
		)
	};
};

export default People;