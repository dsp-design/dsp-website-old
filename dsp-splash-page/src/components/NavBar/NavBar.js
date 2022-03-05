import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/navbar.css";
import "./assets/css/mediaNavbar.css";

import logo from "./assets/images/dspLogo.png";

class NavBar extends Component {

	state = {
		buttons: [
			{ to: "/about/people", text: "about", id: "about" },
			{ to: "/approach", text: "approach", id: "approach" },
			{ to: "/clients", text: "clients", id: "clients" },
			{ to: "/designservices", text: "services", id: "services" },
			{ to: "/joinus", text: "join us", id: "joinus" }
		],
		footer: ["hello@dsp.design", "Join us", "Design Service Professionals, PLLC 2019 All rights reserved"],
		navVisibility: "navHidden",
		navQsShow: "",
		footerJoin: "footerJoin",
		hamLine1: "",
		hamLine2: "",
		hamLine3: "",
		navSlant: "navSlant",
		socialScroll: "socialCloseScroll",
		emailShow: false,
		PhoneShow: false
	};

	hamburger = () => {
		(this.state.hamLine1 === "" || this.state.hamLine1 === "ham-1") ?
			this.setState({
				navVisibility: "navShow",
				navQsShow: "navQsShow",
				footerJoin: "footerJoinShow",
				hamLine1: "hamX1",
				hamLine2: "hamLineInvisible",
				hamLine3: "hamX3",
				navSlant: "navSlantGrow"
			})
			:
			this.setState({
				navVisibility: "navHide",
				navQsShow: "navQsHide",
				footerJoin: "footerJoinHide",
				hamLine1: "ham-1",
				hamLine2: "ham-2",
				hamLine3: "ham-3",
				navSlant: "navSlantShrink"
			});
	};

	logoClick = () => {
		if (this.state.hamLine1 === "hamX1") {
			this.hamburger();
		}
	}

	socialScroll = () => {
		(this.state.socialScroll === "socialCloseScroll")
			? this.setState({
				socialScroll: "socialScroll"
			})
			: this.setState({
				socialScroll: "socialCloseScroll"
			})
	}


	render() {
		return (
			<div id="nav" className="lightGrey-background">

				<div id="navImage">
					<Link to="/" onClick={() => { this.logoClick() }}><img src={logo} alt="logo" id="navLogo" /></Link>
				</div>

				<div id="navCenter">

					<div id="navWords" className={this.state.navVisibility}>
						<div id={this.state.navSlant} className="skyBlue-background"></div>
						{this.state.buttons.map(button => (
							<Link to={button.to} key={button.id} id={button.id} className={`navQs ${this.state.navQsShow}`} onClick={() => { this.hamburger() }} >{button.text}</Link>
						))}
					</div>

					<div id="navFooter" className="mt-3" >

						<div id="socialIconWrapper" style={{ marginTop: '10px' }}>
							<p  className="link socialIcon">
								{ this.state.emailShow ? " hello@dsp.design " : null }
								{ this.state.PhoneShow ? " 510.872.2133 " : null }
							</p>
							<a id="phoneIcon" className="link socialIcon" onClick={ () => { this.setState({ PhoneShow: !this.state.PhoneShow }); this.setState({ emailShow: false }); }} ><i className="fas fa-phone"></i></a>
							<a id="emailIcon" className="link socialIcon" onClick={ () => { this.setState({ emailShow: !this.state.emailShow });  this.setState({PhoneShow:false}); }}><i className="far fa-envelope"></i> </a>
							
							<a href="https://www.linkedin.com/company/designserviceprofessionalspllc/" className="link socialIcon" target="blank"><i className="fab fa-linkedin-in"></i></a>
							<a href="https://www.instagram.com/dsp.design_virtual/" className="link socialIcon" target="blank"><i className="fab fa-instagram"></i></a>
							<a href="https://www.facebook.com/dspdesignvirtual/" className="link socialIcon" target="blank"><i className="fab fa-facebook"></i></a>
							<a href="https://twitter.com/dspdesignUSA" className="link socialIcon" target="blank"><i className="fab fa-twitter"></i></a>
						</div>
						<div>
							<div style={{ marginTop: '10px' }}>
							 <div id="navPLLC"><div id="navPLLC"><Link className="navPrivacy float-right" to="/privacy"><i className="far fa-copyright"></i> 2020 Design Service Professionals, PLLC All rights reserved</Link></div></div>
							</div>
						</div>

					</div>

				</div>

				<div id="navHamburger" onClick={() => { this.hamburger() }}>
					<div id={this.state.hamLine1} className="hamLine charcoalish-background"></div>
					<div id={this.state.hamLine2} className="hamLine charcoalish-background"></div>
					<div id={this.state.hamLine3} className="hamLine charcoalish-background"></div>
				</div>

				<div id="navSocialWrapper">
					<div id="navSocial" className={`charcoalish-text ${this.state.socialScroll}`} onMouseOver={() => { this.socialScroll() }} onMouseOut={() => { this.socialScroll() }}>
						<a href="https://www.linkedin.com/company/designserviceprofessionalspllc/" target="blank"><i className="fab fa-linkedin-in"></i></a>
						<a href="https://www.instagram.com/dsp.design_virtual/" target="blank"><i className="fab fa-instagram"></i></a>
						<a href="https://www.facebook.com/dspdesignvirtual/" target="blank"><i className="fab fa-facebook"></i></a>
						<a href="https://twitter.com/dspdesignUSA" target="blank"><i className="fab fa-twitter"></i></a>
						<a id="emailAddress" className="link" href="tel:+15108722133" ><img src={require('./assets/images/PhoneIcon.png')} height="14px" width="14px" /></a>
						<a href="mailto:hello@dsp.design"><i className="far fa-envelope"></i></a>
						<Link to="/blog" onClick={() => this.trueList()} >blog</Link>
					</div>
				</div>

				<Link to="/blog" id="navBlogButton" onClick={() => this.trueList()}>blog and news!</Link>

			</div>
		)
	};
};

export default NavBar;
