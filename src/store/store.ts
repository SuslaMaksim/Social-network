
import {combineReducers, createStore,applyMiddleware} from 'redux';

import reducerContent from '../reducer/reducer-content';
import reducerPosts from '../reducer/reducer-posts';
import reducerSidebar from '../reducer/reducer-sidebar';
import reducerUsers from '../reducer/reducer-addUsers';
import reducerHeader from '../reducer/reducer-header';
import reducerApp from '../reducer/app-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let RootReducers = combineReducers({
	content: reducerContent,
	posts: reducerPosts,
	sidebar: reducerSidebar,
	addUsers: reducerUsers,
	header: reducerHeader,
	app: reducerApp,
	form: formReducer

})

type RootReduserType = typeof RootReducers
export type AppStateType = ReturnType<RootReduserType>


let store = createStore(RootReducers,applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store;


export default store;

