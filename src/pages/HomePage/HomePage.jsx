
import React, { Component } from 'react'
import { bitcoinService } from '../../services/BitcoinService'
import './HomePage.scss'
import { connect } from 'react-redux';
import MoveList from '../../cmps/MoveList/MoveList';
class _HomePage extends Component {
    state = {
        bitcoinRate: null
    }
    componentDidMount() {
        this.loadRate()
    }
    loadRate = async (coins) => {
        const rate = await bitcoinService.getRate(coins)
        this.setState({ bitcoinRate: rate })
    }
    get lastMoves() {
        const { user } = this.props
        const lastMoves = user.moves.slice(0, 3)
        return lastMoves
    }

    render() {
        const { bitcoinRate } = this.state
        const { user } = this.props
        if (!bitcoinRate) return <div>
            <h1>Loading Rate</h1>
        </div>
        return (
            <section className="home-page flex column wrap align-center justify-center ">
                <h1>Hello , {user.name}</h1>
                <p className="flex align-center"><img src="./icons/coins.png" /> You Have Total {user.coins} Coins </p>
                <p><img src="./icons/bitcoin.png" />The Bitcoin rate today is {bitcoinRate}</p>
                <div className="last-moves">
                    <MoveList title="Your Last Moves" movesList={this.lastMoves} />
                </div>
            </section>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.userReducer.currUser
    }
}

export const HomePage = connect(mapStateToProps, null)(_HomePage)
