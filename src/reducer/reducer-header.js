 import {auth} from '../dal/API.js';
import {stopSubmit} from 'redux-form';

const AUTH_ME = 'AUTH_ME';
const GET_CAPTCHA = "GET_CAPTCHA";

let initialState = {

		UserId: null,
		login: null,
		email: null,
		isAuth: false,
		captchaUrl: null
}



let reduserSidebar = (state = initialState,action)=>{

	switch(action.type){

		case AUTH_ME:
		
		return {...state,
				...action.data
				
		}
		case GET_CAPTCHA:
		
		return {...state,
				...action.payload
				
		}

		default:
			return state
		



	}
	


}
export const getUserData = (UserId,login,email,isAuth,captchaUrl)=> ({type: AUTH_ME, data: {UserId,login,email,isAuth,captchaUrl}});
const getCaptchaSucces = (captchaUrl)=> ({type: GET_CAPTCHA,payload:{captchaUrl}});

export default reduserSidebar  ;

export let setUserData = ()=> async(dispatch)=> {

		let data = await auth.me();
			
				if(data.resultCode === 0){
				      let{id,login,email} = data.data;
					  dispatch(getUserData(id,login,email,true))
						
				
			}
	
}


export let login = (email,password,rememberMe,captcha) =>  (dispatch) =>{

	


	       auth.login(email,password,rememberMe,captcha)

	       	.then((response)=>{

				
	       		if(response.data.resultCode === 0){
						dispatch(setUserData())
						
				}

				else{
					if(response.data.resultCode === 10){
					         dispatch(getCaptcha())
					     }
					let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Email or password is wrong';
					dispatch(stopSubmit('login',{_error: messageError}));

				
			}
	



	       	})
			
				
}

export let logout = ()=> async (dispatch) =>{


		let response = await auth.logout()
			
				if(response.data.resultCode === 0){
						dispatch(getUserData(null,null,null,false,null))
						
				
			}
	
}

export let getCaptcha = ()=> async (dispatch) =>{

		
		let response = await auth.getCaptcha()
			
				
						dispatch(getCaptchaSucces(response.data.url))
				
				
			
		
}


