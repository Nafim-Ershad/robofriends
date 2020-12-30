import React from "react";
import Card from "./card";

import "./cardList.css";

const CardList = (props) =>{ 
	// console.log(props);
	// we can do 3 stuffs:
	// 1. {robots} = props {aka deconstructions}
	// 2. robots = props.robots
	// 3. or use {robots} instead of props in CardList funnction
	const robots = props.robots;
	return (
		<div className="cardList">
			{
				robots.map((user, i) => {
					return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
					}
				) // Don't use `;` inside HTML JSX variable
			}	  	
		</div>
	);
}

export default CardList;