import React from 'react';
import css from './Massage.module.css';
import Link from './Link.js';
import Message from './Message.js';
import {Field,reduxForm,reset} from 'redux-form';
import {TextArea} from '../Commons/FormControls.js';




const Messages = (props) => {
	const links = props.content.members.map( link=> <Link key={link.id}  id={link.id} name={link.name}/>);
    const messages = props.content.penfriendUser.messages.map( message => <Message message = {message} key = {message} />);

  

  let addMessage = (formData,dispatch)=>{
    props.addPost(formData.addMessage,props.content.penfriendUser.id);
    dispatch(reset("addMessage"))


  
  }


  return (
          
        
        <div className={css.messenger_container} >

            <div className={css.messenger_penFriends}>
                <div className={css.messenger_profile}>
                </div>
					     {links}
            </div>

             <div className={css.messenger_letterSpace}>

                 <div className={css.messenger_messages}>
                     {messages}
                 </div>



                 <AddMessageForm onSubmit ={ addMessage } />


             </div>


            
        </div>
  );
};


export default Messages;




let AddMessage = (props)=>{


return(
        <div className={css.form_container}>

              <form onSubmit = {props.handleSubmit(props.onSubmit)} className={css.messenger_form}>

                <Field name={"addMessage"} component = {TextArea} placeholder ={'Add new massege'} validate = {[]}/>

                <button className={css.messenger_button} > Add Post</button>
              </form>

        </div>




)
  
}


const  AddMessageForm = reduxForm({form:"addMessage"})(AddMessage);

