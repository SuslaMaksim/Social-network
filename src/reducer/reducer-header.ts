import {auth, ResultCodesEnum, ResultCodesEnumFoCaptcha} from '../dal/API';
import {stopSubmit} from 'redux-form';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store/store";

const AUTH_ME = 'AUTH_ME';
const GET_CAPTCHA = "GET_CAPTCHA";




let initialState  = {
    UserId: null as null | number,
    login: null as null | string,
    email: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string
}

export type initialStateType = typeof initialState;

let reduserSidebar = (state = initialState, action:ActionTypes): initialStateType => {

    switch (action.type) {

        case AUTH_ME:

            return {
                ...state,
                ...action.data

            }
        case GET_CAPTCHA:

            return {
                ...state,
                ...action.payload

            }

        default:
            return state


    }


}
type dataType = {
    UserId: null | number,
    login: null | string,
    email: null | string,
    isAuth: false | boolean,
    captchaUrl: null | string
}

type getUserDataType = {
    type: typeof AUTH_ME,
    data: dataType
}

export const getUserData = (UserId:number|null, login:string|null, email:string|null, isAuth:boolean|false, captchaUrl:string|null):getUserDataType  => ({
    type: AUTH_ME,
    data: {UserId, login, email, isAuth, captchaUrl}
});

type payloadType = {
    captchaUrl: string | null
}
type getCaptchaSuccesType = {
    type: typeof GET_CAPTCHA,
    payload: payloadType
}
const getCaptchaSucces = (captchaUrl:string):getCaptchaSuccesType => ({type: GET_CAPTCHA, payload: {captchaUrl}});


export default reduserSidebar;


type ActionTypes = getCaptchaSuccesType| getUserDataType
type ThankActionType = ThunkAction<Promise<void>,AppStateType,unknown,ActionTypes >

export let setUserData = ():ThankActionType => async (dispatch) => {

    let data = await auth.me();

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = data.data;
        dispatch(getUserData(id, login, email, true,null))


    }

}


export let login = (email:string, password:string, rememberMe:boolean, captcha:string) => (dispatch:any) => {


    auth.login(email, password, rememberMe, captcha)

        .then((response) => {


            if (response.data.resultCode === ResultCodesEnum.Success) {
                dispatch(setUserData())

            } else {
                if (response.data.resultCode === ResultCodesEnumFoCaptcha.CaptchaIsRequired) {
                    dispatch(getCaptcha())
                }
                let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Email or password is wrong';
                dispatch(stopSubmit('login', {_error: messageError}));


            }


        })


}

export let logout = ():ThankActionType => async (dispatch:any) => {


    let response = await auth.logout()

    if (response.data.resultCode === 0) {
        dispatch(getUserData(null, null, null, false, null))


    }

}

export let getCaptcha = ():ThankActionType => async (dispatch:any) => {


    let response = await auth.getCaptcha()


    dispatch(getCaptchaSucces(response.data.url))


}


