import styled from 'styled-components';

export const Hero = styled.div`
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.65) 0%,
			rgba(0, 0, 0, 0.580838) 32.24%,
			rgba(0, 0, 0, 0.486293) 62.09%,
			rgba(0, 0, 0, 0) 98.06%
		),
		url('/assets/travel-hero-img.jpg');
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	position: relative;
	width: 100%;
	height: 100vh;
`;
