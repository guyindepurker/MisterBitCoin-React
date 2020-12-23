
import React, { Component } from 'react'

import './Converter.scss'
import { bitcoinService } from '../../services/BitcoinService';
import { connect } from 'react-redux';
import { addCoins } from '../../store/actions/userActions';

class _Converter extends Component {
    state = {
        res: null,
        money: '',
        rate: null
    }
    async componentDidMount() {
        const rate = await bitcoinService.getRate()
        console.log('rate:', rate)
        this.setState({ rate })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = +target.value
        console.log('value:', value)
        this.setState({ [field]: value })

    }
    convertMoney = () => {
        const { money, rate } = this.state
        const res = money * rate
        console.log('res:', res)
        this.setState({ res })
    }
    render() {

        const { res, money, rate } = this.state
        return (<div className="converter-main flex column space-around">

            <div className="converter flex space-around">

                <input type="number" className="input" value={money} onChange={this.handleChange} name="money" placeholder="Enter a money in Dollars" />
                <input className="input" type="text" disabled placeholder="BTC" />
                <button onClick={this.convertMoney}>Buy BTC</button>

            </div>
            {res && <div className="res-container flex column align-center justify-center">
                <h2>BTC Rate: {rate} Your Bitcoin Money: {res}</h2>
                {this.props.isShowBtn && <button onClick={() => this.props.addCoins(money)}>Add Money To Wallet</button>}
            </div>}
        </div>)
    }

}

export const ConvertMoney = ({ isShowBtn }) => {
    return (<div className="convert-money flex column align-center">
        {isShowBtn ? <h1> Buy Bitcoin instantly
                                                            </h1> : <h1>Already have a wallet? Buy Bitcoin instantly
                                                            </h1>}
        <h3>Buy both Bitcoin Cash (BCH) and Bitcoin (BTC) now using a credit or debit card.
                                                                                        </h3>
        <div className="convert-money-form flex space-between">
            <Converter isShowBtn={isShowBtn} />

        </div>
    </div>)
}
const mapDispatchToProps = {
    addCoins
}
export const Converter = connect(null, mapDispatchToProps)(_Converter)

