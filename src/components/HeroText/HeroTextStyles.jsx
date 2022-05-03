import styled from 'styled-components';

export const Header = styled.h1`
	padding: 137px 0 20px 0;
	font-size: 56px;
	font-weight: 700;
	font-size: 56px;
	letter-spacing: -0.03em;
	text-transform: capitalize;
	color: #ffffff;
`;

export const Paragraph = styled.p`
	font-weight: 400;
	font-size: 22px;
	color: #ffffff;
	letter-spacing: -0.01em;
	padding-bottom: 68px;
`;

export const Button = styled.button`
	padding: 22px 39px;
	width: 183px;
	height: 64px;
	background: #3e86f5;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 16px;
	color: #ffffff;
	border: none;
	outline: none;

	img {
		padding-left: 5px;
	}
`;

export const WhiteBg = styled.div`
	left: 120px;
	padding: 0px 23px;
	right: 120px;
	top: 610px;
	background: #ffffff;
	box-shadow: 0px 134px 193px rgba(183, 183, 183, 0.07),
		0px 16.7789px 24.1666px rgba(183, 183, 183, 0.035);
	border-radius: 16px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	position: absolute;
`;

export const Items = styled.div`
	/* flex: 1; */
	padding: 38px 0px 38px 0;

	p {
		font-weight: 500;
		font-size: 16px;
		letter-spacing: 0.08em;
		color: #929191;

		img {
			padding-right: 15px;
		}
	}

	select {
		border: none;
		outline: none;
		font-weight: 500;
		font-size: 18px;
		color: #000000;
	}
`;
