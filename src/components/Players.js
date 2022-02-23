import React from "react";

const Players = (props) =>{
	


	return(
		<div className="player">
		<h2>{props.nickname}</h2>
		<p>{props.name}</p>
		<p>{props.email}</p>
		<p>{props.role}</p>
		</div>
		
	)
}

export default Players;