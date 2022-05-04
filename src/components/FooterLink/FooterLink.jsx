import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLinkContainer, FooterLinkItem } from './FooterLinkStyles';

const FooterLink = () => {
	return (
		<FooterLinkContainer>
			<FooterLinkItem>
				<h6>COMPANY</h6>
				<p>
					<Link to="/">About</Link>
				</p>
				<p>
					<Link to="/">Careers</Link>
				</p>
				<p>
					<Link to="/">Mobile</Link>
				</p>
			</FooterLinkItem>
			<FooterLinkItem>
				<h6>CONTACT</h6>
				<p>
					<Link to="/">FAQ</Link>
				</p>
				<p>
					<Link to="/">Press</Link>
				</p>
				<p>
					<Link to="/">Affiliates</Link>
				</p>
			</FooterLinkItem>
			<FooterLinkItem>
				<h6>MORE</h6>
				<p>
					<Link to="/">Airlines</Link>
				</p>
				<p>
					<Link to="/">Airfees</Link>
				</p>
				<p>
					<Link to="/">Lowfare Tips</Link>
				</p>
			</FooterLinkItem>
		</FooterLinkContainer>
	);
};

export default FooterLink;
