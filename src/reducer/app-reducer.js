
import {setUserData} from './reducer-header.js'

const IS_INITIALIZATION = 'IS_INITIALIZATION';




let initialState = {
			
					isInitialization: false
}
let appReduser = (state = initialState,action)=>{
	

	switch(action.type){
		
		case IS_INITIALIZATION:
					return{
						...state,
						isInitialization: true
					}


	default: return state
	}


}

const appActionCreater = () => ({type:IS_INITIALIZATION})

export default appReduser  ;



export const initialization = () => dispatch =>{

	let promise = dispatch(setUserData());
	
	Promise.all([promise])
		.then (()=>{
			dispatch(appActionCreater());
		})

	

}
