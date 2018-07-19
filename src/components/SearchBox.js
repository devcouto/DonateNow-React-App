import React from 'react'

const SearchBox = ({searchfield, searchChange})=>{
	return(
		<div className='tc pa2 mt2'>
				<input 
				className='pa3 lh-solid w-100 w-75-m w-80-l'
				type='search' 
				placeholder='Search'
				onChange={searchChange}
				/>
		</div>
		);
}

export default SearchBox;