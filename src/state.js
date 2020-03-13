
import reducerContent from './reducer/reducer-content.js';
import reduserPost from './reducer/reducer-posts.js';


const store = {
		
		_state: {


			content: {
				members: [
				{id: 1,message: 'Hi',name: 'max'},
				{id: 2,message: 'Hello',name: 'Kolya'},
				{id: 3,message: 'how Are you',name: 'Dymitch'},
				{id: 4,message: 'react',name: 'Oleg'},
				{id: 5,message: 'you super',name: 'Seva'}
			    ],

			    postText: ' enter some text',
        	},
			posts: {
			   messages: [
		       {message: 'Hi'},
               {message: 'Hello'},
               {message: 'how Are you'},
               { message: 'react'},
               {message: 'you super'}
			   ],
			   messageText: 'enter some message'

			},
			
			sidebar: {
				friends:[
				{name: 'max'},
				{name: 'Kolya'},
				{name: 'Dymitch'},
			]
			

			}
			
			
		},

		getState(){
			return this._state;
		},

	    _render(){
	       console.log('hi');
        },

        observer(reRender){
	       this._render = reRender;
        },


     
		dispatch(action){
			this._state = reducerContent(this._state, action);
			this._state = reduserPost(this._state, action);
			this._render(this);
			

		}

	
       
	}




export default store;