import React,{Component} from 'react';
import CardList from '../Components/CardList.js'
import SearchBox from '../Components/SearchBox.js'
// import {robots} from './robots.js';
import './App.css';
import Scroll from '../Components/Scroll.js'


class App extends Component{

	constructor(){
		super()
		this.state={
			robots: [],
			searchField : '',
		}
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
		.then(users =>this.setState({robots:users}));
	}
	
	onSearchChange=(event) => {
		this.setState({searchField: event.target.value});
	}
	
	render(){
			const {robots,searchField}=this.state;
			const filteredRobots= robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());

		})

		return (
			<div className="tc">
			<h1 className="f1">Robo Friends</h1>
			<SearchBox onSearchChange={this.onSearchChange}  />
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
			</div>
			)	
	}
	
}

export default App;