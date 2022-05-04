import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Social from '../Social/Social';
import Privacy from '../Privacy/Privacy';
import { FooterContainer } from './FooterStyles';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<Social />
				<FooterLink />
			</FooterContainer>
			<Privacy />
		</>
	);
};

export default Footer;
