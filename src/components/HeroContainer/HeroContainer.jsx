import React from 'react';
import NavbarComponent from '../Navbar/Navbar';
import HeroText from '../HeroText/HeroText';
import { Hero } from './HeroContainerStyles';

const HeroContainer = () => {
	return (
		<Hero>
			<NavbarComponent />
			<HeroText />
		</Hero>
	);
};

export default HeroContainer;
