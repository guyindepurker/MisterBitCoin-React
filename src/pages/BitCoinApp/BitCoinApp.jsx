
import React, { Component } from 'react'
import './BitCoinApp.scss'
import HomePage from '../HomePage/';
import StaticPage from '../StaticPage/';
import ContactPage from '../ContactPage/';
class BitCoinApp extends Component {
state ={
    isStaticShown:false
}
toggleStatic = () =>{
this.setState({isStaticShown:!this.state.isStaticShown})
}
    render() {
        const {isStaticShown} = this.state
        return (
            <section className="bitcoin-app">
                <nav className="nav-bar">
                    <button onClick={this.toggleStatic}>Show Static</button>
                </nav>
                
               <HomePage />
               {!isStaticShown&&<ContactPage />}
              {isStaticShown &&  <StaticPage />}
            </section>
        )
    }
}

export default BitCoinApp
