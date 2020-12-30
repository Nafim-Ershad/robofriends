import React from "react";
import CardList from "../components/cardList";
import {robots} from "../components/robots";
import SearchBox from "../components/search_box";
import Scroll from "../components/scroll";

import "./app.css";

 
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchField: ""
		}
	}


	onSearchChange = (event) =>{
		this.setState({searchField: event.target.value});
	}

	render(){
		const robots = this.state.robots;
		const searchField = this.state.searchField;

		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		if(!robots.length){
			return <h1>LOADING</h1>
		}
		else{
			return (
				<div id="wrapper">
					<div id="search">
						<h1> RoboFriends </h1>
						<SearchBox searchChange={this.onSearchChange}/>
					</div>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
	}
}
export default App;