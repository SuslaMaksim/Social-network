import React from 'react';
import profile from "./Profile.module.css";
import logo from "../../img/user.png";


let ContainerNotofications = (props) =>{



    return(

        <div className={profile.notifications_container}>
            <div className={profile.notification}>

                <h3 className={profile.notifications_header}>Recent Notifications</h3>
                <div className={profile.notification_body}>
                    <div className={profile.notification_logo_container}><img className={profile.notification_logo} src={logo} alt="photo"/></div>
                    <div className={profile.notification_logo_sobscribe}>
                        <p className={profile.notification_text}>Any from us will be happy</p>
                        <span className={profile.notification_time}>2min ago</span>

                    </div>
                </div>
            </div>

            <div className={profile.friendZone}>

                <h3 className={profile.friendZone_header}>Friend Zone</h3>
                <div className={profile.friendZone_body}>
                    <div className={profile.friendZone_logo_container}><img className={profile.notification_logo} src={logo} alt="photo"/></div>
                    <div className={profile.friendZone_logo_sobscribe}>
                        <p className={profile.friendZone_name}>Albert Vorkutincscy</p>
                        <span className={profile.friendZone_time}>2min ago</span>

                    </div>

                </div>

            </div>


        </div>
    )


}

export default ContainerNotofications;