import React from 'react';
import Post from './Post.js';
import s from './components css/myposts.module.css';


const Myposts = (props) =>{
	
	let newPostElement = React.createRef();

	let postElements = props.postData
	.map(p => <Post message = {p.post} likesCount = {p.likesCount} />);
	
	let addPost = () => {
		props.addPost();
	}

	let postChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPost(text);
	}


	return(

		<div className={s.content}>
			<h2>MyPosts</h2>
			<textarea onChange={postChange} ref={newPostElement} name="" id="" cols="10" rows="2" value= {props.newPostText}  />
			<button onClick={addPost}>add post</button>
			<div>
				{postElements}
			</div>
		</div>	
	);
}

export default Myposts;