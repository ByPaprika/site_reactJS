import React from 'react';
import s from './components css/Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem.js';
import Messages from './Messages.js';


const Dialogs = (props) =>{
	
	let newMessage = React.createRef();
	

	let message = () => {
		props.addMessage();
		props.updateNewMessage('');
	}
	let messageChange = () => {
		let text = newMessage.current.value;
		props.updateNewMessage(text);
	}
	
	let dialogsElement = props.DialogsData.map (d => <DialogItem name={d.name} id={d.id} />); 	

	let messageElement = props.MessagesData.map (m => <Messages text={m.message} />);

	return(
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				{messageElement}
				<div className={s.addMessage}>
					<textarea onChange={messageChange} ref={newMessage} name="" id="" cols="30" rows="2" value={props.itemMessage} />
					<button onClick={message}>add message</button>
		    	</div>
		    </div>
		</div>
	);
}

export default Dialogs;