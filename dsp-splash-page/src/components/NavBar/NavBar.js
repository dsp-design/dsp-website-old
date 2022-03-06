import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./assets/css/navbar.css";
// import "./assets/css/mediaNavbar.css";
import { v4 as uuid } from 'uuid';
import logo from "./assets/images/dspLogo.png";

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menu: false
		}
		this.wrapperRef = React.createRef();
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}
	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}
	setWrapperRef(node) {
		this.wrapperRef = node;
	}
	showMenu(newState) {
		this.setState({ menu: newState })
	}
	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
			this.setState({ menu: false })
		}
	}
	render() {
		return (
			<div id="nav" className="lightGrey-background" ref={this.wrapperRef}>
				<div className="nav-container desktop-only">


					<div className="menu-flex desktop-login">
						<div className="imglogo flex-center menu-item">
							<Link to="/"><img src={logo} alt="logo" className="navLogo" /></Link>
						</div>
						<div className="service-menu">
							<NavLink to={{ pathname: "/about" }} className="menu-item" activeClassName="menu-item-active">ABOUT</NavLink>
							<div className="service-content">
								<NavLink to="/about" activeClassName="underlineText menuHead" className="menuHead">DSP</NavLink>
								<Link to={{ pathname: "/about", sectionProps: "whoweare", key: uuid() }} className="submenu-item text-center">Who we are</Link>
								<Link to={{ pathname: "/about", sectionProps: "ourteam", key: uuid() }} className="submenu-item text-center">Our team</Link>
								<Link to={{ pathname: "/about", sectionProps: "wherewework", key: uuid() }} className="submenu-item text-center">Where we work</Link>
								<Link to={{ pathname: "/about", sectionProps: "ourapproach", key: uuid() }} className="submenu-item text-center">Our approach</Link>
								<Link to={{ pathname: "/about", sectionProps: "whynow", key: uuid() }} className="submenu-item text-center">Why now</Link>
								<Link to={{ pathname: "/about", sectionProps: "ourstory", key: uuid() }} className="submenu-item text-center">Our story</Link>


							</div>
						</div>
						<div className="service-menu">
							<NavLink to="/services-home" className="menu-item" activeClassName="menu-item-active" >SERVICES</NavLink>
							<div className="service-content">
								<NavLink to="/services-home" activeClassName="underlineText menuHead" className="menuHead">Services home</NavLink>
								<NavLink to={{ pathname: "/services-home" }} className="submenu-item text-center">Your trusted partners</NavLink>
								<NavLink to={{ pathname: "/icebreakers-architecture" }} className="submenu-item text-center" activeClassName="submenu-item-active">Icebreakers</NavLink>
								<NavLink to={{ pathname: "/service-bundles" }} className="submenu-item text-center" activeClassName="submenu-item-active">Bundles</NavLink>
								<NavLink to={{ pathname: "/full-service-architecture" }} className="submenu-item text-center" activeClassName="submenu-item-active">Full-service</NavLink>
								<NavLink to={{ pathname: "/flex-staff" }} className="submenu-item text-center" activeClassName="submenu-item-active">Your flex staff</NavLink>
								{/* <NavLink to={{ pathname: "/flex-staff-estimator" }} className="submenu-item text-center" activeClassName="submenu-item-active">Cost estimator</NavLink> */}

							</div>
						</div>
						<div className="service-menu">
							<NavLink to={{ pathname: "/exhibits" }} className="menu-item" activeClassName="menu-item-active">EXHIBITS</NavLink>
							<div className="service-content">
								<NavLink to={{ pathname: "/exhibits", sectionProps: "arc", key: uuid() }} activeClassName="underlineText menuHead" className="menuHead">Exhibits home</NavLink>
								<Link to={{ pathname: "/exhibits", sectionProps: "dd", key: uuid() }} className="submenu-item text-center">Digital design</Link>
								<Link to={{ pathname: "/exhibits", sectionProps: "int", key: uuid() }} className="submenu-item text-center">Interiors</Link>
								<Link to={{ pathname: "/exhibits", sectionProps: "bnd", key: uuid() }} className="submenu-item text-center">Brands</Link>
								<Link to={{ pathname: "/exhibits", sectionProps: "gph", key: uuid() }} className="submenu-item text-center">Graphics design</Link>
								<Link to={{ pathname: "/exhibits", sectionProps: "sd", key: uuid() }} className="submenu-item text-center">Service design</Link>
								{/* <Link to={{ pathname: "/exhibits", sectionProps: "ind", key: uuid() }} className="submenu-item text-center">Industrial</Link> */}


							</div>
						</div>
						<div className="service-menu">
							<NavLink to="/marketplace" className="menu-item" activeClassName="menu-item-active">MARKETPLACE</NavLink>
							{/* ORIGINAL MARKETPLACE MENU <div className="service-content">
								<NavLink to={{ pathname: "/marketplace", sectionProps: "arc", key: uuid() }} activeClassName="underlineText menuHead" className="menuHead">Marketplace home</NavLink>
								<NavLink to={{ pathname: "/peer-to-peer" }} className="submenu-item text-center">Peer-to-peer</NavLink>
								<NavLink to={{ pathname: "/design-tools-libraries" }} className="submenu-item text-center">Design tools & libraries</NavLink>
								<NavLink to={{ pathname: "/dsp-resources" }} className="submenu-item text-center">DSP resources</NavLink>
								<NavLink to={{ pathname: "/virtual-office-solutions" }} className="submenu-item text-center">Virtual office solutions</NavLink>
								<NavLink to={{ pathname: "/project-opportunities" }} className="submenu-item text-center">Project opportunities</NavLink>
							</div> */}
							<div className="service-content">
								<NavLink to={{ pathname: "/marketplace", sectionProps: "arc", key: uuid() }} activeClassName="underlineText menuHead" className="menuHead">Marketplace home</NavLink>
								<NavLink to={{ pathname: "/marketplace" }} className="submenu-item text-center">Connect</NavLink>
								<NavLink to={{ pathname: "/marketplace" }} className="submenu-item text-center">Share</NavLink>
								<NavLink to={{ pathname: "/marketplace" }} className="submenu-item text-center">Deliver</NavLink>
							</div>
						</div>
						<div className="service-menu">
							<NavLink to={{ pathname: "/joinus" }} className="menu-item" activeClassName="menu-item-active">JOIN US</NavLink>
							<div className="service-content">
								<NavLink to="/joinus" activeClassName="underlineText menuHead" className="menuHead">Join us home</NavLink>
								<Link to={{ pathname: "/joinus", sectionProps: "eco", key: uuid() }} className="submenu-item text-center">dsp.ecosystem</Link>
								<Link to={{ pathname: "/joinus", sectionProps: "teams", key: uuid() }} className="submenu-item text-center">dsp.teams</Link>
								<Link to={{ pathname: "/joinus", sectionProps: "mem", key: uuid() }} className="submenu-item text-center">dsp.membership</Link>
								<Link to={{ pathname: "/joinus", sectionProps: "ben", key: uuid() }} className="submenu-item text-center">dsp.benefits</Link>
								<Link to={{ pathname: "/joinus", sectionProps: "val", key: uuid() }} className="submenu-item text-center">dsp.values</Link>
							</div>
						</div>
						<div className="service-menu">
							<a className="menu-item" onClick={() => {window.location.href="/blog"}}>BLOG</a>
							<div className="service-content">
								<a className="menuHead" onClick={() => {window.location.href="/blog"}}>Blog home</a>
								<a className="submenu-item text-center" onClick={() => {window.location.href="/blog?c=design"}}>Design</a>
								<a className="submenu-item text-center" onClick={() => {window.location.href="/blog?c=service"}}>Service</a>
								<a className="submenu-item text-center" onClick={() => {window.location.href="/blog?c=virtual-office"}}>Virtual office</a>
								<a className="submenu-item text-center" onClick={() => {window.location.href="/blog?c=events"}}>Events</a>
							</div>
						</div>
						{/* <div className="service-menu">
							<div className="menu-item">
								<div className="login-btn desktop-only">
									<button className="btn custom-btn">Login</button>
								</div>
							</div>
							<div className="service-content">
								<NavLink to="/login" activeClassName="underlineText menuHead" className="menuHead">Welcome user</NavLink>
								<NavLink to={{ pathname: "/my-account" }} className="submenu-item text-center">My account</NavLink>
								<NavLink to={{ pathname: "/my-company" }} className="submenu-item text-center">My company</NavLink>
								<NavLink to={{ pathname: "/my-teams" }} className="submenu-item text-center">My teams</NavLink>
								<NavLink to={{ pathname: "/my-projects" }} className="submenu-item text-center">My projects</NavLink>
								<NavLink to={{ pathname: "/my-oppotunities" }} className="submenu-item text-center">My projects</NavLink>
							</div>
						</div> */}
					</div>

				</div>
				<div className={"mobile mobile-menu " + (this.state.menu ? "show-mobile-only-sidebar" : "hide-mobile-only-sidebar")} >
					<div className="service-menu">
						<NavLink to={{ pathname: "/about" }} className="menu-item mobile-menu-item" activeClassName="menu-item-active">ABOUT</NavLink>
						<div className="service-content">
							<NavLink to="/about" activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>DSP</NavLink>
							<Link to={{ pathname: "/about", sectionProps: "whoweare", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Who we are</Link>
							<Link to={{ pathname: "/about", sectionProps: "ourteam", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Our team</Link>
							<Link to={{ pathname: "/about", sectionProps: "wherewework", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Where we work</Link>
							<Link to={{ pathname: "/about", sectionProps: "ourapproach", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Our approach</Link>
							<Link to={{ pathname: "/about", sectionProps: "whynow", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Why now</Link>
							<Link to={{ pathname: "/about", sectionProps: "ourstory", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Our story</Link>


						</div>
					</div>
					<div className="service-menu">
						<NavLink to="/services-home" className="menu-item mobile-menu-item" activeClassName="menu-item-active" >SERVICES</NavLink>
						<div className="service-content">
							<NavLink to="/services-home" activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Services home</NavLink>
							<NavLink to={{ pathname: "/services-home" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Your trusted partners</NavLink>
							<NavLink to={{ pathname: "/icebreakers-architecture" }} className="submenu-item submenu-item-mobile" activeClassName="submenu-item-active" onClick={() => this.showMenu(!this.state.menu)}>Icebreakers</NavLink>
							<NavLink to={{ pathname: "/service-bundles" }} className="submenu-item submenu-item-mobile" activeClassName="submenu-item-active" onClick={() => this.showMenu(!this.state.menu)}>Bundles</NavLink>
							<NavLink to={{ pathname: "/full-service-architecture" }} className="submenu-item submenu-item-mobile" activeClassName="submenu-item-active" onClick={() => this.showMenu(!this.state.menu)}>Full-service</NavLink>
							<NavLink to={{ pathname: "/flex-staff" }} className="submenu-item submenu-item-mobile" activeClassName="submenu-item-active" onClick={() => this.showMenu(!this.state.menu)}>Your flex staff</NavLink>
							{/* <NavLink to={{ pathname: "/flex-staff-estimator" }} className="submenu-item submenu-item-mobile" activeClassName="submenu-item-active" onClick={() => this.showMenu(!this.state.menu)}>Cost estimator</NavLink> */}

						</div>
					</div>
					<div className="service-menu">
						<NavLink to={{ pathname: "/exhibits" }} className="menu-item mobile-menu-item" activeClassName="menu-item-active">EXHIBITS</NavLink>
						<div className="service-content">
							<NavLink to={{ pathname: "/exhibits", sectionProps: "arc", key: uuid() }} activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Exhibits home</NavLink>
							<Link to={{ pathname: "/exhibits", sectionProps: "dd", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Digital design</Link>
							<Link to={{ pathname: "/exhibits", sectionProps: "int", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Interiors</Link>
							<Link to={{ pathname: "/exhibits", sectionProps: "bnd", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Brands</Link>
							<Link to={{ pathname: "/exhibits", sectionProps: "gph", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Graphics design</Link>
							<Link to={{ pathname: "/exhibits", sectionProps: "sd", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Service design</Link>
							{/* <Link to={{ pathname: "/exhibits", sectionProps: "ind", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Industrial</Link> */}


						</div>
					</div>
					<div className="service-menu">
						<NavLink to="/marketplace" className="menu-item mobile-menu-item" activeClassName="menu-item-active">MARKETPLACE</NavLink>
						{/* <div className="service-content">
							<NavLink to={{ pathname: "/marketplace", sectionProps: "arc", key: uuid() }} activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Marketplace home</NavLink>
							<NavLink to={{ pathname: "/peer-to-peer" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Peer-to-peer</NavLink>
							<NavLink to={{ pathname: "/design-tools-libraries" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Design tools & libraries</NavLink>
							<NavLink to={{ pathname: "/dsp-resources" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>DSP resources</NavLink>
							<NavLink to={{ pathname: "/virtual-office-solutions" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Virtual office solutions</NavLink>
							<NavLink to={{ pathname: "/project-opportunities" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Project opportunities</NavLink>
						</div> */}
						<div className="service-content">
							<NavLink to={{ pathname: "/marketplace", sectionProps: "arc", key: uuid() }} activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Marketplace home</NavLink>
							<NavLink to={{ pathname: "/marketplace" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Connect</NavLink>
							<NavLink to={{ pathname: "/marketplace" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Share</NavLink>
							<NavLink to={{ pathname: "/marketplace" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Deliver</NavLink>
						</div>

					</div>
					<div className="service-menu">
						<NavLink to={{ pathname: "/joinus" }} className="menu-item mobile-menu-item" activeClassName="menu-item-active">JOIN US</NavLink>
						<div className="service-content">
							<NavLink to="/joinus" activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Join us home</NavLink>
							<Link to={{ pathname: "/joinus", sectionProps: "eco", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>dsp.ecosystem</Link>
							<Link to={{ pathname: "/joinus", sectionProps: "teams", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>dsp.teams</Link>
							<Link to={{ pathname: "/joinus", sectionProps: "mem", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>dsp.membership</Link>
							<Link to={{ pathname: "/joinus", sectionProps: "ben", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>dsp.benefits</Link>
							<Link to={{ pathname: "/joinus", sectionProps: "val", key: uuid() }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>dsp.values</Link>


						</div>
					</div>
					{/* <div className="service-menu desktop-only">
						<NavLink to="/blog" className="menu-item mobile-menu-item" activeClassName="menu-item-active">BLOG</NavLink>
						<div className="service-content">
							<NavLink to="/blog" activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Blog Home</NavLink>
							<NavLink to={{ pathname: "/blog?c=design" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Design</NavLink>
							<NavLink to={{ pathname: "/blog?c=service" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Service</NavLink>
							<NavLink to={{ pathname: "/blog?c=virtual-office" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Virtual Office</NavLink>
							<NavLink to={{ pathname: "/blog?c=events" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Events</NavLink>
						</div>
					</div> */}
					{/* <div className="service-menu">
						<NavLink to="/login" className="menu-item mobile-menu-item" activeClassName="menu-item-active">LOGIN</NavLink>
						<div className="service-content">
							<NavLink to="/login" activeClassName="underlineText menuHead submenu-item-mobile" className="menuHead submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>Welcome user</NavLink>
							<NavLink to={{ pathname: "/my-account" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>My account</NavLink>
							<NavLink to={{ pathname: "/my-company" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>My company</NavLink>
							<NavLink to={{ pathname: "/my-teams" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>My teams</NavLink>
							<NavLink to={{ pathname: "/my-projects" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>My projects</NavLink>
							<NavLink to={{ pathname: "/my-oppotunities" }} className="submenu-item submenu-item-mobile" onClick={() => this.showMenu(!this.state.menu)}>My projects</NavLink>
						</div>
					</div> */}
				</div>
				<div className="menu-end">
					<div className="imglogo flex-start ham">
						<Link to="/"><img src={logo} alt="logo" className="navLogo" /></Link>
					</div>
					<div className="flex-end">
						<a className="menu-link" href="tel:5108722133"><i className="fa fa-phone"></i></a>
						<a className="menu-link" href="mailto:hello@dsp.design"><i className="fa fa-at"></i></a>
						<a className="menu-link" href="https://www.linkedin.com/company/designserviceprofessionalspllc/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-in"></i></a>
						<a className="menu-link" href="https://www.instagram.com/dsp.design_virtual/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
						<a className="menu-link" href="https://www.facebook.com/dspdesignvirtual/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
						<a className="menu-link" href="https://twitter.com/dspdesignUSA" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
					</div>
					<div className="flex-start desktop-only">
						<a className="menu-link" href="/privacy" ><i className="fa fa-copyright"></i> 2018 - 2021 Design Service Professionals, PLLC All rights reserved</a>
					</div>
					<div className={"ham close flex-end " + (this.state.menu ? "mobile" : "desktop")} onClick={() => this.showMenu(!this.state.menu)}>
						{this.state.menu ? null : <i className="fa fa-bars" aria-hidden="true"></i>}
					</div>
				</div>

				{/*<div id="navCenter">

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
							 <div id="navPLLC"><div id="navPLLC"><Link className="navPrivacy float-right" to="/privacy"><i className="far fa-copyright"></i> 2021 Design Service Professionals, PLLC All rights reserved</Link></div></div>
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

				<Link to="/blog" id="navBlogButton" onClick={() => this.trueList()}>blog and news!</Link> */}

			</div>
		)
	};
};

export default NavBar;
