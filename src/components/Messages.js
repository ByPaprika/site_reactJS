import React from 'react';
import s from './components css/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Messages = (props) =>{
	return(
		<div className={s.messages}>
			<div className={s.message}>
				<img src="https://avatars.mds.yandex.net/get-pdb/1621302/6c8830b3-806c-44ed-a722-608f36a023ed/s1200?webp=false" width = "40px"/>
				{props.text}
			</div>
		</div>

	);
}
export default Messages;
