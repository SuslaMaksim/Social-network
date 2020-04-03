const ADD_MESSAGE = 'ADD-MESSAGE';
const DELETE_MASSAGE = 'DELETE_MASSAGE';



type messageType = {
	id: number,
	message: String
}

let initialState = {

	 messages: [
		       {id: 1 ,message: 'Hi'},
               {id: 2 ,message: 'Hello'},
               {id: 3 ,message: 'how Are you'},
               {id: 4 , message: 'react'},
               {id: 5 ,message: 'you super'}
			   ] as Array<messageType>
			  
}
export type initialStateType = typeof initialState;
let reduserPost = (state = initialState,action:any):initialStateType=>{
	
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
type addMessageType = {
	type: typeof ADD_MESSAGE,
	message: string
}
export let addMessage = (message:string):addMessageType => ({ type: ADD_MESSAGE,message});
type deleteMessageType = {
	type: typeof DELETE_MASSAGE,
	id: number
}
export let deleteMessage = (id:number):deleteMessageType => ({ type: DELETE_MASSAGE,id})
