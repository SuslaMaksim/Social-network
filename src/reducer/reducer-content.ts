import {usersAPI,profileAPI} from '../dal/API';
import {stopSubmit} from 'redux-form';
import {PhotosType, profileUserType, userMessageType} from "./types/types";
import {AppStateType} from "../store/store";
import {ThunkAction} from "redux-thunk";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_PENFRIEND_USER = 'SET_PENFRIEND_USER';


let initialState = {

	
				members: [
				{id: 1,name: "sssss",messages: ['hi',"how Are you?", "ok",'will you work tommorow?']},
				{id: 2,name: 'Kolya',messages: ['heloo',"this is nikoly?", "waaw",'will you work ?']},
				{id: 3,name: 'Dymitch',messages: ['privet',"how Are you?", "ok",'will you work tommorow?']},
				{id: 4,name: 'Oleg',messages: ['kcool',"how Are you?", "ok",'will you work tommorow?']},
				{id: 5,name: 'Seva',messages: ['interesting',"how Are you?", "ok",'will you work tommorow?']}
			    ] as Array<userMessageType>,
                penfriendUser: {},

			    profile: null as null | profileUserType,
			    status: ''
        	
}
export type initialStateType = typeof initialState;
let reducerContent = (state = initialState,action:ActionTypes):initialStateType =>{

	switch(action.type){

	
		case ADD_POST:

			return {

				...state,
				members: [...state.members.map(item => {
					if(item.id === action.id) {
						return {...item, messages:[...item.messages,action.newMessage]}
					}else{
						return {...item}
					}
				})]

			}
		case SET_PENFRIEND_USER:
            return {
                ...state,
                penfriendUser: {...state.members.find((item)=>item.id === action.id)}
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
					profile: {...state.profile, photos: action.photos}as profileUserType
				}

			

		default:
			return state;
	}
}

export default reducerContent;


//actionCreators

type addPostActionCreatorType = {
	type: typeof ADD_POST,
	newMessage: string,
	id: number
}
let addPostActionCreator = (newMessage:string,id:number):addPostActionCreatorType =>  ({ type : ADD_POST, newMessage,id});
type setProfileInReduserType = {
	type: typeof SET_PROFILE,
	profile: profileUserType
}
let setProfileInReduser = (profile:profileUserType):setProfileInReduserType => ({ type: SET_PROFILE,profile});
type setPenfriendUserType = {
	type: typeof SET_PENFRIEND_USER,
	id: number
}
export let setPenfriendUser = (id:number):setPenfriendUserType => ({ type: SET_PENFRIEND_USER, id});
type setStatusType = {
	type: typeof SET_STATUS,
	status: string
}
let setStatus = (status:string):setStatusType => ({ type: SET_STATUS,status});
type setPhotosType = {
	type: typeof SET_PHOTOS,
	photos: PhotosType
}
let setPhotos = (photos:PhotosType):setPhotosType => ({type: SET_PHOTOS,photos})



type ActionTypes = setPhotosType | setStatusType | setPenfriendUserType | setProfileInReduserType | addPostActionCreatorType

type ThunkTypes = ThunkAction<Promise<void>,AppStateType,unknown,ActionTypes>
//started thank

export let addPost = (messageText:string,userID:number):ThunkAction<void,AppStateType,unknown,ActionTypes>=> (dispatch) =>{

	dispatch(addPostActionCreator(messageText,userID));
	dispatch(setPenfriendUser(userID))

}

export let setProfile = (userID:number):ThunkAction<void,AppStateType,unknown,ActionTypes>=>{
	
	return (dispatch) => {
			
			usersAPI.getProfile(userID)
					.then((data:any) => dispatch(setProfileInReduser(data)) )

	};

}


export let getStatus = (userID:number):ThunkAction<void,AppStateType,unknown,ActionTypes>=>{

	return (dispatch) =>{

			profileAPI.getStatus(userID)
						.then( (data:any) => dispatch(setStatus(data)))
						
						}

	}
export let updateStatus = (status:string):ThunkAction<void,AppStateType,unknown,ActionTypes> =>{

	return (dispatch) =>{

			profileAPI.setStatus(status)
						.then((data:any) => {


							if(data.resultCode === 0){
								
								dispatch(setStatus(status))
							}
						})
	}
}

export let savePhoto = (photo:string):ThunkTypes => async(dispatch)=>{
		let data = await profileAPI.savePhoto(photo);

		       if(data.resultCode === 0){

						dispatch(setPhotos(data.data.photos))
				}
}

export let updateDataUser = (file:any) => async (dispatch:any,getState:any)=>{

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