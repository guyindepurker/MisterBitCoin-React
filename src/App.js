import './styles/_styles.scss';
import  { Component } from 'react'

import { HashRouter as Router, Redirect,Route, Switch } from 'react-router-dom'
import {AppHeader} from './cmps/AppHeader/';
import {HomePage} from './pages/HomePage/HomePage';
import {ContactPage} from './pages/ContactPage/';
import {ContactDetailsPage} from './pages/ContactDetailsPage';
import {ContactEdit} from './pages/ContactEdit/';
import {StaticPage} from './pages/StaticPage/';
import { Signup } from './pages/Signup';
import { connect } from 'react-redux';

class _App extends Component  {
  render(){
    const {user} = this.props
    const PrivateRoute = (props) => {
      return user ? <Route { ...props } /> : <Redirect to="/signup" />
    }
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <PrivateRoute path="/contact/edit/:id?" component={ContactEdit} /> 
          <PrivateRoute path="/contact/:id" component={ContactDetailsPage} /> 
          <PrivateRoute path="/contact" component={ContactPage} /> 
          <PrivateRoute path="/static" component={StaticPage} /> 
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/" component={HomePage} /> 
        </Switch>
      </Router>
    </div>
  );
}

}
function mapStateToProps(state) {
  return {
    user: state.userReducer.currUser
  }
}
export const App = connect(mapStateToProps)(_App);

