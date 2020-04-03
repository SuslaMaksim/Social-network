
type friend = {
	name: string
}
let initialState = {

	friends:[
				{name: 'max'},
				{name: 'Kolya'},
				{name: 'Dymitch'},
			] as Array<friend>
}

type initialStateType = typeof initialState;

let reduserSidebar = (state = initialState,action:any):initialStateType=> {
	
return state;

}


export default reduserSidebar  ;
