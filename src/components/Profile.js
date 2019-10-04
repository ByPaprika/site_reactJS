import s from "./components css/Profile.module.css";
import React from 'react';
import Myposts from "./Myposts.js";
import ProfileInfo from "./ProfileInfo.js";
 

const Profile = (props) =>{

	return (
	 	<div className={s.content}>
	 	  <ProfileInfo />
	      <Myposts newPostText={props.newPostText} updateNewPost={props.updateNewPost} postData={props.postData} addPost={props.addPost} />	
		</div>

	);
}

export default Profile;