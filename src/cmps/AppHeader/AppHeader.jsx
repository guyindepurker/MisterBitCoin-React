
import {NavLink} from 'react-router-dom'
import './AppHeader.scss'

export  function AppHeader(){
    return (
        <nav className="app-header-nav clean-list flex space-between align-center">
            <div className="logo-container">
            <NavLink exact activeClassName="curr-page" to="/"><img className="img-icon" src="./icons/home.png" alt="home" /> </NavLink>
            </div>
            <div className="btn-controls">
            <NavLink  exact to="/contact"><img className="img-icon" src="./icons/users.png" alt="users" /> </NavLink>
            <NavLink   to="/static"><img className="img-icon" src="./icons/increase.png" alt="statics" /> </NavLink>
            </div>
        </nav>
    )
}

