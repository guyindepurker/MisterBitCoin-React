
import React, { Component } from 'react'
import {userService } from '../../services/UserService'
import {bitcoinService} from '../../services/BitcoinService'
import './HomePage.scss'

export class HomePage extends Component {
    state={
        user:null,
        bitcoinRate:null
    }
    componentDidMount(){
        this.loadUser()
    }
    loadUser(){
        const user =  userService.getUser()
        this.setState({user},()=>this.loadRate(user.coins))
    }
    async loadRate(coins){
        const rate = await bitcoinService.getRate(coins)
        this.setState({bitcoinRate:rate})
    }
    
    render() {
        const {bitcoinRate,user} = this.state
        if(!user) return <div>Loading....</div>
        return (
            <section className="home-page flex column wrap align-center justify-center ">
                <h1>Hello , {user.name}</h1>
                <p>You Have Total {user.coins} Coins </p>
                <h5>The Bitcoin rate of your coins is {user.coins*bitcoinRate}</h5>
                <h5>The Bitcoin rate today is {bitcoinRate/user.coins}</h5>
            </section>
        )
    }
}

