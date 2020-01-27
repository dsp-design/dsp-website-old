import React, { Component } from "react";
import "./css/privacy.css";
import "./css/mediaPeople.css";

class Privacy extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="peopleBackground">
				<div id="privacyTop" className="nightBlue-background">
					<div id="aboutUs" className="slateWhite-text">DSP Privacy Policy </div>
				</div>
				<div className="container">
					<p className="mt-3 blockquote " id="approachParagraph"><b>Last updated: January, 2020</b></p>
					<p className="text-justify" id="approachParagraph">Our Company operates http://www.dsp.design (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.</p>
					<p className="text-justify" id="approachParagraph">We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.</p>
					<p className="h3">Information Collection And Use</p>
					<p className="text-justify" id="approachParagraph">While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name and email address.</p>
					<p className="h3">Log Data</p>
					<p className="text-justify" id="approachParagraph">Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").</p>
					<p className="text-justify" id="approachParagraph">This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.
				 In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this data.</p>
					<p className="h3">Communications</p>
					<p className="text-justify" id="approachParagraph">We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that our company provides.</p>
					<p className="h3">Cookies</p>
					<p className="text-justify" id="approachParagraph">Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.</p>
					<p className="text-justify" id="approachParagraph">Like many sites, we may use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
					<p className="h3">Security</p>
					<p className="text-justify" id="approachParagraph">The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
					<p className="text-justify" id="approachParagraph">This Privacy Policy is effective as of January, 2020, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
					<p className="text-justify" id="approachParagraph">We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
					<p className="text-justify" id="approachParagraph">If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>
					<p className="h3">Contact Us</p>
					<p className="text-justify" id="approachParagraph">If you have any questions about this Privacy Policy, please contact us.</p>

				</div>
			</div >
		)
	};
};

export default Privacy;