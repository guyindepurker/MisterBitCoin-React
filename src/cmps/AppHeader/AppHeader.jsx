
import {NavLink} from 'react-router-dom'
import './AppHeader.scss'
import { connect } from 'react-redux';
import {doLogout} from '../../store/actions/userActions'
 function _AppHeader(props){
    return (
        <nav className="app-header-nav">
          <div className="main-nav container flex space-between align-center">
            <div className="logo-container">
            <NavLink exact activeClassName="curr-page" to="/"><img className="img-icon" src="./icons/home.png" alt="home" /> </NavLink>
            </div>
            <div className="btn-controls flex align-center">
            <NavLink  exact to="/contact"><img className="img-icon" src="./icons/users.png" alt="users" /> </NavLink>
            <NavLink   to="/static"><img className="img-icon" src="./icons/increase.png" alt="statics" /> </NavLink>
            {props.user&&<button onClick={props.doLogout} className="logout">Logout</button>}
            </div>
            </div>
        </nav>
    )
}
function mapStateToProps(state) {
    return {
      user: state.userReducer.currUser
    }
  }
  const mapDispatchToProps = {
    doLogout,

  }
  
  export const AppHeader = connect(mapStateToProps,mapDispatchToProps)(_AppHeader);
