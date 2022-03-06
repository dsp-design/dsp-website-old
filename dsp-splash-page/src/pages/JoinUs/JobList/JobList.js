import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import SlantTop from "../../../components/SlantTop";
import "./joblist.css";

import jobs from "../../../JSON/joblist.json";

class JobList extends Component {
	state = {
		jobs,
		open: false
	};

	componentDidMount() {
		window.scrollTo(0, 0)
	};

	render() {

		return (
			<div className="slantBackground">

				<SlantTop
					color="almostBlack-background"
					title="dsp.careers"
				/>

				{this.state.jobs.slice(0, 2).map((job, i) => (
					<div className="jobWrapper">
						<Panel eventKey={i}>
							<span id="listTitleBorder">{job.title}</span>
							<div className="slantInfoWrapper almostBlack-text slantInfoWrapperLess">
							<div className="padd-less bg-white">
								<div id="oneLineTitle" className="infoWords link">{job.oneLine}</div>
									<div>{job.description}</div>
									<a href='https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUMzMwNkdXN0c3OTlZMFg1U1VGWlRJTUQ0NSQlQCN0PWcu' className="applyButton jobButton" target="_blank" rel="noreferrer">see available positions</a >
									<Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
								</div>
							</div>
						</Panel>
					</div>
				))}

				<div className="slantUp green-background">
					<div className="unSkew">
						{this.state.jobs.slice(2, 4).map((job, i) => (
							<div className="jobWrapper">
								<Panel eventKey={i}>
									<div id="listTitleWhite" className="slateWhite-text slantTitle link"><span id="listTitleWhiteBorder">{job.title}</span></div>
									<div className="slantInfoWrapper slateWhite-text slantInfoWrapperLess">
									<div className="padd-less">
										<div id="oneLineTitleWhite" className="infoWords link">{job.oneLine}</div>
											<div id="oneLineTitleWhite">{job.description}</div>
											<a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUMzMwNkdXN0c3OTlZMFg1U1VGWlRJTUQ0NSQlQCN0PWcu" className="applyButton jobButton" target="_blank" rel="noreferrer">see available positions</a >
											<Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
									</div>
									</div>
								</Panel>
							</div>
						))}
					</div>
				</div>

				{this.state.jobs.slice(4, 6).map((job, i) => (
					<div className="jobWrapper">
						<Panel eventKey={i}>
							<div id="listTitle" className="almostBlack-text slantTitle link"><span id="listTitleBorder">{job.title}</span></div>
							<div className="slantInfoWrapper almostBlack-text slantInfoWrapperLess">
							<div className="padd-less bg-white">
								<div id="oneLineTitle" className="infoWords link">{job.oneLine}</div>
									<div>{job.description}</div>
									<a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUMzMwNkdXN0c3OTlZMFg1U1VGWlRJTUQ0NSQlQCN0PWcu" className="applyButton jobButton" target="_blank" rel="noreferrer">see available positions</a >
									<Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
							</div>
							</div>
						</Panel>
					</div>
				))}

				<div className="slantDown salmon-background">
					<div className="unSkewDown">
						{this.state.jobs.slice(6).map((job, i) => (
							<div className="jobWrapper">
								<Panel eventKey={i}>
									<div id="listTitleWhite" className="slateWhite-text slantTitle link"><span id="listTitleWhiteBorder">{job.title}</span></div>
									<div className="slantInfoWrapper slateWhite-text slantInfoWrapperLess">
									<div className="padd-less">
										<div id="oneLineTitleWhite" className="infoWords link">{job.oneLine}</div>
											<div id="oneLineTitleWhite">{job.description}</div>
											<a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kT5uKQ4avk6gVCpvt8uiGCepTbAAZLdPjyv8u_itIaNUMzMwNkdXN0c3OTlZMFg1U1VGWlRJTUQ0NSQlQCN0PWcu" className="applyButton jobButton" target="_blank" rel="noreferrer">see available positions</a >
											<Link to={"/joinus/remind"} className="applyButton jobButton">remind me to apply later</Link >
									</div>
									</div>
								</Panel>
							</div>
						))}
					</div>
				</div>

			</div>
		)
	};
};

export default JobList;