import React from 'react';
import s from "./components css/Heightfriend.module.css";
import Friend from './Friend.js';



const Heightfriend = (props) =>{



	let friend = props.heightfriend.map (d => <Friend name={d.name} />); 	

	return (
		<div className={s.bestFriend}>
			<span>My best friend</span>
			<div className={s.friend}>
				{friend}
			</div>
		</div>

	);
}


export default Heightfriend;