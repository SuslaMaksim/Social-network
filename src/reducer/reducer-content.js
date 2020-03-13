import {usersAPI,profileAPI} from '../dal/API.js';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_PENFRIEND_USER = 'SET_PENFRIEND_USER';

let initialState = {

	
				members: [
				{id: 1,name: 'max',messages: ['hi',"how Are you?", "ok",'will you work tommorow?']},
				{id: 2,name: 'Kolya',messages: ['heloo',"this is nikoly?", "waaw",'will you work ?']},
				{id: 3,name: 'Dymitch',messages: ['privet',"how Are you?", "ok",'will you work tommorow?']},
				{id: 4,name: 'Oleg',messages: ['kcool',"how Are you?", "ok",'will you work tommorow?']},
				{id: 5,name: 'Seva',messages: ['interesting',"how Are you?", "ok",'will you work tommorow?']}
			    ],
                penfriendUser: {},

			    profile: null,
			    status: ''
        	
}

let reducerContent = (state = initialState,action)=>{

	switch(action.type){

	
		case ADD_POST:

			return {

				...state,
				members: [...state.members.map(item => {
					if(item.id == action.id) {
						return {...item, messages:[...item.messages,action.newMessage]}
					}else{
						return {...item}
					}
				})]

			}
		case SET_PENFRIEND_USER:
            return {
                ...state,
                penfriendUser: {...state.members.find((item)=>item.id == action.id)}
            }

		case SET_PROFILE: 

				return{
					...state,
					profile: action.profile
				}
		case SET_STATUS: 

				return{
					...state,
					status: action.status
				}
		case SET_PHOTOS: 


				return{
					...state,
					profile: {...state.profile, photos: action.photos}
				}

			

		default:
			return state;
	}
}

export default reducerContent;


let addPostActionCreator = (newMessage,id)=>  ({ type : ADD_POST, newMessage,id});
let setProfileInReduser = profile => ({ type: SET_PROFILE,profile});
export let setPenfriendUser = id => ({ type: SET_PENFRIEND_USER, id});
let setStatus = status => ({ type: SET_STATUS,status});
let setPhotos = photos => ({type: SET_PHOTOS,photos})




export let addPost = (messageText,userID) => dispatch =>{

	dispatch(addPostActionCreator(messageText,userID));
	dispatch(setPenfriendUser(userID))

}

export let setProfile = (userID)=>{
	
	return dispatch => {
			
			usersAPI.getProfile(userID)
					.then(data => dispatch(setProfileInReduser(data)) )



	};


}


export let getStatus = (userID)=>{

				

	return dispatch =>{

			profileAPI.getStatus(userID)
						.then( data => dispatch(setStatus(data)))
						
						}

	}
export let updateStatus = (status) =>{

	return dispatch =>{

			profileAPI.setStatus(status)
						.then(data => {


							if(data.resultCode === 0){
								
								dispatch(setStatus(status))
							}
						})
	}
}

export let savePhoto = (photo) => async(dispatch)=>{



		let data = await profileAPI.savePhoto(photo);

		       if(data.resultCode === 0){

						dispatch(setPhotos(data.data.photos))
				}
		

}

export let updateDataUser = (file) => async (dispatch,getState)=>{


		let userId = getState().header.UserId;
		let response = await profileAPI.saveDataUser(file)

		
				
				if(response.resultCode === 0){
						dispatch(setProfile(userId))
				}
				else{
					let messageError = response.messages.length > 0 ? response.messages[0] : 'Email or password is wrong';
					dispatch(stopSubmit('dataFormEdit',{_error: messageError}));
					return Promise.reject(messageError);

				}


			

		       
		

}