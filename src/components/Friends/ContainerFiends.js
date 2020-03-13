
import Friends from './Friends.js';
import {connect} from 'react-redux';



const mapStateToProps = (state)=>{


	return {
		friends: state.sidebar.friends

	}
};



const ContainerFriends = connect(mapStateToProps)(Friends)

export default ContainerFriends;
