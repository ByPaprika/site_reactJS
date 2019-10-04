import React from 'react';
import './components css/Post.css';



const Post = (props) =>{
	return(
		<div>
			<div className = "post">
				<img src="https://avatars.mds.yandex.net/get-pdb/1621302/6c8830b3-806c-44ed-a722-608f36a023ed/s1200?webp=false" width = "40px"/>
				{props.message}
				<div>
					<span>like</span> {props.likesCount}
				</div>
			</div>
		</div>
	);
}

export default Post;