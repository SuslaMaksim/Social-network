import React from 'react';
import img from '../img/2.jpg';
import Post from './Post.js';
import {Field,reduxForm,reset} from 'redux-form';
import {TextArea} from './Commons/FormControls.js';
import {required,maxLengthCreator} from '../validator/validator.js';
import css from './Posts.module.css'


const Content = (props) => {

let membersPosts = props.posts.messages.map( post => <Post key={post.id} message = {post.message}/> )


let addPost = (dataForm,dispatch)=>{
   props.addMessage(dataForm.newMessage);
   dispatch(reset('addPostForm'))


}

  return (
          
        
        <div  className={css.posts_container}>
          <div className={css.posts}>
            <div>
                <AddPostForm onSubmit = {addPost}/>
            </div>
          	 {membersPosts}
          </div>
            
        </div>
  );
};



export default Content;


let AddPost = (props)=>{

return(
          <form onSubmit = {props.handleSubmit(props.onSubmit)} className={css.form}>
    
              <Field name={'newMessage'} component = {TextArea} placeholder ={'Enter some Posts'} validate = {[required]} />
              <div className={css.form_button}>
                  <button > Add Post</button>
              </div>



           </form>



)

}

const AddPostForm = reduxForm({form:'addPostForm'})(AddPost)