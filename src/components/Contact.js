import React from "react";

// import { CopyToClipboard } from "react-copy-to-clipboard";

const EMAIL_ADDRESS = "hey@ivancass.com";

function Contact(props) {
	return (
		<section id="Contact" className="content-width">
			<div className="card-container">
				<div className="business-card">
					<a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
					{/* <p>TALK TO YOU SOON</p> */}
				</div>
			</div>
		</section>
	);
}

export default Contact;
