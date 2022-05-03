import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ResortContainer = styled(Container)`
	display: flex;
	padding-top: 85px;
	padding-bottom: 138px;
`;

export const FirstImgContainer = styled.div`
	display: flex;
	flex-direction: column;

	h3 {
		font-weight: 600;
		font-size: 48px;
		letter-spacing: -0.02em;
		color: #000000;
		padding-right: 146px;
	}

	img {
		width: 484px;
		margin-left: 150px;
		margin-right: 32px;
	}

	.first-img {
		margin-top: 72px;
		margin-bottom: 32px;
	}
`;

export const SecondImgContainer = styled.div`
	display: flex;
	flex-direction: column;

	img {
		width: 484px;
	}

	.first-img {
		margin-bottom: 32px;
	}
`;
