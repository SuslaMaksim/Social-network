import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navigation from './components/Navigation';
import ContainerProfile from './components/Profile/ProfileConteiner.js';
import ContainerMasseges from './components/Massage/ContainerMasseges.js';
import ContainerAddUsers from './components/AddUsers/ContainerAddUsers.js';
import LoginPage from './components/Login/LoginPage.js';
import {Route,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {initialization} from './reducer/app-reducer.js';
import Preloader from './components/AddUsers/Preloader.js';
import {compose} from 'redux';



class App extends React.Component {

  componentDidMount(){
    this.props.initialization();
  }

  render(){

    if(!this.props.isInitialization){
      return <Preloader/>
        
    }

  return (
 
 
      
      
      <div className="app-wrapper">


          <HeaderContainer/>
          <Navigation/>

          <div className="contant">
            <Route  path='/message/:friendID?' render={ ()=> <ContainerMasseges />}/>
            <Route path='/contant/:userID?' render ={ ()=> <ContainerProfile/>}/>
            <Route path='/addusers' render  ={ ()=> <ContainerAddUsers />}/>           
            <Route path='/login' render  ={ ()=> <LoginPage />}/>
            
          </div>
          
      </div>
   
  );




  }
};

let mapStateToProps = state => {

  return{
    isInitialization: state.app.isInitialization
  }
}

export default compose(
withRouter,
connect(mapStateToProps,{initialization})
)(App)
