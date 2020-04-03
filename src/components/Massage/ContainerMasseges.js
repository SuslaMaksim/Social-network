import React from 'react';
import Messages from './Massages.js';
import {connect} from 'react-redux';
import {addPost,setPenfriendUser} from '../../reducer/reducer-content';
import {withAuthRedirect} from '../Hoc/Hoc.js';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

class ContainerMasseges extends React.Component{


    componentDidMount() {

        if(this.props.match.params.friendID){
            this.props.setPenfriendUser(Number(this.props.match.params.friendID))
        }else{
            this.props.setPenfriendUser(1)
            this.props.history.push(`/message/1`);
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.match.params.friendID !== prevProps.match.params.friendID){
            this.props.setPenfriendUser(Number(this.props.match.params.friendID))
        }
    }

    render() {

        if(!this.props.content.penfriendUser.messages){
            return <div>Таких Друзей у вас нет пока
             </div>
        }
        return(

                <Messages content = {this.props.content} addPost={this.props.addPost}/>
            )
    }


}

let mapStateToProps = state => {

return{

    content: state.content


}

}


export default compose(connect(mapStateToProps, {addPost,setPenfriendUser}),
    withAuthRedirect,
    withRouter
)(ContainerMasseges )
