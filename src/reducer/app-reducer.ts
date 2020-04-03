import {setUserData} from './reducer-header'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store/store";

const IS_INITIALIZATION = 'IS_INITIALIZATION';


export type initialStateType = {
    isInitialization: boolean
}

let initialState: initialStateType = {
    isInitialization: false
}


let appReducer = (state = initialState, action: ActionTypes): initialStateType => {


    switch (action.type) {

        case IS_INITIALIZATION:
            return {
                ...state,
                isInitialization: true


            }


        default:
            return state
    }

}
export default appReducer;

type appActionCreaterType = {
    type: typeof IS_INITIALIZATION
}
const appActionCreater = (): appActionCreaterType => ({type: IS_INITIALIZATION})

type ActionTypes = appActionCreaterType;

export const initialization =():ThunkAction<void,AppStateType,unknown,ActionTypes> => (dispatch) => {

    let promise = dispatch(setUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(appActionCreater());
        })


}
