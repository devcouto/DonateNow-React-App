    import React from 'react'
    import Card from './Card'

    const CardList = ({Charity}) =>{
    	return (
    <div>
    {
    	Charity.map ((user,i) =>{
    		return (
    		<Card 
    		 	key={i}
    		 	link={Charity[i].link} 
    		 	logo={Charity[i].logo} 
    		 	name={Charity[i].name} 
    		 	type={Charity[i].type} 
    		 	donation={Charity[i].donation}
    		 	/>
	    );
    	})
    }
    </div>		);
    }

    export default CardList;