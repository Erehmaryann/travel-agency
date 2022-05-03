import React from 'react';
import {
	ResortContainer,
	FirstImgContainer,
	SecondImgContainer,
} from './ResortStyles';

const Resort = () => {
	return (
		<ResortContainer>
			<FirstImgContainer>
				<h3>The best resorts to chill and relax</h3>
				<img
					src="/assets/palm-tree.png"
					alt="palm-tree-img"
					className="first-img"
				/>
				<img src="/assets/boat-sea.png" alt="boat-sea-img" />
			</FirstImgContainer>
			<SecondImgContainer>
				<img
					src="/assets/winter.png"
					alt="mountain-img"
					className="first-img"
				/>
				<img src="/assets/skate-man.png" alt="fuji-mountain-img" />
			</SecondImgContainer>
		</ResortContainer>
	);
};

export default Resort;
