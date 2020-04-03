import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation';
import ContainerProfile from './components/Profile/ProfileConteiner';
import ContainerMasseges from './components/Massage/ContainerMasseges';
import ContainerAddUsers from './components/AddUsers/ContainerAddUsers';
import LoginPage from './components/Login/LoginPage';
import {Route,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {initialization} from './reducer/app-reducer';
import Preloader from './components/AddUsers/Preloader';
import {compose} from 'redux';



class App extends React.Component {

  componentDidMount(){
    this.props.initialization();
  }

  render(){
        if(!this.props.isInitialization){
            return <div className='preloaderContainer'><Preloader/></div>
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
