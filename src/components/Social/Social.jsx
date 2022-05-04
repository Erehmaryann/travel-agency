import React from 'react';
import { Link } from 'react-router-dom';
import { SocialContainer } from './SocialStyles';

const Social = () => {
	return (
		<SocialContainer>
			<img src="/assets/artic-travel-plane.png" alt="Plane-icon" />
			<h6>Artic Travels</h6>
			<p>Book your trip in minutes, get full control for much longer.</p>

			<div className="icons">
				<Link to="#" useHref>
					<img src="/assets/fb-icon.png" alt="facebook-icon" />
				</Link>
				<Link to="#" useHref>
					<img src="/assets/insta-icon.png" alt="instagram-icon" />
				</Link>
				<Link to="#" useHref>
					<img src="/assets/twitter-icon.png" alt="twitter-icon" />
				</Link>
			</div>
		</SocialContainer>
	);
};

export default Social;
