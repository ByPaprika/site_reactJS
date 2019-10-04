import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import store from './redux/state.js';
import {BrowserRouter} from 'react-router-dom';

let reRenderEntireTree = (state) =>{
	ReactDOM.render(	
		<BrowserRouter><App updateNewMessage={store.updateNewMessage.bind(store)} appState={store.getState()} updateNewPost={store.updateNewPost.bind(store)} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)}/>
		</BrowserRouter>, document.getElementById('root'));


}
debugger;
reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


