let store = {
	_state: {
		profile: {
			postData: [
				{id:1, post: 'my first post', likesCount:0},
				{id:1, post: 'my two post', likesCount:123}
			],
			newPostText: "1341dasd"
		},
		messages: {
			DialogsData: [
				{id: 0, name: 'Vasya'},
				{id: 1, name: 'Alexander'},
				{id: 2, name: 'Ivan'}
			],
			MessagesData: [
			{id:0, message:'Hi, how are you'},
			{id:1, message:'Hi, cool'}
			],
			itemMessage:'message'
		},
		hightfriend: {
			friend: [
				{id: 0, name: 'Vasya'},
				{id: 1, name: 'Alexander'},
				{id: 2, name: 'Ivan'}
			]
		}
	},
	getState() {
		return (this._state);
	},

	_reRenderEntireTree() {		
	},

	addMessage () {
		let newMessage = {
			id: 5,
			message: this._state.messages.itemMessage	
		}
		this._state.messages.MessagesData.push(newMessage);
		this._state.messages.itemMessage = '';
		this._reRenderEntireTree();
	},

	addPost () {
		
		let newPost = {
			id: 5,
			post: this._state.profile.newPostText,
			likesCount: 5
		};
		this._state.profile.postData.push(newPost);
		this._state.profile.newPostText = '';
		this._reRenderEntireTree();
	},
	updateNewPost (newText) {
	
		this._state.profile.newPostText = newText;
		this._reRenderEntireTree();
		
	},
	updateNewMessage (newText) {
		
		this._state.messages.itemMessage = newText;
		this._reRenderEntireTree();
	},
	subscribe (observer) {
		this._reRenderEntireTree = observer;
	}
}

	

		




	

export default store;