import React from 'react';
import user from '../img/user.png';
import css from './Posts.module.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';



const Post = (props) => {

  return ( 

    <div className={css.post_container}>
        <div className={css.post}>
            <div className={css.post_header_container}>
                <div className={css.post_header}>
                    <div className={css.post_header_photo}>
                     <img src={user} alt="user" className={css.userPhoto}/>
                    </div>
                    <div className={css.post_header_info} >
                        <span>Kate Palson</span>
                        <span>6 min ago</span>
                    </div>
                </div>

                <div>

                    <i className="fa fa-university" aria-hidden="true"></i>
                </div>
            </div>
            <div className={css.post_body}>
                <div className={css.post_body_message}>
                    <p>{props.message}</p>

                </div>
                <div className={css.post_body_img}>

                </div>

            </div>
            <div className={css.post_footer}>
                <div className={css.post_footer_information}>
                    <span className={css.icon}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </span>
                    <span>You and 207 people like this</span>

                </div>
                <div className={css.post_footer_info}>
                    <span>41 like</span>
                    <span>07 repost</span>
                </div>

            </div>
        </div>
    </div>
        
  );
};



export default Post;
