

import {usersAPI} from '../dal/API.js'

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SETPAGE = "SETPAGE";
const SETCOUNT = "SETCOUNT";
const SETPRELOADER = "SETPRELOADER";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";


let initialState = {



	users: [ ],
	page: 1,
	totalCounter: 0,
	pageSize: 15,
	preloader: false,
	followingInProgress: []
}
		

let updateObjectInArrey = (items,propsName,itemId,newObjProps)=>{

	return items.map( user => {

		if(user[propsName] === itemId){

			return{...user,...newObjProps}
		}

		return user
	})
}



let reduserUsers = (state = initialState, action)=>{
	
		switch(action.type){
		
		case FOLLOW : 

			return{

				...state,
				users: updateObjectInArrey(state.users,"id",action.userId,{followed:true})

			}
			
		case UNFOLLOW :
			return {
				...state,
				users:  updateObjectInArrey(state.users,"id",action.userId,{followed:false})

			}
			
		case SETUSERS:
			return {...state, users: action.newUser}

		case SETPAGE:
			return {...state, page: action.page}


		case SETCOUNT:
		    return {...state, totalCounter: action.totalCounter}

		case SETPRELOADER:
		    return {...state, preloader: action.setPreloader}

		case FOLLOWING_IN_PROGRESS:

		    return {...state, followingInProgress: action.isfetching ? [...state.followingInProgress, action.id]
		                                                                : state.followingInProgress.filter( id => id != action.id) }
	
		default: 
		    return state


		}

}

export default reduserUsers;

export const followSuccess = userId => ({type: FOLLOW, userId });
export const unfollowSuccess = userId => ({type: UNFOLLOW, userId });
export const setUsers = newUser => ({type: SETUSERS, newUser });
export const setPage = page => ({type: SETPAGE, page });
export const setTotalCounter = totalCounter => ({type: SETCOUNT, totalCounter});
export const setPreloader = setPreloader => ({type: SETPRELOADER, setPreloader});
export const setfollowingInProgress = (id,isfetching) => ({type: FOLLOWING_IN_PROGRESS, id, isfetching});


export let getUsers = (page,pageSize) =>{
	
	 return async (dispatch)=>{

			dispatch(setPreloader(true));
			dispatch(setPage(page))

		let data = await usersAPI.getUsers(page, pageSize)
			
                  dispatch(setUsers(data.items));
                  dispatch(setTotalCounter(data.totalCount));
                  dispatch(setPreloader(false))
				
			}
	}



let folowUnFolowUsers = async (dispatch,apiMethod,followCreator,id)=>{

	  let data = await apiMethod(id)
				
					if(data.resultCode === 0){
			           dispatch(followCreator(id))
				       dispatch(setfollowingInProgress(id, false))	
					

		    }

}





export let unFollow = (id) =>{

	return async (dispatch)=>{


	dispatch(setfollowingInProgress(id, true));

	folowUnFolowUsers(dispatch,usersAPI.unFollowUsers.bind(usersAPI),unfollowSuccess,id)
	}
}
export let followToUser = (id) =>{

	return async (dispatch)=>{


	dispatch(setfollowingInProgress(id, true));

    folowUnFolowUsers(dispatch,usersAPI.followUsers.bind(usersAPI),followSuccess,id)
		  
	}
}

