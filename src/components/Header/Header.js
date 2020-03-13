import React from 'react';
import logo from '../../img/1.png';
import {NavLink} from 'react-router-dom';
import H from './Header.module.css'

const Header = (props) => {
  return (

        <header className={H.header_container}>
            <div className={H.header}>
                <div className={H.header_logo}>

                </div>

                <div className={H.login}>
                    {

                        props.isAuth ? <div className={H.header_login}>{props.login}<button onClick={props.logout} className={H.link_logout}>Logout</button> </div> : <NavLink className={H.link_login} to={"/login"}> Login </NavLink>

                    }


                </div>



            </div>
        </header>

  );

};



export default Header;
