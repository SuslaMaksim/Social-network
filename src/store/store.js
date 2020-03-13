
import {combineReducers, createStore,applyMiddleware} from 'redux';

import reducerContent from '../reducer/reducer-content.js';
import reducerPosts from '../reducer/reducer-posts.js';
import reducerSidebar from '../reducer/reducer-sidebar.js';
import reducerUsers from '../reducer/reducer-addUsers.js';
import reducerHeader from '../reducer/reducer-header.js';
import reducerApp from '../reducer/app-reducer.js';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
	content: reducerContent,
	posts: reducerPosts,
	sidebar: reducerSidebar,
	addUsers: reducerUsers,
	header: reducerHeader,
	app: reducerApp,
	form: formReducer

})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
