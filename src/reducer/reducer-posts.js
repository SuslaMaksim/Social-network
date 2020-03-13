const ADD_MESSAGE = 'ADD-MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const DELETE_MASSAGE = 'DELETE_MASSAGE';

let initialState = {

	 messages: [
		       {id: 1 ,message: 'Hi'},
               {id: 2 ,message: 'Hello'},
               {id: 3 ,message: 'how Are you'},
               {id: 4 , message: 'react'},
               {id: 5 ,message: 'you super'}
			   ]
			  
}

let reduserPost = (state = initialState,action)=>{
	
	switch(action.type){

		case ADD_MESSAGE:

			let message = {
				id: 6,
				message : action.message
			}
			return {
				...state,
				messages: [...state.messages, message] 
              }
		

		case DELETE_MASSAGE:
						return{

							...state, messages: state.messages.filter( message => message.id != action.id)

						}


		default:
			return state;
	}


}


export default reduserPost;

export let addMessage = (message) => ({ type: ADD_MESSAGE,message});
export let deleteMessage = (id) => ({ type: DELETE_MASSAGE,id})
