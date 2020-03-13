import {addMessage,deleteMessage} from './reducer-posts.js';
import reduserPost from './reducer-posts.js';

let state = {

	 messages: [
		       {id: 1 ,message: 'Hi'},
               {id: 2 ,message: 'Hello'},
               {id: 3 ,message: 'how Are you'},
               {id: 4 , message: 'react'},
               {id: 5 ,message: 'you super'}
			   ]
			  
}


it('length should be increvented', () => {


let action = addMessage('susla maksim')


let posts = reduserPost(state , action);


expect(posts.messages.length).toBe(6)
 

});

it('post 6 should be calls  - susla maksim', () => {


let action = addMessage('susla maksim')


let posts = reduserPost(state , action);


expect(posts.messages[5].message).toBe('susla maksim')
 

});

it('deleted post on id', () => {


let action = deleteMessage(1);

let posts = reduserPost(state , action);

expect(posts.messages.length).toBe(4)




});