import React from 'react';
import {NavLink} from 'react-router-dom';
import ContainerFriends from './Friends/ContainerFiends.js';
import nav from './Nav.module.css';
import background from '../img/nathure.jpg';



const Navigation = () => {
    const divStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + background + ')'
    };

  return (
  	<div className={nav.navigation_container}>

        <div className={nav.banner_container} style={divStyle}>


        </div>
        <div className={nav.navigation_links_container}>
            <div className={nav.navigation}>
                <nav className={nav.navigation_links}>
                  <NavLink to='/contant' activeClassName={nav.active} className={nav.navigation_link}>Profile</NavLink>
                  <NavLink to='/message' activeClassName={nav.active}  className={nav.navigation_link}>Message</NavLink>
                  <NavLink to='/addusers' activeClassName={nav.active} className={nav.navigation_link}>Add users</NavLink><a href='#' className={nav.navigation_link}>News</a>
                  <a href='#' className={nav.navigation_link}>Music</a>
                  <a href='#' className={nav.navigation_link}>Settings</a>

                </nav>
            </div>
        </div>

     </div>
  );
};



export default Navigation;
