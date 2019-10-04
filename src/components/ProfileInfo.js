import s from "./components css/ProfileInfo.module.css";
import React from 'react';
import Myposts from "./Myposts.js";
 

const Profile = () =>{
	return (
	 	<div>
	      <div>
	        <img height="200px" width="1100px" src="https://www.zastavki.com/pictures/2560x1600/2010/Nature_Other_waterfall_019570_.jpg" />
	      </div>
	      <div className={s.people}>
	        ava+ description
	      </div>
		</div>

	);
}

export default Profile;