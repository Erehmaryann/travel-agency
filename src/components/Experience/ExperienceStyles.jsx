import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ExperienceContainer = styled(Container)`
	padding-top: 149px;
`;

export const PaymentIconContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	padding: 0 102px;
`;

export const RegionExperience = styled.div`
	padding: 157.99px 150px 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	h2,
	.img-text {
		font-weight: 600;
		font-size: 40px;
		letter-spacing: -0.02em;
		color: #000000;

		span {
			color: #3e86f5;
		}
	}

	.img-text {
		position: relative;
		width: 100%;

		img {
			position: absolute;
			top: 50%;
			right: 50%;
			transform: translate(50%, -50%);
		}
	}

	p {
		padding-top: 37px;
		padding-bottom: 158px;
		font-weight: 400;
		font-size: 24px;
		color: rgba(0, 0, 0, 0.5);
	}
`;

export const Images = styled.div`
	display: flex;
	flex-wrap: wrap;

	img {
		width: 449px;
		flex: 1;
	}
`;
