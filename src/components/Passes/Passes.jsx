import React from 'react';
import { PassesHeader, PassesContainer, PassesBtn } from './PassesStyle';
import { Container } from 'react-bootstrap';

const Passes = () => {
	return (
		<PassesContainer>
			<Container>
				<PassesHeader>View Passes We’ve Made Available For You</PassesHeader>
				<PassesBtn>View Passes</PassesBtn>
			</Container>
		</PassesContainer>
	);
};

export default Passes;
