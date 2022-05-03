import styled from 'styled-components';

export const PassesContainer = styled.div`
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url('/assets/view-passes-bg.jpeg');
	height: 750px;
	width: 100%;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;

export const PassesHeader = styled.h1`
	font-weight: 600;
	font-size: 72px;
	letter-spacing: -0.02em;
	padding: 152px 0 71px 0;
	color: #ffffff;
`;

export const PassesBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 22px 39px;
	width: 285px;
	height: 72px;
	background: #3e86f5;
	border-radius: 10px;
	font-weight: 600;
	border: none;
	outline: none;
	font-size: 16px;
	color: #ffffff;
`;
