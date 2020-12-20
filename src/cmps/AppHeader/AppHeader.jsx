
import {NavLink} from 'react-router-dom'
import './AppHeader.scss'

export  function AppHeader(){
    return (
        <nav className="app-header-nav clean-list">
            <NavLink exact activeClassName="curr-page" to="/">Home </NavLink>
            <NavLink  exact to="/contact">Contacts </NavLink>
            <NavLink   to="/static">Statistics </NavLink>
        </nav>
    )
}

