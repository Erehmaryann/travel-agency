import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Paragraph, Button, WhiteBg, Items } from './HeroTextStyles';

const HeroText = () => {
	return (
		<Container>
			<Header>Plan the perfect winter trip</Header>
			<Paragraph>
				Easily plan your ideal ski trip from home with the help of professionals
			</Paragraph>
			<Button>Book Here</Button>

			<WhiteBg>
				<Items>
					<p>
						<img src="/assets/loc-icon.png" alt="location-icon" />
						LOCATION
					</p>
					<select name="Iceland" id="iceland">
						<option value="Iceland">Iceland</option>
					</select>
				</Items>
				<Items>
					<p>
						<img src="/assets/user-icon.png" alt="user-icon" />
						PERSONS
					</p>
					<select name="Persons" id="persons">
						<option value="4 Persons">4 Persons</option>
					</select>
				</Items>
				<Items>
					<p>
						<img src="/assets/calendar-icon.png" alt="calendar-icon" />
						CHECK IN
					</p>
					<select name="check-in" id="checkIn">
						<option value="12 January 2022">12 January 2022</option>
					</select>
				</Items>
				<Items>
					<p>
						<img src="/assets/calendar-icon.png" alt="calendar-icon" />
						CHECK OUT
					</p>
					<select name="check-out" id="checkOut">
						<option value="18 January 2022">18 January 2022</option>
					</select>
				</Items>
				<Items>
					<Button>
						Book Trip <img src="/assets/plane-icon.png" alt="plane-icon" />
					</Button>
				</Items>
			</WhiteBg>
		</Container>
	);
};

export default HeroText;
