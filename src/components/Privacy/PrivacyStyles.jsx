import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const PrivacyContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	padding-bottom: 53px;

	p {
		font-weight: 500;
		font-size: 12px;
		color: rgba(0, 0, 0, 0.5);

		&:last-child {
			padding-right: 204px;
		}
	}
`;
