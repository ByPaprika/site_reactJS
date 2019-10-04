import React from 'react';
import s from "./components css/Nav.module.css";
import {NavLink} from 'react-router-dom';
import Heightfriend from './Heightfriend.js';
const Nav = (props) =>{
	return (
		<nav className={s.nav}>
	      <div className={s.item}>
	        <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
	      </div>
	      <div className={s.item}>
	        <NavLink activeClassName={s.active} to="/dialogs">messages</NavLink>
	      </div>
	      <div className={s.item}>
	        <a href="">news</a>
	      </div>
	      <div className={s.item}>
	        <a href="">music</a>
	      </div>
	      <div className={s.item}>
	        <a href="">settings</a>
	      </div>
	      <div>
	      	<Heightfriend heightfriend={props.heightfriend} />
	      </div>
	    </nav>

	);
}

export default Nav;