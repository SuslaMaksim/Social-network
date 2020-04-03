
import {usersAPI} from '../dal/API'
import {UserType} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store/store";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SETPAGE = "SETPAGE";
const SETCOUNT = "SETCOUNT";
const SETPRELOADER = "SETPRELOADER";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";


let initialState = {
    users: [ ] as Array<UserType>,
    page: 1,
    totalCounter: 0,
    pageSize: 15,
    preloader: false,
    followingInProgress: [] as Array<number> // array of users id
}

type initialStateType = typeof initialState;


let updateObjectInArrey = (items:any,propsName:any,itemId:any,newObjProps:any)=>{

    return items.map( (user:any) => {

        if(user[propsName] === itemId){

            return{...user,...newObjProps}
        }

        return user
    })
}



let reduserUsers = (state = initialState, action:ActionTypes):initialStateType=>{

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
            return {...state, users: action.newUsers}

        case SETPAGE:
            return {...state, page: action.page}


        case SETCOUNT:
            return {...state, totalCounter: action.totalCounter}

        case SETPRELOADER:
            return {...state, preloader: action.setPreloader}

        case FOLLOWING_IN_PROGRESS:

            return {...state, followingInProgress: action.isfetching ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter( id => id !== action.id) }

        default:
            return state


    }

}

export default reduserUsers;


type ActionTypes = followSuccessType | unfollowSuccessType | setUsersType | setPage | setTotalCounterType | setPreloaderType | setfollowingInProgress

type followSuccessType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (userId:number):followSuccessType => ({type: FOLLOW, userId });
type unfollowSuccessType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (userId:number):unfollowSuccessType => ({type: UNFOLLOW, userId });
type setUsersType = {
    type: typeof SETUSERS,
    newUsers: Array<UserType>
}
export const setUsers = (newUsers: Array<UserType>):setUsersType => ({type: SETUSERS, newUsers });
type setPage = {
    type: typeof SETPAGE,
    page: number

}
export const setPage = (page:number):setPage => ({type: SETPAGE, page });
type setTotalCounterType = {
    type: typeof SETCOUNT,
    totalCounter: number
}
export const setTotalCounter = (totalCounter:number):setTotalCounterType => ({type: SETCOUNT, totalCounter});
type setPreloaderType = {
    type: typeof SETPRELOADER,
    setPreloader: boolean
}
export const setPreloader = (setPreloader:boolean):setPreloaderType => ({type: SETPRELOADER, setPreloader});
type setfollowingInProgress = {
    type: typeof FOLLOWING_IN_PROGRESS,
    id: number,
    isfetching: boolean
}
export const setfollowingInProgress = (id:number,isfetching:boolean):setfollowingInProgress => ({type: FOLLOWING_IN_PROGRESS, id, isfetching});


type ThunkActionType = ThunkAction<Promise<void>,AppStateType,unknown,ActionTypes>
type DispatchType = Dispatch<ActionTypes>

//helper fo Follov Anfollov
let _folowUnFolowUsers = async (dispatch:DispatchType,apiMethod:any,followCreator:(id:number)=>followSuccessType| unfollowSuccessType ,id:number)=>{
    let data = await apiMethod(id)
    if(data.resultCode === 0){
        dispatch(followCreator(id))
        dispatch(setfollowingInProgress(id, false))
    }
}

///started Thank

export let getUsers = (page:number,pageSize:number):ThunkActionType =>async (dispatch,getState)=>{

        dispatch(setPreloader(true));
        dispatch(setPage(page))

        let data = await usersAPI.getUsers(page, pageSize)

        dispatch(setUsers(data.items));
        dispatch(setTotalCounter(data.totalCount));
        dispatch(setPreloader(false))

    }


export let unFollow = (id:number):ThunkActionType =>{

    return async (dispatch:any)=>{

        dispatch(setfollowingInProgress(id, true));
        _folowUnFolowUsers(dispatch,usersAPI.unFollowUsers.bind(usersAPI),unfollowSuccess,id)
    }
}
export let followToUser = (id:number):ThunkActionType =>{

    return async (dispatch:any)=>{


        dispatch(setfollowingInProgress(id, true));

        _folowUnFolowUsers(dispatch,usersAPI.followUsers.bind(usersAPI),followSuccess,id)

    }
}

