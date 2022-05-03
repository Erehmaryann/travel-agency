import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ResortContainer = styled(Container)`
	display: flex;
	padding-top: 85px;
`;

export const FirstImgContainer = styled.div`
	display: flex;
	flex-direction: column;

	h3 {
		font-weight: 600;
		font-size: 48px;
		letter-spacing: -0.02em;
		color: #000000;
	}
`;
