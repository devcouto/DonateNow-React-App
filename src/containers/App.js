import React, { Component } from 'react';
import CardList from '../components/CardList';
import {Charity} from '../components/Charity'
import SearchBox from '../components/SearchBox'

class App extends Component {
	constructor(){
		super()
		this.state = {
			Charity: Charity,
			searchfield:''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const filteredCharity = this.state.Charity.filter(Charity=>{
			return Charity.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return (
		
			<div className='tc header-img-bc ma4'>
					<h1 className='tc mt6'> Canada's Largest Charities</h1>
					<h3 className='pa4'>Giving is a personal decision and far be it from me to tell you where to donate your money. Follow causes you are passionate about, but do your due diligence. To donate, simply click on the card of the charity below.</h3>
					<SearchBox searchChange={this.onSearchChange}/>
				<div className='tc mt5'>
					<CardList Charity={filteredCharity}/>
				</div>
			</div>
		);
	}
}

export default App;