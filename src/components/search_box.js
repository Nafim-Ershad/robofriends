import React from "react";

import "./search_box.css";

const SearchBox = ({searchChange}) => {
	return (
		<input 
		type="search" 
		placeholder="Search Robots"
		onChange={searchChange}/>
	);
}


// onSearchChange = (event) =>{
// 		this.setState({searchField: event.target.value});
// 		const filteredRobots = this.state.robots.filter(robots=>{
// 			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
// 		})
// 		console.log(filteredRobots);
// 	}
	

export default SearchBox;