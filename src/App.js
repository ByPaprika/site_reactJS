import React from 'react';
import './App.css';
import Header from "./components/Header.js"
import Nav from "./components/Nav.js";
import Profile from "./components/Profile.js";
import Dialogs from "./components/Dialogs.js";
import {BrowserRouter, Route} from 'react-router-dom';




const App = (props) => {	
  return(
  <BrowserRouter>
		  <div className="app-wrapper">
	    <Header />
	    <Nav heightfriend={props.appState.hightfriend.friend} />
	    <div className="app-wrapper-content">
	    	<Route /*exact*/ path="/dialogs" render={ ()=> <Dialogs updateNewMessage={props.updateNewMessage} DialogsData = {props.appState.messages.DialogsData} MessagesData={props.appState.messages.MessagesData} itemMessage={props.appState.messages.itemMessage} addMessage={props.addMessage} /> }/>
	    	<Route path="/profile" render={ () => <Profile newPostText={props.appState.profile.newPostText} updateNewPost={props.updateNewPost} postData ={props.appState.profile.postData} addPost={props.addPost} />} />
	    </div>
	  </div>
  </BrowserRouter>
  );
} 



export default App;
