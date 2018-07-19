import React from 'react';

const Card = ({link, logo, name, type, donation}) => {
	return (
		<div className='white bg-white-o-40 dib pa2 ma2 grow bw2 shadow-5 br2'><a href={link}>
		
			<img width="220" height='200'alt='Photo'src={logo}/>
			<div style={{color:"#fff"}}>
				<h2>{name}</h2>
				<p>{type}</p>
				<p>{'Donation: ' + donation}</p>
			</div>
		</a>
		</div>
		
		);
}

export default Card;