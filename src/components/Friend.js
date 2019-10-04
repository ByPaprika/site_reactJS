import React from 'react';
import s from "./components css/Friend.module.css";




const Friend = (props) =>{
 	return (
		<div className={s.bestFriend}>
			<img src="https://avatars.mds.yandex.net/get-pdb/1621302/6c8830b3-806c-44ed-a722-608f36a023ed/s1200?webp=false" width = "40px"/>
			<div>
				{props.name}
			</div>
		</div>

	);
}

export default Friend;