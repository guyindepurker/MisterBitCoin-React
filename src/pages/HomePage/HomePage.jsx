
import React, { Component } from 'react'
import { bitcoinService } from '../../services/BitcoinService'
import './HomePage.scss'
import { connect } from 'react-redux';
import MoveList from '../../cmps/MoveList/MoveList';
import ApexChart from '../../cmps/ApexChart/ApexChart';
import Converter from '../../cmps/Converter/Converter';
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
    get moneyBitcoin() {
        const { bitcoinRate } = this.state
        const { user } = this.props
        return bitcoinRate * user.coins
    }
    get movesChart() {
        const { user } = this.props
        if (user.moves.length < 0) return false
        const moves = {
            xaxis: user.moves.map(move => move.at),
            yaxis: user.moves.map(move => move.amount)
        }
        return moves
    }
    render() {
        const MovesChart = () => {
            return ((this.movesChart) && <ApexChart {...this.movesChart} />)
        }
        const { bitcoinRate } = this.state
        const { user } = this.props
        if (!bitcoinRate) return <div>
            <h1>Loading Rate</h1>
        </div>
          const ConvertMoney = () => {
            return (<div className="convert-money flex column align-center">
                <h1> Buy Bitcoin instantly
                                                                    </h1>
                <h3>Buy both Bitcoin Cash (BCH) and Bitcoin (BTC) now using a credit or debit card.
                                                                                                </h3>
                <div className="convert-money-form flex space-between">
                    <Converter />

                </div>
            </div>)
        }
        return (
            <section className="home-page flex column wrap align-center justify-center ">
                <div className="user-container-details flex column wrap align-center justify-center">
                    <div className="user-container flex align-center justify-center">
                        <div className="profile-container  ">
                            <img className="profile-img" src={`https://robohash.org/${user._id}?set=set5`} alt="profile" />
                        </div>
                        <h1>Hello , {user.name}</h1>
                    </div>
                    <p className="flex align-center"><img src="./icons/coins.png" alt="coins icon" /> <span className="bolder"> Total coins:</span> {user.coins}$  </p>
                    <p className="flex align-center"><img src="./icons/bitcoin.png" alt="bitcoin icon" /><span className="bolder">Bitcoin rate:</span> {bitcoinRate}</p>
                    <p className="flex align-center"><img src="./icons/coins.png" alt="coins icon" /><span className="bolder">Your Bitcoin Money:</span> {this.moneyBitcoin} </p>
                </div>
                <div className="last-moves  flex column">
                    <h2 className="title-trans">Your Transfers</h2>
                    <div className="statics-user flex wrap">

                        <MoveList title="Your Last 3 Moves" movesList={this.lastMoves} />
                        <MovesChart />
                    </div>
                    <ConvertMoney />

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
