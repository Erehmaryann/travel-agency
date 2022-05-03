import React from 'react';
import {
	ExperienceContainer,
	PaymentIconContainer,
	RegionExperience,
	Images,
} from './ExperienceStyles';

const Experience = () => {
	return (
		<>
			<ExperienceContainer>
				<PaymentIconContainer>
					<img src="/assets/nike-logo.png" alt="Nike" />
					<img src="/assets/apple-pay-logo.png" alt="apple-pay" />
					<img src="/assets/silver-star-logo.png" alt="silver-star" />
					<img src="/assets/intrax-logo.png" alt="intrax-logo" />
					<img src="/assets/mastercard-logo.png" alt="mastercard-logo" />
				</PaymentIconContainer>
				<RegionExperience>
					<h2>
						Creating the best <span>ice-cold!</span> experience you would never
						forget.
					</h2>
					<p>
						Would you explore nature paradise in the world, find the best
						destination in the world with us.
					</p>
					<div className="img-text">
						View Regions available
						<img src="/assets/blue-arrow.png" alt="blue-arrow" />
					</div>
				</RegionExperience>
			</ExperienceContainer>
			<Images>
				<img src="/assets/mountain-resort.png" alt="mountain-img" />
				<img src="/assets/fuji-mountain.png" alt="fuji-mountain-img" />
				<img src="/assets/freezing.png" alt="freezing-waterlake-img" />
			</Images>
		</>
	);
};

export default Experience;
