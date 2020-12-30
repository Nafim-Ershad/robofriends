import React from "react";
import "./card.css";

const Card = (props) =>{ //takes properties as props
	const {name, email, id} = props; // {} is also known as destructuring
	// console.log(props);
	// we get the properties name, id and email from the card input in index.js and use them as seperate variables
	// {``} is like the format string of python, and ${} is used as the variables
	return (
		<div id="card_body">
			<img src={`https://robohash.org/${id}/set_set1?size=200x200`} alt="robots" />

			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}


export default Card;